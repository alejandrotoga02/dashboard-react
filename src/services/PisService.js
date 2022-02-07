import axios from "axios";

/***
 * Verifies permissions
 */
export const verifyPermissions = async () => {
  const config = {
    baseURL: `${process.env.REACT_APP_FEDERADO_API_URL}`,
    timeout: 1000,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };
  const instance = axios.create(config);
  const data = await instance.get("Validar/v2/permisos");
  return data;
};
