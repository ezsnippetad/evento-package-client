import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import StepProgressBar from "../../StepProgressBar";
import { s3Url } from "../../../../config";
import {
  clickNum,
  decrement,
  increment,
} from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useCallback } from "react";
import {
  documentType,
  imageType,
  videoType,
} from "../../../../shared/constants";
import {
  getProfileDetails,
  useProfileDetails,
} from "../../../Profile/profileSlice";
import {
  companyDetailId,
  detailsOfCompany,
  uploadCompanyImg,
  uploadCompanyVideos,
  uploadPdf,
  useCompanyDetailId,
} from "./companyDetailsSlice";
import { useIntl } from "react-intl";
// import PhoneInput from "react-phone-input-2";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MoonLoader } from "react-spinners";
import { useDropzone } from "react-dropzone";
import {
  AllMedia,
  companyPhotosAndVideos,
} from "../Photos&Videos/photoAndVideoSlice";
import Lightbox from "react-image-lightbox";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";
import { companyDetails } from "../../../../redux/services/eventServices/companyDetailsServices";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import axios from "axios";
import { eventPath } from "../../../../Common/EventPath/eventPath";

const EventCompanyDetails = () => {
  const intl = useIntl();
  const profileDetails = useProfileDetails();
  const stateCompanyDetailId = useCompanyDetailId();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const eventType = params.eventType;
  const eventId = localStorage.getItem("eventId");
  const displayName = localStorage.getItem("displayName");
  const [gstFile, setGstFile] = useState(null);
  const [gstFileError, setGstFileError] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [images, setImages] = useState([]);
  const [getPincode, setGetPincode] = useState("");
  const [renderFillDetails, setRenderFillDetails] = useState(null);
  const [aboutDetails, setAboutDetails] = useState("");
  const [randerNumber, setRenderNumber] = useState(``)
  const [altRenderNumber, setAltRenderNumber] = useState(``)
  const [isValid, setIsValid] = useState(true);
  const [altisValid, altSetIsValid] = useState(true);
  const [country_wise_contact_data, set_country_wise_contact_data] = useState({})
  const [countrycode, setCountryCode] = useState("")

  const initialState = {
    name: "",
    country_code: "",
    mobile: "",
    email: "",
    about: "",
    flat_no: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    mobile: Yup.number()
      .typeError(`${intl.formatMessage({ id: "THE VALUE MUST BE A DIGIT" })}`)
      .integer()
      .positive(
        `${intl.formatMessage({ id: "CONTACT NUMBER MUST BE POSITIVE" })}`
      ),
    email: Yup.string().email(
      `${intl.formatMessage({ id: "INVALID EMAIL FORMAT" })}`
    ),
    about: Yup.string(),
    flat_no: Yup.string(),
    street: Yup.string(),
    area: Yup.string(),
    city: Yup.string().matches(
      /^[a-zA-Z ]*$/,
      `${intl.formatMessage({
        id: "CITY NAME CAN ONLY CONTAIN ENGLISH CHARACTERS",
      })}`
    ),
    state: Yup.string().matches(
      /^[a-zA-Z ]*$/,
      `${intl.formatMessage({
        id: "STATE NAME CAN ONLY CONTAIN ENGLISH CHARACTERS",
      })}`
    ),
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
      ),
  });
  const getLength = () => {
    return images.length;
  };
  const countstep = useSelector((state) => state?.stepProgressCount?.count);

  const goTo = (index) => {
    dispatch(clickNum(index));
    navigate(`/dashboard/event/${eventType}${eventPath[eventType][index]}`);
  };

  const clickBackHander = () => {
    goTo(countstep - 1);
  };

  // const onDrop = useCallback(async (acceptedFiles) => {
  //   const size = 5;
  //   const imgListCount = imageList.length
  //   let selected = acceptedFiles;
  //   if (imgListCount >= 5) {
  //     toast.info(`${intl.formatMessage({ id: "IMAGE UPLOAD LIMIT EXCEED." })}`);
  //     return;
  //   }
  //   console.log(imgListCount, "hhgfdhfjshdjkf");
  //     if (acceptedFiles.length+imgListCount > 4) {
  //       let array = Object.assign([], acceptedFiles);
  //       array.splice(0, acceptedFiles.length + images.length - 5);
  //       console.log(array, "+++++++");
  //       for (let index = 0; index < array.length; index++) {
  //         if (array[index] && imageType.includes(array[index].type)) {
  //           if (array[index].size < 5000000) {
  //             try {
  //               const formDataImage = new FormData();
  //               formDataImage.append("file", array[index]);
  //               const response = await dispatch(
  //                 uploadCompanyImg(formDataImage)
  //               ).unwrap();
  //               if (response.data.IsSuccess) {
  //                 toast.success(response.data.Message);
  //                 setErrorMessage(null);
  //                 setError(false);
  //                 let temp = Object.assign([],images)
  //                 temp.push({url:response.data.Data.url})
  //                 setImages(temp)
  //                 setImageList((current) => [
  //                   ...current,
  //                   { url: response.data.Data.url },
  //                 ]);
  //                 console.log(imageList,"hhhhhhhhhhhhhhhhhhhhhhhh");
  //               } else {
  //                 toast.error(response.data.Message);
  //               }
  //             } catch (error) {
  //               toast
  //                 .error
  //                 // `${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`
  //                 ();
  //               console.log(error);
  //             }
  //           } else {
  //             setErrorMessage(
  //               `${intl.formatMessage({ id: "FILE SIZE IS GREATER THEN" })}` +
  //                 size +
  //                 " MB"
  //             );
  //             setError(true);
  //           }
  //         } else {
  //           setErrorMessage(
  //             `${intl.formatMessage({ id: "PLEASE SELECT VALID IMAGE FILE." })}`
  //           );
  //           setError(true);
  //         }
  //       }
  //     } else {
  //       const newArr = [];

  //       for (let index = 0; index < selected.length; index++) {
  //         if (selected[index] && imageType.includes(selected[index].type)) {
  //           if (selected[index].size < 5000000) {
  //             try {
  //               const formDataImage = new FormData();
  //               formDataImage.append("file", selected[index]);
  //               const response = await dispatch(
  //                 uploadCompanyImg(formDataImage)
  //               ).unwrap();
  //               if (response.data.IsSuccess) {
  //                 toast.success(response.data.Message);
  //                 setErrorMessage(null);
  //                 setError(false);
  //                 let temp = Object.assign([],images)
  //                 temp.push({url:response.data.Data.url})
  //                 setImages(temp)
  //                  setImageList((current) => [
  //                   ...current,
  //                   { url: response.data.Data.url },
  //                 ]);
  //                 console.log(imageList,"hhhhhhhhhhhhhhhhhhhhhhhh");
  //               } else {
  //                 toast.error(response.data.Message);
  //               }
  //             } catch (error) {
  //               toast
  //                 .error
  //                 // `${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`
  //                 ();
  //               console.log(error);
  //             }
  //           } else {
  //             setErrorMessage(
  //               `${intl.formatMessage({ id: "FILE SIZE IS GREATER THEN" })}` +
  //                 size +
  //                 " MB"
  //             );
  //             setError(true);
  //           }
  //         } else {
  //           setErrorMessage(
  //             `${intl.formatMessage({ id: "PLEASE SELECT VALID IMAGE FILE." })}`
  //           );
  //           setError(true);
  //         }
  //       }
  //     }
  // }, []);

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles) {
        try {
          if (acceptedFiles.length + imageList?.length > 5) {
            let array = Object.assign([], acceptedFiles);
            array.splice(0, acceptedFiles.length + imageList.length - 5);
            const newArr = [];
            for (let index = 0; index < array.length; index++) {
              // if (array[index].size < 5000000) {
              let formDataImage = new FormData();
              formDataImage.append("file", array[index]);

              var response = new Promise((resolve, reject) => {
                const result = dispatch(
                  uploadCompanyImg(formDataImage)
                ).unwrap();
                if (result) resolve(result);
              });
              newArr.push(response);
              // } else {
              //   toast.error("Please Upload a file less than 5MB!");
              // }
            }
            let array1 = Object.assign([], newArr);

            Promise.all(array1).then((res) => {
              res.forEach((imageRes) => {
                if (imageRes) {
                  setImageList((current) => {
                    if (!Array.isArray(current)) {
                      current = [];
                    }
                    return [...current, { url: imageRes.data.Data.url }];
                  });
                }
              });

              const payload = {
                eventid: eventId,
                photos: [...imageList],
              };
              // const result = dispatch(AllMedia(payload))
              // .unwrap()
              const result = dispatch(companyDetails(payload))
                .unwrap()
                .then((r) => {
                  if (r.data.IsSuccess) {
                    // handleClose(false);
                  } else {
                    console.log("else");
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          } else {
            const newArr = [];
            for (let index = 0; index < acceptedFiles.length; index++) {
              // if (acceptedFiles[index].size < 5000000) {
              let formDataImage = new FormData();

              formDataImage.append("file", acceptedFiles[index]);

              var response = new Promise((resolve, reject) => {
                const result = dispatch(
                  uploadCompanyImg(formDataImage)
                ).unwrap();
                if (result) resolve(result);
              });
              newArr.push(response);
              // } else {
              //   toast.error("Please Upload a file less than 5MB!");
              // }
            }
            Promise.all(newArr).then((res) => {
              res.forEach((imageRes) => {
                if (imageRes) {
                  setImageList((current) => {
                    if (!Array.isArray(current)) {
                      current = [];
                    }
                    return [...current, { url: imageRes.data.Data.url }];
                  });
                }
              });

              const payload = {
                eventid: eventId,
                photos: [...imageList],
              };
              const result = dispatch(companyDetails(payload))
                .unwrap()
                .unwrap()
                .then((r) => {
                  if (r.data.IsSuccess) {
                    // handleClose(false);
                  } else {
                    console.log("else");
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            });
          }
        } catch (error) {
          // toast.success(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
          console.log(error);
        }
      } else {
        toast.success(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
      }
    },
    [imageList]
  );
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        imageType,
        // "image/jpeg": [],
        // "image/png": [],
        // "image/jpg": [],
        // "image/gif": [],
        // "image/webp": [],
      },
      onDrop,
      // maxSize: 3140021,
    });


  const clickNextHandler = async (values) => {

    if (values?.about?.length < 1001) {
      try {
        const payload = {
          ...values,
          gst: gstFile,
          photos: imageList,
          videos: videoList,
          eventid: eventId,
          country_wise_contact: country_wise_contact_data
        };
        // payload["mobile"] = values?.mobile.slice(values.country_code?.length)
        const response = await dispatch(detailsOfCompany(payload)).unwrap();
        if (response?.data?.IsSuccess) {
          toast.success(response?.data?.Message);
          // dispatch(increment());
          goTo(countstep + 1);
        } else {
          toast.success(response?.data?.Message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error(`About text limit exceeded!`);
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

  const pdfUpload = async (e) => {
    const acceptedFiles = e.target.files[0];
    const size = 1;
    if (e.target.files.length > 0) {
      // if (e.target.files[0] && documentType.includes(e.target.files[0].type)) {
      if (e.target.files[0] && documentType.includes(e.target.files[0].type)) {
        // if (e.target.files[0].size > size * 1024 * 1024) {
        //   setGstFileError("File size should be less than " + size + " MB.");
        // } else {
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        try {
          const response = await dispatch(uploadPdf(formData)).unwrap();
          if (response?.data?.IsSuccess) {
            setGstFile(response?.data?.Data?.url);
            setGstFileError(null);
            toast.success(response?.data?.Message);
          } else {
            toast.error(response?.data?.Message);
          }
        } catch (error) {
          // toast.error(
          //   `${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`
          // );
          console.log(error);
        }
        // }
      } else {
        setGstFileError(
          `${intl.formatMessage({ id: "PLEASE SELECT PDF FILE." })}`
        );
      }
    } else {
      setGstFileError(null);
    }
  };

  const videoChangeHandler = async (event) => {
    let selected = event.target.files[0];
    const size = 1024;
    if (videoList?.length >= 2) {
      toast.info(`${intl.formatMessage({ id: "VIDEO UPLOAD LIMIT EXCEED." })}`);
      return;
    }
    try {
      if (selected && videoType.includes(selected.type)) {
        // if (selected.size < size * 1024 * 1024) {
        try {
          const formDataVideo = new FormData();
          formDataVideo.append("file", selected);
          const response = await dispatch(
            uploadCompanyVideos(formDataVideo)
          ).unwrap();
          if (response.data.IsSuccess) {
            toast.success(response.data.Message);
            setErrorMessage(null);
            setError2(false);
            setVideoList((current) => {
              if (!Array.isArray(current)) {
                current = [];
              }
              return [...current, { url: response.data.Data.url }];
            });
          } else {
            toast.error(response.data.Message);
          }
        } catch (error) {
          toast
            .error
            // `${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`
            ();
          console.log(error);
        }
        // } else {
        //   setErrorMessage(
        //     `${intl.formatMessage({ id: "FILE SIZE IS GREATER THEN" })}` +
        //     size +
        //     " Mb."
        //   );
        //   setError2(true);
        // }
      } else {
        setErrorMessage(
          `${intl.formatMessage({ id: "PLEASE SELECT VALID VIDEO FILE." })}`
        );
        setError2(true);
      }
    } catch (error) {
      console.log(error);
      setError2(true);
    }
  };

  const removeImageClick = async (index) => {
    const tmpList = Object.assign([], imageList);
    tmpList.splice(index, 1);
    setImageList([...tmpList]);
  };

  const removeVideoClick = async (index) => {
    const tmpList = [...videoList];
    if (tmpList === videoList) console.log(true);
    setVideoList([]);
    tmpList.splice(index, 1);
    setVideoList([...tmpList]);
  };

  // const [phValue, setPhValues] = useState(null);
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

  const getCompanyProfile = async () => {
    const businessProfile = await dispatch(getProfileDetails()).unwrap();
    if (businessProfile?.data?.IsSuccess) {
      const companyBusiness = businessProfile?.data?.Data?.businessProfile;
      const response = await dispatch(companyDetailId(eventId)).unwrap();
      if (response?.data?.IsSuccess) {
        const fetchCompanyDetails = response?.data?.Data?.companydetail;
        const savedValues = {
          name: fetchCompanyDetails?.name
            ? fetchCompanyDetails?.name
            : companyBusiness?.name,
          country_code: fetchCompanyDetails?.country_code
            ? fetchCompanyDetails?.country_code
            : companyBusiness?.country_code,
          mobile: fetchCompanyDetails?.mobile
            ? fetchCompanyDetails?.mobile
            : companyBusiness?.mobile,

          email: fetchCompanyDetails?.email
            ? fetchCompanyDetails?.email
            : companyBusiness?.email,
          about: fetchCompanyDetails?.about || "",
          flat_no: fetchCompanyDetails?.flat_no,
          street: fetchCompanyDetails?.street,
          area: fetchCompanyDetails?.area,
          city: fetchCompanyDetails?.city,
          state: fetchCompanyDetails?.state,
          pincode: fetchCompanyDetails?.pincode,
        };
        const mobile = fetchCompanyDetails?.mobile
          ? fetchCompanyDetails?.mobile
          : companyBusiness?.mobile;
        const country_code = fetchCompanyDetails?.country_wise_contact?.dialCode
          ? fetchCompanyDetails?.country_wise_contact?.dialCode
          : companyBusiness?.country_wise_contact?.dialCode || `91`;
        // setPhValues(`${country_code}${mobile}`);
        setCountryCode(country_code)
        setRenderNumber(`${country_code}${mobile}`)
        setRenderFillDetails(savedValues);
        setAboutDetails(fetchCompanyDetails?.about || "");
        setImageList(fetchCompanyDetails?.photos);
        setImages(fetchCompanyDetails?.photos);
        setVideoList(fetchCompanyDetails?.videos);
        set_country_wise_contact_data(companyBusiness?.country_wise_contact ? companyBusiness?.country_wise_contact : fetchCompanyDetails?.fetchCompanyDetails)
        setGstFile(fetchCompanyDetails?.gst);
      }
    }
  };
  useEffect(() => {
    getCompanyProfile();
  }, []);
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
      {/* <div className="flex justify-between items-center">
          <div className="flex items-center">
            <i
              className="icon-back-arrow mr-4 text-2xl"
              onClick={clickBackHander}
            ></i>
            <h1>{displayName}</h1>
          </div>
        </div> */}
      {/* <!-- step-progress-bar  --> */}
      {/* <StepProgressBar eventType={eventType} /> */}
      {/* <!-- main-content  --> */}
      {loading ? (
        <EventoPackageLoader />
      ) : (
        <>
          <Formik
            initialValues={renderFillDetails || initialState}
            // validationSchema={ValidationSchema}
            onSubmit={clickNextHandler}
            enableReinitialize
          >
            {({ formik, handleChange, handleBlur, setFieldValue, values }) => {
              setGetPincode(values?.pincode);
              values.city = stateCity.city;
              values.state = stateCity.state;
              values.country_code = countrycode;
              // values.mobile = regNumber;
              // values.country_code = countryC;
              return (
                <>
                  <Form className="space-y-5 -mx-2 max-[768px]:space-y-1">
                    <div className="w-full flex items-end flex-wrap">
                      <div className="w-full md:w-1/2 px-2 inputHolder">
                        <span className="input-titel">
                          {intl.formatMessage({ id: "COMPANY NAME" })}
                        </span>
                        <Field type="text" className="input" name="name" />
                        <small className="text-red-500 text-xs">
                          {/* {formik?.errors.name} */}
                          <ErrorMessage name="name" />
                        </small>
                        <br />
                      </div>
                      <div className="w-full md:w-1/2 px-2 inputHolder">
                        <span className="input-titel">
                          {intl.formatMessage({ id: "COMPANY GST" })} (
                          {intl.formatMessage({ id: "OPTIONAL" })})
                        </span>
                        <label htmlFor="upload" className="upload upload-popup">
                          <input
                            type="file"
                            name="images"
                            id="upload"
                            className="appearance-none hidden"
                            onChange={pdfUpload}
                          />
                          <span className="input-titel mt-1">
                            <i className="icon-pdf mr-2"></i>
                            {intl.formatMessage({ id: "UPLOAD PDF" })}
                          </span>
                        </label>
                        {gstFileError && (
                          <span className="text-red-500 text-xs">
                            {gstFileError}
                          </span>
                        )}
                        {!gstFileError && gstFile !== null && (
                          <span className="text-[#20C0E8] text-xs">
                            <a target="blank" href={s3Url + "/" + gstFile}>
                              {intl.formatMessage({ id: "PREVIEW LINK" })}
                            </a>
                          </span>
                        )}
                        <br />
                      </div>
                    </div>
                    <div className="w-full flex items-end flex-wrap">
                      <div className="w-full md:w-1/2 px-2 inputHolder">
                        <div className="input-label-holder">
                          <label className="input-titel">
                            {intl.formatMessage({ id: "COMPANY CONTACT NO" })}
                          </label>
                        </div>
                        {/* {country_code} */}
                        <div className="relative flex flex-col h-12 rounded-lg bg-white justify-center pl-5">
                          <PhoneInput
                            value={randerNumber}
                            country={"in"}
                            onChange={(value, data, event, formattedValue) => { phInputHandleChange(value, data, event, formattedValue); setFieldValue("mobile", value.slice(data.dialCode.length)) }}
                          />
                          <small className="absolute top-full left-0 text-red-500 text-xs">
                            {!isValid && "please Enter valid Mobile & Require"}
                          </small>
                          {/* <PhoneInput
                          country={"us"}
                          value={formik?.values.mobile}
                          className="input"
                          defaultErrorMessage="kjnihiou"
                          onChange={(e, i, o) => {
                            console.log(e, i, "gsfds");
                            formik?.setValues({ ...formik?.values, mobile: e, country_code: i.dialCode })
                            // formik?.setFieldValue("mobile", e);
                            // formik?.setFieldValue("country_code", i.dialCode);
                          }}
                        /> */}
                          {/* <input
                            type="text"
                            className="input max-w-[80px] w-full mr-3"
                            name="country_code"
                            value={formik?.values?.country_code}
                            onChange={(e) =>
                              formik?.setFieldValue(
                                "country_code",
                                e.target.value
                              )
                            }
                          />
                          <input
                            type="text"
                            className="input"
                            name="mobile"
                            value={formik?.values?.mobile}
                            onChange={(e) =>
                              formik?.setFieldValue("mobile", e.target.value)
                            }
                          /> */}
                        </div>
                        <small className="text-red-500 text-xs">
                          {/* {formik?.errors?.mobile} */}
                        </small>
                        <br />
                      </div>
                      <div className="w-full md:w-1/2 px-2 inputHolder">
                        <span className="input-titel">
                          {intl.formatMessage({ id: "COMPANY EMAIL" })}
                        </span>
                        <Field type="text" className="input" name="email" />
                        <small className="text-red-500 text-xs">
                          {/* {formik?.errors?.email} */}
                        </small>
                        <br />
                      </div>
                      <div className="w-full space-y-2.5">
                        <h3>
                          {intl.formatMessage({ id: "About Company" })} &nbsp;
                          <span
                            className="text-xs"
                            style={{
                              color: "#20C0E8",
                            }}
                          >
                            {values?.about?.length || 0} /
                          </span>
                          <span className="text-xs">1000</span>
                        </h3>
                        <CKEditor
                          editor={ClassicEditor}
                          onChange={(event, editor) => {
                            setFieldValue("about", editor.getData());
                          }}
                          data={aboutDetails}
                        />
                      </div>
                      {/* <div className="w-full px-2 mt-3">
                      <span className="input-titel">
                        {intl.formatMessage({ id: "COMPANY ABOUT" })}
                        <span className="text-xs" style={{
                          color: '#20C0E8'
                        }}> {(formik?.values.about).length} / </span><span className='text-xs'>2000</span>
                      </span> */}
                      {/* <CKEditor
                        editor={ClassicEditor}
                        onChange={(event, editor) => {
                          formik?.setFieldValue("about", editor.getData())
                        }}
                        data={formik?.values.about}
                      /> */}
                      {/* <textarea
                  name="about"
                  id=""
                  cols="30"
                  rows="3"
                  className="outline-none flex items-center w-full bg-white rounded-md p-3"
                  value={formik?.values?.about}
                  onChange={(e) => formik?.setFieldValue("about", e.target.value)}
                ></textarea> */}
                      {/* <small className="text-red-500 text-xs">
                        {formik?.errors?.about}
                      </small>
                      <br />
                    </div> */}
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
                          <Field type="text" className="input" name="flat_no" />
                          <small className="text-red-500 text-xs">
                            {/* {formik?.errors?.area} */}
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
                          </small>
                          <br />
                        </div>
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <span className="input-titel">
                            {intl.formatMessage({ id: "AREA NAME." })}
                          </span>
                          <Field type="text" className="input" name="area" />
                          <small className="text-red-500 text-xs">
                            {formik?.errors?.area}
                          </small>
                          <br />
                        </div>
                      </div>
                      <div className="w-full flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">
                            {intl.formatMessage({ id: "PINCODE" })}
                          </label>
                          <Field
                            type="number"
                            className="input"
                            name="pincode"
                          // value={formik?.values?.pincode}
                          // onChange={(e) => {
                          //   formik?.setFieldValue("pincode", e.target.value);
                          //   setTimeout(() => {
                          //     setGetPincode(e.target.value);
                          //   }, 1000);
                          // }}
                          />
                          <small className="text-red-500 text-xs">
                            {/* {formik?.errors?.pincode} */}
                          </small>
                          <br />
                        </div>
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">
                            {intl.formatMessage({ id: "CITY" })}
                          </label>
                          <Field
                            type="text"
                            className="input"
                            name="city"
                            // value={formik?.values?.city}
                            disabled
                          // onChange={(e) =>
                          //   formik?.setFieldValue("city", e.target.value)
                          // }
                          />
                          <small className="text-red-500 text-xs">
                            {/* {formik?.errors?.city} */}
                          </small>
                          <br />
                        </div>
                        <div className="w-full md:w-1/3 px-2 inputHolder">
                          <label className="input-titel">
                            {intl.formatMessage({ id: "STATE" })}
                          </label>
                          <Field
                            type="text"
                            className="input"
                            name="state"
                            // value={formik?.values?.state}
                            disabled
                          // onChange={(e) =>
                          //   formik?.setFieldValue("state", e.target.value)
                          // }
                          />
                          <small className="text-red-500 text-xs">
                            {formik?.errors?.state}
                          </small>
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="upload-holder px-2">
                      <span className="input-titel ">
                        {intl.formatMessage({
                          id: "Company Photos Max 5 Images (UP TO 5MB/Images  & Resolution up to 1080PX x 1080PX) ",
                        })}
                      </span>
                      <div
                        htmlFor="uploadimages"
                        {...getRootProps({ className: "upload upload-popup" })}
                      >
                        <input
                          {...getInputProps()}
                          type="file"
                          name="images"
                          id="uploadimages"
                          className="appearance-none hidden"
                        />
                        <span className="input-titel mt-1">
                          <i className="icon-image mr-2"></i>
                          {intl.formatMessage({ id: "UPLOAD IMAGES" })}
                        </span>
                      </div>
                      {error && (
                        <small className="text-red-500 text-xs">
                          {errorMessage}{" "}
                        </small>
                      )}
                      <br />
                    </div>
                    <div className="media-upload-holder ml-2">
                      {imageList?.length !== 0 && (
                        <span className="input-titel">
                          {intl.formatMessage({ id: "UPLOADED PHOTO" })}
                        </span>
                      )}
                      <div className="flex flex-wrap herobox">
                        {imageList?.map((img, index) => (
                          <div key={index} className="mt-2 mr-2">
                            <div className="upload-box">
                              <div className="rounded relative overflow-hidden flex justify-center items-center h-full">
                                <img
                                  src={s3Url + "/" + img.url}
                                  alt={"upload-" + index}
                                  onClick={() => {
                                    setPhotoIndex(index);
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={() => removeImageClick(index)}
                                >
                                  {intl.formatMessage({ id: "REMOVE" })}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                        {(photoIndex === 0 || photoIndex) &&
                          imageList[photoIndex] && (
                            <Lightbox
                              mainSrc={s3Url + "/" + imageList[photoIndex]?.url}
                              nextSrc={
                                s3Url +
                                "/" +
                                imageList[(photoIndex + 1) % imageList.length]
                                  ?.url
                              }
                              prevSrc={
                                s3Url +
                                "/" +
                                imageList[
                                  (photoIndex + imageList.length - 1) %
                                  imageList.length
                                ]?.url
                              }
                              onCloseRequest={() => {
                                setPhotoIndex(null);
                              }}
                              onMovePrevRequest={() => {
                                setPhotoIndex(
                                  (photoIndex + imageList.length - 1) %
                                  imageList.length
                                );
                              }}
                              onMoveNextRequest={() => {
                                setPhotoIndex(
                                  (photoIndex + 1) % imageList.length
                                );
                              }}
                            />
                          )}
                      </div>
                    </div>
                    <div className="upload-holder px-2">
                      <span className="input-titel ">
                        {intl.formatMessage({
                          id: "Company Vido Max 2 Video (Up To 256MB/VIDEO)",
                        })}
                      </span>
                      <label htmlFor="upload2" className="upload">
                        <input
                          type="file"
                          name="images"
                          id="upload2"
                          className="appearance-none hidden"
                          onChange={videoChangeHandler}
                        />
                        <div className="mt-1 flex items-baseline justify-center">
                          <i className="icon-video-play text-base mr-2"></i>{" "}
                          <span className="input-titel pt-1">
                            {intl.formatMessage({ id: "UPLOAD VIDEOS" })}
                          </span>
                        </div>
                      </label>
                      {error2 && (
                        <small className="text-red-500 text-xs">
                          {errorMessage}
                        </small>
                      )}
                      <br />
                    </div>
                    <div className="media-upload-holder ml-2">
                      {videoList?.length !== 0 && (
                        <span className="input-titel">
                          {intl.formatMessage({ id: "UPLOADED VIDEOS" })}
                        </span>
                      )}
                      <div className="flex space-x-2.5">
                        {videoList?.map((vid, index) => (
                          <div className="upload-box" key={index}>
                            <div className="rounded relative overflow-hidden h-full">
                              <video className="h-full">
                                <source
                                  src={s3Url + "/" + vid.url}
                                  alt={"upload-" + index}
                                />
                              </video>
                              <button
                                type="button"
                                onClick={() => removeVideoClick(index)}
                              >
                                {intl.formatMessage({ id: "REMOVE" })}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <span className="input-titel capitalize">
                      {intl.formatMessage({
                        id: "DISCLAIMER - THESE IMAGES AND VIDEOS WILL FIRST BE VERIFIED BY THE ADMIN AND THEN GIVEN THE AUTHORITY.",
                      })}
                    </span>
                    <div className="flex justify-between items-center my-7">
                      <button
                        type="button"
                        className="flex items-center  text-[#9ba6a8]"
                        onClick={clickBackHander}
                      >
                        <i className="icon-back-arrow mr-3 "></i>
                        <h3>{intl.formatMessage({ id: "BACK" })}</h3>
                      </button>
                      <button
                        type="submit"
                        className={`flex items-center active   text-[#20C0E8]`}
                        disabled={!isValid}
                      // onClick={clickNextHandler}
                      >
                        <h3 className="">
                          {intl.formatMessage({ id: "NEXT" })}
                        </h3>
                        <i className="icon-next-arrow ml-3"></i>
                      </button>
                    </div>
                  </Form>
                </>
              );
            }}
          </Formik>
        </>
      )}
    </>
  );
};

export default EventCompanyDetails;
