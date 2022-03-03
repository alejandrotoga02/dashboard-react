import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { useTable } from "react-table";
import { numberWithCommas } from "../../../common/utils";

const useStyles = makeStyles(() => ({
  td: {
    color: "#007fff",
    fontSize: "1.2em",
    fontWeight: "bold"
  },
  right: {
    paddingLeft: "3em",
    textAlign: "right"
  }
}));

const Table = ({ columns, data, ...props }) => {
  const classes = useStyles();
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data
  });

  return (
    <>
      <table {...props} {...getTableProps()}>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, _i) => {
            prepareRow(row);
            return (
              <tr align="left" {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  if (index === 0) {
                    return (
                      <td {...cell.getCellProps()}>
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          component="div"
                          className={`${classes.td}`}
                        >
                          {cell.render(({ value }) => value)}
                        </Typography>
                      </td>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>
                        <Typography
                          variant="body1"
                          color="textPrimary"
                          component="div"
                          className={`${classes.td} ${classes.right}`}
                        >
                          {cell.render(({ value }) => numberWithCommas(value))}
                        </Typography>
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
