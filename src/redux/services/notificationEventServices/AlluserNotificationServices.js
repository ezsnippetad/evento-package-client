import { SELECT_ALLUSER_FOR_NOTIFICATION } from "../../../api/constApi";
import authHeader from "../authHeader";
import { apiInstance } from "../axiosApi";

export const selectAllUserNotification = (payload) => {
  apiInstance.post(SELECT_ALLUSER_FOR_NOTIFICATION, payload, {
    headers: authHeader(),
  });
};
