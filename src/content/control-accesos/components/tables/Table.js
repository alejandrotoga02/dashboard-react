import { Typography } from "@material-ui/core";
import React from "react";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useTable } from "react-table";
import { numberWithCommas } from "../../../../common/utils";
import "./Table.scss";

const Table = ({ cellClass = "h4", columns, data }) => {
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

  // Render the UI for your table
  return (
    <>
      <MaUTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow align="left" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
                  {...column.getHeaderProps()}
                  className="table-no-border"
                >
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="div"
                  >
                    {column.render("Header")}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <TableRow align="left" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell
                      {...cell.getCellProps()}
                      className="table-no-border"
                    >
                      <Typography
                        variant={cellClass}
                        color="textPrimary"
                        component="div"
                      >
                        {cell.render(({ value }) => {
                          return numberWithCommas(value);
                        })}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </>
  );
};

export default Table;
