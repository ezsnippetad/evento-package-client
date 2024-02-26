import { GET_CSV_USER, IMPORT_CSV } from "../../../api/constApi";
import authHeader, { imageHeader } from "../authHeader";
import { apiInstance } from "../axiosApi";

export const userCsvimport = (payload) => {
  return apiInstance.post(IMPORT_CSV, payload, { headers: imageHeader() });
};

export const getUserListFromCsv = (payload) => {
  return apiInstance.post(GET_CSV_USER, payload, { headers: authHeader() });
};
