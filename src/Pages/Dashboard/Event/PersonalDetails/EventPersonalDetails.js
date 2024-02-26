import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clickNum } from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import {
  getProfileDetails,
  useProfileDetails,
} from "../../../Profile/profileSlice";
import { personalDetailId, personalDetails } from "./personalDetailsSlice";
import { useIntl } from "react-intl";
import { MoonLoader } from "react-spinners";
import axios from "axios";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";
import { eventPath } from "../../../../Common/EventPath/eventPath";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const EventPersonalDetails = () => {
  const intl = useIntl();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const eventType = params.eventType;
  const eventId = localStorage.getItem("eventId");
  const displayName = localStorage.getItem("displayName");
  const [loading, setLoading] = useState(true);
  const [pinLoading, setPinLoading] = useState(false);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [getPincode, setGetPincode] = useState("");
  const [mobileNoHidden, setMobileNoHidden] = useState(false);
  const [emailHidden, setEmailHidden] = useState(false);
  const [renderFillDetails, setRenderFillDetails] = useState(null);
  const countBar = useSelector((state) => state?.stepProgressCount?.count);
  const [phValue, setPhValues] = useState(null);
  const [altPhValue, altSetPhValues] = useState(null);
  const [state, setState] = useState(``)
  const [randerNumber, setRenderNumber] = useState(``)

  const [altRenderNumber, setAltRenderNumber] = useState(``)
  const [isValid, setIsValid] = useState(true);

  const [altisValid, altSetIsValid] = useState(true);

  const [country_wise_contact_data, set_country_wise_contact_data] = useState({})


  const [alt_country_wise_contact_data, alt_set_country_wise_contact_data] = useState({})

  const [countrycode, setCountryCode] = useState("")
  // const [countryflegCode, setCountryFlegCode] = useState("in")
  // const [altcountrycode, setAltcountrycode] = useState("")
  // const [altCountryflegCode, setaltCountryflegCode] = useState("in")


  const initialState = {
    professional_skill: "",
    full_name: "",
    country_code: "",
    mobile: "",
    alt_mobile_no: "",
    email: "",
    flat_no: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  };
  const ValidationSchema = Yup.object().shape({
    full_name: Yup.string()
      .min(2, `${intl.formatMessage({ id: "TOO SHORT!" })}`)
      .max(40, `${intl.formatMessage({ id: "TOO LONG!" })}`)
      .required(`${intl.formatMessage({ id: "FULL NAME IS REQUIRED*" })}`),
    country_code: Yup.string().required(
      `${intl.formatMessage({ id: "COUNTRY CODE IS REQUIRED*" })}`
    ),
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
  });
  const clickNextHandler = async (values) => {
    setPinLoading(true);
    const arrCity = values?.city?.split(" ");
    const arrState = values?.state?.split(" ");
    for (let i = 0; i < arrCity?.length; i++) {
      arrCity[i] = arrCity[i].charAt(0) + arrCity[i].slice(1);
    }
    values.city = arrCity.join(" ");
    for (let i = 0; i < arrState?.length; i++) {
      arrState[i] = arrState[i].charAt(0) + arrState[i].slice(1);
    }
    values.state = arrState.join(" ");
    try {
      setButtonLoader(true);
      const pinResponse = await axios.get(
        `https://api.postalpincode.in/pincode/${values?.pincode}`
      );
      setButtonLoader(false);
      if (pinResponse?.data[0]?.Status) {
        if (
          pinResponse?.data[0]?.PostOffice[0]?.State.toLowerCase() ===
          values?.state.toLowerCase()
        ) {
          if (
            pinResponse?.data[0]?.PostOffice[0]?.District.toLowerCase() ===
            values?.city.toLowerCase()
          ) {
            let payload = {
              ...values,
              is_mobile_no_hidden: mobileNoHidden,
              is_email_hidden: emailHidden,
              country_wise_contact: country_wise_contact_data,
              alt_country_wise_contact: alt_country_wise_contact_data,
              eventid: eventId,
            };

            try {
              const response = await dispatch(
                personalDetails(payload)
              ).unwrap();
              if (response?.data?.IsSuccess) {
                goTo(countBar + 1);
                toast.success(response.data.Message);
                setPinLoading(false);
              } else {
                toast.error(response.data.Message);
              }
            } catch (error) {
              toast.error(
                `${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`
              );
              toast.error("Something went Wrong");
              console.log(error);
              setPinLoading(false);
            }
          } else {
            toast.error(
              `${intl.formatMessage({
                id: "PINCODE IS NOT MATCHING WITH CITY OR STATE.",
              })}`
            );
            setPinLoading(false);
          }
        } else {
          toast.error(
            `${intl.formatMessage({
              id: "PINCODE IS NOT MATCHING WITH CITY OR STATE.",
            })}`
          );
          setPinLoading(false);
        }
      } else {
        toast.error(`${intl.formatMessage({ id: "PINCODE IS NOT VALID." })}`);
        setPinLoading(false);
      }
    } catch (error) {
      toast.error(`${intl.formatMessage({ id: "PINCODE IS NOT VALID." })}`);
      setPinLoading(false);
    }
  };

  const goTo = (index) => {
    dispatch(clickNum(index));
    navigate(`/dashboard/event/${eventType}${eventPath[eventType][index]}`);
  };

  const clickBackHandler = () => {
    goTo(countBar - 1);
  };

  const getProfile = useCallback(async () => {
    try {
      const profileResponse = await dispatch(getProfileDetails()).unwrap();


      if (profileResponse?.data?.IsSuccess) {
        const response = await dispatch(personalDetailId(eventId)).unwrap();
        const savedValues = {
          professional_skill:
            response?.data?.Data?.personaldetail?.professional_skill,
          full_name: response?.data?.Data?.personaldetail?.name
            ? response?.data?.Data?.personaldetail?.name
            : profileResponse?.data?.Data?.name,
          country_code: response?.data?.Data?.personaldetail?.country_code
            ? response?.data?.Data?.personaldetail?.country_code
            : profileResponse?.data?.Data?.country_code,
          mobile: response?.data?.Data?.personaldetail?.mobile
            ? response?.data?.Data?.personaldetail?.mobile
            : profileResponse?.data?.Data?.mobile,
          alt_mobile_no: response?.data?.Data?.personaldetail?.alt_mobile_no,
          email: response?.data?.Data?.personaldetail?.email
            ? response?.data?.Data?.personaldetail?.email
            : profileResponse?.data?.Data?.email,
          flat_no: response?.data?.Data?.personaldetail?.flat_no,
          street: response?.data?.Data?.personaldetail?.street,
          area: response?.data?.Data?.personaldetail?.area,
          city: response?.data?.Data?.personaldetail?.city,
          state: response?.data?.Data?.personaldetail?.state,
          pincode: response?.data?.Data?.personaldetail?.pincode,
        };
        const countrycode = response?.data?.Data?.personaldetail?.country_wise_contact?.dialCode
          ? response?.data?.Data?.personaldetail?.country_wise_contact?.dialCode
          : profileResponse?.data?.Data?.country_wise_contact?.dialCode;
        const mobile = response?.data?.Data?.personaldetail?.mobile
          ? response?.data?.Data?.personaldetail?.mobile
          : profileResponse?.data?.Data?.mobile;
        // setPhValues(`${countrycode}${mobile}`);
        const altCountryCode = response?.data?.Data?.personaldetail
          ?.alt_country_wise_contact?.dialCode
        const altMobile = response?.data?.Data?.personaldetail?.alt_mobile_no;
        const fleg = response?.data?.Data?.personaldetail?.country_wise_contact?.countryCode ? response?.data?.Data?.personaldetail?.country_wise_contact?.countryCode : profileResponse?.data?.Data?.country_wise_contact?.countryCode
        setRenderFillDetails(savedValues);
        setRenderNumber(`${countrycode}${mobile}`)
        setAltRenderNumber(`${altCountryCode}${altMobile}`)
        const prevObj = profileResponse?.data?.Data?.country_wise_contact
        const currObj = response?.data?.Data?.personaldetail?.country_wise_contact
        if (currObj && Object.keys(currObj).length > 0) {
          set_country_wise_contact_data({ ...currObj });
        } else {
          set_country_wise_contact_data({ ...prevObj });
        }
        const altObj = response?.data?.Data?.alt_country_wise_contact
        alt_set_country_wise_contact_data(response?.data?.Data?.personaldetail?.alt_country_wise_contact)

        setCountryCode(countrycode)
        // setCountryFlegCode(fleg)
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
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

  useEffect(() => {
    getProfile();
  }, []);

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
  // const altRegNumber = altNationalNumber.split("").slice(1).join("");

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

    // setCountryFlegCode(data.countryCode)
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
            {({ formik, handleChange, handleBlur, setFieldValue, values, }) => {

              setGetPincode(values.pincode);
              values.city = stateCity.city;
              values.state = stateCity.state;
              values.country_code = countrycode;
              return (
                <Form className="space-y-5 -mx-2 max-[768px]:space-y-1 flex flex-col justify-between h-[80%]">
                  <div>
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
                          {intl.formatMessage({ id: "MR" })} /{" "}
                          {intl.formatMessage({ id: "MRS" })} /{" "}
                          {intl.formatMessage({ id: "MS" })})<span>*</span>
                        </span>
                        <Field type="text" className="input" name="full_name" />
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
                            {intl.formatMessage({ id: "MOBILE NUMBER" })}{" "}
                            <span>*</span>
                          </label>
                          {/* <div className="input-checkd">
            <Field
              type="checkbox"
              className="mr-2"
              name="is_mobile_hidden"
              onChange={() => setMobileNoHidden(!mobileNoHidden)}
            />
            {intl.formatMessage({ id: "HIDDEN" })}
          </div> */}
                        </div>
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
                          {intl.formatMessage({ id: "MOBILE NUMBER" })}{" "}
                          <span></span>
                        </label>
                        {/* <Field
                          type="text"
                          className="input"
                          name="alt_mobile_no"
                        /> */}
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
                        {/* <small className="text-red-500 text-xs">
                          {formik?.errors.alt_mobile_no}
                          <ErrorMessage name="alt_mobile_no" />
                        </small> */}
                        <br />
                      </div>
                      <div className="w-full md:w-1/3 px-2 inputHolder">
                        <div className="input-label-holder">
                          <label className="input-titel">
                            {intl.formatMessage({ id: "EMAIL ADDRESS" })}{" "}
                            <span>*</span>
                          </label>
                          {/* <div className="input-checkd">
            <Field
              type="checkbox"
              className="mr-2"
              onChange={() => setEmailHidden(!emailHidden)}
            />
            {intl.formatMessage({ id: "HIDDEN" })}
          </div> */}
                        </div>
                        <Field type="text" className="input" name="email" />
                        <small className="text-red-500 text-xs">
                          <ErrorMessage name="email" />
                        </small>
                        <br />
                      </div>
                    </div>
                    <div className="space-y-5 max-[768px]:space-y-0">
                      <h3 className="px-2">
                        {intl.formatMessage({ id: "ADDRESS" })}
                      </h3>
                      <div className="w-full flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">
                            {intl.formatMessage({ id: "FLAT NO." })}
                          </span>
                          <Field
                            type="text"
                            className="input"
                            name="flat_no"
                            onChange={(e) => handleChange(e)}
                            onBlur={handleBlur}
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
                          <Field type="text" className="input" name="street" />
                          <small className="text-red-500 text-xs">
                            {formik?.errors?.street}
                            <ErrorMessage name="street" />
                          </small>
                          <br />
                        </div>
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">
                            {intl.formatMessage({ id: "AREA NAME." })}
                          </span>
                          <Field type="text" className="input" name="area" />
                          <small className="text-red-500 text-xs">
                            <ErrorMessage name="area" />
                          </small>
                          <br />
                        </div>
                      </div>
                      <div className="w-full flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">
                            {intl.formatMessage({ id: "PINCODE" })}{" "}
                            <span>*</span>
                          </label>
                          <Field type="text" className="input" name="pincode" />
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
                            disabled
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
                            // value={stateCity.state}
                            name="state"
                            disabled
                          />
                          <small className="text-red-500 text-xs">
                            <ErrorMessage name="state" />
                          </small>
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        className="flex items-center  text-[#9ba6a8]"
                        onClick={clickBackHandler}
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
                  </div>
                </Form>
              );
            }}
          </Formik>
        </>
      )}
    </>
  );
};

export default EventPersonalDetails;
