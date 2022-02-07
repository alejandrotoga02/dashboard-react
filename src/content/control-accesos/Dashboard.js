import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../common/reducers/dashboardReducer";
import { Card } from "@material-ui/core";
import {
  ByDayChart,
  ByMonthChart,
  DonutPCChart,
  DonutVChart,
  LineChart
} from "./components/charts";
import Button from "@mui/material/Button";
import RangePicker from "./components/RangePicker";
import { useDashboard } from "../../common/hooks/useDashboard";
import { Stack } from "@mui/material";
import DashSection from "./components/Section";

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
    minWidth: "60vw"
  },
  table2: {
    minWidth: "14vw"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const { dashboardLoading, entities } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  const {
    PC,
    PV,
    TT,
    lastSyncAt,
    rangeValue,
    resetRange,
    rangeIsnotSelected,
    onDateRangeChange,
    onAcceptRange
  } = useDashboard(entities, "all");

  useEffect(
    () => dispatch(fetchDashboard()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  return (
    !dashboardLoading && (
      <>
        <Grid container spacing={3} style={{ paddingBottom: 40 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Stack direction="row" spacing={2}>
              <RangePicker
                startText="Inicio"
                endText="Fin"
                value={rangeValue}
                onChange={onDateRangeChange}
                onAccept={onAcceptRange}
              />
              {!rangeIsnotSelected() && (
                <Button variant="outlined" onClick={resetRange}>
                  Limpiar filtro
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={1} style={{ paddingBottom: 40 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Card className={classes.card}>
              <DashSection
                title="Autotransporte de carga"
                data={PC}
                tableClass={classes.table}
              />
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
          <Grid item xs={12} md={6} lg={6}>
            <DashSection
              title="Vehículos utilitarios"
              data={PV}
              tableClass={classes.table}
            />
          </Grid>

          <Grid item lg={6}>
            <LineChart />
          </Grid>
        </Grid>

        {/* third section grays */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6}>
            <DashSection
              title="Personal"
              data={TT}
              tableClass={classes.table2}
            />
          </Grid>

          <Grid item lg={3}>
            <DonutPCChart />
          </Grid>

          <Grid item lg={2}>
            <DonutVChart />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default Dashboard;
