import { CardContent, Grid, Typography } from "@material-ui/core";
import { numberWithCommas } from "../../../common/utils";

const DashSectionNorte = ({ title, subtitle, data }) => {
  return (
    <>
      <CardContent style={{ background: "#D3D3D3" }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#004C00", fontWeight: "bolder" }}
            >
              {title}
            </Typography>

            <Typography variant="h6" component="div" style={{ color: "#004C00" }}>
              {subtitle}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{ color: "#004C00" }}
            >
              {numberWithCommas(data?.total)}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              gutterBottom
              variant="subtitle1"
              style={{ color: "#004C00" }}
            >
              Promedio diario {numberWithCommas(data?.avg)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};

export default DashSectionNorte;
