import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../common/reducers/dashboardReducer";
import { Card, CardContent, Typography } from "@material-ui/core";
import {
  ByDayChart,
  ByMonthChart,
  DonutPCChart,
  DonutVChart,
  LineChart
} from "./components/charts";
import { numberWithCommas } from "../../common/utils";
import Table from "./components/tables/Table";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  },
  cardTitle: {
    height: 70,
    border: "none",
    boxShadow: "none",
    textAlign: "center"
  },
  table: {
    minWidth: "20vw"
  },
  table2: {
    minWidth: "14vw"
  }
}));

const DashboardSur = () => {
  const classes = useStyles();
  const { dashboardLoading, entities } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const {
    totalAccessPC,
    totalAccessPV,
    totalAccessTR,
    totalAccessRO,
    avgTotalAccessPC,
    totalAccessPersonal,
    totalAccessPersonalB1,
    totalAccessPersonalB2,
    totalAccessPersonalB3,
    totalAccessPersonalCE,
    totalAccessPersonalFL,
    totalAccessPersonalGP,
    totalAccessPersonalMO,
    totalAccessPersonalRO,
    totalAccessPersonalSP,
    avgTotalAccessPersonal,
    totalAccessVehicles,
    totalAccessVehiclesRO,
    totalAccessVehiclesSP,
    avgTotalAccessVehicles
  } = entities;

  useEffect(
    () =>
      dispatch(
        fetchDashboard({
          zona: "Sur"
        })
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  return (
    !dashboardLoading &&
    entities && (
      <>
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
                <Table
                  className={classes.table}
                  columns={[{ Header: "Pez Vela", accessor: "PV" }]}
                  data={[{ PV: totalAccessPV }]}
                />
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
                  {numberWithCommas(totalAccessPC)}
                </Typography>
              </CardContent>

              <CardContent>
                <Table
                  columns={[{ Header: "Tramo 15", accessor: "TR" }]}
                  data={[{ TR: totalAccessTR }]}
                />
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
                  Promedio diario {numberWithCommas(avgTotalAccessPC)}
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant="caption" color="textSecondary">
                  Muelle Pesquero
                </Typography>
                <Typography variant="h4" color="textPrimary" component="div">
                  {numberWithCommas(totalAccessRO)}
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
            <Card className={classes.card}>
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

              <CardContent>
                <Table
                  columns={[{ Header: "San Pedrito", accessor: "SP" }]}
                  data={[{ SP: totalAccessVehiclesSP }]}
                />
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
                  {numberWithCommas(totalAccessVehicles)}
                </Typography>
              </CardContent>

              <CardContent>
                <Table
                  columns={[{ Header: "Muelle Pesquero", accessor: "RO" }]}
                  data={[{ RO: totalAccessVehiclesRO }]}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={1} lg={1}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  variant="caption"
                  component="div"
                  style={{
                    color: "#004C00"
                  }}
                >
                  Promedio diario {numberWithCommas(avgTotalAccessVehicles)}
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
            <Card className={classes.card}>
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

              <CardContent>
                <Table
                  className={classes.table}
                  cellClass={"h5"}
                  columns={[
                    { Header: "San Pedrito", accessor: "SP" },
                    { Header: "La Flechita", accessor: "FL" },
                    { Header: "Gestiones Portuarias", accessor: "GP" }
                  ]}
                  data={[
                    {
                      SP: totalAccessPersonalSP,
                      FL: totalAccessPersonalFL,
                      GP: totalAccessPersonalGP
                    }
                  ]}
                />
                <Table
                  className={classes.table}
                  cellClass={"h5"}
                  columns={[
                    { Header: "Base 1", accessor: "B1" },
                    { Header: "Base 2", accessor: "B2" },
                    { Header: "Base 3", accessor: "B3" }
                  ]}
                  data={[
                    {
                      B1: totalAccessPersonalB1,
                      B2: totalAccessPersonalB2,
                      B3: totalAccessPersonalB3
                    }
                  ]}
                />
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
                  {numberWithCommas(totalAccessPersonal)}
                </Typography>
              </CardContent>

              <CardContent>
                <Table
                  className={classes.table2}
                  cellClass={"h5"}
                  columns={[
                    { Header: "Muelle Pesquero", accessor: "RO" },
                    { Header: "CEP", accessor: "CE" }
                  ]}
                  data={[
                    {
                      RO: totalAccessPersonalRO,
                      CE: totalAccessPersonalCE
                    }
                  ]}
                />
                <Table
                  className={classes.table2}
                  cellClass={"h5"}
                  columns={[{ Header: "Módulo 8", accessor: "MO" }]}
                  data={[{ MO: totalAccessPersonalMO }]}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2} md={1} lg={1}>
            <Card className={classes.cardTitle}>
              <CardContent style={{ background: "#D3D3D3" }}>
                <Typography
                  variant="caption"
                  component="div"
                  style={{
                    color: "#004C00",
                    textAlign: "left"
                  }}
                >
                  Promedio diario {numberWithCommas(avgTotalAccessPersonal)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={3}>
            <DonutPCChart />
          </Grid>

          <Grid item lg={3}>
            <DonutVChart />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default DashboardSur;
