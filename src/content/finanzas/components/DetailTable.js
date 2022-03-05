import React from "react";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTable as useCustomTable } from "../../../common/hooks/useTable";
import { useTable } from "react-table";

const DetailTable = ({ data, columnsArr }) => {
  const { columns, records } = useCustomTable(data, columnsArr);
  return (
    <>
      <Table columns={columns} data={records} />
    </>
  );
};

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <MaUTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map(headerGroup => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TableCell {...column.getHeaderProps()}>
                {/* {column.render("Header")} */}
                {/* Render the columns filter UI */}
                {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}
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
      <TableBody>
        <TableRow>
          <TableCell>TOTALES</TableCell>
          <TableCell>$100,000.00</TableCell>
        </TableRow>
      </TableBody>
    </MaUTable>
  );
};

export default DetailTable;
