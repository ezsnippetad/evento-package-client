import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserListFromCsv,
  userCsvimport,
} from "../../../../../redux/services/notificationEventServices/importUserCsvServices";
import { selectUserNotification } from "../../../../../redux/services/notificationEventServices/userNotification";
import { selectAllUserNotification } from "../../../../../redux/services/notificationEventServices/AlluserNotificationServices";

export const importUserCsv = createAsyncThunk(
  "user/importusercsv",
  async (payload) => {
    try {
      return await userCsvimport(payload);
    } catch (error) {
      return error;
    }
  },
);

export const gettingCsvData = createAsyncThunk(
  "user/importusercsv",
  async (payload) => {
    try {
      return await getUserListFromCsv(payload);
    } catch (error) {
      return error;
    }
  },
);

export const selectUser = createAsyncThunk(
  "user/selectuser",
  async (payload) => {
    try {
      return await selectUserNotification(payload);
    } catch (error) {
      return error;
    }
  },
);
export const selectAllUser = createAsyncThunk(
  "user/selectalluser",
  async (payload) => {
    try {
      return await selectAllUserNotification(payload);
    } catch (error) {
      return error;
    }
  },
);
