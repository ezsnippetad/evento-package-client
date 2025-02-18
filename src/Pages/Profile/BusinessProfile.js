import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import previewImage from "../../assest/images/image-preview.png";
import { s3Url } from "../../config";
import {
  addBusinessProfileDetails,
  addBusinessProfileImage,
  useProfileDetails,
} from "./profileSlice";
import { useDispatch } from "react-redux";
import { useIntl } from "react-intl";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const BusinessProfile = ({ business, getProfile }) => {
  const profileDetails = useProfileDetails();
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  // const [phValue, setPhValues] = useState(null);
  // const validValues = String(phValue);
  // const valid = isValidPhoneNumber(validValues);
  // const internationalNumber = formatPhoneNumberIntl(phValue) || " ";
  // const nationalNumber = formatPhoneNumber(phValue);
  // const nationNumber = formatPhoneNumber(phValue).split(" ").join("").slice(0);
  // const countryC = internationalNumber.split(" ")[0];
  // const regNumber = nationNumber.split("").slice(1).join("");
  const [randerNumber, setRenderNumber] = useState(``)
  const [country_wise_contact_data, set_country_wise_contact_data] = useState({})
  const [isValid, setIsValid] = useState(true);
  const [handlNumber, setHandleNumber] = useState(``)
  const [countrycode, setCountryCode] = useState("")

  // const country_wise_contact = {
  //   number: nationalNumber,
  //   internationalNumber: internationalNumber,
  //   nationalNumber: nationalNumber,
  //   e164Number: phValue,
  //   countryCode: "IN",
  //   dialCode: countryC,
  // };

  const initalState = {
    name: "",
    email: "",
    dob: "",
    address: "",
    country: "",
    about: "",
    profile_pic: "",
  };

  const [values, setValues] = useState(initalState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    setValues({
      name: business?.name,
      email: business?.email,
      dob: business?.dob,
      address: business?.address,
      country: business?.country,
      about: business?.about,
      country_code: business?.country_code,
      mobile: business?.mobile,
      profile_pic: business?.profile_pic,
    });
    const countrycode = business?.country_wise_contact?.dialCode || `91`;
    const mobile = business?.mobile;

    setRenderNumber(`${countrycode}${mobile}`)
    set_country_wise_contact_data(business?.country_wise_contact)
    setCountryCode(business?.country_wise_contact?.dialCode)
    // setPhValues(`${countrycode}${mobile}`);
  }, [business, isDisable]);

  let initialRender = true;
  useEffect(() => {
    if (initialRender) {
      initialRender = false;
    } else {
      if (!isDisable) {
        toast.info(`${intl.formatMessage({ id: "EDIT PROFILE ENABLE." })}`);
      } else {
        toast.info(`${intl.formatMessage({ id: "EDIT PROFILE DISABLE." })}`);
      }
    }
  }, [isDisable]);

  const addPersonalDetails = async () => {

    const payload = {
      ...values,
      mobile: handlNumber,
      country_wise_contact: country_wise_contact_data,
    };
    try {
      const response = await dispatch(
        addBusinessProfileDetails(payload)
      ).unwrap();
      if (response.data.IsSuccess) {
        toast.success(response.data.Message);
        getProfile();
      } else {
        toast.error(response.data.Message);
      }
    } catch (error) {
      console.log(error);
      // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
    }
  };

  const addProfilePic = async (selected) => {
    const formData = new FormData();
    formData.append("file", selected);
    try {
      const response = await dispatch(
        addBusinessProfileImage(formData)
      ).unwrap();
      if (response.data.IsSuccess) {
        toast.success(response.data.Message);
      } else {
        toast.error(response.data.Message);
      }
    } catch (error) {
      console.log(error);
      // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
    }
  };

  const photoChangeHandler = (event) => {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    let selected = event.target.files[0];
    try {
      if (selected && types.includes(selected.type)) {
        // if (selected.size < 1 * 1024 * 1024) {
        setProfileImage(selected);
        addProfilePic(selected);
        // } else {
        //   toast.warn(
        //     `${intl.formatMessage({ id: "FILE SIZE IS GREATER THAN 1MB" })}`
        //   );
        // }
      } else {
        toast.warn(
          `${intl.formatMessage({
            id: "PLEASE SELECT IMAGE FILE WITH JPEG/PNG.",
          })}`
        );
      }
    } catch (error) {
      console.log(error);
      // toast.error(`${intl.formatMessage({ id: "ERROR WHILE SELECTING IMAGE." })}`);
    }
  };
  const phInputHandleChange = (value, data, event, formattedValue, status) => {

    const phoneRegex = /^[6-9]\d{9}$/;
    const normalNUmber = value.slice(data.dialCode.length)
    const valid = phoneRegex.test(normalNUmber);
    if (normalNUmber.length === 0) {
      setIsValid(true)
    } else {
      setIsValid(valid)
    }
    const country_wise_contact = {
      number: value.slice(data.dialCode.length),
      internationalNumber: formattedValue,
      nationalNumber: value.slice(data.dialCode.length),
      e164Number: value,
      countryCode: data.countryCode,
      dialCode: data.dialCode
    }
    set_country_wise_contact_data(country_wise_contact)
  }

  return (
    <>
      {/* <!-- title-holder  --> */}
      <div className="flex justify-between items-center pt-4">
        <h1>{intl.formatMessage({ id: "BUSINESS PROFILE" })}</h1>
        {isDisable && (
          <button
            className="btn-primary small"
            onClick={() => setIsDisable(false)}
          >
            {intl.formatMessage({ id: "EDIT PROFILE" })}
          </button>
        )}
        {!isDisable && (
          <div className="flex">
            <button
              className="btn-primary small mr-3"
              onClick={() => {
                addPersonalDetails();
                setIsDisable(true);
              }}
              disabled={!isValid}
            >
              {intl.formatMessage({ id: "SAVE" })}
            </button>
            <button
              className="btn-primary small"
              onClick={() => setIsDisable(true)}
            >
              {intl.formatMessage({ id: "CANCEL" })}
            </button>
          </div>
        )}
      </div>
      {/* <!-- profile image--> */}
      <div className="flex items-center max-[600px]:flex-col">
        <div className="">
          <div className="w-44 h-44 rounded-full border-8 border-spiroDiscoBall relative mr-9 max-[600px]:mr-0">
            <img
              src={
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : values?.profile_pic
                    ? s3Url + "/" + values?.profile_pic
                    : previewImage
              }
              alt="pictures"
              className="w-full h-full object-cover rounded-full overflow-hidden"
            />
            <div className="absolute bottom-0 right-0 flex justify-center items-center w-10 h-10 rounded-full bg-spiroDiscoBall z-10">
              <i className="icon-camera"></i>
              <input
                type="file"
                onChange={(e) => photoChangeHandler(e)}
                className="opacity-0 absolute inset-0"
              />
              {/* <input type="file" onChange={(e) => !isDisable && photoChangeHandler(e)} disabled={isDisable} className="opacity-0 absolute inset-0"/> */}
            </div>
          </div>
        </div>
        <div className="max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:mt-4">
          <h2>{business?.name}</h2>
          <p className="text-xl font-bold text-japaneseIndigo pt-2.5">
            {business?.about}
          </p>
        </div>
      </div>
      {/* <!-- form Edit  --> */}
      <div className="">
        <div className="flex justify-between space-x-5 max-[600px]:space-x-0 -mx-2 max-[600px]:flex-col">
          <div className="w-full md:w-1/2 px-2 inputHolder">
            <span className="input-titel">
              {intl.formatMessage({ id: "NAME" })}
            </span>
            <input
              type="text"
              className="input font-bold"
              name="name"
              value={values?.name || ""}
              onChange={changeHandler}
              disabled={isDisable}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 inputHolder max-[600px]:pt-3">
            <span className="input-titel">
              {intl.formatMessage({ id: "EMAIL" })}
            </span>
            <input
              type="text"
              className="input font-bold"
              name="email"
              value={values?.email || ""}
              onChange={changeHandler}
              disabled={isDisable}
            />
          </div>
        </div>
        <div className="flex justify-between space-x-5 max-[600px]:space-x-0 pt-3 -mx-2 max-[600px]:flex-col">
          <div className="w-1/2 px-2 max-[600px]:w-full">
            <span className="input-titel">
              {intl.formatMessage({ id: "PHONE NUMBER" })}
            </span>
            <div className="flex items-center bg-white  h-12 rounded-lg pl-3 space-x-3 mt-1">
              {/* <div className=""> */}
              {/* <select className="text-base text-japaneseIndigo bg-white rounded-md flex space-x-3 profile-arrow outline-0 whitespace-nowrap pl-5 pr-10 py-3.5 relative w-28">
                                        <option>+91</option>
                                        <option>+625</option>
                                        <option>+001</option>
                                    </select> */}
              {/* <input
                  type="text"
                  name="country_code"
                  value={values?.country_code || ""}
                  onChange={changeHandler}
                  disabled={isDisable}
                  className="text-base text-japaneseIndigo bg-white rounded-md flex space-x-3 profile-arrow outline-0 whitespace-nowrap pl-5 pr-10 py-3.5 relative w-28 font-bold"
                />
              </div>
              <div className="max-w-full w-full inputHolder">
                <input
                  type="text"
                  className="input font-bold"
                  name="mobile"
                  value={values?.mobile || ""}
                  onChange={changeHandler}
                  disabled={isDisable}
                />
              </div> */}
              <PhoneInput
                value={randerNumber}
                country={"in"}
                className="font-bold"
                disabled={isDisable}
                onChange={(value, data, event, formattedValue) => {
                  phInputHandleChange(value, data, event, formattedValue);
                  setHandleNumber(value.slice(data.dialCode.length))
                }}
              />

            </div>

            <small className=" top-full left-0 text-red-500 text-xs">
              {!isValid && "please Enter valid Mobile & Require"}

            </small>
          </div>
          <div className="w-full md:w-1/2 px-2 inputHolder  max-[600px]:pt-3">
            <span className="input-titel">
              {intl.formatMessage({ id: "ADDRESS" })}
            </span>
            <input
              type="text"
              className="input font-bold"
              name="address"
              value={values?.address || ""}
              onChange={changeHandler}
              disabled={isDisable}
            />
          </div>
        </div>
        <div className="flex justify-between space-x-5 max-[600px]:space-x-0 pt-3 -mx-2 max-[600px]:flex-col">
          <div className="w-full md:w-1/2 px-2 inputHolder">
            <span className="input-titel">
              {intl.formatMessage({ id: "DATE OF BIRTH" })}
            </span>
            <input
              type="text"
              className="input font-bold"
              name="dob"
              placeholder="dd-mm-yyyy"
              value={values?.dob || ""}
              onChange={changeHandler}
              disabled={isDisable}
            />
          </div>
          <div className="w-full md:w-1/2 px-2 inputHolder max-[600px]:pt-3">
            <span className="input-titel">
              {intl.formatMessage({ id: "COUNTRY" })}
            </span>
            <input
              type="text"
              className="input font-bold"
              name="country"
              value={values?.country || ""}
              onChange={changeHandler}
              disabled={isDisable}
            />
          </div>
        </div>
        <div className="w-full pt-3">
          <span className="input-titel">
            {intl.formatMessage({ id: "ABOUT ME" })}
          </span>
          <textarea
            name="about"
            id=""
            cols="30"
            rows="5"
            value={values?.about || ""}
            disabled={isDisable}
            onChange={changeHandler}
            className="font-bold outline-none flex items-center w-full bg-white resize-none p-2 px-3.5 rounded-md placeholder:font-bold placeholder:text-japaneseIndigo"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default BusinessProfile;
