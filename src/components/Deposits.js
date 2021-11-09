import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles( theme => ({
  depositContext: {
    flex: 1
  },
  title: {
    paddingTop:  theme.spacing(6)
  }
}));

export default function Deposits() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={4} lg={6}>
        <Title >Total de DELITOS</Title>

        <Typography component="p" variant="h3" className={classes.title}>
          3,024
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={6}>

      <Grid item>
        <Title>Mes anterior</Title>

        <Typography component="p" variant="h3">
          3,024
        </Typography>
      </Grid>

      <Grid item className={classes.title}>
        <Title>Mes anterior</Title>

        <Typography component="p" variant="h3">
          3,024
        </Typography>
      </Grid>

      </Grid>
    </Grid>
  );
}
