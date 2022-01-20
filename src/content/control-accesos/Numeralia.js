import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchNumeralia } from "../../common/reducers/numeraliaReducer";
import TableFilter from "./components/tables/TableFilter";
import SelectColumnFilter from "./components/tables/customFilter";
import { exportCSVFile } from "../../common/utils";

const Numeralia = () => {
  const { data, loading } = useSelector(state => state.numeralia);
  const dispatch = useDispatch();
  const [dataExport, setDataExport] = useState(data);

  useEffect(
    () => dispatch(fetchNumeralia()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const onChange = React.useCallback(rows => {
    const originalRows = rows.reduce((acc, value) => {
      acc.push(value.original);
      return acc;
    }, []);
    setDataExport(originalRows);
  }, []);

  const onExport = () => {
    const csvHeaders = {
      ID_Camara: "Camara",
      Nombre_Garita: "Garita",
      SubTipo_Lectura: "Tipo",
      Zona: "Zona",
      total: "Totales"
    };
    exportCSVFile(csvHeaders, dataExport, "accesos-numeralia");
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Zona",
        accessor: "Zona",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Tipo",
        accessor: "SubTipo_Lectura",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Camara",
        accessor: "ID_Camara",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Garita",
        accessor: "Nombre_Garita",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Totalales",
        accessor: "total"
      }
    ],
    []
  );

  return (
    !loading && (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Button variant="outlined" onClick={onExport}>
                Exportar a csv
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <TableFilter onChange={onChange} columns={columns} data={data} />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default Numeralia;
