import { useEffect, useState } from "react";
import { forEachObjIndexed, length, keys } from "ramda";

export const useColumns = data => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (data) {
      const headers = [];
      const concatValue = (_value, key) => {
        headers.push({
          Header: key,
          accessor: key
        });
      };
      forEachObjIndexed(concatValue, data.garitas);
      setColumns(headers);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setRecords([{ ...data.garitas }]);
    }
  }, [data]);

  return { columns, records };
};

export const useMultipleRow = (data, chunk) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data) {
      let i = 0;
      let numElements = length(keys(data));
      const tmpRows = [];
      let tmpObj = {};

      const makeRow = (v, k) => {
        tmpObj[k] = v;
        i++;
        if (i === chunk - 1 || i === numElements) {
          tmpRows.push({
            garitas: { ...tmpObj }
          });
          tmpObj = {};
        }
      };
      forEachObjIndexed(makeRow, data);
      setRows(tmpRows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return rows;
};
