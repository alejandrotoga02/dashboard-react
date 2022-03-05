import React from "react";
import { CardContent, Grid, Typography } from "@material-ui/core";
import Table from "./Table";
import { useTable } from "../useTable";

const SimpleTable = ({ data, columnsArr }) => {
  const { columns, records } = useTable(data, columnsArr);
  return (
    <>
      <Table columns={columns} data={records} />
    </>
  );
};

const DashSection = ({ title, variant = "h5", data }) => {
  const columns = ["name", "value"];
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

      <CardContent>
        <SimpleTable data={data} columnsArr={columns} />
      </CardContent>
    </>
  );
};

export default DashSection;
