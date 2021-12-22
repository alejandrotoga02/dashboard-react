import axios from "axios";

export const getStatistics = async params => {
  const data = await axios.get("/statistics", { params });
  return data;
};

export const getGraphs = async params => {
  const data = await axios.get("/statistics/graphics", { params });
  return data;
};
