import { Typography } from "@material-ui/core";
import React from "react";
import { useTable } from "react-table";
import { numberWithCommas } from "../../../../common/utils";


const Table = ({ cellClass = "h4", columns, data, ...props }) => {
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
      <table {...props} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr align="left" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="div"
                  >
                    {column.render("Header")}
                  </Typography>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, _i) => {
            prepareRow(row);
            return (
              <tr align="left" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>
                      <Typography
                        variant={cellClass}
                        color="textPrimary"
                        component="div"
                      >
                        {cell.render(({ value }) => {
                          return numberWithCommas(value);
                        })}
                      </Typography>
                    </td>
                  );
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
