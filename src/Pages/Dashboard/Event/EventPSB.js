import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StepProgressBar from "../StepProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  clickNum,
  decrement,
  increment,
} from "../../../Common/CommonSlice/stepProgressCountSlice";
import { Field, useFormik, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  getProfileDetails,
  useProfileDetails,
} from "../../Profile/profileSlice";
import { aboutPlacesPickUpload } from "./AboutPlace/eventAboutPlaceSlice";
import {
  personalDetailId,
  personalDetails,
} from "./PersonalDetails/personalDetailsSlice";
import { useIntl } from "react-intl";
import { MoonLoader } from "react-spinners";
import { s3Url } from "../../../config";
import ToolTips from "../../ToolTips";
import axios from "axios";
import ImageCropper from "../../../component/ImageCropper";
import Modal from "../../../Common/Modals/Modal";
import EventoPackageLoader from "../../../Common/Loader/EventoPackageLoader";
import { eventPath } from "../../../Common/EventPath/eventPath";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const EventPersonalDetails = () => {
  const intl = useIntl();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileDetails = useProfileDetails();
  const eventType = params.eventType;
  const [priceType, setPriceType] = useState("per_day");
  const eventId = localStorage.getItem("eventId");
  const [loading, setLoading] = useState(false);
  const [bannerSrc, setbannerSrc] = useState();
  const [banner, setBanner] = useState("");
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const displayName = localStorage.getItem("displayName");
  const [getPincode, setGetPincode] = useState("");

  // const [phValue, setPhValues] = useState("");
  const [mobileNoHidden, setMobileNoHidden] = useState(false);
  const [emailHidden, setEmailHidden] = useState(false);
  // const [altPhValue, altSetPhValues] = useState(null);
  const [renderFillDetails, setRenderFillDetails] = useState(null);
  const [randerNumber, setRenderNumber] = useState(``)
  const [altRenderNumber, setAltRenderNumber] = useState(``)
  const [isValid, setIsValid] = useState(true);
  const [altisValid, altSetIsValid] = useState(true);
  const [country_wise_contact_data, set_country_wise_contact_data] = useState({})
  const [demo, setDemo] = useState({})

  const [alt_country_wise_contact_data, alt_set_country_wise_contact_data] = useState({})
  const [countrycode, setCountryCode] = useState("")


  const initialState = {
    professional_skill: "",
    full_name: "",
    mobile: "",
    country_code: "",
    alt_mobile_no: "",
    email: "",
    flat_no: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    price: "",
    clearing_time: "",
    max_day: "",
  };

  const ValidationSchema = Yup.object().shape({
    // professional_skill: Yup.string(),
    full_name: Yup.string()
      .min(2, `${intl.formatMessage({ id: "TOO SHORT!" })}`)
      .max(40, `${intl.formatMessage({ id: "TOO LONG!" })}`)
      .required(`${intl.formatMessage({ id: "FULL NAME IS REQUIRED*" })}`),
    // mobile: Yup.number()
    //   .typeError(
    //     `${intl.formatMessage({ id: "CONTACT NUMBER MUST BE A DIGIT" })}`
    //   )
    //   .integer()
    //   .positive(
    //     `${intl.formatMessage({ id: "CONTACT NUMBER MUST BE POSITIVE" })}`
    //   )
    //   .required(`${intl.formatMessage({ id: "CONTACT NUMBER IS REQUIRED" })}`),
    // alt_mobile_no: Yup.string()
    //   .matches(
    //     /^[0-9]*$/,
    //     `${intl.formatMessage({ id: "CONTACT NUMBER MUST BE A DIGIT" })}`
    //   )
    //   .min(
    //     10,
    //     `${intl.formatMessage({
    //       id: "CONTACT NUMBER SHOULD BE TEN DIGIT LONG.",
    //     })}`
    //   )
    //   .max(
    //     10,
    //     `${intl.formatMessage({ id: "CONTACT NUMBER BE TEN DIGIT LONG." })}`
    //   ),
    email: Yup.string()
      .email(`${intl.formatMessage({ id: "INVALID EMAIL FORMAT" })}`)
      .required(`${intl.formatMessage({ id: "EMAIL ADDRESS IS REQUIRED*" })}`),
    flat_no: Yup.string(),
    // street: Yup.string(),
    // area: Yup.string(),
    // city: Yup.string()
    //   .matches(
    //     /^[a-zA-Z ]*$/,
    //     `${intl.formatMessage({
    //       id: "CITY NAME CAN ONLY CONTAIN ENGLISH CHARACTERS",
    //     })}`
    //   )
    //   .required(`${intl.formatMessage({ id: "CITY NAME IS REQUIRED*" })}`),
    // state: Yup.string()
    //   .matches(
    //     /^[a-zA-Z ]*$/,
    //     `${intl.formatMessage({
    //       id: "STATE NAME CAN ONLY CONTAIN ENGLISH CHARACTERS",
    //     })}`
    //   )
    //   .required(`${intl.formatMessage({ id: "STATE NAME IS REQUIRED*" })}`),
    pincode: Yup.string()
      .matches(
        /^[0-9]*$/,
        `${intl.formatMessage({ id: "THE VALUE MUST BE A DIGIT" })}`
      )
      .min(
        6,
        `${intl.formatMessage({ id: "PINCODE SHOULD BE SIX DIGIT LONG." })}`
      )
      .max(
        6,
        `${intl.formatMessage({ id: "PINCODE SHOULD BE SIX DIGIT LONG." })}`
      )
      .required(`${intl.formatMessage({ id: "PINCODE IS REQUIRED*" })}`),
    price: Yup.number()
      .typeError(`${intl.formatMessage({ id: "PRICE MUST BE A DIGIT" })}`)
      .integer()
      .positive(`${intl.formatMessage({ id: "PRICE MUST BE POSITIVE" })}`)
      .required(`${intl.formatMessage({ id: "PRICE IS REQUIRED" })}`),
    clearing_time: Yup.string()
      .typeError("TIME MUST BE A DIGIT")
      .matches(
        /^[0-9]*$/,
        `${intl.formatMessage({ id: "CLEARING TIME MUST BE A DIGIT" })}`
      )
      .required(`${intl.formatMessage({ id: "CLEARING TIME IS REQUIRED" })}`),

    // max_day: Yup.string()
    //   .nullable(true)
    //   .test("len", "MAX DAY SHOULD BE POSITIVE DIGIT", (val) => val >= 0),
  });



  const addBanner = async (selected) => {
    const formData = new FormData();
    formData.append("file", selected);
    try {
      const response = await dispatch(aboutPlacesPickUpload(formData)).unwrap();
      if (response?.data?.IsSuccess) {
        setBanner(response?.data?.Data?.url);
        setCropModalOpen(false);
        // toast.success(response.data.Message);
      } else {
        toast.error(response?.data?.Message);
      }
    } catch (error) {
      console.log(error);
      // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
    }
  };
  const countStep = useSelector((state) => state?.stepProgressCount?.count);
  const goTo = (index) => {
    dispatch(clickNum(index));
    navigate(`/dashboard/event/${eventType}${eventPath[eventType][index]}`);
  };

  const clickBackHander = () => {
    goTo(countStep - 1);
  }

  const photoChangeHandler = (event) => {
    const types = ["image/png", "image/jpeg", "image/jpg"];
    let selected = event.target.files[0];
    setbannerSrc(URL.createObjectURL(selected));
    try {
      if (selected && types.includes(selected.type)) {
        // if (selected.size < 3 * 1024 * 1024) {
          setBanner(selected);
          addBanner(selected);
        // } else {
        //   toast.warn(
        //     `${intl.formatMessage({ id: "FILE SIZE IS GREATER THAN 3MB" })}`
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


  const clickNextHandler = async (values) => {
    try {
      setButtonLoader(true);
      const pinResponse = await axios.get(
        `https://api.postalpincode.in/pincode/${values?.pincode}`
      );
      setButtonLoader(false);
      if (pinResponse?.data[0]?.Status) {
        if (
          pinResponse?.data[0]?.PostOffice[0]?.State.toLowerCase() ===
          values?.state?.toLowerCase()
        ) {
          if (
            pinResponse?.data[0]?.PostOffice[0]?.District.toLowerCase() ===
            values?.city?.toLowerCase()
          ) {
            let payload = {
              ...values,
              is_mobile_no_hidden: mobileNoHidden,
              is_email_hidden: emailHidden,
              price_type: priceType,
              banner: banner,
              eventid: eventId,
              country_wise_contact: country_wise_contact_data,
              alt_country_wise_contact: alt_country_wise_contact_data
            };
            try {
              const response = await dispatch(
                personalDetails(payload)
              ).unwrap();
              if (response?.data?.IsSuccess) {
                dispatch(increment());
                navigate(`../photosandvideos`);
                toast.success(response?.data?.Message);
              } else {
                toast.error(response?.data?.Message);
              }
            } catch (error) {
              toast.error(
                `${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`
              );
              console.log(error);
            }
          } else {
            toast.error(
              `${intl.formatMessage({
                id: "PINCODE IS NOT MATCHING WITH CITY OR STATE.",
              })}`
            );
          }
        } else {
          toast.error(
            `${intl.formatMessage({
              id: "PINCODE IS NOT MATCHING WITH CITY OR STATE.",
            })}`
          );
        }
      } else {
        toast.error(`${intl.formatMessage({ id: "PINCODE IS NOT VALID." })}`);
      }
    } catch (error) {
      toast.error(`${intl.formatMessage({ id: "PINCODE IS NOT VALID." })}`);
    }
  };
  const [stateCity, setStateCity] = useState({ city: "", state: "" });
  const getStateCity = async () => {
    const pinResponse = await axios.get(
      `https://api.postalpincode.in/pincode/${getPincode}`
    );
    const newPinCity = pinResponse?.data[0]?.PostOffice[0]?.District;
    const newPinState = pinResponse?.data[0]?.PostOffice[0]?.State;
    try {
      setStateCity({ city: newPinCity, state: newPinState });
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getStateCity();
  }, [getPincode]);
  // const formik = useFormik({
  //   initialValues: initialState,
  //   validationSchema: ValidationSchema,
  //   onSubmit: clickNextHandler,
  // });

  // const phValue = formik.values.mobile


  const fetchPersonaldetails = async () => {
    const profileResponse = await dispatch(getProfileDetails()).unwrap();
    const profileDetials = profileResponse?.data?.Data
    if (profileResponse?.data?.IsSuccess) {
      const response = await dispatch(personalDetailId(eventId)).unwrap();
      const fillResponse = response?.data?.Data?.personaldetail
      const savedValues = {
        professional_skill: fillResponse?.professional_skill || "",
        full_name: fillResponse?.full_name ? fillResponse?.full_name : profileDetials?.name || "",
        mobile: fillResponse?.mobile ? fillResponse?.mobile : profileDetials?.mobile || "",
        country_code: fillResponse?.country_code ? fillResponse?.country_code : profileDetials?.country_code || "",
        alt_mobile_no: fillResponse?.alt_mobile_no || "",
        email: fillResponse?.email ? fillResponse?.email : profileDetials?.email || "",
        flat_no: fillResponse?.flat_no || "",
        street: fillResponse?.street || "",
        area: fillResponse?.area || "",
        city: fillResponse?.city || "",
        state: fillResponse?.state || "",
        pincode: fillResponse?.pincode || "",
        price: fillResponse?.price || "",
        clearing_time: fillResponse?.clearing_time || "",
        max_day: fillResponse?.max_day || "",
      };
      const countrycode = fillResponse?.country_wise_contact?.dialCode ? fillResponse?.country_wise_contact?.dialCode : profileDetials?.country_wise_contact?.dialCode

      const mobile = fillResponse?.mobile ? fillResponse?.mobile : profileResponse?.data?.Data?.mobile
      const altCountryCode = fillResponse?.alt_country_wise_contact?.dialCode ? fillResponse?.alt_country_wise_contact?.dialCode : profileDetials?.country_wise_contact?.dialCode
      const altMobile = fillResponse?.alt_mobile_no
      alt_set_country_wise_contact_data(fillResponse?.alt_country_wise_contact)
      set_country_wise_contact_data(fillResponse?.country_wise_contact ? fillResponse?.country_wise_contact : profileDetails?.country_wise_contact)

      setRenderFillDetails(savedValues);
      setRenderNumber(`${countrycode}${mobile}`)
      setAltRenderNumber(`${altCountryCode}${altMobile}`)
      // setPhValues(`${countrycode}${mobile}`);
      // altSetPhValues(`${altCountryCode}${altMobile}`);
      setBanner(response?.data?.Data?.personaldetail?.banner);
      // setPrice(response.data.Data.personaldetail.price);
      setCountryCode(countrycode)
      setbannerSrc(
        s3Url + "/" + response?.data?.Data?.personaldetail?.banner
      );

      setPriceType(response?.data?.Data?.personaldetail?.price_type || "per_day");
    }
    // setValues({
    //   ...formik.values,
    //   ...{
    //     full_name: fillResponse?.name ? fillResponse.name : profileDetails?.name,
    //     mobile: fillResponse?.country_wise_contact?.e164Number ? fillResponse?.country_wise_contact?.e164Number : profileDetails?.country_wise_contact?.e164Number,
    //     email: fillResponse?.email ? fillResponse.email : profileDetails?.email,
    //     professional_skill: fillResponse?.professional_skill,
    //     country_code: fillResponse?.name ? fillResponse.name : profileDetails?.name,
    //     alt_mobile_no: fillResponse?.alt_mobile_no,
    //     flat_no: fillResponse?.flat_no,
    //     street: fillResponse?.street,
    //     area: fillResponse?.area,
    //     city: fillResponse?.city,
    //     state: fillResponse?.state,
    //     pincode: fillResponse?.pincode,
    //     price: fillResponse?.price,
    //     clearing_time: fillResponse?.clearing_time,
    //     max_day: fillResponse?.max_day,
    //   }
    // })
    // setPhValues(fillResponse?.mobile && fillResponse?.country_code ? `${fillResponse?.country_code}${fillResponse?.mobile}` : `${profileDetails?.country_code}${profileDetails?.mobile}`
    // );
  }
  useEffect(() => {
    fetchPersonaldetails()
  }, []);

  // const getPersonalDetails = async () => {
  //   try {
  //     const response = await dispatch(personalDetailId(eventId)).unwrap();
  //     if (response?.data?.Data?.personaldetail) {
  //       formik.setValues(response?.data?.Data?.personaldetail);
  //       setBanner(response?.data?.Data?.personaldetail?.banner);
  //       // setPrice(response.data.Data.personaldetail.price);
  //       setbannerSrc(
  //         s3Url + "/" + response?.data?.Data?.personaldetail?.banner
  //       );
  //       setPriceType(response?.data?.Data?.personaldetail?.price_type);
  //       setLoading(false);
  //     }
  //     if (!response?.data?.IsSuccess) {
  //       toast.error(
  //         `${ intl.formatMessage({ id: "ERROR OCCURED WHILE FETCHING DATA." }) }`
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  const removeImage = () => {
    setbannerSrc("");
    setBanner("");
  };

  // const validValues = String(phValue);
  // const valid = isValidPhoneNumber(validValues);
  // const internationalNumber = formatPhoneNumberIntl(phValue) || " ";
  // const nationalNumber = formatPhoneNumber(phValue);
  // const nationNumber = formatPhoneNumber(phValue).split(" ").join("").slice(0);
  // const countryC = internationalNumber.split(" ")[0];
  // const regNumber = nationNumber.split("").slice(1).join("");

  // const country_wise_contact = {
  //   number: nationalNumber,
  //   internationalNumber: internationalNumber,
  //   nationalNumber: nationalNumber,
  //   e164Number: phValue,
  //   countryCode: "IN",
  //   dialCode: countryC,
  // };
  // const altValidValues = String(altPhValue);
  // const altValid = isValidPhoneNumber(altValidValues);
  // const altInternationalNumber = formatPhoneNumberIntl(altPhValue) || " ";
  // const altNationalNumber = formatPhoneNumber(altPhValue);
  // const altNationNumber = formatPhoneNumber(altPhValue)
  //   .split(" ")
  //   .join("")
  //   .slice(0);
  // const altCountryC = internationalNumber.split(" ")[0];
  // const altRegNumber = altNationNumber.split("").slice(1).join("");

  // const alt_country_wise_contact = {
  //   number: altNationalNumber,
  //   internationalNumber: altInternationalNumber,
  //   nationalNumber: altNationalNumber,
  //   e164Number: altPhValue,
  //   countryCode: "IN",
  //   dialCode: altCountryC,
  // };
  const phInputHandleChange = (value, data, event, formattedValue, status) => {

    const phoneRegex = /^[6-9]\d{9}$/;
    const valid = phoneRegex.test(value.slice(data.dialCode.length));
    setIsValid(valid)
    const country_wise_contact = {
      number: value.slice(data.dialCode.length),
      internationalNumber: formattedValue,
      nationalNumber: value.slice(data.dialCode.length),
      e164Number: value,
      countryCode: data.countryCode,
      dialCode: data.dialCode
    }
    setCountryCode(data.dialCode)
    set_country_wise_contact_data(country_wise_contact)
  }
  const altphInputHandleChange = (value, data, event, formattedValue, status) => {

    const phoneRegex = /^[6-9]\d{9}$/;
    const normalNUmber = value.slice(data.dialCode.length)
    const valid = phoneRegex.test(normalNUmber);
    if (normalNUmber.length === 0) {
      altSetIsValid(true)
    } else {
      altSetIsValid(valid)
    }
    const alt_country_wise_contact = {
      number: value.slice(data.dialCode.length),
      internationalNumber: formattedValue,
      nationalNumber: value.slice(data.dialCode.length),
      e164Number: value,
      countryCode: data.countryCode,
      dialCode: data.dialCode
    }
    alt_set_country_wise_contact_data(alt_country_wise_contact)

  }

  return (
    <>
      {loading ? (
        <EventoPackageLoader />
      ) : (
        <>
          <Formik
            initialValues={renderFillDetails || initialState}
            validationSchema={ValidationSchema}
            onSubmit={clickNextHandler}
            enableReinitialize
          >
            {
              ({ formik, values, handleChange, handleBlur, setFieldValue }) => {
                setGetPincode(values.pincode);
                values.country_code = countrycode;
                values.city = stateCity.city;
                values.state = stateCity.state;
                return (
                  <>
                    <Form
                      className="space-y-5 -mx-2 max-[768px]:space-y-0"
                    >
                      <div className="w-full flex items-end flex-wrap">
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                          <span className="input-titel">
                            {intl.formatMessage({ id: "PROFESSIONAL SKILL" })}
                          </span>
                          <Field
                            type="text"
                            className="input"
                            name="professional_skill"
                          />
                          <small className="text-red-500 text-xs">
                            <ErrorMessage name="professional_skill" />
                          </small>
                          <br />
                        </div>
                        <div className="w-full md:w-1/2 px-2 inputHolder">
                          <span className="input-titel">
                            {intl.formatMessage({ id: "FULL NAME" })}(
                            {intl.formatMessage({ id: "MR" })} /
                            {intl.formatMessage({ id: "MRS" })} /
                            {intl.formatMessage({ id: "MS" })}) <span>*</span>
                          </span>
                          <Field
                            type="text"
                            className="input"
                            name="full_name"
                          />
                          <small className="text-red-500 text-xs">
                            <ErrorMessage name="full_name" />
                          </small>
                          <br />
                        </div>
                      </div>
                      <div className="w-full flex items-end flex-wrap">
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <div className="input-label-holder">
                            <label className="input-titel">
                              {intl.formatMessage({ id: "MOBILE NUMBER" })} <span>*</span>
                            </label>
                            <div className="input-checkd">
                              <Field
                                type="checkbox"
                                className="mr-2"
                                name="is_mobile_hidden"
                              />
                              {intl.formatMessage({ id: "HIDDEN" })}
                            </div>
                          </div>

                          {/* <input
                    type="text"
                    className="input max-w-[80px] w-full mr-3"
                    name="country_code"
                    value={formik?.values?.country_code}
                    onChange={(e) =>
                      setInputValue("country_code", e.target.value)
                    }
                    readOnly
                  />
                  <input
                    type="text"
                    className="input"
                    name="mobile"
                    value={formik?.values?.mobile}
                    onChange={(e) => setInputValue("mobile", e.target.value)}
                    readOnly
                  /> */}
                          <div className="relative flex flex-col h-12 rounded-lg bg-white justify-center pl-5">
                            {/* <Field
                            // as="select"
                            type="text"
                            className="  input max-w-[80px] w-full mr-3"
                            name="country_code"
                          ></Field>
                          <Field type="text" className="input" name="mobile" /> */}
                            <PhoneInput
                              value={randerNumber}
                              country={"in"}
                              onChange={(value, data, event, formattedValue) => { phInputHandleChange(value, data, event, formattedValue); setFieldValue("mobile", value.slice(data.dialCode.length)) }}
                            />
                            <small className="absolute top-full left-0 text-red-500 text-xs">
                              {!isValid && "please Enter valid Mobile & Require"}
                            </small>
                          </div>

                          <br />
                        </div>
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">
                            {intl.formatMessage({ id: "ALTERNATIVE" })}{" "}
                            {intl.formatMessage({ id: "MOBILE NUMBER" })} <span></span>
                          </label>
                          <div className="relative flex flex-col h-12 rounded-lg bg-white justify-center pl-5">
                            <PhoneInput
                              value={altRenderNumber}
                              country={"in"}
                              onChange={(value, data, event, formattedValue) => { altphInputHandleChange(value, data, event, formattedValue); setFieldValue("alt_mobile_no", value.slice(data.dialCode.length)) }}
                            />
                            <small className="absolute top-full left-0 text-red-500 text-xs">
                              {!altisValid && "please Enter valid Mobile & Require"}
                            </small>
                          </div>
                          {/* <Field
                            type="text"
                            className="input"
                            name="alt_mobile_no"
                          /> */}

                          <br />
                        </div>
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <div className="input-label-holder">
                            <label className="input-titel">
                              {intl.formatMessage({ id: "EMAIL ADDRESS" })} <span>*</span>
                            </label>
                            <div className="input-checkd">
                              <input
                                type="checkbox"
                                className="mr-2"
                                onChange={() => setEmailHidden(!emailHidden)}
                              />
                              {intl.formatMessage({ id: "HIDDEN" })}
                            </div>
                          </div>
                          <Field
                            type="text"
                            className="input"
                            name="email"
                          />
                          <small className="text-red-500 text-xs">
                            <ErrorMessage name="email" />
                          </small>
                          <br />
                        </div>
                      </div>
                      <div className="upload-holder">
                        <div className="flex justify-start items-center">
                          <span className="input-titel ml-2">
                            {intl.formatMessage({ id: "SKILL BANNER" })}
                            {intl.formatMessage({
                              id: " (Max File size 10MB & Resolution Must be 1080PX x 780PX)",
                            })}
                          </span>
                          &nbsp;
                          <svg
                            class="w-5 h-5 tooltip"
                            data-pr-tooltip={intl.formatMessage({
                              id: "UPLOAD YOUR BANNER HERE",
                            })}
                            data-pr-position="top"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <ToolTips />
                        </div>
                        <label
                          onClick={() => setCropModalOpen(true)}
                          htmlFor="cropUpload"
                          className="upload relative flex justify-center items-center h-40 p-0"
                        >
                          {/* <input type="file" name="images" id="upload" className="appearance-none hidden" onChange={photoChangeHandler} /> */}
                          {bannerSrc ? (
                            <>
                              <button
                                className="absolute right-2 top-2 bg-sky-500/75 ... w-16 h-7 text-white"
                                type="button"
                                onClick={() => removeImage()}
                              >
                                Remove
                              </button>
                              <img
                                src={bannerSrc}
                                className="w-full h-full object-cover"
                              />
                            </>
                          ) : (
                            <span className="input-titel flex justify-center">
                              <i className="icon-image mr-2"></i>
                              {intl.formatMessage({ id: "UPLOAD IMAGES" })}
                            </span>
                          )}
                        </label>
                        <span className="input-titel ml-2">
                          {banner
                            ? banner.name || banner
                            : `${intl.formatMessage({ id: "PLEASE SELECT IMAGES" })}`}
                        </span>
                      </div>
                      {/* option 1 */}
                      <div className="flex space-x-3 max-[768px]:flex-col max-[768px]:space-x-0">
                        <div
                          className={
                            "inputHolder " +
                            (priceType === "per_day" && true
                              ? "w-8/12 max-[768px]:w-full"
                              : (priceType === "per_event"
                                ? "w-7/12 2xl:w-8/12 max-[768px]:w-full"
                                : "w-7/12 2xl:w-8/12 max-[768px]:w-full") &&
                              (priceType === "per_hour"
                                ? "w-8/12 max-[768px]:w-full"
                                : "w-8/12 max-[768px]:w-full"))
                          }
                        >
                          <span className="input-titel">
                            {intl.formatMessage({ id: "PRICE" })}
                            <span className="line-hight">*</span>
                          </span>
                          <label
                            htmlFor=""
                            className="flex items-center w-full bg-white p-2 px-3.5 rounded-md max-[768px]:flex-col"
                          >
                            <div className="w-full inputHolder">
                              <Field
                                type="text"
                                className="w-full outline-none text-spiroDiscoBall font-bold text-base max-[768px]:pb-2"
                                name="price"
                              />
                            </div>
                            <div className="selectPrice flex items-center space-x-3 max-[768px]:w-full max-[768px]:justify-between">
                              <label className="block cursor-pointer">
                                <Field
                                  type="radio"
                                  // name="price"
                                  value="per_day"
                                  className="hidden"
                                  checked={priceType === "per_day" && true}
                                  onChange={(e) => setPriceType("per_day")}
                                />
                                <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                                  {intl.formatMessage({ id: "PER" })} /{" "}
                                  {intl.formatMessage({ id: "DAY" })}
                                </span>
                              </label>
                              <label className="block cursor-pointer">
                                <Field
                                  type="radio"
                                  // name="price"
                                  value="per_hour"
                                  className="hidden"
                                  checked={priceType === "per_hour" && true}
                                  onChange={(e) => setPriceType("per_hour")}
                                />
                                <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                                  {intl.formatMessage({ id: "PER" })} /{" "}
                                  {intl.formatMessage({ id: "HOUR" })}
                                </span>
                              </label>
                              <label className="block cursor-pointer">
                                <Field
                                  type="radio"
                                  // name="price"
                                  value="per_event"
                                  className="hidden"
                                  checked={priceType === "per_event" && true}
                                  onChange={(e) => setPriceType("per_event")}
                                />
                                <span className="text-sm text-quicksilver py-2 px-3 bg-white shadow-lg whitespace-nowrap font-bold rounded block">
                                  {intl.formatMessage({ id: "PER" })} /{" "}
                                  {intl.formatMessage({ id: "EVENT" })}
                                </span>
                              </label>
                            </div>
                          </label>
                          <small className="text-red-500 text-xs">
                            <ErrorMessage name="price" />
                          </small>
                        </div>
                        <div
                          className={
                            "inputHolder " +
                            (priceType === "per_hour"
                              ? "w-4/12 max-[820px]:w-full"
                              : priceType === "per_event"
                                ? "w-4/12 2xl:w-2/12 max-[820px]:w-full"
                                : priceType === "per_day"
                                  ? "w-4/12 max-[820px]:w-full"
                                  : "hidden")
                          }
                        >
                          <div className="flex justify-start items-center">
                            <label className="input-titel">
                              {intl.formatMessage({ id: "CLEARING TIME (IN HOURS)" })}
                              <span class="line-hight">*</span>
                            </label>
                            <ToolTips />
                            <svg
                              class="w-5 h-5 tooltip"
                              data-pr-tooltip={intl.formatMessage({
                                id: "AFTER COMPLETION OF YOUR EVENT, YOU MUST CLEAR THE PLACE WITHIN THE TIME YOU MENTION HERE.",
                              })}
                              data-pr-position="top"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>

                          <Field
                            type="text"
                            className="input py-[14px]"
                            name="clearing_time"
                          />
                          <small className="text-red-500 text-xs">
                            <ErrorMessage name="clearing_time" />
                          </small>
                        </div>
                        {priceType === "per_event" ? (
                          <div
                            className={
                              "inputHolder " +
                              (priceType === "per_event"
                                ? "w-2/12 max-[820px]:w-full"
                                : "hidden")
                            }
                          >
                            <label className="input-titel">
                              {intl.formatMessage({ id: "MAX DAY (IN DAYS)" })}
                            </label>
                            <Field
                              type="text"
                              className="input py-[14px]"
                              name="max_day"
                              required
                            />
                            <small className="text-red-500 text-xs">
                              <ErrorMessage name="max_day" />
                            </small>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="space-y-5 max-[768px]:space-y-1">
                        <h3 className="px-2">{intl.formatMessage({ id: "ADDRESS" })}</h3>
                        <div className="w-full flex flex-wrap">
                          <div className="w-full md:w-1/3 px-2 inputHolder">
                            <span className="input-titel">
                              {intl.formatMessage({ id: "FLAT NO." })}
                            </span>
                            <Field
                              type="text"
                              className="input"
                              name="flat_no"
                            />
                            <small className="text-red-500 text-xs">
                              <ErrorMessage name="flat_no" />
                            </small>
                            <br />
                          </div>
                          <div className="w-full md:w-1/3 px-2 inputHolder">
                            <span className="input-titel">
                              {intl.formatMessage({ id: "STREET NAME." })}
                            </span>
                            <Field
                              type="text"
                              className="input"
                              name="street"
                            />
                            <small className="text-red-500 text-xs">
                              <ErrorMessage name="street" />
                            </small>
                            <br />
                          </div>
                          <div className="w-full md:w-1/3 px-2 inputHolder">
                            <span className="input-titel">
                              {intl.formatMessage({ id: "AREA NAME." })}
                            </span>
                            <Field
                              type="text"
                              className="input"
                              name="area"
                            />
                            <small className="text-red-500 text-xs">
                              <ErrorMessage name="area" />
                            </small>
                            <br />
                          </div>
                        </div>
                        <div className="w-full flex flex-wrap">
                          <div className="w-full md:w-1/3 px-2 inputHolder">
                            <label className="input-titel">
                              {intl.formatMessage({ id: "PINCODE" })} <span>*</span>
                            </label>
                            <Field
                              type="text"
                              className="input"
                              name="pincode"
                            // value={formik?.values?.pincode}
                            // onChange={(e) => {
                            //   setInputValue("pincode", e.target.value);
                            //   setTimeout(() => {
                            //     setGetPincode(e.target.value);
                            //   }, 1000);
                            // }}
                            />
                            <small className="text-red-500 text-xs">
                              <ErrorMessage name="pincode" />
                            </small>
                            <br />
                          </div>
                          <div className="w-full md:w-1/3 px-2 inputHolder">
                            <label className="input-titel">
                              {intl.formatMessage({ id: "CITY" })} <span>*</span>
                            </label>
                            <Field
                              type="text"
                              className="input"
                              name="city"
                            />
                            <small className="text-red-500 text-xs">
                              <ErrorMessage name="city" />
                            </small>
                            <br />
                          </div>
                          <div className="w-full md:w-1/3 px-2 inputHolder">
                            <label className="input-titel">
                              {intl.formatMessage({ id: "STATE" })} <span>*</span>
                            </label>
                            <Field
                              type="text"
                              className="input"
                              name="state"
                            />
                            <small className="text-red-500 text-xs">
                              <ErrorMessage name="state" />
                            </small>
                            <br />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          className="flex items-center  text-[#9ba6a8]"
                          onClick={clickBackHander}
                        >
                          <i className="icon-back-arrow mr-3"></i>
                          <h3>{intl.formatMessage({ id: "BACK" })}</h3>
                        </button>
                        {buttonLoader ? (
                          <MoonLoader color="#1ec0e8" size={30} />
                        ) : (
                          <>
                            <button
                              type="submit"
                              className={`flex items-center active   text-[#20C0E8] `}
                              disabled={!isValid || !altisValid}
                            >
                              <h3 className="">
                                {intl.formatMessage({ id: "NEXT" })}
                              </h3>
                              <i className="icon-next-arrow ml-3"></i>
                            </button>
                          </>
                        )}
                      </div>
                    </Form>
                  </>
                )
              }
            }
          </Formik>
          <Modal isOpen={cropModalOpen}>
            <ImageCropper
              setCropModalOpen={setCropModalOpen}
              photoChangeHandler={photoChangeHandler}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default EventPersonalDetails;
