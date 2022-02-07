import { useEffect, useState } from "react";
import { CardContent, Grid, Typography } from "@material-ui/core";
import { numberWithCommas } from "../../../common/utils";
import Table from "./tables/Table";
import { forEachObjIndexed } from "ramda";

const useColumns = data => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (data) {
      const headers = [];
      const concatValue = (_value, key) => {
        headers.push({
          Header: key,
          accessor: key
        });
      };
      forEachObjIndexed(concatValue, data.garitas);
      setColumns(headers)
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setRecords([{ ...data.garitas }]);
    }
  }, [data]);

  return { columns, records };
};

const DashSection = ({ title, data, tableClass }) => {
  console.log('data', data);
  
  const { columns, records } = useColumns(data);

  return (
    <>
      <CardContent style={{ background: "#D3D3D3" }}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ color: "#004C00" }}
            >
              {title}
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ color: "#004C00" }}
            >
              {numberWithCommas(data?.total)}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography
              gutterBottom
              variant="caption"
              style={{ color: "#004C00" }}
            >
              Promedio diario {numberWithCommas(data?.avg)}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

      <CardContent>
        <Table className={tableClass} columns={columns} data={records} />
      </CardContent>
    </>
  );
};

export default DashSection;
