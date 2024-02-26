import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  allMedia,
  companyImages,
  mediaById,
  photosUpload,
  videosUpload,
} from "../../../../redux/services/eventServices/photoAndVideoServices";

const initialState = { imagesArray: [], videoArray: [], loading: false, imgTag: "" };

export const uploadPhoto = createAsyncThunk(
  "event/imageUpload",
  async (payload) => {
    return await photosUpload(payload);
  },
);

export const mediaId = createAsyncThunk("event/mediabyid", async (id) => {
  return await mediaById(id);
});

export const uploadVideo = createAsyncThunk(
  "event/videosUpload",
  async (payload) => {
    return await videosUpload(payload);
  },
);

export const AllMedia = createAsyncThunk("event/media", async (payload) => {
  return await allMedia(payload);
});

const eventPhotoAndVideoSlice = createSlice({
  name: "eventPhotoAndVideoSlice",
  initialState,
  reducers: {
    setImagesArray(state, action) {
      state.imagesArray = action.payload
    },
    setVideoArray(state, action) {
      state.videoArray = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(uploadPhoto.fulfilled, (state, action) => {
      state.imgTag = action.payload
      state.loading = false
    })
    builder.addCase(uploadPhoto.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(uploadVideo.fulfilled, (state, action) => {
      state.loading = false
    })
    builder.addCase(uploadVideo.pending, (state, action) => {
      state.loading = true
    })
  },
});
export default eventPhotoAndVideoSlice.reducer;

export const { setImagesArray, setVideoArray } = eventPhotoAndVideoSlice.actions

export const selectImageArray = (state) => state.eventPhotoAndVideo.imagesArray;

export const useImagesArray = () => {
  const imagesArray = useSelector(selectImageArray);
  return useMemo(() => imagesArray, [imagesArray]);
};
export const selectVideoArray = (state) => state.eventPhotoAndVideo.videoArray;

export const useVideoArray = () => {
  const videoArray = useSelector(selectVideoArray);
  return useMemo(() => videoArray, [videoArray]);
};
export const selectImageStatus = (state) => state.eventPhotoAndVideo;

export const useStatusImages = () => {
  const statusImage = useSelector(selectImageStatus);
  return useMemo(() => statusImage, [statusImage]);
};
