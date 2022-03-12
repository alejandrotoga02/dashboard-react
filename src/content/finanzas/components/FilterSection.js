import React from "react";
import { Stack } from "@mui/material";
import Select from "../../../common/components/SelectM";

const FilterSection = ({ tipos, subtipos, conceptos, clientes, meses }) => {
  console.log( tipos )
  return (
    <Stack direction="row" spacing={1}>
      <Select label="Tipos" value={""} items={tipos} />
      <Select label="SubTipos" value={""} items={subtipos} />
      {/* <Select label="Concepto" value={""} items={conceptos} /> */}
      <Select label="Cliente" value={""} items={clientes} />
      <Select label="Mes" value={""} items={meses} />
    </Stack>
  );
};

export default FilterSection;
