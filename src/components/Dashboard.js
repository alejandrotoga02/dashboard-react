import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "./../common/reducers/dashboardReducer";
import { Card, CardContent, styled, Typography } from "@material-ui/core";
import LineChart from "./statics/LineChart";
import BarChart from "./statics/BarChart";
import DonutChart from "./statics/DonutChart";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  backgroundColor: "#002600",
}));

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  logoRight: {
    paddingTop: 20,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontWeight: "normal",
    fontSize: "1.4em",
    marginBottom: 0,
  },
  subTitle: {
    fontWeight: "normal",
    fontSize: "1em",
    marginBottom: 0,
  },
  card: {
    height: 200,
    border: "none",
    boxShadow: "none",
  },
  cardNoLine: {
    border: "none",
    boxShadow: "none",
  },
  cardTitle: {
    height: 70,
    border: "none",
    boxShadow: "none",
  },
  itemLg: {
    maxWidth: "16%",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const { dashboardLoading, entities } = useSelector(
    (state) => state.dashboard
  );
  const dispatch = useDispatch();

  const {
    totalAccessNP,
    totalAccessPC,
    totalAccessPV,
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
    totalAccessTR,
    totalAccessVehicles,
    totalAccessVehiclesNL,
    totalAccessVehiclesRO,
    totalAccessVehiclesSP
  } = entities;

  useEffect(() => {
    console.log(entities);
  }, [entities]);

  useEffect(
    () => dispatch(fetchDashboard()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  return (
    !dashboardLoading && (
      <>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4} lg={3}>
            <img
              src={`/images/logos-izquierdo.jpg`}
              style={{ paddingTop: 10 }}
              width={420}
              alt={"algo"}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={4} md={4} lg={7}>
            <Item>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: "#white" }}
              >
                TABLERO DE INFORMACIÓN DE ACCESOS AL PUERTO
              </Typography>
              <p className={classes.subTitle}>
                Administración del Sistema Portuario Nacional Manzanillo
              </p>
            </Item>
          </Grid>
          <Grid item xs={4} md={4} lg={2} className={classes.logoRight}>
            <img
              src={`/images/logo-derecho.jpg`}
              width={150}
              alt={"algo"}
              loading="lazy"
            />
          </Grid>
        </Grid>

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
              </CardContent>

              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Pez Vela
                  </Typography>
                  <Typography variant="h4" color="textPrimary" component="div">
                    { totalAccessPV.toLocaleString() }
                  </Typography>
                </Grid>

                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Norte Pesados
                  </Typography>
                  <Typography variant="h4" color="textPrimary" component="div">
                  { totalAccessNP.toLocaleString() }
                  </Typography>
                </Grid>
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
                  { totalAccessPC.toLocaleString() }
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Tamo 15
                </Typography>
                <Typography variant="h4" color="textPrimary" component="div">
                  { totalAccessTR.toLocaleString() }
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
                  Promedio diario ###
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  Muelle Pesquero
                </Typography>
                <Typography variant="h4" color="textPrimary" component="div">
                  0
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <BarChart />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <BarChart />
            </Paper>
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
                  { totalAccessVehicles.toLocaleString() }
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
                    lineHeight: "normal",
                  }}
                >
                  Promedio diario ###
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={2} md={2} lg={2}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    San Pedrito
                  </Typography>
                  <Typography variant="h4" color="textPrimary" component="div">
                  { totalAccessVehiclesSP.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2} md={2} lg={2}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Norte Ligeros
                </Typography>
                <Typography variant="h4" color="textPrimary" component="div">
                { totalAccessVehiclesNL.toLocaleString() }
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={2}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  Muelle Pesquero
                </Typography>
                <Typography variant="h4" color="textPrimary" component="div">
                { totalAccessVehiclesRO.toLocaleString() }
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={6}>
            <Paper className={classes.paper}>
              <LineChart />
            </Paper>
          </Grid>
        </Grid>

        {/* third section grays */}
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
                  Personal
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
                  { totalAccessPersonal.toLocaleString() }
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
                    lineHeight: "normal",
                  }}
                >
                  Promedio diario {/* ### */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    San Pedrito
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalSP.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    La flechita
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalFL.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Norte Elevado
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalNE.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Gestiones Portuarios
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalGP.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Muelle Pesquero
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalRO.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Base 1
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalB1.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Base 2
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalB2.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Base 3
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalB3.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    Módulo 8
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalMO.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={2} md={2} lg={1} className={classes.itemLg}>
            <Card className={classes.cardNoLine}>
              <CardContent>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    CEP.
                  </Typography>
                  <Typography variant="h5" color="textPrimary" component="div">
                  { totalAccessPersonalCEP.toLocaleString() }
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <DonutChart />
            </Paper>
          </Grid>
          <Grid item lg={3}>
            <Paper className={classes.paper}>
              <DonutChart />
            </Paper>
          </Grid>
          {/* <Grid item lg={2}>
            <Paper className={classes.paper}>
              <DonutChart />
            </Paper>
          </Grid> */}
        </Grid>
      </>
    )
  );
};

export default Dashboard;
