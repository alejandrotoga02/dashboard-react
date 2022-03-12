import { useCallback, useMemo, useState } from "react";
import SelectColumnFilter from "../../common/hooks/filters/customFilter";
import NoneFilter from "../../common/hooks/filters/noneFilter";

export const useDetail = data => {
  const [dataExport, setDataExport] = useState(data);

  const columns = useMemo(
    () => [
      {
        Header: "Tipo de Ingreso",
        accessor: "tipo_ingreso",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "SubTipo de Ingreso",
        accessor: "subtipo_ingreso",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Concepto",
        accessor: "concepto",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Cliente",
        accessor: "cliente",
        Filter: SelectColumnFilter,
        filter: "includes"
      },
      {
        Header: "Total",
        accessor: "total",
        Filter: NoneFilter
      },
      {
        Header: "Ene-21",
        accessor: "Ene-21",
        Filter: NoneFilter
      },
      {
        Header: "Feb-21",
        accessor: "Feb-21",
        Filter: NoneFilter
      },
      {
        Header: "Mar-21",
        accessor: "Mar-21",
        Filter: NoneFilter
      },
      {
        Header: "Abr-21",
        accessor: "Abr-21",
        Filter: NoneFilter
      },
      {
        Header: "May-21",
        accessor: "May-21",
        Filter: NoneFilter
      },
      {
        Header: "Jun-21",
        accessor: "Jun-21",
        Filter: NoneFilter
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
