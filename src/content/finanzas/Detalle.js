import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import ContainersSection from "../../common/components/Containers";
import RangePicker from "../../common/components/RangePicker";
import TableFilter from "../control-accesos/components/tables/TableFilter";
import { Stack } from "@mui/material";
import { useDetail } from "./useDetail";
import useFinanzas from "./useFinanzas";
import { records } from "./mocks/detalle";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  }
}));

const Hechos = () => {
  const classes = useStyles();

  const {
    columns,
    onChange
    // onExport,
    // onDateRangeChange,
    // value
  } = useDetail(records);

  const { rangeValue, onDateRangeChange } = useFinanzas({}, "all");

  return (
    <>
      <Grid container spacing={3} style={{ paddingBottom: 40 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
            <RangePicker
              startText="Inicio"
              endText="Fin"
              value={rangeValue}
              onChange={onDateRangeChange}
              // onAccept={onAcceptRange}
            />
            {/* {!rangeIsnotSelected() && (
              <Button variant="outlined" onClick={resetRange}>
                Limpiar filtro
              </Button>
            )} */}

            <Typography
              variant="caption"
              component="div"
              // className={classes.labelSync}
            >
              Última actualización: {"07/03/2022 08:00 hrs"}
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ paddingBottom: 40 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Card className={classes.card}>
            <ContainersSection title="Tabla detalle de ingresos" variant="h6">
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  <TableFilter
                    onChange={onChange}
                    columns={columns}
                    data={records}
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Hechos;
