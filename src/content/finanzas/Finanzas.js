import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import { Grid } from "@mui/material";
import ContainersSection from "./components/Containers";
import Donut from "./components/Donut";
import IngressByMonth from "./components/IngressByMonth";
import DetailTable from "./components/DetailTable";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  }
}));

const Finanzas = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={5} md={5} lg={5}>
          <Card className={classes.card}>
            <ContainersSection title="DETALLE DE INGRESOS" variant="h6">
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  <DetailTable
                    data={[
                      {
                        tipo_ingreso: "CESION PARCIA DE DERECHOS",
                        sub_tipo_ingreso: "CESION PARCIA DE DERECHOS",
                        total: "$2,030,686,242"
                      },
                      {
                        tipo_ingreso: "INFRAESTRUCTURA",
                        sub_tipo_ingreso: "PUERTO",
                        total: "$751,532,790"
                      },
                      {
                        tipo_ingreso: "INFRAESTRUCTURA",
                        sub_tipo_ingreso: "CODIGO PBIP",
                        total: "$140,430,511"
                      },
                      {
                        tipo_ingreso: "INFRAESTRUCTURA",
                        sub_tipo_ingreso: "MUELLAJE",
                        total: "$133,656,437"
                      },
                      {
                        tipo_ingreso: "INFRAESTRUCTURA",
                        sub_tipo_ingreso: "ATRAQUE",
                        total: "$133,623,168"
                      },
                      {
                        tipo_ingreso: "INFRAESTRUCTURA",
                        sub_tipo_ingreso: "ALMACENAJE",
                        total: "$106,137,039"
                      },
                      {
                        tipo_ingreso: "INFRAESTRUCTURA",
                        sub_tipo_ingreso: "INFRAESTRUCTURA",
                        total: "$1,092,235"
                      },
                      {
                        tipo_ingreso: "INFRAESTRUCTURA",
                        sub_tipo_ingreso: "PASAJEROS",
                        total: "$100,216"
                      },
                      {
                        tipo_ingreso: "PRESTADORES DE SERVICIOS",
                        sub_tipo_ingreso: "PRESTADORES DE SERVICIOS",
                        total: "$223,544,168"
                      },
                      {
                        tipo_ingreso: "ARRENDAMIENTO",
                        sub_tipo_ingreso: "ARRENDAMIENTO",
                        total: "$30,803,908"
                      },
                      {
                        tipo_ingreso: "OTROS INGRESOS",
                        sub_tipo_ingreso: "OTROS INGRESOS",
                        total: "$8,198,068"
                      },
                      {
                        tipo_ingreso: "EGRESOS DE OTROS INGRESOS",
                        sub_tipo_ingreso: "OTROS INGRESOS",
                        total: "-$494,708"
                      },
                      {
                        tipo_ingreso: "DESCUENTO DE INFRAESTRUCTURA",
                        sub_tipo_ingreso: "INFRAESTRUCTURA",
                        total: "-$176,917,128"
                      }
                    ]}
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
        </Grid>

        <Grid item xs={7} md={7} lg={7}>
          <Card className={classes.card}>
            <ContainersSection title="INGRESOS POR MES" variant="h6">
              <Grid container spacing={0}>
                <Grid item lg={12}>
                  <IngressByMonth
                    data={{
                      "Ene-21": "171.31M",
                      "Feb-21": "50.24M",
                      "Mar-21": "166.46M",
                      "May-21": "122.84M",
                      "Jun-21": "166.2M",
                      "Jul-21": "181.16M",
                      "Ago-21": "183.44M",
                      "Sep-21": "180.69M",
                      "Oct-21": "207.3M",
                      "Nov-21": "202.63M",
                      "Dic-21": "208.13M",
                      "Ene-22": "232.17M",
                      "Feb-22": "268.48M",
                      "Mar-22": "120.74M"
                    }}
                    serieName="ingresos"
                    text=""
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
          <Card className={classes.card}>
            <ContainersSection
              title="DISTRIBUCIÓN DE LOS INGRESOS POR:"
              variant="h6"
            >
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Donut
                    data={{
                      "PRESTADORES DE SERVICIO": 192710490,
                      "CESIÓN PARCIAL DE DERECHOS": 1750591588,
                      INFRAESTRUCTURA: 647901144,
                      ARRENDAMIENTO: 26555093
                    }}
                    text="TIPO DE INGRESO"
                    width={450}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Donut
                    data={{
                      "CONTECON MANZANILLO S.A. DE C.": 887103770,
                      "SSA MEXICO S.A. DE C.V.": 723896425,
                      "TERMINAL INTERNACIONAL DE": 171285681,
                      "OPERADORA DE LA CUENCA DEL PAC": 111652389,
                      "FRIGORIFICO DE MANZANILLO S.A.": 81438695,
                      "TERMINAL MARITIMA HAZESA": 71473483,
                      "MEDITERRANEAN SHIPPING COMPANY": 30154568,
                      "CMACGM MEXICO S.A. DE C.V.": 22876545,
                      "HAPAG-LLOYD MEXICO S.A.DE C.V.": 19739654,
                      Otros: 352247060
                    }}
                    text="CLIENTE"
                    width={480}
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

export default Finanzas;
