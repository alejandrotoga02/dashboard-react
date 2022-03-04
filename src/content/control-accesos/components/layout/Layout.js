import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthentication } from "../../../../common/reducers/authenticationReducer";
import { useStyles } from "./styles";

const Layout = () => {
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const { loading, data } = useSelector(state => state.authentication);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    console.log("location", location);
  }, [location]);

  useEffect(() => {
    const tokn = searchParams.get("token");
    if (tokn) {
      localStorage.setItem("token", tokn);
    }
    setTimeout(() => {
      dispatch(fetchAuthentication());
    }, 100);
  }, [searchParams, dispatch]);

  return !loading ? (
    !data?.error && data?.esAutoridad ? (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Accesos al Puerto
            </Typography>

            <Button component={Link} color="inherit" to="/accesos">
              General
            </Button>
            <Button component={Link} color="inherit" to="/accesos/norte">
              Norte
            </Button>
            <Button component={Link} color="inherit" to="/accesos/sur">
              Sur
            </Button>
            <Button component={Link} color="inherit" to="/accesos/numeralia">
              Numeralia
            </Button>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Container maxWidth={false} className={classes.container}>
            <Outlet />
          </Container>
        </main>
      </div>
    ) : (
      <Typography variant="h4" component="div">
        Unauthorized
      </Typography>
    )
  ) : (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

export default Layout;
