import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../common/reducers/dashboardReducer";
import { Card, CardContent, Typography } from "@material-ui/core";
import Logos from "./sections/Logos";
import {
  ByDayChart,
  ByMonthChart,
  DonutPCChart,
  DonutTTChart,
  DonutVChart,
  LineChart
} from "./charts";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  logoRight: {
    paddingTop: 20,
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontWeight: "normal",
    fontSize: "1.4em",
    marginBottom: 0
  },
  subTitle: {
    fontWeight: "normal",
    fontSize: "1em",
    marginBottom: 0
  },
  card: {
    height: 200,
    border: "none",
    boxShadow: "none"
  },
  cardNoLine: {
    border: "none",
    boxShadow: "none"
  },
  cardTitle: {
    height: 70,
    border: "none",
    boxShadow: "none"
  },
  itemLg: {
    maxWidth: "16%"
  }
}));

const DashboardNorte = () => {
  const classes = useStyles();
  const { dashboardLoading, entities } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const {
    totalAccessNP,
    totalAccessPC,
    totalAccessPV,
    totalAccessTR,
    avgTotalAccessPC,
    totalAccessPersonal,
    totalAccessPersonalB1,
    totalAccessPersonalB2,
    totalAccessPersonalB3,
    totalAccessPersonalCEP,
    totalAccessPersonalFL,
    totalAccessPersonalGP,
    totalAccessPersonalMO,
    totalAccessPersonalNE,
    totalAccessPersonalRO,
    totalAccessPersonalSP,
    avgTotalAccessPersonal,
    totalAccessVehicles,
    totalAccessVehiclesNL,
    totalAccessVehiclesRO,
    totalAccessVehiclesSP,
    avgTotalAccessVehicles
  } = entities;

  useEffect(
    () =>
      dispatch(
        fetchDashboard({
          zona: "Norte"
        })
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  useEffect(() => {
    console.log(entities);
  }, [entities]);

  return (
    !dashboardLoading &&
    entities && (
      <>
        <Logos name="Norte" />
        {/*  first section */}
        <Grid container spacing={1} style={{ paddingBottom: 40 }}>
          <Grid item xs={2} md={2} lg={3}>
            <Card className={classes.card}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  Autotransporte de carga
                </Typography>
                <Typography
                  variant="h5"
                  color="div"
                  style={{ color: "#004C00" }}
                >
                  Nortes Pesados
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2} md={2} lg={2}>
            <Card className={classes.card}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  {totalAccessPC.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={1} lg={1}>
            <Card className={classes.card}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  // gutterBottom
                  variant="caption"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  Promedio diario {avgTotalAccessPC}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={3}>
            <ByMonthChart />
          </Grid>
          <Grid item lg={3}>
            <ByDayChart />
          </Grid>
        </Grid>

        {/* secod section grays */}
        <Grid container spacing={1}>
          <Grid item xs={2} md={2} lg={3}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  Vehículos utilitarios
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2} md={2} lg={2}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  {totalAccessVehicles.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2} md={1} lg={1}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{
                    color: "#004C00",
                    fontSize: "1em",
                    lineHeight: "normal"
                  }}
                >
                  Promedio diario {avgTotalAccessVehicles}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={6}>
            <LineChart />
          </Grid>
        </Grid>

        {/* third section grays */}
        <Grid container spacing={1}>
          <Grid item xs={2} md={2} lg={3}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  Personal
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  Norte Elevado
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2} md={2} lg={2}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ color: "#004C00" }}
                >
                  {totalAccessPersonal.toLocaleString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={1} lg={1}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{
                    color: "#004C00",
                    fontSize: "1em",
                    lineHeight: "normal"
                  }}
                >
                  Promedio diario {avgTotalAccessPersonal}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    )
  );
};

export default DashboardNorte;
