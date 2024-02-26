import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const initialState = {
  address: {
    eventid: localStorage.getItem("eventId"),
    flat_no: "",
    street_name: "",
    area_name: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    location: {
      coordinates: [21.2361559, 72.8747768],
    },
  },
};

const locationSlice = createSlice({
  name: "locationSlice",
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = { ...state.address, ...action.payload };
    },
    setDraggedAddress: (state, action) => {
      state.address = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export default locationSlice.reducer;

export const { setAddress, setDraggedAddress } = locationSlice.actions;

export const useCoordinates = () => {
  return useSelector((state) => state.location.address?.location?.coordinates);
};

export const useAddress = () => {
  return useSelector((state) => state.location.address);
};
