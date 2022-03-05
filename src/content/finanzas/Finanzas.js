import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import ContainersSection from "./components/Containers";
import Donut from "./components/Donut";
import LineBarChart from "./components/Bar";
import DetailTable from "./components/DetailTable";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  }
}));

const Finanzas = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={5} columns={10}>
        <Grid item xs={4} md={4} lg={4}>
          <Card className={classes.card}>
            <ContainersSection title="DETALLE DE INGRESOS" variant="h6">
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  <DetailTable
                    columnsArr={["name", "value"]}
                    data={{
                      "CESION PARCIA DE DERECHOS": "$100,000.00",
                      PUERTO: "$100,000.00",
                      "CODIGO PBIP": "$100,000.00",
                      MUELLAJE: "$100,000.00"
                    }}
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>

        <Grid item xs={6} md={6} lg={6}>
          <Card className={classes.card}>
            <ContainersSection title="INGRESOS POR MES" variant="h6">
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  <LineBarChart
                    data={{
                      "Septiembre-2021": 35022,
                      "Octubre-2021": 81705,
                      "Noviembre-2021": 87839,
                      "Diciembre-2021": 79592,
                      "Enero-2022": 74927,
                      "Febrero-2022": 65673,
                      "Marzo-2022": 5824
                    }}
                    serieName="movimientos"
                    text="Movimiento de contenedores por mes"
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
          <Card className={classes.card}>
            <ContainersSection
              title="DISTRIBUCIÓN DE LOS INGRESOS POR:"
              variant="h6"
            >
              <Grid container columns={10} spacing={0}>
                <Grid item xs={5}>
                  <Donut
                    data={{ transbordo: 130781, Altura: 232951 }}
                    text="Tipo de INGRESO"
                  />
                </Grid>
                <Grid item xs={5}>
                  <Donut
                    data={{
                      Otros: 25300,
                      OCUPA: 19400,
                      TIMSA: 34000,
                      CONTECON: 9100,
                      SSA: 192000
                    }}
                    text="Cliente"
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={1} columns={16}></Grid>
    </>
  );
};

export default Finanzas;
