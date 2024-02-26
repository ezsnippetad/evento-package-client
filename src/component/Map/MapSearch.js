import React, { useEffect } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useDispatch } from "react-redux";
import { setAddress } from "../../Pages/Dashboard/Event/Location/locationSlice";
import {
  getAreaName,
  getCity,
  getFlatNo,
  getPincode,
  getState,
  getStreetName,
  onPlaceSelected,
} from "./mapUtils";
import { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";

function MapSearch(props) {
  const dispatch = useDispatch();

  function onClickHandler(place) {
    console.log("place", place);
    const address = onPlaceSelected(place);
    dispatch(setAddress(address));
  }

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyDLgr8YB5IK8dBIEWClexZGzXaB7UlVm7Q",
    onPlaceSelected: onClickHandler,
    options: {
      types: ["establishment"],
    },
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="w-full">
      <form className="w-full">
        <input
          placeholder="Search place"
          className="w-full"
          // value={searchVal}
          ref={ref}
          onKeyDown={handleKeyPress}
          // onChange={(evt) => {
          //   getPlacePredictions({ input: evt.target.value });
          //   setSearchVal(evt.target.value);
          // }}
          // loading={isPlacePredictionsLoading}
        />
      </form>
      {/* {isOpen &&
        placePredictions.map((place) => (
          <div className="p-1 border-solid border-b-2 border-b-gray-300">
            <span
              className="cursor-pointer "
              onClick={() => onClickHandler(place)}
            >
              {place.description}
            </span>
          </div>
        ))} */}
    </div>
  );
}

export default MapSearch;
