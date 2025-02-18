import React, { useState } from "react";
import { useIntl } from "react-intl";

const CompanyPopUpUploadVideo = ({ handleClose, setVideoList }) => {
  const intl = useIntl();
  const [video, setVideo] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const videoChangeHandler = (event) => {
    const types = ["video/mp4"];
    let selected = event.target.files[0];

    try {
      if (selected && types.includes(selected.type)) {
        // if (selected.size < 512 * 1024 * 1024) {
          setVideoPreview(URL.createObjectURL(selected));
          setVideo(selected);
          setErrorMessage(null);
          setError(false);
        // } else {
        //   console.log(
        //     "file size is greater than 512MB. File size is ",
        //     selected.size,
        //   );
        //   setErrorMessage(
        //     `${intl.formatMessage({ id: "FILE SIZE IS GREATER THAN 512MB." })}`,
        //   );
        //   setError(true);
        // }
      } else {
        console.log(
          "please select video file with mp4 extension.",
          selected.type,
        );
        setErrorMessage(
          `${intl.formatMessage({
            id: "PLEASE SELECT VIDEO FILE WITH MP4 EXTENSION.",
          })}`,
        );
        setError(true);
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const submitHandler = async () => {
    if (!error) {
      setVideoList((current) => [...current, video]);
      handleClose(false);
    } else {
      console.log("error occured");
    }
  };

  return (
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12">
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
                {error ? (
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
                )}
              </div>
            </form>
            <div
              className="btn-primary w-full uppercase cursor-pointer"
              onClick={submitHandler}
            >
              {intl.formatMessage({ id: "SUBMIT" })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPopUpUploadVideo;
