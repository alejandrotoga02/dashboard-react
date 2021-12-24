import React from "react";
import { useTable } from "react-table";

const TableNum = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Zona",
        accessor: "Zona" // accessor is the "key" in the data
      },
      {
        Header: "Subtipo lectura",
        accessor: "SubTipo_Lectura"
      },
      {
        Header: "Id camara",
        accessor: "ID_Camara"
      },
      {
        Header: "Nombre garita",
        accessor: "Nombre_Garita"
      },
      {
        Header: "Total",
        accessor: "total"
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                // style={{
                //   borderBottom: "solid 3px red",
                //   background: "aliceblue",
                //   color: "black",
                //   fontWeight: "bold"
                // }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    // style={{
                    //   padding: "10px",
                    //   border: "solid 1px gray",
                    //   background: "papayawhip"
                    // }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableNum;
