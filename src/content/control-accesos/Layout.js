import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthentication } from "../../common/reducers/authenticationReducer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    // display: "flex",
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100%",
    overflow: "100%"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  fixedHeight: {
    height: 340
  },
  // added the footer class
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white",
    // just this item, push to bottom
    alignSelf: "flex-end"
  }
}));

const Layout = () => {
  const classes = useStyles();
  const [searchParams] = useSearchParams();
  const { loading, data } = useSelector(state => state.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    const tokn = searchParams.get("token");
    if (tokn) {
      localStorage.setItem("token", tokn);
      dispatch(fetchAuthentication());
    }
  }, [searchParams, dispatch]);

  return !loading ? (
    !data.error ? (
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
