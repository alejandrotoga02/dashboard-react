import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "./../common/reducers/dashboardReducer";
import {
  Card,
  CardContent,
  styled,
  Typography
} from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  backgroundColor: "black"
}));

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
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { dashboardLoading } = useSelector(state => state.dashboard);
  const dispatch = useDispatch();
  const [year, setYear] = useState("2021");
  const [month, setMonth] = useState("03");

  useEffect(
    () =>
      dispatch(
        fetchDashboard({
          month: month
        })
      ),
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
              style={{ paddingTop: 20 }}
              width={420}
              alt={"algo"}
              loading="lazy"
            />
          </Grid>
          <Grid item xs={4} md={4} lg={7}>
            <Item>
              <p className={classes.title}>
                TABLERO DE INFORMACIÓN DE ACCESOS AL PUERTO
              </p>
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
                    219,513
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
                    219,513
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
                  28,513
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Tamo 15
                </Typography>
                <Typography variant="h4" color="textPrimary" component="div">
                  219,513
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
                  Promedio diario 2898
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
        </Grid>
      </>
    )
  );
};

export default Dashboard;
