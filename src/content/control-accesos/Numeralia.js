import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchNumeralia } from "../../common/reducers/numeraliaReducer";
import TableFilter from "./components/tables/TableFilter";

// This is a custom filter UI for selecting
// a unique option from a list
const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id }
}) => {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

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
            <TableFilter columns={columns} data={data} />
          </Grid>
        </Grid>
      </>
    )
  );
};

export default Numeralia;
