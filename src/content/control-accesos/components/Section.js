import { CardContent, Grid, Typography } from "@material-ui/core";
import { numberWithCommas } from "../../../common/utils";
import Table from "./tables/Table";
import { useColumns, useMultipleRow } from "../useDashTable";

const MultipleTable = ({ data, tableClass, chunk }) => {
  const records = useMultipleRow(data, chunk);
  return (
    records &&
    records.map((record, idx) => (
      <SimpleTable key={idx} data={record} tableClass={tableClass} />
    ))
  );
};

const SimpleTable = ({ data, tableClass }) => {
  const { columns, records } = useColumns(data);
  return (
    <>
      <Table className={tableClass} columns={columns} data={records} />
    </>
  );
};

const DashSection = ({ title, data, tableClass, chunk = 0 }) => {
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
        {chunk === 0 ? (
          <SimpleTable data={data} tableClass={tableClass} />
        ) : (
          <MultipleTable
            data={data.garitas}
            tableClass={tableClass}
            chunk={chunk}
          />
        )}
      </CardContent>
    </>
  );
};

export default DashSection;
