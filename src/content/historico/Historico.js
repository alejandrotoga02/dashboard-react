import React from "react";
import { Grid } from "@material-ui/core";
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
    { name: "4 de Enero de 2022", fileName: "AccesosVsManiobras04ENE22" },
    { name: "5 de Enero de 2022", fileName: "AccesosVsManiobras05ENE22" },
    { name: "6 de Enero de 2022", fileName: "AccesosVsManiobras06ENE22" },
    { name: "7 de Enero de 2022", fileName: "AccesosVsManiobras07ENE22" },
    { name: "8 de Enero de 2022", fileName: "AccesosVsManiobras08ENE22" },
    { name: "9 de Enero de 2022", fileName: "AccesosVsManiobras09ENE22" },
    { name: "10 de Enero de 2022", fileName: "AccesosVsManiobras10ENE22" },
    { name: "11 de Enero de 2022", fileName: "AccesosVsManiobras11ENE22" },
    { name: "12 de Enero de 2022", fileName: "AccesosVsManiobras12ENE22" },
    { name: "13 de Enero de 2022", fileName: "AccesosVsManiobras13ENE22" },
    { name: "14 de Enero de 2022", fileName: "AccesosVsManiobras14ENE22" },
    { name: "16 de Enero de 2022", fileName: "AccesosVsManiobras16ENE22" },
    { name: "17 de Enero de 2022", fileName: "AccesosVsManiobras17ENE22" },
    { name: "18 de Enero de 2022", fileName: "AccesosVsManiobras18ENE22" },
    { name: "19 de Enero de 2022", fileName: "AccesosVsManiobras19ENE22" }
  ];

  return (
    <>
      <Grid container justify="center">
        <Grid item xs={11}>
          <TableContainer component={Paper}>
            <Table aria-label="caption table">
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
        </Grid>
      </Grid>
    </>
  );
};

export default Historico;
