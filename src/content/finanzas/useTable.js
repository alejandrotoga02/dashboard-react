import { useEffect, useState } from "react";
import { forEach, forEachObjIndexed } from "ramda";

export const useTable = (data, columnDef) => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const headers = [];
    const concatValue = v => {
      headers.push({
        Header: v,
        accessor: v
      });
    };
    forEach(concatValue, columnDef);
    setColumns(headers);
  }, [columnDef]);

  useEffect(() => {
    const rows = [];
    if (data) {
      forEachObjIndexed((v, k) => {
        let tempObj = {};
        let i = 0;
        forEach(col => {
          tempObj[col] = i === 0 ? k : v;
          i++;
        }, columnDef);
        rows.push(tempObj);
      }, data);
      setRecords([...rows]);
    }
  }, [data, columnDef]);

  return { columns, records };
};
