import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import Advertisement from '../Advertisement';
import StepProgressBar from "../../StepProgressBar";
import {
  clickNum,
  decrement,
  increment,
} from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { capacityId, yourCapacity } from "../Capacity/capacitySlice";
import { useIntl } from "react-intl";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import Geocode from "react-geocode";
import MapWithAutoPlace from "../../../../component/Map/MapWithAutoPlace";
import MapSearch from "../../../../component/Map/MapSearch";
import AddressInput from "../../../../component/Map/AddressInput";
import { setAddress, useAddress } from "./locationSlice";
import store from "../../../../redux/store";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";
import { async } from "react-input-emoji";
import { onPlaceSelected } from "../../../../component/Map/mapUtils";

// Geocode.setApiKey("AIzaSyDLgr8YB5IK8dBIEWClexZGzXaB7UlVm7Q");
let marker;

const AddLocation = () => {
  const intl = useIntl();
  const displayName = localStorage.getItem("displayName");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const eventType = params.eventType;
  const eventId = localStorage.getItem("eventId");
  const token = localStorage.getItem("Token");
  const [type, setType] = useState("romantic_stay");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [coordinates, setCoordinates] = useState([21.2361559, 72.8747768]);
  const [add, setAdd] = useState();
  const [loading, setLoading] = useState(true);
  const ValidationSchema = Yup.object().shape({
    // person_capacity: Yup.number().typeError('Person Capacity must be a digit').integer().positive("Person Capacity must be positive").required(`${intl.formatMessage({ id: "PERSON CAPACITY IS REQUIRED" })}`),
    // parking_capacity: Yup.number().typeError('Parking Capacity must be a digit').integer().positive("Parking Capacity must be positive").required(`${intl.formatMessage({ id: "PARKING CAPACITY IS REQUIRED" })}`)
  });

  const initialState = {
    eventid: eventId,
    flat_no: "",
    street_name: "",
    area_name: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    location: {
      type: "Point",
      coordinates: [coordinates[0], coordinates[1]],
    },
  };

  // const [values, setValues] = useState(initialState);

  // const getAddress = (lat, lng) => {
  //   // console.log("add : ", lat, lng);

  //   Geocode.fromLatLng(lat, lng).then(
  //     (response) => {
  //       const address = response.results[0].formatted_address;
  //       let city, state, country, postal_code;
  //       for (let i = 0; i < response.results[0].address_components.length; i++) {
  //         for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
  //           switch (response.results[0].address_components[i].types[j]) {
  //             case "locality":
  //               city = response.results[0].address_components[i].long_name;
  //               break;
  //             case "administrative_area_level_1":
  //               state = response.results[0].address_components[i].long_name;
  //               break;
  //             case "country":
  //               country = response.results[0].address_components[i].long_name;
  //               break;
  //             case "postal_code":
  //               postal_code = response.results[0].address_components[i].long_name;
  //               break;
  //           }
  //         }
  //       }
  //       formik.setFieldValue("city", city);
  //       formik.setFieldValue("state", state);
  //       formik.setFieldValue("pincode", postal_code);
  //     },
  //     (error) => {
  //       console.error(error);
  //     },
  //   );
  // };

  // const handleClick = (address, lng, lat, latlng) => {
  //   console.log(latlng);
  //   setCoordinates([lng, lat]);
  //   setAdd(address);
  //   values.location = {
  //     type: "Point",
  //     coordinates: [lng, lat],
  //   };
  //   marker.setPosition(latlng);
  //   // marker.setCoordinates( lat,lng )
  // };
  // const handleChange = (address) => {
  //   setAdd({ address });
  // };

  // const handleSelect = (address) => {
  //   setAdd({ address });
  // };
  const count = useSelector((state) => state?.stepProgressCount?.count);

  const eventPath = {
    hyp: [
      "/addplaces",
      "/aboutplace",
      "/location",
      "/photosandvideos",
      "/addservices",
      "/personaldetails",
      "/companydetails",
      "/termsandconditions",
      "/discounts",
      "/calender",
    ],
    psb: [
      "/addplaces",
      "/personalinfo",
      "/photosandvideos",
      "/addequipments",
      "/othercost",
      "/companydetails",
      "/termsandconditions",
      "/discounts",
      "/calender",
    ],
    gsb: [
      "/addplaces",
      "/personalinfo",
      "/photosandvideos",
      "/additem",
      "/addequipments",
      "/othercost",
      "/companydetails",
      "/termsandconditions",
      "/discounts",
      "/calender",
    ],
  };

  const goTo = (index) => {
    dispatch(clickNum(index));
    navigate(`/dashboard/event/${eventType}${eventPath[eventType][index]}`);
  };

  const clickBackHander = () => {
    goTo(count - 1);
  };

  const getCapacity = async () => {
    try {
      const response = await dispatch(capacityId(eventId)).unwrap();
      setLoading(false);

      if (response.data.Data.capacity) {
        dispatch(setAddress(response.data.Data.capacity));
      }
      // setValues(response.data.Data.capacity);
      // formik.setValues(response.data.Data.capacity);
      // getPincodeDetail({
      //   target: { value: response.data.Data.capacity.pincode },
      // });
      if ("facilities" in response?.data?.Data?.capacity) {
        setType(response?.data?.Data?.capacity?.facilities);
      }
      if (response?.data?.Data?.capacity?.location?.coordinates?.length) {
        setCoordinates(response?.data?.Data?.capacity?.location?.coordinates);
      } else {
        getLiveLocation();
      }

      if (!response?.data?.IsSuccess) {
        toast.error(
          `${intl.formatMessage({ id: "ERROR OCCURED WHILE FETCHING DATA." })}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCapacity();
    // getLiveLocation();
  }, []);

  const clickNextHandler = async (e) => {
    e.preventDefault();

    const addressRedux = store.getState().location.address;
    console.log("addressRedux", addressRedux);
    let payload = { ...addressRedux, eventid: eventId };
    try {
      const response = await dispatch(yourCapacity(payload)).unwrap();
      if (response?.data?.IsSuccess) {
        toast.success(response?.data?.Message);
        dispatch(increment());
        navigate(`../photosandvideos`);
      } else {
        toast.error(response?.data?.Message);
      }
    } catch (error) {
      // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
      console.log(error);
    }
  };

  const getLiveLocation = async () => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
    } else {
      console.log("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // setStatus(null);
          // console.log(position.coords.latitude);
          setCoordinates([position.coords.latitude, position.coords.longitude]);
          Geocode.fromLatLng(
            position.coords.latitude,
            position.coords.longitude
          ).then(
            (response) => {
              onPlaceSelected(response.results[0], "drag");
            },
            (error) => {
              console.error(error);
            }
          );
          // marker.setPosition({
          //   lat: position.coords.latitude,
          //   lng: position.coords.longitude,
          // });

          // setLat(position.coords.latitude);
          // setLng(position.coords.longitude);
        },
        () => {
          console.log("Unable to retrieve your location");
        }
      );
    }
  };

  // const setInputValue = useCallback(
  //   (key, value) =>
  //     formik.setValues({
  //       ...formik.values,
  //       [key]: value,
  //     }),
  //   [formik],
  // );

  // const loadMap = (map, maps) => {
  //   marker = new maps.Marker({
  //     position: {
  //       lat: values.location.coordinates[0],
  //       lng: values.location.coordinates[1],
  //     },
  //     map,
  //     draggable: true,
  //   });
  //   marker.addListener("dragend", () => {
  //     formik.setFieldValue("location", {
  //       type: "Point",
  //       coordinates: [marker.getPosition().lat(), marker.getPosition().lng()],
  //     });
  //     values.location = {
  //       type: "Point",
  //       coordinates: [marker.getPosition().lat(), marker.getPosition().lng()],
  //     };
  //     setCoordinates([marker.getPosition().lat(), marker.getPosition().lng()]);
  //     getAddress(marker.getPosition().lat(), marker.getPosition().lng());
  //   });
  // };

  return (
    //   <!-- Content In -->
    <>
      {loading ? (
        <EventoPackageLoader />
      ) : (
        <>
          <form className="space-y-5" onSubmit={clickNextHandler}>
            <div className="space-y-5 max-[768px]:space-y-0">
              <h3 className="px-2">{intl.formatMessage({ id: "ADDRESS" })}</h3>
              <div className="w-full flex flex-wrap bg-white p-2 rounded-md min-h-[300px] xl:min-h-[400px]">
                <MapSearch />
                <div className="relative rounded-md w-full">
                  <MapWithAutoPlace />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 bg-spiroDiscoBall text-base capitalize font-semibold text-white px-7 py-3 rounded-md z-40"
                    onClick={getLiveLocation}
                  >
                    {intl.formatMessage({ id: "GET LIVE LOCATION" })}
                  </button>
                </div>
              </div>
              <AddressInput />
            </div>

            {/* <small className="text-red-500 text-xs">{formik.errors.parking_capacity}</small> */}
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="flex items-center  text-[#9ba6a8]"
                onClick={clickBackHander}
              >
                <i className="icon-back-arrow mr-3"></i>
                <h3>{intl.formatMessage({ id: "BACK" })}</h3>
              </button>
              <button
                type="submit"
                className={`flex items-center active   text-[#20C0E8]`}
              >
                <h3 className="">{intl.formatMessage({ id: "NEXT" })}</h3>
                <i className="icon-next-arrow ml-3"></i>
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default AddLocation;
