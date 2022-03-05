import React from "react";
import { CardContent, Grid, Typography } from "@material-ui/core";

const ContainersSection = ({ title, variant = 'h5', children }) => {
  return (
    <>
      <CardContent style={{ background: "#D3D3D3" }}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography gutterBottom variant={variant} component="div">
              {title}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent>{children}</CardContent>
    </>
  );
};

export default ContainersSection;
