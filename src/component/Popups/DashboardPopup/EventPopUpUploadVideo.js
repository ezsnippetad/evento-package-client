import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { videoType } from "../../../shared/constants";
import {
  AllMedia,
  setVideoArray,
  uploadVideo,
  useStatusImages,
  useVideoArray,
} from "../../../Pages/Dashboard/Event/Photos&Videos/photoAndVideoSlice";
import { MoonLoader } from "react-spinners";
import { useIntl } from "react-intl";
import { s3Url } from "../../../config";

const EventPopUpUploadVideo = ({ handleClose, eventId }) => {
  const intl = useIntl();
  const { loading } = useStatusImages()
  const dispatch = useDispatch();
  const [video, setVideo] = useState("");
  //const [currentVideoList, setCurrentVideoList] = useState(videoList);
  const [details, setDetails] = useState("");
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [error2, setError2] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const token = localStorage.getItem("Token");
  const asdf = useVideoArray()

  useEffect(() => {
    setVideoList(asdf)
  }, [])

  const header = {
    Authorization: `Token ${token}`,
  };
  const videoHeader = {
    Authorization: `Token ${token}`,
    "Content-Type": "multipart/form-data",
  };

  // const videoChangeHandler = (event) => {
  //   let selected = event.target.files[0];
  //   const size = 512;
  //   try {
  //     if (selected && videoType.includes(selected.type)) {
  //       // if (selected.size < size * 1024 * 1024) {
  //       setVideo(selected);
  //       setErrorMessage(null);
  //       setError(false);
  //       // } else {
  //       //   setErrorMessage(
  //       //     `${intl.formatMessage({ id: "FILE SIZE IS GREATER THEN" })}` +
  //       //     size +
  //       //     " Mb.",
  //       //   );
  //       //   setError(true);
  //       //   toast.error("FILE SIZE IS GREATER THEN 512 MB");
  //       // }
  //     } else {
  //       setErrorMessage(
  //         `${intl.formatMessage({ id: "PLEASE SELECT VALID VIDEO FILE." })}`,
  //       );
  //       setError(true);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setError(true);
  //   }
  // };
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
            uploadVideo(formDataVideo)
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

  // const videoUpload = async () => {
  //   try {
  //     let formDataVideo = new FormData();
  //     formDataVideo.append("file", video);
  //     const response = await dispatch(uploadVideo(formDataVideo)).unwrap();
  //     if (response.data.IsSuccess) {
  //       let payload = {
  //         eventid: eventId,
  //         videos: [
  //           ...videoList,
  //           {
  //             url: response.data.Data.url,
  //             description: details,
  //           },
  //         ],
  //       };
  //       const res = await dispatch(AllMedia(payload)).unwrap();
  //       toast.success(res.data.Message);
  //       setLoading(false);
  //       handleClose(false);
  //     } else {
  //       toast.error(response.data.Message);
  //       setLoading(false);
  //       handleClose(false);
  //     }
  //   } catch (error) {
  //     // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
  //     console.log(error);
  //     setLoading(false);
  //     handleClose(false);
  //   }
  // };
  const removeVideoClick = async (index) => {
    const tmpList = [...videoList];
    if (tmpList === videoList) console.log(true);
    setVideoList([]);
    tmpList.splice(index, 1);
    setVideoList([...tmpList]);
  };

  const submitHandler = async () => {
    if (details.length < 501) {
      if (!error) {
        // videoUpload();
        const finalVideoList = videoList.map((items) => {
          return { ...items, description: details, }
        })
        dispatch(setVideoArray(finalVideoList))
        handleClose(false)
        // setLoading(false);
      } else {
        console.log("error occured");
      }
    } else {
      toast.error(
        `${intl.formatMessage({ id: "ABOUT TEXT LIMIT EXCEEDED!" })}`,
      );
    }
  };

  return (
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12 max-[640px]:px-10">
            <div className="flex justify-between items-center">
              <h1 className="h1">
                {intl.formatMessage({ id: "UPLOAD VIDEO" })}
              </h1>
              <div>
                <button onClick={() => handleClose(false)} className="text-xl">
                  <i className="icon-close"></i>
                </button>
              </div>
            </div>
            <form className="py-7 space-y-5">
              <div className="upload-holder">
                <h6 className="text-sm font-bold text-quicksilver">
                  {intl.formatMessage({ id: "SELECT VIDEO" })}{" "}
                  <span className="text-10">
                    {intl.formatMessage({ id: "2" })}{" "}
                    {intl.formatMessage({ id: "VIDEOS" })} (
                    {intl.formatMessage({ id: "UP TO 512MB" })} /{" "}
                    {intl.formatMessage({ id: "VIDEO" })})
                  </span>
                </h6>
                <label htmlfor="upload" className="upload upload-popup">
                  <input
                    type="file"
                    name="video"
                    id="upload"
                    className="appearance-none hidden"
                    onChange={videoChangeHandler}
                  />
                  <span className="input-titel mt-1">
                    <i className="icon-video-play mr-2"></i>
                    {intl.formatMessage({ id: "UPLOAD VIDEO" })}
                  </span>
                </label>
                {loading ? <span className="flex items-center mt-7 space-x-4 justify-start">   <MoonLoader color="#20C0E8" size={30} /><p>Uploading video...</p> </span> : (

                  videoList?.map((vid, index) => (
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
                  ))
                )}
                {/* {error ? (
                  <span
                    className="mt-1"
                    style={{ color: "red", fontSize: "14px" }}
                  >
                    {errorMessage}{" "}
                  </span>
                ) : (
                  <span className="mt-1" style={{ fontSize: "14px" }}>
                    {video.name}
                  </span>
                )} */}
              </div>
              <div className="w-full">
                <span className="input-titel">
                  {intl.formatMessage({ id: "DETAILS" })}
                </span>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  className="outline-none flex items-center w-full bg-white p-2 px-3.5 rounded-md"
                  onChange={(e) => setDetails(e.target.value)}
                ></textarea>
              </div>
            </form>
            {/* <MoonLoader
              cssOverride={{ margin: "100px auto" }}
              color={"#20c0E8"}
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> */}

            <div
              className="btn-primary w-full uppercase cursor-pointer"
              onClick={submitHandler}
            >
              {intl.formatMessage({ id: "SUBMIT" })}
            </div>

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

export default EventPopUpUploadVideo;
