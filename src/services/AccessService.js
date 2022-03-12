import axios from "axios";

/**
 * Gets statistics
 *
 * @param {object} params
 * @returns
 */
export const getStatistics = async params => {
  const data = await axios.get("/access/statistics", { params });
  return data;
};

/**
 * Get graphs
 *
 * @param {object} params
 * @returns
 */
export const getGraphs = async params => {
  const data = await axios.get("/access/graphics", { params });
  return data;
};

/**
 * Get numeralics
 *
 * @param {object} params
 * @returns
 */
export const getNumeralics = async params => {
  const data = await axios.get("/access/numeralics", { params });
  return data;
};

/**
 * Get historics
 *
 * @param {object} params
 * @returns
 */
export const getHistorics = async () => {
  const data = await axios.get("/access/historics");
  return data;
};
