import { useCallback, useMemo, useState } from "react";
import SelectColumnFilter from "../../content/control-accesos/components/tables/customFilter";
import NoneFilter from "../../content/control-accesos/components/tables/noneFilter";

export const useDetailHechos = data => {
  const [dataExport, setDataExport] = useState(data);

  const columns = useMemo(
    () => [
      {
        Header: "Navegación",
        accessor: "Navegacion",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Trafico",
        accessor: "Trafico",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Tamaño",
        accessor: "Tamanio",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Lleno_Vacio",
        accessor: "Lleno_Vacio",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Cajas",
        accessor: "Cajas",
        Filter: NoneFilter,
      },
      {
        Header: "TEUs",
        accessor: "TEUs",
        Filter: NoneFilter,
      },
      {
        Header: "Peso",
        Filter: NoneFilter,
        accessor: "Peso"
      }
    ],
    []
  );

  const onChange = useCallback(rows => {
    const originalRows = rows.reduce((acc, value) => {
      acc.push(value.original);
      return acc;
    }, []);
    setDataExport(originalRows);
  }, []);


  return {
    columns,
    dataExport,
    onChange    
  };
};
