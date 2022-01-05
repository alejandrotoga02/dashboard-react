import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Link } from "react-router-dom";

const Historico = () => {
  const files = [
    { name: "30 de Diciembre de 2021", fileName: "AccesosVsManiobras30DIC21" },
    { name: "31 de Diciembre de 2021", fileName: "AccesosVsManiobras31DIC21" },
    { name: "1 de Enero de 2022", fileName: "AccesosVsManiobras01ENE22" },
    { name: "2 de Enero de 2022", fileName: "AccesosVsManiobras02ENE22" },
    { name: "3 de Enero de 2022", fileName: "AccesosVsManiobras03ENE22" },
    { name: "4 de Enero de 2022", fileName: "AccesosVsManiobras04ENE22" }
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                <h1>Histórico de Accesos vs Citas y Maniobras</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map(({ name, fileName }) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell align="center">
                  <Link target="_blank" to={`/historic/${fileName}.pdf`}>                   
                    <InsertDriveFileIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Historico;
