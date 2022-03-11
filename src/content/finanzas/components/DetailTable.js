import React, { useMemo } from "react";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTable, useFilters, useGlobalFilter } from "react-table";
import * as matchSorter from "match-sorter";
import SelectColumnFilter from "../../../common/hooks/filters/customFilter";
import NoneFilter from "../../../common/hooks/filters/noneFilter";

const fuzzyTextFilterFn = (rows, id, filterValue) => {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
};

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val;

const DetailTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Tipo Ingreso",
        accessor: "tipo_ingreso",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Subtipo Ingreso",
        accessor: "sub_tipo_ingreso",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Total",
        accessor: "total",
        Filter: NoneFilter,
        filter: "includes"
      }
    ],
    []
  );

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

// Define a default UI for filtering
const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter }
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
};

const Table = ({ data, columns }) => {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      }
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    { columns, data, defaultColumn, filterTypes },
    useFilters,
    useGlobalFilter
  );

  return (
    <>
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                  <div>{column.canFilter && column.render("Filter")}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
        <TableBody key={"totals"}>
          <TableRow key={"here"}>
            <TableCell style={{ fontWeight: "bold" }}>TOTALES</TableCell>
            <TableCell></TableCell>
            <TableCell style={{ fontWeight: "bold" }}>$286,353,341</TableCell>
          </TableRow>
        </TableBody>
      </MaUTable>
    </>
  );
};

export default DetailTable;
