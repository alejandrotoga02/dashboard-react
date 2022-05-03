import React, { useEffect } from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import Section from "./components/Section";
import ContainersSection from "../../common/components/Containers";
import Donut from "./components/Donut";
import LineBarChart from "./components/Bar";
import { Stack } from "@mui/material";
import RangePicker from "../control-accesos/components/RangePicker";
import { useHechos } from "./useHechos";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDashboard,
  hechosSelector
} from "../../common/reducers/hechosReducer";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  }
}));

const Hechos = () => {
  const classes = useStyles();
  const { data } = useSelector(hechosSelector);
  const dispatch = useDispatch();

  const { rangeValue, onDateRangeChange } = useHechos(data, "all");

  const { numeralia, avgTimes, cargo } = data;

  useEffect(() => dispatch(fetchDashboard()), [dispatch]);

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
              data={numeralia}
            />
          </Card>
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <Card className={classes.card} style={{ height: "480px" }}>
            <ContainersSection title="Movimiento de TEUs por mes" variant="h6">
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  {cargo?.months && (
                    <LineBarChart
                      data={cargo.months}
                      serieName="movimientos"
                      text=""
                    />
                  )}
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={3} md={3} lg={3}>
          <Card className={classes.card}>
            <Section title="Tiempos promedio" data={avgTimes} />
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
                  {cargo?.Navegacion && (
                    <Donut data={cargo.Navegacion} text="NAVEGACIÓN" />
                  )}
                </Grid>
                <Grid item lg={4}>
                  {cargo?.Terminal && (
                    <Donut data={cargo.Terminal} text="TERMINAL" />
                  )}
                </Grid>
                <Grid item lg={4}>
                  {cargo?.Naviera && (
                    <Donut
                      data={cargo.Naviera}
                      text="LÍNEA NAVIERA"
                      width={300}
                    />
                  )}
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
