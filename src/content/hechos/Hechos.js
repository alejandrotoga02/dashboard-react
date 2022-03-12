import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import Section from "./components/Section";
import ContainersSection from "../../common/components/Containers";
import Donut from "./components/Donut";
import LineBarChart from "./components/Bar";
import { Stack } from "@mui/material";
import RangePicker from "../control-accesos/components/RangePicker";
import { useHechos } from "./useHechos";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  }
}));

const Hechos = () => {
  const classes = useStyles();

  const { rangeValue, onDateRangeChange } = useHechos({}, "all");

  return (
    <>
      <Grid container spacing={3} style={{ paddingBottom: 40 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
            <RangePicker
              startText="Inicio"
              endText="Fin"
              value={rangeValue}
              onChange={onDateRangeChange}
              // onAccept={onAcceptRange}
            />
            {/* {!rangeIsnotSelected() && (
              <Button variant="outlined" onClick={resetRange}>
                Limpiar filtro
              </Button>
            )} */}

            <Typography
              variant="caption"
              component="div"
              // className={classes.labelSync}
            >
              Última actualización: {"07/03/2022 08:00 hrs"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ paddingBottom: 40 }}>
        <Grid item xs={3} md={3} lg={3}>
          <Card className={classes.card} style={{ height: "480px" }}>
            <Section
              title="Numeralia de HECHOS"
              variant="h6"
              data={{
                Buques: 370,
                Arribos: 515,
                Atraques: 634,
                TEUs: 639401,
                Contenedores: 363689,
                Toneladas: 3790488
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <Card className={classes.card} style={{ height: "480px" }}>
            <ContainersSection title="Movimiento de TEUs por mes" variant="h6">
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
                    text=""
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={3} md={3} lg={3}>
          <Card className={classes.card}>
            <Section
              title="Tiempos promedio"
              data={{
                "En puerto": "94:21",
                "En muelle": "54:01",
                "En Operación": "43:53"
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <Card className={classes.card}>
            <ContainersSection
              title="Movimiento de carga contenerizada en TEUs por:"
              variant="h6"
            >
              <Grid container spacing={0}>
                <Grid item lg={4}>
                  <Donut
                    data={{ transbordo: 130781, Altura: 232951 }}
                    text="NAVEGACIÓN"
                  />
                </Grid>
                <Grid item lg={4}>
                  <Donut
                    data={{
                      Otros: 25300,
                      OCUPA: 19400,
                      TIMSA: 34000,
                      CONTECON: 9100,
                      SSA: 192000
                    }}
                    text="TERMINAL"
                  />
                </Grid>
                <Grid item lg={4}>
                  <Donut
                    data={{
                      Otros: 8500,
                      10: 26000,
                      5: 24000,
                      13: 22000,
                      14: 20000,
                      19: 20000,
                      6: 19000
                    }}
                    text="LÍNEA NAVIERA"
                    width={300}
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Hechos;
