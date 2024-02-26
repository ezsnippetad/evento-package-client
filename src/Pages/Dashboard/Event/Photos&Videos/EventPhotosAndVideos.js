import React, { useEffect, useState } from "react";
import Modal from "../../../../Common/Modals/Modal";
import { useNavigate, useParams } from "react-router-dom";
// import Advertisement from '../Advertisement';
import StepProgressBar from "../../StepProgressBar";
import { s3Url } from "../../../../config";
import {
  clickNum,
  decrement,
  increment,
} from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import EventPopUpUploadPhoto from "../../../../component/Popups/DashboardPopup/EventPopUpUploadPhoto";
import EventPopUpUploadVideo from "../../../../component/Popups/DashboardPopup/EventPopUpUploadVideo";
import { AllMedia, mediaId, setImagesArray, setVideoArray, useImagesArray, useVideoArray } from "./photoAndVideoSlice";
import { useIntl } from "react-intl";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { MoonLoader } from "react-spinners";
import EventPhotoPreview from "../../../../component/Modals/DashboardModals/EventPhotoPreview";
import ToolTips from "../../../ToolTips";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";

const EventPhotosAndVideos = () => {
  const intl = useIntl();
  const displayName = localStorage.getItem("displayName");
  const [previewPhoto, setPreviewPhoto] = useState(false);
  const [isUploadPhotoPopUpOpen, setIsUploadPhotoPopUpOpen] = useState(false);
  const [isUploadVideoPopUpOpen, setIsUploadVideoPopUpOpen] = useState(false);
  // const [imageList, setImageList] = useState([]);
  const imageList = useImagesArray();
  const videoList = useVideoArray()


  // const [videoList, setVideoList] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const eventId = localStorage.getItem("eventId");  
  const eventType = params.eventType;
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false)

  const getMedia = async () => {
    try {
      setImageLoading(true)
      const response = await dispatch(mediaId(eventId)).unwrap();
      // if (response?.data?.Data?.photos) setImageList(response?.data?.Data?.photos);
      // if (response?.data?.Data?.videos) setVideoList(response?.data?.Data?.videos);
      if (response?.data?.Data.photos && response?.data?.Data?.videos) {
        dispatch(setImagesArray(response?.data?.Data?.photos))
        dispatch(setVideoArray(response?.data?.Data?.videos))
      } else {
        dispatch(setVideoArray([]))
        dispatch(setVideoArray([]))

      }

      setLoading(false);
    } catch (error) {
    } finally { setImageLoading(false) }
  };

  useEffect(() => {
    getMedia();
    return () => {
      dispatch(setImagesArray([]))
      dispatch(setVideoArray([]))
    }
  }, []);

  const removeImageClick = async (img) => {
    const deletedPendingArray = imageList?.filter((items) => {
      return items?.url !== img?.url
    })
    dispatch(setImagesArray(deletedPendingArray))
    // const tmpList = imageList;
    // if (index === 0) tmpList.shift();
    // else if (tmpList.length > 1) tmpList.splice(index, 1);
    // let payload = {
    //   eventid: eventId,
    //   photos: tmpList,
    // };
    // try {
    //   const res = await dispatch(AllMedia(payload)).unwrap();
    //   if (res.data.IsSuccess) {
    //     toast.success(
    //       `${intl.formatMessage({ id: "IMAGE REMOVED SUCCESSFULLY." })}`,
    //     );
    //     getMedia();
    //   }
    // } catch (error) {
    //   // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
    // }
  };

  const removeVideoClick = async (vid) => {
    const deletedPendingVideoArray = videoList?.filter((items) => {
      return items?.url !== vid?.url
    })

    dispatch(setVideoArray(deletedPendingVideoArray))

    // const tmpList = videoList;
    // if (index === 0) tmpList.shift();
    // else if (tmpList.length > 1) tmpList.splice(index, 1);
    // // without below line UI not Updating and display removed video insted of remaining one.
    // // setVideoList([]);
    // let payload = {
    //   eventid: eventId,
    //   videos: tmpList,
    // };
    // try {
    //   const res = await dispatch(AllMedia(payload)).unwrap();
    //   if (res?.data?.IsSuccess) {
    //     toast.success(
    //       `${intl.formatMessage({ id: "VIDEO REMOVED SUCCESSFULLY." })}`,
    //     );
    //     getMedia();
    //   }
    // } catch (error) {
    //   // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
    // }
  };

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

  const clickBackHandler = () => {
    goTo(count - 1);
  };
  const clickNextHandler = async () => {
    const payload = {
      eventid: eventId,
      photos: imageList,
      videos: videoList
    }
    const response = await dispatch(AllMedia(payload))

    toast.success("Data saved successfully.");
    goTo(count + 1);
    // dispatch(increment());
  };

  const openUploadPhoto = () => {
    setIsUploadPhotoPopUpOpen(true);
    if (imageList?.length > 14) {
      toast.error(`${intl.formatMessage({ id: "ONLY 15 IMAGES ARE ALLOW" })}`);
    }
  };

  return (
    //  <!-- Content In -->
    <>
      {loading ? (
        <EventoPackageLoader loading={loading} />
      ) : (
        <>
          <div className="flex flex-col justify-between h-[80%]">
            <div>
              <div className="upload-holder">
                <h3 className="flex items-center">
                  {intl.formatMessage({ id: "PHOTO" })}
                  <span className="input-titel ml-2">
                    {intl.formatMessage({ id: "15 IMAGES" })} (
                    {intl.formatMessage({ id: "UP TO 3MB" })} /
                    {intl.formatMessage({ id: "IMAGE" })} &
                    {intl.formatMessage({ id: " Resolution up to 1080PX x 1080PX" })})
                  </span>
                  &nbsp;
                  <svg
                    className="w-5 h-5 tooltip"
                    data-pr-tooltip={intl.formatMessage({
                      id: "UPLOAD IMAGES OF YOUR SKILLS OR TEAM",
                    })}
                    data-pr-position="top"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <ToolTips />
                </h3>
                <label
                  onClick={() => openUploadPhoto()}
                  htmlFor="upload"
                  className="upload"
                >
                  <input
                    name="images"
                    id="upload"
                    className="appearance-none hidden"
                  />
                  <span className="input-titel mt-1">
                    <i className="icon-image mr-2"></i>
                    {intl.formatMessage({ id: "UPLOAD IMAGES" })}
                  </span>
                </label>
                {imageList?.length !== 0 && (
                  <span className="input-titel mt-1">
                    {imageList?.length}{" "}
                    {intl.formatMessage({ id: "IMAGES UPLOADED" })}
                  </span>
                )}
              </div>
              <div className="media-upload-holder">
                {imageList?.length !== 0 && (
                  <div className="flex justify-between">
                    <span className="input-titel">
                      {intl.formatMessage({ id: "UPLOADED PHOTO" })}
                    </span>
                    <span
                      className="text-spiroDiscoBall text-sm font-bold cursor-pointer"
                      onClick={() => {
                        // setPhotoIndex(0)
                        setPreviewPhoto(true);
                      }}
                    >
                      {intl.formatMessage({ id: "VIEW ALL" })}
                    </span>
                  </div>
                )}
                <div className="flex flex-wrap herobox">
                  {
                    imageLoading ? <div className="w-full my-4 flex items-center justify-center space-x-2"><MoonLoader size={30} color="#20c0e8" /> <p>Loding...</p> </div> : (
                      imageList?.map((img, index) => (
                        <div key={index} className="mt-2 mr-2">
                          <div className="upload-box">
                            <div className="rounded relative overflow-hidden flex justify-center items-center h-full">
                              <img
                                onClick={() => {
                                  setPhotoIndex(index);
                                }}
                                src={s3Url + "/" + img.url}
                                alt={"upload-" + index}
                              />
                              <button onClick={() => removeImageClick(img)}>
                                {intl.formatMessage({ id: "REMOVE" })}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    )
                  }
                  {(photoIndex === 0 || photoIndex) && imageList[photoIndex] && (
                    <Lightbox
                      mainSrc={s3Url + "/" + imageList[photoIndex]?.url}
                      nextSrc={
                        s3Url +
                        "/" +
                        imageList[(photoIndex + 1) % imageList.length]?.url
                      }
                      prevSrc={
                        s3Url +
                        "/" +
                        imageList[
                          (photoIndex + imageList.length - 1) % imageList.length
                        ]?.url
                      }
                      onCloseRequest={() => {
                        setPhotoIndex(null);
                      }}
                      onMovePrevRequest={() => {
                        setPhotoIndex(
                          (photoIndex + imageList.length - 1) % imageList.length,
                        );
                      }}
                      onMoveNextRequest={() => {
                        setPhotoIndex((photoIndex + 1) % imageList.length);
                      }}
                    />
                  )}
                </div>
              </div>
              <div className="upload-holder">
                <h3 className="flex items-center">
                  {intl.formatMessage({ id: "VIDEOS" })}
                  <span className="input-titel ml-2">
                    {intl.formatMessage({ id: "2" })}{" "}
                    {intl.formatMessage({ id: "VIDEOS" })} (
                    {intl.formatMessage({ id: "UP TO 256MB" })} /{" "}
                    {intl.formatMessage({ id: "VIDEO" })})
                  </span>
                  &nbsp;
                  <svg
                    className="w-5 h-5 tooltip"
                    data-pr-tooltip={intl.formatMessage({
                      id: "UPLOAD VIDEOS OF YOUR SKILLS OR TEAM",
                    })}
                    data-pr-position="top"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <ToolTips />
                </h3>
                <label
                  onClick={() => setIsUploadVideoPopUpOpen(true)}
                  htmlFor="upload2"
                  className="upload"
                >
                  <input
                    name="images"
                    id="upload2"
                    className="appearance-none hidden"
                  />
                  <div className="mt-1 flex items-baseline justify-center">
                    <i className="icon-video-play text-base mr-2"></i>
                    <span className="input-titel pt-1">
                      {intl.formatMessage({ id: "UPLOAD VIDEOS" })}
                    </span>
                  </div>
                </label>
                {videoList?.length !== 0 && (
                  <span className="input-titel mt-1">
                    {videoList?.length}{" "}
                    {intl.formatMessage({ id: "VIDEOS UPLOADED" })}
                  </span>
                )}
              </div>
              <div className="media-upload-holder">
                {videoList?.length !== 0 && (
                  <span className="input-titel">
                    {intl.formatMessage({ id: "UPLOADED VIDEOS" })}
                  </span>
                )}
                <div className="flex space-x-2.5">
                  {videoList?.map((vid, index) => (
                    <div className="upload-box cursor-pointer" key={index}>
                      <div className="rounded relative overflow-hidden h-full">
                        <video className="h-full">
                          <source
                            src={s3Url + "/" + vid.url}
                            alt={"upload-" + index}
                          />
                        </video>
                        <button onClick={() => removeVideoClick(vid)}>
                          {intl.formatMessage({ id: "REMOVE" })}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full inline-block">
                <span className="float-left input-titel text-sm lg:leading-10">
                  {intl.formatMessage({
                    id: "DISCLAIMER - THESE IMAGES AND VIDEOS WILL FIRST BE VERIFIED BY THE ADMIN AND THEN GIVEN THE AUTHORITY.",
                  })}
                </span>
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
                <button
                  type="button"
                  className={`flex items-center active   text-[#20C0E8]`}
                  onClick={clickNextHandler}
                >
                  <h3 className="">{intl.formatMessage({ id: "NEXT" })}</h3>
                  <i className="icon-next-arrow ml-3"></i>
                </button>
              </div>
            </div>

          </div>
          <div>
            {imageList?.length < 15 && (
              <Modal isOpen={isUploadPhotoPopUpOpen}>
                <EventPopUpUploadPhoto
                  handleClose={setIsUploadPhotoPopUpOpen}
                  eventId={eventId}
                  imageList={imageList}
                />
              </Modal>
            )}
            {videoList?.length < 2 && (
              <Modal isOpen={isUploadVideoPopUpOpen}>
                <EventPopUpUploadVideo
                  handleClose={setIsUploadVideoPopUpOpen}
                  eventId={eventId}
                  videoList={videoList}
                />
              </Modal>
            )}
            <Modal isOpen={previewPhoto}>
              <EventPhotoPreview
                handleClose={setPreviewPhoto}
                data={imageList}
              />
            </Modal>
          </div>
        </>
      )}

    </>
  );
};

export default EventPhotosAndVideos;
