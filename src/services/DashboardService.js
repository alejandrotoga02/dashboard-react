import axios from "axios";

export const getDashboard = async params => {
  const data = await axios.get("/dashboard", { params });
  return data;
};
