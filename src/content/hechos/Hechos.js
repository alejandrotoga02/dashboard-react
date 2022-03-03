import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import Section from "./components/Section";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  }
}));

const Hechos = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}  style={{ paddingBottom: 40 }}>
        <Grid item xs={3} md={3} lg={3}>
          <Card className={classes.card}>
            <Section
              title="Numeralia de HECHOS"
              data={{
                Buques: 370,
                Arribos: 515,
                Atraques: 634,
                Contenedores: 363689,
                TEUs: 639401
              }}
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3} md={3} lg={3}>
          <Card className={classes.card}>
            <Section
              title="Tiempos promedio"
              data={{
                "Horas en puerto": "94:21",
                "Horas en muelle": "54:01",
                "Horas de operación": "43:53"
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Hechos;
