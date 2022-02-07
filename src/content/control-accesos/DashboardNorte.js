import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../../common/reducers/dashboardReducer";
import { Card, Typography } from "@material-ui/core";
import { ByDayChart, ByMonthChart, LineChart } from "./components/charts";
import Button from "@mui/material/Button";
import RangePicker from "./components/RangePicker";
import { useDashboard } from "../../common/hooks/useDashboard";
import { Stack } from "@mui/material";
import DashSectionNorte from "./components/SectionNorte";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  },
  labelSync: {
    paddingTop: "20px"
  },
  table: {
    minWidth: "50vw"
  },
  table2: {
    minWidth: "45vw"
  }
}));

const DashboardNorte = () => {
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
  } = useDashboard(entities, "Norte");

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

  return (
    !dashboardLoading && (
      <>
        <Grid container spacing={3} style={{ paddingBottom: 40 }}>
          <Grid item xs={12} md={12} lg={12}>
            <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
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

              <Typography
                variant="caption"
                component="div"
                className={classes.labelSync}
              >
                Última actualización: {lastSyncAt}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={1} style={{ paddingBottom: 40 }}>
          <Grid item xs={12} md={6} lg={6}>
            <Card className={classes.card}>
              <DashSectionNorte
                title="Autotransporte de carga"
                subtitle={"Nortes Pesados"}
                data={PC}
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
            <DashSectionNorte
              title="Vehículos utilitarios"
              subtitle={"Nortes Ligeros"}
              data={PV}
            />
          </Grid>

          <Grid item lg={6}>
            <LineChart />
          </Grid>
        </Grid>

        {/* third section grays */}
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={6}>
            <DashSectionNorte
              title="Personal"
              subtitle={"Norte Elevado"}
              data={TT}
            />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default DashboardNorte;
