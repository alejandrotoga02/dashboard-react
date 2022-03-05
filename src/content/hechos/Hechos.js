import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import Section from "./components/Section";
import ContainersSection from "./components/Containers";
import Donut from "./components/Donut";
import LineBarChart from "./components/Bar";
import TableFilter from "../control-accesos/components/tables/TableFilter";
import { useDetailHechos } from "../../common/hooks/useDetailHechos";

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
  },
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
    onChange,
    // onExport,
    // onDateRangeChange,
    // value
  } = useDetailHechos(records);

  return (
    <>
      <Grid container spacing={1} style={{ paddingBottom: 40 }}>
        <Grid item xs={4} md={4} lg={4}>
          <Card className={classes.card}>
            <Section
              title="Numeralia de HECHOS"
              variant="h6"
              data={{
                Buques: 370,
                Arribos: 515,
                Atraques: 634,
                Contenedores: 363689,
                TEUs: 639401
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Card className={classes.card}>
            <ContainersSection
              title="Movimiento de contenedores por mes"
              variant="h6"
            >
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  <LineBarChart
                    data={{
                      "Septiembre-2021": 35022,
                      "Octubre-2021": 81705,
                      "Noviembre-2021": 87839,
                      "Diciembre-2021": 79592,
                      "Enero-2022": 74927,
                      "Febrero-2022": 65673,
                      "Marzo-2022": 5824
                    }}
                    serieName="movimientos"
                    text="Movimiento de contenedores por mes"
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={3} md={3} lg={3}>
          <Card className={classes.card}>
            <Section
              title="Tiempos promedio"
              data={{
                "Horas en puerto": "94:21",
                "Horas en muelle": "54:01",
                "Horas de operación": "43:53"
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={9} md={9} lg={9}>
          <Card className={classes.card}>
            <ContainersSection
              title="Movimiento de contenedores por:"
              variant="h6"
            >
              <Grid container spacing={0}>
                <Grid item lg={4}>
                  <Donut
                    data={{ transbordo: 130781, Altura: 232951 }}
                    text="Tipo de NAVEGACIÓN"
                  />
                </Grid>
                <Grid item lg={4}>
                  <Donut
                    data={{
                      Otros: 25300,
                      OCUPA: 19400,
                      TIMSA: 34000,
                      CONTECON: 9100,
                      SSA: 192000
                    }}
                    text="Terminal"
                  />
                </Grid>
                <Grid item lg={4}>
                  <Donut
                    data={{
                      Otros: 8500,
                      10: 26000,
                      5: 24000,
                      13: 22000,
                      14: 20000,
                      19: 20000,
                      6: 19000
                    }}
                    text="LÍNEA NAVIERA"
                    width={300}
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ paddingBottom: 40 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Card className={classes.card}>
            <ContainersSection
              title="Movimiento de contenedores por mes"
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
