import React from "react";
import Container from "@material-ui/core/Container";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";

const Layout = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Estadísticas Financieras (Globales)
          </Typography>

          <Button component={Link} color="inherit" to="/finanzas/detalle">
            Tabla Detalle
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Container maxWidth={false} className={classes.container}>
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;
