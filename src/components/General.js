import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { Grid } from "@material-ui/core";

const selectTotalCrimesCurrentMonth = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.totalCrimesCurrentMonth
);

const selectTotalCrimesLastMonth = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.totalCrimesLastMonth
);

const selectTotalCrimesCurrentMonthLastYear = createSelector(
  (state) => state.dashboard,
  (dashboard) => dashboard.entities.totalCrimesCurrentMonthLastYear
);

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  title: {
    paddingTop: theme.spacing(6),
  },
}));

const General = () => {
  const totalCrimesCurrentMonth = useSelector(selectTotalCrimesCurrentMonth);
  const totalCrimesLastMonth = useSelector(selectTotalCrimesLastMonth);
  const totalCrimesCurrentMonthLastYear = useSelector(
    selectTotalCrimesCurrentMonthLastYear
  );

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} md={4} lg={6}>
        <Title>Total de DELITOS</Title>

        <Typography component="p" variant="h3" className={classes.title}>
          {totalCrimesCurrentMonth}
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={6}>
        <Grid item>
          <Title>Mes anterior</Title>

          <Typography component="p" variant="h3">
            {totalCrimesLastMonth}
          </Typography>
        </Grid>

        <Grid item className={classes.title}>
          <Title>Mes anterior</Title>

          <Typography component="p" variant="h3">
            {totalCrimesCurrentMonthLastYear}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default General;
