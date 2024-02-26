import axios from "axios";
import {
  setAddress,
  setDraggedAddress,
} from "../../Pages/Dashboard/Event/Location/locationSlice";
import store from "./../../redux/store";
import { async } from "react-input-emoji";

export function changeMarkerPosition(marker, lat, lng) {
  var newLatLng = new window.google.maps.LatLng(lat, lng);
  marker.setPosition(newLatLng);
}

export async function initMap() {
  const { Map } = await window.google.maps.importLibrary("maps");

  return Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

export const getFlatNo = (addressArray) => {
  let flat_no = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (
      addressArray[i].types[0] &&
      ("premise" === addressArray[i].types[0] ||
        "street_number" === addressArray[i].types[0])
    ) {
      flat_no = addressArray[i].long_name;
      return flat_no;
    }
  }
};

export const getStreetName = (addressArray) => {
  let street_name = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (
      addressArray[i].types[0] &&
      ("neighborhood" === addressArray[i].types[0] ||
        "political" === addressArray[i].types[0])
    ) {
      street_name = addressArray[i].long_name;
      return street_name;
    }
  }
};

export const getAreaName = (addressArray) => {
  let area_name = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (
      addressArray[i].types[0] &&
      ("sublocality" === addressArray[i].types[0] ||
        "sublocality_level_1" === addressArray[i].types[0])
    ) {
      area_name = addressArray[i].long_name;
      return area_name;
    }
  }
};

export const getCity = (addressArray) => {
  let city = "";
  for (let i = 0; i < addressArray.length; i++) {
    if (
      addressArray[i].types[0] &&
      ("administrative_area_level_2" === addressArray[i].types[0] ||
        "administrative_area_level_3" === addressArray[i].types[0] ||
        "postal_town" === addressArray[i].types[0] ||
        "locality" === addressArray[i].types[0])
    ) {
      city = addressArray[i].long_name;
      return city;
    }
  }
};

export const getState = (addressArray) => {
  let state = "";
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_1" === addressArray[i].types[0]
      ) {
        state = addressArray[i].long_name;
        return state;
      }
    }
  }
};

export const getPincode = (addressArray) => {
  let pincode = "";
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "postal_code" === addressArray[i].types[0]
      ) {
        pincode = addressArray[i].long_name;
        return pincode;
      }
    }
  }
};

export const getPincodeDetail = async (pincode) => {
  const data = {
    state: "",
    area_name: "",
  };
  // if (pincode.length > 3) {
  const res = await axios.get(
    `https://api.zipcodestack.com/v1/search?codes=${pincode}&apikey=01H2FMWSFNAN6WXR7S8GY8FKMN`
  );
  if (res.data?.results.length !== 0) {
    data.state = res.data?.results[pincode][0].state;
    data.area_name = res.data?.results[pincode][0].city;
  }
  // }

  return data;
};

export const onPlaceSelected = (place, event) => {
  if (!place.address_components) {
    return;
  }
  const addressInput = {};
  const addressArray = place.address_components;
  addressInput["flat_no"] = getFlatNo(addressArray);
  addressInput["street_name"] = getStreetName(addressArray);
  addressInput["area_name"] = getAreaName(addressArray);
  addressInput["city"] = getCity(addressArray);
  addressInput["state"] = getState(addressArray);
  addressInput["pincode"] = getPincode(addressArray);
  // if(addressInput["pincode"]){
  //    const {state,city} = await getPincodeDetail(addressInput["pincode"])
  //    addressInput["city"]=city
  //    addressInput["state"]= state\
  // getPincodeDetail(addressInput["pincode"])
  // }
  addressInput["location"] = {
    type: "Point",
    coordinates: [
      event === "drag"
        ? place.geometry.location.lat
        : place.geometry.location.lat(),
      event === "drag"
        ? place.geometry.location.lng
        : place.geometry.location.lng(),
    ],
  };
  if (event === "drag") {
    store.dispatch(setDraggedAddress(addressInput));
  } else {
    store.dispatch(setAddress(addressInput));
  }

  return addressInput;
};
