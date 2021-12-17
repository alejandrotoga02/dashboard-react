import axios from "axios";

export const getStatistics = async (_params) => {
  const data = await axios.get("/statistics");
  return data;
};

export const getGraphs = async (_params) => {
  const data = await axios.get("/statistics/graphics");
  return data;
};
