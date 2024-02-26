import React, { Component, useState, useEffect } from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import Geocode from "react-geocode";
import {
  setAddress,
  useCoordinates,
} from "../../Pages/Dashboard/Event/Location/locationSlice";
import { useDispatch } from "react-redux";
import {
  changeMarkerPosition,
  getAreaName,
  getCity,
  getFlatNo,
  getPincode,
  getState,
  getStreetName,
  onPlaceSelected,
} from "./mapUtils";
Geocode.setApiKey("AIzaSyDLgr8YB5IK8dBIEWClexZGzXaB7UlVm7Q");
Geocode.enableDebug();

function MapWithAutoPlace(props) {
  const propsCopy = props;

  const coordinates = useCoordinates();
  const dispatch = useDispatch();
  const [marker, setMarker] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    async function initMap() {
      const { Map } = await window.google.maps.importLibrary("maps");

      const mapInstance = new Map(document.getElementById("map"), {
        center: { lat: coordinates?.at(0), lng: coordinates?.at(1) },
        zoom: 15,
      });

      setMap(mapInstance);

      const draggableMarker = new window.google.maps.Marker({
        map: mapInstance,
        position: { lat: coordinates?.at(0), lng: coordinates?.at(1) },
        draggable: true,
        title: "drag to select location",
      });

      draggableMarker.addListener("dragend", (event) => {
        const position = draggableMarker.position;
        console.log("position", position);
        onMarkerDragEnd(event);
      });

      setMarker(draggableMarker);
    }
    if (window.google?.maps) {
      initMap();
    }
  }, [window.google?.maps]);

  useEffect(() => {
    if (marker && coordinates) {
      changeMarkerPosition(marker, coordinates?.at(0), coordinates?.at(1));
    }

    if (map && coordinates) {
      map.setCenter({
        lat: coordinates?.at(0),
        lng: coordinates?.at(1),
      });
    }
  }, [marker, coordinates]);

  /**
   * When the marker is dragged you get the lat and long using the functions available from event object.
   * Use geocode to get the address, city, area and state from the lat and lng positions.
   * And then set those values in the state.
   *
   * @param event
   */
  const onMarkerDragEnd = (event) => {
    console.log("event", event);
    let newLat = event.latLng.lat();
    let newLng = event.latLng.lng();
    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        console.log(response);
        onPlaceSelected(response.results[0], "drag");
      },
      (error) => {
        console.error(error);
      }
    );
  };

  return <div className="h-[400px] w-full" id="map" />;
}

export default MapWithAutoPlace;
