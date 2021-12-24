import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchNumeralia } from "../../common/reducers/numeraliaReducer";
import LogosNum from "../sections/LogosNum";
import TableNum from "./components/Table";

const Numeralia = () => {
  const { data, loading } = useSelector(state => state.numeralia);
  const dispatch = useDispatch();

  useEffect(
    () => dispatch(fetchNumeralia()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Zona",
        accessor: "Zona"
      },
      {
        Header: "Tipo",
        accessor: "SubTipo_Lectura"
      },
      {
        Header: "Camara",
        accessor: "ID_Camara"
      },
      {
        Header: "Garita",
        accessor: "Nombre_Garita"
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
        <LogosNum />
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12}>
            <TableNum columns={columns} data={data} />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default Numeralia;
