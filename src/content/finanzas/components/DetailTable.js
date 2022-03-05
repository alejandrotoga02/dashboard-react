import React from "react";
import Table from "./Table";
import { useTable } from "../useTable";

const DetailTable = ({ data, columnsArr }) => {
  const { columns, records } = useTable(data, columnsArr);
  return (
    <>
      <Table columns={columns} data={records} />
    </>
  );
};


export default DetailTable;
