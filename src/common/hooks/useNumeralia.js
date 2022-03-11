import { useCallback, useMemo, useState } from "react";
import SelectColumnFilter from "../hooks/filters/customFilter";
import { exportCSVFile } from "../utils";

export const useNumeralia = data => {
  const [dataExport, setDataExport] = useState(data);
  const [value, setValue] = useState([null, null]);

  const columns = useMemo(
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

  const onChange = useCallback(rows => {
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

  const onDateRangeChange = newValue => {
    setValue(newValue);
  };

  return {
    columns,
    dataExport,
    onChange,
    onExport,
    onDateRangeChange,
    value
  };
};
