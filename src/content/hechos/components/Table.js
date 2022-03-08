import React from "react";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core";
import { useTable } from "react-table";
import { numberWithCommas } from "../../../common/utils";

const useStyles = makeStyles(() => ({
  td: {
    color: "#007fff",
    fontSize: "1.2em",
    fontWeight: "bold"
  },
  right: {
    textAlign: "right"
  }
}));

const Table = ({ columns, data }) => {
  const classes = useStyles();
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
                  <TableCell
                    {...cell.getCellProps()}
                    className={`${classes.td} ${
                      cell.column.Header === "value" ? classes.right : ""
                    }`}
                  >
                    {cell.render(({ value }) => {
                      return numberWithCommas(value);
                    })}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MaUTable>
  );
};

export default Table;
