import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import {
  AllMedia,
  setImagesArray,
  uploadPhoto,
  useImagesArray,
  useStatusImages,
} from "../../../Pages/Dashboard/Event/Photos&Videos/photoAndVideoSlice";
import { imageType } from "../../../shared/constants";
import { useIntl } from "react-intl";
import { useDropzone } from "react-dropzone";
import Loader from "../../../assest/images/loader.gif";
import { Lightbox } from "react-modal-image";
import { s3Url } from "../../../config";
import { companyDetails } from "../../../redux/services/eventServices/companyDetailsServices";
import { MoonLoader } from "react-spinners";

const EventPopUpUploadPhoto = ({ handleClose, eventId }) => {

  const { loading } = useStatusImages()
  const intl = useIntl();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  //const [currentImageList, setCurrentImageList] = useState(imageList);
  const [details, setDetails] = useState("");
  const [error, setError] = useState(false);
  const [imageList, setImageList] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(true);
  const adasd = useImagesArray()



  useEffect(() => {
    setImageList(adasd)
  }, [])
  // const [loading, setLoading] = useState(false)

  // const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
  //   useDropzone({
  //     accept: {
  //       imageType,
  //       // "image/jpeg": [],
  //       // "image/png": [],
  //       // "image/jpg": [],
  //       // "image/gif": [],
  //       // "image/webp": [],
  //     },
  //     maxFiles: 15,
  //     // maxSize: 3140021,
  //   });

  const token = localStorage.getItem("Token");
  const header = {
    Authorization: `Token ${token}`,
  };
  const imageHeader = {
    Authorization: `Token ${token}`,
    "Content-Type": "multipart/form-data",
  };

  // const uploadImage = async () => {

  //   if (acceptedFiles) {
  //     try {
  //       if (acceptedFiles.length + imageList.length > 14) {
  //         let array = Object.assign([], acceptedFiles);
  //         array.splice(0, acceptedFiles.length + imageList.length - 15);
  //         const newArr = [];
  //         for (let index = 0; index < array.length; index++) {
  //           // if (array[index].size < 8000000) {
  //           let formDataImage = new FormData();
  //           formDataImage.append("file", array[index]);

  //           var response = new Promise((resolve, reject) => {
  //             const result = dispatch(uploadPhoto(formDataImage)).unwrap();
  //             if (result) resolve(result);
  //           });
  //           newArr.push(response);
  //           // } else {
  //           //   toast.error("Please Upload a file less than 8MB!");
  //           // }
  //         }
  //         let array1 = Object.assign([], newArr);

  //         Promise.all(array1).then((res) => {
  //           res.forEach((imageRes) => {
  //             if (imageRes) {
  //               imageList.push({
  //                 url: imageRes.data.Data.url,
  //                 description: details,
  //               });
  //             }
  //           });

  //           const payload = {
  //             eventid: eventId,
  //             photos: [...imageList],
  //           };
  //           const result = dispatch(AllMedia(payload))
  //             .unwrap()
  //             .then((r) => {
  //               if (r.data.IsSuccess) {
  //                 handleClose(false);
  //               } else {
  //               }
  //             })
  //             .catch((error) => {
  //             });
  //         });
  //       } else {
  //         const newArr = [];
  //         for (let index = 0; index < acceptedFiles.length; index++) {

  //           // if (acceptedFiles[index].size < 3145728) {
  //           let formDataImage = new FormData();

  //           formDataImage.append("file", acceptedFiles[index]);

  //           var response = new Promise((resolve, reject) => {
  //             const result = dispatch(uploadPhoto(formDataImage)).unwrap();
  //             if (result) resolve(result);
  //           });
  //           newArr.push(response);
  //           // } else {
  //           //   toast.error("Please Upload a file less than 3MB!");
  //           // }
  //         }
  //         Promise.all(newArr).then((res) => {
  //           res.forEach((imageRes) => {
  //             if (imageRes) {
  //               imageList.push({
  //                 url: imageRes.data.Data.url,
  //                 description: details,
  //               });
  //             }
  //           });

  //           const payload = {
  //             eventid: eventId,
  //             photos: [...imageList],
  //           };
  //           const result = dispatch(AllMedia(payload))
  //             .unwrap()
  //             .then((r) => {
  //               if (r.data.IsSuccess) {
  //                 handleClose(false);
  //               } else {
  //               }
  //             })
  //             .catch((error) => {
  //             });
  //         });
  //       }
  //     } catch (error) {
  //       // toast.success(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
  //     }
  //   } else {
  //     toast.success(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
  //   }
  // };
  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles) {
        try {

          if (acceptedFiles.length + imageList?.length > 15) {
            let array = Object.assign([], acceptedFiles);
            array.splice(0, acceptedFiles.length + imageList.length - 15);
            const newArr = [];
            for (let index = 0; index < array.length; index++) {

              let formDataImage = new FormData();
              formDataImage.append("file", array[index]);
              var response = new Promise((resolve, reject) => {
                const result = dispatch(
                  uploadPhoto(formDataImage)
                ).unwrap();
                if (result) resolve(result);
              });
              newArr.push(response);


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
              // const result = dispatch(companyDetails(payload))
              //   .unwrap()
              //   .then((r) => {
              //     if (r.data.IsSuccess) {
              //       // handleClose(false);
              //     } else {
              //     }
              //   })
              //   .catch((error) => {
              //     console.log(error);
              //   });
            });
          } else {
            const newArr = [];
            for (let index = 0; index < acceptedFiles.length; index++) {
              // if (acceptedFiles[index].size < 5000000) {
              let formDataImage = new FormData();

              formDataImage.append("file", acceptedFiles[index]);

              var response = new Promise((resolve, reject) => {
                const result = dispatch(
                  uploadPhoto(formDataImage)
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
              // const result = dispatch(companyDetails(payload))
              //   .unwrap()
              //   .unwrap()
              //   .then((r) => {
              //     if (r.data.IsSuccess) {
              //       // handleClose(false);
              //     } else {
              //       console.log("else");
              //     }
              //   })
              //   .catch((error) => {
              //     console.log(error);
              //   });
            });
          }
        } catch (error) {
          // toast.success(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
          console.log(error);
        } finally {
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
  const removeImageClick = async (index) => {
    const tmpList = Object.assign([], imageList);
    tmpList.splice(index, 1);
    setImageList([...tmpList]);
  };

  const submitHandler = async () => {

    if (details.length < 501) {
      if (!error) {
        // uploadImage();
        setIsSubmit(false);
        const updatedArray = imageList.map((items) => {
          return { ...items, description: details }
        })
        dispatch(setImagesArray(updatedArray))
        handleClose(false)
      } else {
      }
    } else {
      toast.error(
        `${intl.formatMessage({ id: "ABOUT TEXT LIMIT EXCEEDED!" })}`,
      );
    }
  };

  return (
    //  <!-- Upload Photo  -->
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12 max-[640px]:px-10">
            <div className="flex justify-between items-center">
              <h1 className="h1">
                {intl.formatMessage({ id: "UPLOAD PHOTO" })}
              </h1>
              <div>
                <button onClick={() => handleClose(false)} className="text-xl">
                  <i className="icon-close"></i>
                </button>
              </div>
            </div>
            <form className="py-7 space-y-5">
              {/* <div className="upload-holder">
                <h6 className="text-sm font-bold text-quicksilver">
                  {intl.formatMessage({ id: "SELECT PHOTO" })}
                  <span className="text-10">
                    {intl.formatMessage({ id: "15 IMAGES" })} (
                    {intl.formatMessage({ id: "UP TO 3MB" })} /{" "}
                    {intl.formatMessage({ id: "IMAGE" })})
                  </span>
                </h6>
                <div {...getRootProps({ className: "upload upload-popup" })}>
                  <input
                    {...getInputProps()}
                    name="images"
                    id="upload"
                    className="appearance-none hidden"
                  />
                  <span className="input-titel mt-1">
                    <i className="icon-image mr-2"></i>
                    {intl.formatMessage({ id: "CHOOSE IMAGES" })}
                  </span>
                </div>
                {fileRejections.length > 0 ? (
                  <span
                    className="mt-1"
                    style={{ color: "red", fontSize: "14px" }}
                  >
                    {errorMessage}{" "}
                  </span>
                ) : (
                  <span className="mt-1" style={{ fontSize: "14px" }}>
                    {image.name}
                  </span>
                )}
              </div> */}
              <div className="upload-holder px-2 -mb-10">

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
                  {loading ? <span className="flex items-center space-x-4 justify-center">   <MoonLoader color="#20C0E8" size={30} /><p>Uploading Image...</p> </span> : (
                    imageList?.map((img, index) => (
                      <div key={index} className="mt-2 mr-2">
                        <div className="upload-box">
                          <div className="rounded relative overflow-hidden flex justify-center items-center h-full">
                            <img
                              src={s3Url + "/" + img.url}
                              alt={"upload-" + index}
                              onClick={() => {
                                // setPhotoIndex(index);
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
                    ))
                  )}
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

              <div className="w-full">
                <span className="input-titel">
                  {intl.formatMessage({ id: "DETAILS" })}
                </span>
                <textarea
                  name="details"
                  id=""
                  cols="30"
                  rows="5"
                  className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>

            </form>
            {/* <Link to="/" className="btn-primary w-full uppercase">Submit</Link> */}
            {/* {loading ? ( */}
            <div
              className="btn-primary w-full uppercase cursor-pointer flex items-center justify-center"
              onClick={isSubmit && submitHandler}
            >
              {intl.formatMessage({ id: "SUBMIT" })}
            </div>
            {/* ) : (
              <div className="btn-primary hover:bg-spiroDiscoBall w-full uppercase cursor-pointer flex items-center justify-center">
                <svg
                  className="flex items-center justify-center w-6 h-6"
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#fff"
                >
                  <g fill="none" fillRule="evenodd">
                    <g transform="translate(1 1)" strokeWidth="2">
                      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                      <path d="M36 18c0-9.94-8.06-18-18-18">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          from="0 18 18"
                          to="360 18 18"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>
                </svg>
              </div>
            )} */}
          </div>
        </div>
      </div>
      {/* <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      /> */}
    </div>
  );
};

export default EventPopUpUploadPhoto;
