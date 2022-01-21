import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { fetchNumeralia } from "../../common/reducers/numeraliaReducer";
import TableFilter from "./components/tables/TableFilter";
import RangePicker from "./components/RangePicker";
import { useNumeralia } from "../../common/hooks/useNumeralia";
import { useIsMounted } from "../../common/hooks/useIsMounted";
import dayjs from "dayjs";

const Numeralia = () => {
  const { data, loading } = useSelector(state => state.numeralia);
  const dispatch = useDispatch();

  const isMounted = useIsMounted();

  const {
    columns,
    onChange,
    onExport,
    onDateRangeChange,
    value
  } = useNumeralia(data);

  let gridEl = useRef(null);

  useEffect(
    () => dispatch(fetchNumeralia()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  return !loading ? (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12} lg={12}>
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            {isMounted && (
              <RangePicker
                startText="Inicio"
                endText="Fin"
                value={value}
                onChange={onDateRangeChange}
                onAccept={values => {
                  let [startOfTime, endOfTime] = values;
                  startOfTime = dayjs(startOfTime).format("YYYY-MM-DD");
                  endOfTime = dayjs(endOfTime).format("YYYY-MM-DD");
                  dispatch(
                    fetchNumeralia({
                      startOfTime,
                      endOfTime
                    })
                  );
                }}
              />
            )}
            <Button ref={gridEl} variant="outlined" onClick={onExport}>
              Exportar a csv
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <TableFilter onChange={onChange} columns={columns} data={data} />
        </Grid>
      </Grid>
    </>
  ) : (
    <Box justifyContent="center" sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Numeralia;
