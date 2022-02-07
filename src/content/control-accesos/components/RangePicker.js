import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import esLocale from "date-fns/locale/es";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

const RangePicker = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={esLocale}>
      <DateRangePicker
        {...props}
        renderInput={(startProps, endProps) => (
          <>
            <TextField type="date" {...startProps} />
            <Box sx={{ mx: 2 }}> a </Box>
            <TextField type="date" {...endProps} />
          </>
        )}
      />
    </LocalizationProvider>
  );
};

export default RangePicker;
