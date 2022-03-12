import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SelectM = ({ label, value = "", items = [] }) => {
  const [selectedValue, setSelectedValue] = React.useState(value);

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="">TODOS</MenuItem>
          {items &&
            items.map(item => (
              <MenuItem value={item.value}>{item.value}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectM;
