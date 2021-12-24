import { styled, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  backgroundColor: "#002600"
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
  },
  cardNoLine: {
    border: "none",
    boxShadow: "none"
  },
  cardTitle: {
    height: 70,
    border: "none",
    boxShadow: "none"
  },
  itemLg: {
    maxWidth: "16%"
  }
}));

const LogosNum = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4} lg={3}>
          <img
            src={`/images/logos-izquierdo.jpg`}
            style={{ paddingTop: 10 }}
            width={420}
            alt={"algo"}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={4} md={4} lg={7}>
          <Item>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{ color: "#white" }}
            >
              NUMERALIA DE ACCESOS AL PUERTO
            </Typography>
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
    </>
  );
};

export default LogosNum;
