import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistorico } from "../../common/reducers/historicalReducer";

const Historico = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.historico);

  useEffect(
    () => dispatch(fetchHistorico()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

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
                {data.map(({ label, href }) => (
                  <TableRow key={label}>
                    <TableCell>{label}</TableCell>
                    <TableCell align="center">
                      <a target="_blank" href={href} rel="noreferrer">
                        <InsertDriveFileIcon />
                      </a>
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
