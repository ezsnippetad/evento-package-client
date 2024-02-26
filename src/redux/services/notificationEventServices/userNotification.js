import { SELECT_USER_FOR_NOTIFICATION } from "../../../api/constApi";
import authHeader from "../authHeader";
import { apiInstance } from "../axiosApi";

export const selectUserNotification = (payload) => {
  return apiInstance.post(SELECT_USER_FOR_NOTIFICATION, payload, {
    headers: authHeader(),
  });
};
