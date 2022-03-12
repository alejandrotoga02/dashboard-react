import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { Grid, Stack } from "@mui/material";
import ContainersSection from "./components/Containers";
import Donut from "./components/Donut";
import IngressByMonth from "./components/IngressByMonth";
import DetailTable from "./components/DetailTable";
import RangePicker from "../../common/components/RangePicker";
import useFinanzas from "./useFinanzas";

const useStyles = makeStyles(() => ({
  card: {
    border: "none",
    boxShadow: "none"
  }
}));

const Finanzas = () => {
  const classes = useStyles();
  const { rangeValue, onDateRangeChange } = useFinanzas();

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
      <Grid container spacing={2}>
        <Grid item xs={5} md={5} lg={5}>
          <Card className={classes.card}>
            <ContainersSection
              title="RESUMEN DE INGRESOS GLOBALES"
              variant="h6"
            >
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
                      Enero: {
                        2021: "171.31M",
                        2022: "232.17M"
                      },
                      Febrero: {
                        2021: "50.24M",
                        2022: "268.48M"
                      },
                      Marzo: {
                        2021: "166.46M",
                        2022: "120.74M"
                      }
                    }}
                    serieName="ingresos"
                    text=""
                  />
                </Grid>
              </Grid>
            </ContainersSection>
          </Card>
          <br />
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
