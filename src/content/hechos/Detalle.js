import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import ContainersSection from "./components/Containers";
import TableFilter from "../control-accesos/components/tables/TableFilter";
import { Stack } from "@mui/material";
import RangePicker from "../../common/components/RangePicker";
import { useDetailHechos } from "./useDetailHechos";
import { useHechos } from "./useHechos";

const records = [
  {
    Navegacion: "Altura",
    Trafico: "Importación",
    Tamanio: "20°",
    Lleno_Vacio: "Lleno",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  },
  {
    Navegacion: "Altura",
    Trafico: "Importación",
    Tamanio: "40°",
    Lleno_Vacio: "Vacio",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  },
  {
    Navegacion: "Altura",
    Trafico: "Exportación",
    Tamanio: "20°",
    Lleno_Vacio: "Lleno",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  },
  {
    Navegacion: "Altura",
    Trafico: "Exportación",
    Tamanio: "40°",
    Lleno_Vacio: "Vacio",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  },
  {
    Navegacion: "Transbordo",
    Trafico: "Entrada",
    Tamanio: "20°",
    Lleno_Vacio: "Lleno",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  },
  {
    Navegacion: "Transbordo",
    Trafico: "Entrada",
    Tamanio: "40°",
    Lleno_Vacio: "Vacio",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  },
  {
    Navegacion: "Transbordo",
    Trafico: "Salida",
    Tamanio: "20°",
    Lleno_Vacio: "Lleno",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  },
  {
    Navegacion: "Transbordo",
    Trafico: "Salida",
    Tamanio: "40°",
    Lleno_Vacio: "Vacio",
    Cajas: 23929,
    TEUs: 23929,
    Peso: 23929
  }
];

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
  } = useDetailHechos(records);

  const { rangeValue, onDateRangeChange } = useHechos({}, "all");

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
            <ContainersSection
              title="Tabla detalle de contenedores"
              variant="h6"
            >
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
