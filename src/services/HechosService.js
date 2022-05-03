import axios from "axios";

/**
 * Gets statistics
 *
 * @param {object} params
 * @returns
 */
export const getStatistics = async params => {
  const data = await axios.get("/hechos/statistics", { params });
  return data;
};

/**
 * Get historics
 *
 * @param {object} params
 * @returns
 */
export const getHistorics = async params => {
  const data = await axios.get("/hechos/historics", { params });
  return data;
};
