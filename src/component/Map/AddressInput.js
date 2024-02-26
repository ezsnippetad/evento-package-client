import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { yourCapacity } from "../../Pages/Dashboard/Event/Capacity/capacitySlice";
import { increment } from "../../Common/CommonSlice/stepProgressCountSlice";
import {
  setAddress,
  useAddress,
} from "../../Pages/Dashboard/Event/Location/locationSlice";

function AddressInput(props) {
  // const {address,setInputValue} = props

  const intl = useIntl();
  const displayName = localStorage.getItem("displayName");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const eventType = params.eventType;
  const eventId = localStorage.getItem("eventId");
  const token = localStorage.getItem("Token");
  const [type, setType] = useState("romantic_stay");
  const address = useAddress();

  const clickNextHandler = async (values) => {
    let payload = { ...values, facilities: type, eventid: eventId };
    try {
      const response = await dispatch(yourCapacity(payload)).unwrap();
      if (response.data.IsSuccess) {
        // toast.success(response.data.Message);
        dispatch(increment());
        navigate(`../photosandvideos`);
      } else {
        toast.error(response.data.Message);
      }
    } catch (error) {
      // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
      console.log(error);
    }
  };

  // const [values, setValues] = useState(initialState);
  const formik = useFormik({
    initialValues: address,
    onSubmit: clickNextHandler,
  });

  const setInputValue = useCallback(
    (key, value) => {
      dispatch(
        setAddress({
          [key]: value,
        })
      );
    },
    [formik]
  );

  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/3 px-2 inputHolder">
          <span className="input-titel">
            {intl.formatMessage({ id: "FLAT NO." })}
          </span>
          <input
            type="text"
            className="input"
            name="flat_no"
            value={address?.flat_no ?? ""}
            onChange={(e) => setInputValue("flat_no", e.target.value)}
          />
          <small className="text-red-500 text-xs">{formik.errors.area}</small>
          <br />
        </div>
        <div className="w-full md:w-1/3 px-2 inputHolder">
          <span className="input-titel">
            {intl.formatMessage({ id: "STREET NAME." })}
          </span>
          <input
            type="text"
            className="input"
            name="street_name"
            value={address?.street_name ?? ""}
            onChange={(e) => setInputValue("street_name", e.target.value)}
          />
          <small className="text-red-500 text-xs">{formik.errors.street}</small>
          <br />
        </div>
        <div className="w-full md:w-1/3 px-2 inputHolder">
          <span className="input-titel">
            {intl.formatMessage({ id: "AREA NAME." })}
          </span>
          <input
            type="text"
            className="input"
            name="area_name"
            value={address?.area_name ?? ""}
            onChange={(e) => setInputValue("area_name", e.target.value)}
          />
          <small className="text-red-500 text-xs">{formik.errors.area}</small>
          <br />
        </div>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/3 px-2 inputHolder">
          <label className="input-titel">
            {intl.formatMessage({ id: "CITY" })} <span>*</span>
          </label>
          <input
            type="text"
            className="input"
            name="city"
            readOnly
            value={address?.city ?? ""}
            onChange={(e) => setInputValue("city", e.target.value)}
          />
          <small className="text-red-500 text-xs">{formik.errors.city}</small>
          <br />
        </div>
        <div className="w-full md:w-1/3 px-2 inputHolder">
          <label className="input-titel">
            {intl.formatMessage({ id: "STATE" })} <span>*</span>
          </label>
          <input
            type="text"
            className="input"
            name="state"
            readOnly
            value={address?.state ?? ""}
            onChange={(e) => setInputValue("state", e.target.value)}
          />
          <small className="text-red-500 text-xs">{formik.errors.state}</small>
          <br />
        </div>
        <div className="w-full md:w-1/3 px-2 inputHolder">
          <label className="input-titel">
            {intl.formatMessage({ id: "PINCODE" })} <span>*</span>
          </label>
          <input
            type="text"
            className="input"
            name="pincode"
            readOnly
            value={address?.pincode ?? ""}
            onChange={(e) => {
              // getPincodeDetail(e);
              setInputValue("pincode", e.target.value);
            }}
          />
          <small className="text-red-500 text-xs">
            {formik.errors.pincode}
          </small>
          <br />
        </div>
        <div className="w-full  px-2 inputHolder">
          <label className="input-titel">
            Manual address ( If address from the google map is not accurate, you
            can write it manually. )
          </label>
          {/* <span className="input-titel">{intl.formatMessage({ id: "ADDRESS" })}</span> */}
          {/* <span className="input-titel">{values.address}</span> */}
          <textarea
            cols="30"
            rows="5"
            className="w-full outline-none p-7 py-5"
            value={address?.address}
            onChange={(e) => setInputValue("address", e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default AddressInput;
