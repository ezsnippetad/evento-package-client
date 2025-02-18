import React, { useEffect, useRef, useState } from "react";
import Modal from "../../Common/Modals/Modal";
import EyeIcon from "../../assest/svg/eye-icon.svg";
import celebrationSvg from "../../assest/svg/celebration.svg";
import bigDishImage from "../../assest/images/big-dish.png";
import GoogleMap from "../other/GoogleMap";
import parse from "html-react-parser";
import { s3Url } from "../../config";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import moment from "moment/moment";
import VideoPreview from "../Modals/DashboardModals/VideoPreview";
// import ImagePreview from "../Modals/DashboardModals/ImagePreview";
import ImageCompanyPreview from "../Modals/DashboardModals/ImageCompanyPreview";
import VideoCompanyPreview from "../Modals/DashboardModals/VideoCompanyPreview";
import { useDispatch } from "react-redux";
// import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
// import LightGallery"./styles.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgHash from "lightgallery/plugins/hash";
import lgRotate from "lightgallery/plugins/rotate";
import lgShare from "lightgallery/plugins/share";
import { useCallback } from "react";
import { getOneEventDetails } from "../../Pages/Dashboard/Event/Calendar/calenderSlice";
import { useIntl } from "react-intl";
import { MoonLoader } from "react-spinners";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";
// import ZoomLightBox from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import EventoPackageLoader from "../../Common/Loader/EventoPackageLoader";
import SwiperPhotos from "../../Common/SwiperPhotos/SwiperPhotos";
import DatePicker from "../DatePicker";
// import DatePicker from "../DatePicker";

const DashboardEventViewOverview = ({
  data,
  capacity,
  socials,
  company,
  service,
}) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [viewAll, setViewAll] = useState(false);
  const [previewVideo, setPreviewVideo] = useState(false);
  const eventId = localStorage.getItem("eventId");
  const [previewCompanyVideo, setPreviewCompanyVideo] = useState(false);
  const [previewCompanyPhoto, setPreviewcompanyPhoto] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [comPhotoIndex, setComPhotoIndex] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [companyImagePreview, setCompanyImagePreview] = useState(false);
  const [imagePreview, setImagePreview] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState(false);
  const [loading, setLoading] = useState(true);
  const [companyImages, setCompanyImages] = useState([]);

  const gradientStyle = (type) => {
    if (type === "discount_on_total_bill")
      return " from-[#13e1b094] to-[#13E1B0] ";
    if (type === "discount_on_equipment_or_item")
      return " from-[#20c0e878] to-[#20C0E8] ";
    if (type === "advance_and_discount_confirmation")
      return " from-[#faba1585] to-[#FABA15] ";
  };

  const Calendar = async () => {
    try {
      const response = await dispatch(getOneEventDetails(eventId)).unwrap();
      setLoading(false);
      const attendeeArr = response.data.Data.attendee;
      const calendarEvents = [];
      attendeeArr.forEach((attendee) => {
        calendarEvents.push({
          title: attendee.name,
          start: new Date(
            moment.unix(attendee.start_timestamp / 1000).toString(),
          ),
          end: new Date(moment.unix(attendee.end_timestamp / 1000).toString()),
          color: "#20C0E8",
        });
      });
      setCalendarEvents(calendarEvents);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPhotos(data?.photos);
    setCompanyImages(data?.companydetail?.photos);
    Calendar();
  }, []);

  const VideosEvent = data?.videos;
  const onInit = () => { };
  const getItems = useCallback(() => {
    return VideosEvent.map((e) => {
      const videoSrc = s3Url + "/" + e?.url;
      const videoUrl = {
        source: [
          {
            src: videoSrc,
            type: "video/mp4",
          },
        ],
        tracks: [
          {
            src: videoSrc,
            kind: "captions",
            srclang: "en",
            label: "English",
            default: true,
          },
        ],
        attributes: {
          preload: true,
          playsinline: true,
          controls: true,
          animateThumb: false,
          zoomFromOrigin: true,
          allowMediaOverlap: true,
          toggleThumb: true,
        },
      };
      return (
        <div
          data-lg-size={encodeURI.size}
          data-video={JSON.stringify(videoUrl)}
          className="gallery-preview relative mb-[15px] cursor-pointer"
        >
          <div className="relative group cursor-pointer w-[150px] h-[150px] rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-lg"
              src={s3Url + "/" + e?.url}
              alt={e?.description}
            />
            <img
              src={EyeIcon}
              // alt="Eye icon"
              className="block absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-hover:scale-125 anim"
            />
            <span className="box absolute inset-0 block w-full h-full group-hover:bg-[#000000] group-hover:opacity-50 anim overflow-hidden"></span>
          </div>
        </div>
      );
    });
  }, [VideosEvent]);
  // lightgallery Company Video
  const VideosCompanyEvent = data?.companydetail?.videos;
  const companyGetItems = useCallback(() => {
    return VideosCompanyEvent?.map((e) => {
      const videoComSrc = s3Url + "/" + e?.url;
      const videoComUrl = {
        source: [
          {
            src: videoComSrc,
            type: "video/mp4",
          },
        ],
        tracks: [
          {
            src: videoComSrc,
            kind: "captions",
            srclang: "en",
            label: "English",
            default: true,
          },
        ],
        attributes: {
          preload: true,
          playsinline: true,
          controls: true,
          animateThumb: false,
          zoomFromOrigin: true,
          allowMediaOverlap: true,
          toggleThumb: true,
        },
      };
      return (
        <div
          data-lg-size={encodeURI.size}
          data-video={JSON.stringify(videoComUrl)}
          className="gallery-preview relative mb-[15px] cursor-pointer"
        >
          <div className="relative group cursor-pointer w-[150px] h-[150px] rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover rounded-lg"
              src={s3Url + "/" + e?.url}
              alt={e?.description}
            />
            <img
              src={EyeIcon}
              // alt="Eye icon"
              className="block absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-hover:scale-125 anim"
            />
            <span className="box absolute inset-0 block w-full h-full group-hover:bg-[#000000] group-hover:opacity-50 anim"></span>
          </div>
        </div>
      );
    });
  }, [VideosEvent]);

  const area_name = data?.capacity?.area_name + ", ";
  const city = data?.capacity?.city + ", ";
  const state = data?.capacity?.state + ", ";
  const pincode = data?.capacity?.pincode;
  const pFlateNo = data?.personaldetail?.flat_no + ", ";
  const pStreet = data?.personaldetail?.street + ", ";
  const pArea = data?.personaldetail?.area + ", ";
  const pCity = data?.personaldetail?.city + ", ";
  const pState = data?.personaldetail?.state + ", ";
  const pPincode = data?.personaldetail?.pincode;

  // const state = data?.personaldetail?.state + "-";
  // const pincode = data?.personaldetail?.pincode;
  // const regex = /(<([^>]+)>)/ig;

  const handleViewAllPhotos = useCallback(() => {
    setPhotoIndex(0);
    setViewAll(true);
  }, []);

  return (
    <>
      <img src="./" alt="" />
      {loading ? (
        <EventoPackageLoader loading={loading} />
      ) : (
        <>
          <div className="pt-7 lg:pt-10">
            {/* <!--overview-tab-contents --> */}
            <div className="relative tab-main active" id="overview">
              <div className="flex max-[640px]:flex-col">
                {/* <!-- left-bar --> */}
                <div className="w-full lg:w-8/12 lg:pr-5 space-y-7">
                  <div className="p-7 bg-white rounded-md space-y-1 max-[820px]:mr-3">
                    <h3>{data?.display_name}</h3>
                    <p className="text-quicksilver text-l font-normal text-justify">
                      {data?.aboutplace
                        ? parse(
                          data?.aboutplace?.details.replace(/<\/?p>/g, ""),
                        )
                        : null}
                    </p>
                  </div>
                  {/* <!-- Photo-holder --> */}
                  {/* <!-- media title  --> */}

                  {data?.photos?.length > 0 && (
                    <div className="media-upload-holder">
                      {/* <!-- media titel  --> */}
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg">
                          {intl.formatMessage({ id: "PHOTOS" })}
                        </h3>
                        <span
                          className="text-spiroDiscoBall text-sm font-bold cursor-pointer"
                          onClick={handleViewAllPhotos}
                        >
                          {intl.formatMessage({ id: "VIEW ALL" })}
                        </span>
                      </div>
                    </div>
                  )}
                  {data?.photos?.length > 0 && (
                    <>
                      <section className="overflow-hidden text-neutral-700">
                        <div className="mx-auto py-2">
                          <div className="imagessliders flex space-x-3 overflow-x-auto pb-2">
                            {data?.photos?.map((e, i) => (
                              <div
                                className="flex w-[150px] h-[150px] space-x-5 flex-wrap cursor-pointer"
                                key={encodeURI.id}
                                data-lg-size={encodeURI.size}
                                data-src={s3Url + "/" + e?.url}
                                onClick={() => {
                                  setPhotoIndex(i);
                                }}
                              >
                                <div
                                  className="relative group w-[150px] h-[150px] flex rounded-lg justify-center mx-1  overflow-hidden"
                                  onClick={() => {
                                    setImagePreview(true);
                                  }}
                                >
                                  <img
                                    className="block h-full w-full rounded-lg object-cover"
                                    src={`${s3Url}/${e?.url}`}
                                    alt={e.description}
                                  />
                                  <img
                                    src={EyeIcon}
                                    // alt="Eye icon"
                                    className="block absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-hover:scale-125 anim"
                                  />
                                  <span
                                    className="box absolute inset-0 block w-full h-full group-hover:bg-[#000000] group-hover:opacity-50 anim"
                                    onClick={() => {
                                      setPhotoIndex(i);
                                      setPreviewPhoto(true);
                                    }}
                                  ></span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>
                    </>
                  )}
                  {imagePreview && (
                    <Lightbox
                      mainSrc={`${s3Url}/${photos[photoIndex]?.url}`}
                      onCloseRequest={() => setImagePreview(false)}
                    />
                  )}
                  {/* <!-- videos-holder --> */}
                  {/* <!-- media title  --> */}

                  <Modal
                    isOpen={viewAll}
                    className="transition-all duration-300"
                  >
                    <SwiperPhotos photos={photos} handleClose={setViewAll} />
                  </Modal>
                  {data?.videos?.length > 0 && (
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg">
                        {intl.formatMessage({ id: "VIDEOS" })}
                      </h3>
                      <a
                        href="#"
                        className="text-spiroDiscoBall text-sm font-bold"
                        onClick={() => setPreviewVideo(true)}
                      >
                        {intl.formatMessage({ id: "VIEW ALL" })}
                      </a>
                    </div>
                  )}
                  {data?.videos?.length > 0 && (
                    <div className="media-upload-holder">
                      {/* <!-- media-holder --> */}
                      <div className="videoGallery">
                        <LightGallery
                          onInit={onInit}
                          speed={500}
                          plugins={[
                            lgVideo,
                            lgFullscreen,
                            lgHash,
                            lgRotate,
                            lgZoom,
                            lgShare,
                          ]}
                        >
                          {getItems()}
                        </LightGallery>
                      </div>
                    </div>
                  )}
                  {/* <!-- Service --> */}
                  {service && service?.length > 0 && (
                    <div className="space-y-1.5">
                      <h3 className="text-lg">
                        {intl.formatMessage({ id: "SERVICE" })}
                      </h3>

                      {service.map((e, i) => (
                        <div className="flex justify-between bg-white rounderd px-7 py-4 max-[820px]:px-4 max-[820px]:mr-3">
                          <div className="">
                            <div className="w-28 h-28 border-2 border-brightGray rounded-md">
                              <img
                                key={i}
                                src={
                                  e?.photos[0]?.url
                                    ? s3Url + "/" + e?.photos[0]?.url
                                    : bigDishImage
                                }
                                alt="cutting-board"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="w-full pl-5 max-[820px]:pr-2 max-[820px]:pl-2 max-[640px]:pl-4">
                            <div className="flex justify-between max-[820px]:flex-col max-[768px]:flex-row max-[640px]:flex-col">
                              <h3>{e.name}</h3>
                              {/* <h3>Cutting board</h3> */}
                              <div className="flex items-center space-x-1 max-[820px]:items-start max-[820px]:flex-col max-[820px]:mt-1">
                                <h3>{e.price} INR </h3>
                                {e.price_type === "per_day" ? (
                                  <h3>P/D</h3>
                                ) : e.price_type === "per_person" ? (
                                  <h3>P/P</h3>
                                ) : (
                                  <h3>P/E</h3>
                                )}
                                <h3 className="text-spiroDiscoBall">
                                  {e.quantity} Qty
                                </h3>
                              </div>
                            </div>
                            <p className="text-quicksilver text-sm font-normal leading-6 pt-3">
                              {e?.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* <!-- Equipments --> */}
                  {data?.equipments && data?.equipments?.length > 0 && (
                    <div className="space-y-1.5">
                      <h3 className="text-lg">
                        {intl.formatMessage({ id: "EQUIPMENT" })}
                      </h3>
                      {data?.equipments.map((e, i) => (
                        <div className="flex justify-between bg-white rounderd px-7 py-4">
                          <div className="">
                            <div className="w-28 h-28 border-2 border-brightGray rounded-md">
                              <img
                                key={i}
                                src={
                                  e?.photos[0]?.url
                                    ? s3Url + "/" + e?.photos[0]?.url
                                    : bigDishImage
                                }
                                alt="cutting-board"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="w-full pl-5">
                            <div className="flex justify-between">
                              <h3>{e.name}</h3>
                              {/* <h3>Cutting board</h3> */}
                              <div className="flex items-center space-x-1">
                                <h3>{e.price} INR </h3>
                                {e.price_type === "per_day" ? (
                                  <h3>P/D</h3>
                                ) : e.price_type === "per_person" ? (
                                  <h3>P/P</h3>
                                ) : (
                                  <h3>P/E</h3>
                                )}
                                <h3 className="text-spiroDiscoBall">
                                  {e.quantity} Qty
                                </h3>
                              </div>
                            </div>
                            <p className="text-quicksilver text-sm font-normal leading-6 pt-3">
                              {e?.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {data?.items && data?.items?.length > 0 && (
                    <div className="space-y-1.5">
                      <h3 className="text-lg">
                        {intl.formatMessage({ id: "ITEM" })}
                      </h3>

                      {data?.items.map((e, i) => (
                        <div className="flex justify-between bg-white rounderd px-7 py-4">
                          <div className="">
                            <div className="w-28 h-28 border-2 border-brightGray rounded-md">
                              <img
                                key={i}
                                src={
                                  e?.photos[0]?.url
                                    ? s3Url + "/" + e?.photos[0]?.url
                                    : bigDishImage
                                }
                                alt="cutting-board"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          <div className="w-full pl-5">
                            <div className="flex justify-between">
                              <h3>{e.name}</h3>
                              {/* <h3>Cutting board</h3> */}
                              <div className="flex items-center space-x-1">
                                <h3>{e.price} INR </h3>
                                {e.price_type === "per_day" ? (
                                  <h3>P/D</h3>
                                ) : e.price_type === "per_person" ? (
                                  <h3>P/P</h3>
                                ) : (
                                  <h3>P/E</h3>
                                )}
                                <h3 className="text-spiroDiscoBall">
                                  {e.quantity} Qty
                                </h3>
                              </div>
                            </div>
                            <p className="text-quicksilver text-sm font-normal leading-6 pt-3">
                              {e?.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* <!-- Person & Parking --> */}
                  {data?.aboutplace && (
                    <div className="space-y-1.5">
                      <h3 className="text-lg">
                        {intl.formatMessage({ id: "PERSON & PARKING" })}
                      </h3>
                      <div className="flex items-center -mx-2.5">
                        <div className="w-full lg:w-1/2 px-2.5">
                          <div className="flex items-center justify-between bg-white p-4 rounded-md">
                            <h3 className="text-quicksilver">
                              {intl.formatMessage({ id: "NO OF PERSON" })}
                            </h3>
                            <h2>{data?.aboutplace?.person_capacity}</h2>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-2.5">
                          <div className="flex items-center justify-between bg-white p-4 rounded-md">
                            <h3 className="text-quicksilver">
                              {intl.formatMessage({ id: "PARKING CAPACITY" })}
                            </h3>
                            <h2>{data?.aboutplace?.parking_capacity}</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <!-- ADDRESS --> */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg">
                      {intl.formatMessage({ id: "ADDRESS" })}
                    </h3>
                    <div className="bg-white p-4 rounded-md">
                      <h3>
                        {data.capacity ? (
                          <>
                            {data?.capacity?.city ? city : ""}
                            {data?.capacity?.state ? state : ""}
                            {data?.capacity?.pincode ? pincode : ""}
                          </>
                        ) : (
                          <>
                            {data?.personaldetail?.flat_no ? pFlateNo : ""}
                            {data?.personaldetail?.street ? pStreet : ""}
                            {data?.personaldetail?.area ? pArea : ""}
                            {data?.personaldetail?.city ? pCity : ""}
                            {data?.personaldetail?.state ? pState : ""}
                            {data?.personaldetail?.pincode ? pPincode : ""}
                          </>
                        )}
                      </h3>
                      {/* <h3>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</h3> */}
                    </div>
                  </div>

                  {/* <!-- Company Details --> */}
                  {company ? (
                    <div className="space-y-1.5">
                      <h3 className="text-lg">
                        {intl.formatMessage({ id: "COMPANY DETAILS" })}
                      </h3>
                      <div className="p-7 bg-white rounded-md space-y-1">
                        {company.name === "" ? (
                          "No Company Details Found!!!"
                        ) : (
                          <>
                            <h3>{company?.name}</h3>
                            <p className="text-quicksilver font-extralight  text-lg font-normal text-justify">
                              {company?.about
                                ? parse(company?.about.replace(/<\/?p>/g, ""))
                                : ""}
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* <!-- Photo-holder --> */}
                  <div className="media-upload-holder">
                    {/* <!-- media titel  --> */}
                    {company?.photos?.length > 0 && (
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg">
                          {intl.formatMessage({ id: "PHOTOS" })}
                        </h3>
                        <a
                          href="#"
                          className="text-spiroDiscoBall text-sm font-bold"
                          onClick={() => {
                            setComPhotoIndex(0);
                            setViewAll(true);
                            setPhotos(company?.photos);
                            // setcompanyPhotosPreview(true)
                          }}
                        >
                          {intl.formatMessage({ id: "VIEW ALL" })}
                        </a>
                      </div>
                    )}

                    {company?.photos?.length > 0 && (
                      <>
                        <section className="overflow-hidden text-neutral-700">
                          <div className="mx-auto py-2">
                            <div className="imagessliders flex space-x-3 overflow-x-auto pb-2">
                              {companyImages?.map((e, i) => (
                                <div
                                  className="flex w-[150px] h-[150px] flex-wrap cursor-pointer"
                                  key={encodeURI.id}
                                  data-lg-size={encodeURI.size}
                                  data-src={s3Url + "/" + e?.url}
                                  onClick={() => {
                                    setComPhotoIndex(i);
                                  }}
                                >
                                  <div
                                    className="relative w-[150px] h-[150px] group flex rounded-lg justify-start mx-1 overflow-hidden"
                                    onClick={() => {
                                      setCompanyImagePreview(true);
                                    }}
                                  >
                                    <img
                                      className="block h-full w-full rounded-lg"
                                      src={s3Url + "/" + e?.url}
                                      alt={e.description}
                                    />
                                    <img
                                      src={EyeIcon}
                                      // alt="Eye icon"
                                      className="block absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-hover:scale-125 anim"
                                    />
                                    <span
                                      className="box absolute inset-0 block w-full h-full group-hover:bg-[#000000] group-hover:opacity-50 anim"
                                    //  onClick={() => {
                                    //   setPhotoIndex(i)
                                    //   setPreviewcompanyPhoto(true);
                                    // }}
                                    ></span>
                                  </div>
                                </div>
                              ))}
                              {companyImagePreview && (
                                <Lightbox
                                  mainSrc={`${s3Url}/${companyImages[comPhotoIndex]?.url}`}
                                  onCloseRequest={() =>
                                    setCompanyImagePreview(false)
                                  }
                                />
                              )}
                            </div>
                          </div>
                        </section>
                      </>
                    )}
                  </div>
                  {/* <!-- videos-holder --> */}
                  <div className="media-upload-holder">
                    {/* <!-- media titel  --> */}
                    {company?.videos?.length > 0 && (
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg">
                          {intl.formatMessage({ id: "VIDEOS" })}
                        </h3>
                        <a
                          href="#"
                          className="text-spiroDiscoBall text-sm font-bold"
                          onClick={() => {
                            setPreviewCompanyVideo(true);
                            setViewAll(true);
                          }}
                        >
                          {intl.formatMessage({ id: "VIEW ALL" })}
                        </a>
                      </div>
                    )}

                    {company?.videos?.length > 0 && (
                      <>
                        {/* <!-- media-holder --> */}
                        <div className="media-upload-holder">
                          <div className="videoGallery">
                            <LightGallery
                              onInit={onInit}
                              speed={500}
                              plugins={[
                                lgVideo,
                                lgFullscreen,
                                lgHash,
                                lgRotate,
                                lgZoom,
                                lgShare,
                              ]}
                            >
                              {companyGetItems()}
                            </LightGallery>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {socials?.t_and_c && (
                    <div className="space-y-1.5">
                      <h3 className="text-lg">
                        {intl.formatMessage({ id: "TERMS & CONDITIONS" })}
                      </h3>
                      <div className="p-3.5 xl:p-5 bg-white rounded-md">
                        <div className="flex items-start text-quicksilver ">
                          <p className="pl-3 text-justify break-words overflow-auto font-extralight">
                            {socials?.t_and_c.replace(/(<([^>]+)>)/gi, "")}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* <!-- Social-Media --> */}
                  {socials?.facebook ||
                    socials?.youtube ||
                    socials?.twitter ||
                    socials?.pinterest ||
                    socials?.instagram ||
                    socials?.linkedin !== "" ? (
                    <div className="w-full">
                      <h3>{intl.formatMessage({ id: "SOCIAL MEDIA" })}</h3>
                      <div className="w-full bg-white p-4 rounded-md mt-3">
                        <div className="flex items-center justify-start space-x-4">
                          {socials?.facebook && (
                            <div className="w-full md:w-14 cursor-pointer">
                              <div className="w-14 h-14 flex items-center justify-center bg-slate-200 rounded-full p-3">
                                <a
                                  href={socials?.facebook}
                                  target="_blank"
                                  activeclassname="active"
                                >
                                  <svg
                                    className="mx-auto"
                                    width="12"
                                    height="23"
                                    viewBox="0 0 12 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.625 7.73633H7.5V4.98633C7.5 4.22733 8.116 3.61133 8.875 3.61133H10.25V0.173828H7.5C5.22163 0.173828 3.375 2.02045 3.375 4.29883V7.73633H0.625V11.1738H3.375V22.1738H7.5V11.1738H10.25L11.625 7.73633Z"
                                      fill="#1976D2"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}
                          {socials?.youtube && (
                            <div className="w-full md:w-14 cursor-pointer">
                              <div className="w-14 h-14 flex items-center justify-center bg-slate-200 rounded-full p-3">
                                <a
                                  href={socials?.youtube}
                                  target="_blank"
                                  activeclassname="active"
                                >
                                  <svg
                                    className="mx-auto"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_1_11310)">
                                      <path
                                        d="M22.1717 5.89269C21.9181 4.95023 21.1751 4.20735 20.2328 3.95357C18.5112 3.48242 11.6248 3.48242 11.6248 3.48242C11.6248 3.48242 4.73857 3.48242 3.01697 3.93561C2.09281 4.18922 1.33163 4.9504 1.07802 5.89269C0.625 7.61412 0.625 11.1842 0.625 11.1842C0.625 11.1842 0.625 14.7722 1.07802 16.4757C1.3318 17.418 2.07469 18.1611 3.01714 18.4148C4.7567 18.886 11.625 18.886 11.625 18.886C11.625 18.886 18.5112 18.886 20.2328 18.4328C21.1752 18.1792 21.9181 17.4361 22.1719 16.4938C22.6249 14.7722 22.6249 11.2023 22.6249 11.2023C22.6249 11.2023 22.643 7.61412 22.1717 5.89269Z"
                                        fill="#FF0000"
                                      ></path>
                                      <path
                                        d="M9.43262 14.4831L15.159 11.1849L9.43262 7.88672V14.4831Z"
                                        fill="white"
                                      ></path>
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_1_11310">
                                        <rect
                                          width="22"
                                          height="22"
                                          fill="white"
                                          transform="translate(0.625 0.173828)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}
                          {socials?.twitter && (
                            <div className="w-full md:w-14 cursor-pointer">
                              <div className="w-14 h-14 flex items-center justify-center bg-slate-200 rounded-full p-3">
                                <a
                                  href={socials?.twitter}
                                  target="_blank"
                                  activeclassname="active"
                                >
                                  <svg
                                    className="mx-auto"
                                    width="25"
                                    height="20"
                                    viewBox="0 0 25 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.625 2.73233C23.7325 3.12383 22.7815 3.38333 21.79 3.50933C22.81 2.90033 23.5885 1.94333 23.9545 0.789828C23.0035 1.35683 21.9535 1.75733 20.8345 1.98083C19.9315 1.01933 18.6445 0.423828 17.2405 0.423828C14.5165 0.423828 12.3235 2.63483 12.3235 5.34533C12.3235 5.73533 12.3565 6.11033 12.4375 6.46733C8.347 6.26783 4.7275 4.30733 2.296 1.32083C1.8715 2.05733 1.6225 2.90033 1.6225 3.80783C1.6225 5.51183 2.5 7.02233 3.808 7.89683C3.0175 7.88183 2.242 7.65233 1.585 7.29083C1.585 7.30583 1.585 7.32533 1.585 7.34483C1.585 9.73583 3.2905 11.7218 5.527 12.1793C5.1265 12.2888 4.69 12.3413 4.237 12.3413C3.922 12.3413 3.604 12.3233 3.3055 12.2573C3.943 14.2058 5.752 15.6383 7.903 15.6848C6.229 16.9943 4.1035 17.7833 1.8025 17.7833C1.399 17.7833 1.012 17.7653 0.625 17.7158C2.8045 19.1213 5.3875 19.9238 8.173 19.9238C17.227 19.9238 22.177 12.4238 22.177 5.92283C22.177 5.70533 22.1695 5.49533 22.159 5.28683C23.1355 4.59383 23.956 3.72833 24.625 2.73233Z"
                                      fill="#03A9F4"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}
                          {socials?.pinterest && (
                            <div className="w-full md:w-14 cursor-pointer">
                              <div className="w-14 h-14 flex items-center justify-center bg-slate-200 rounded-full p-3">
                                <a
                                  href={socials?.pinterest}
                                  target="_blank"
                                  activeclassname="active"
                                >
                                  <svg
                                    className="mx-auto"
                                    width="19"
                                    height="23"
                                    viewBox="0 0 19 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.92379 0.173828C3.89414 0.173828 0.6875 4.03775 0.6875 8.25094C0.6875 10.2049 1.7793 12.6415 3.527 13.4143C3.79239 13.5339 3.93677 13.4831 3.9959 13.2369C4.04815 13.0499 4.27779 12.1492 4.38917 11.7243C4.42354 11.5882 4.40567 11.47 4.29566 11.3421C3.71539 10.6711 3.25474 9.44862 3.25474 8.30182C3.25474 5.36331 5.59097 2.51006 9.56627 2.51006C13.0039 2.51006 15.4089 4.74316 15.4089 7.93743C15.4089 11.547 13.499 14.0441 11.017 14.0441C9.64328 14.0441 8.62023 12.966 8.94475 11.6322C9.33664 10.044 10.1053 8.3362 10.1053 7.19077C10.1053 6.1636 9.52502 5.31381 8.33972 5.31381C6.94128 5.31381 5.80686 6.6985 5.80686 8.55758C5.80686 9.73876 6.22487 10.5363 6.22487 10.5363C6.22487 10.5363 4.84156 16.1245 4.58443 17.1682C4.14991 18.9352 4.64355 21.7967 4.68618 22.0428C4.71231 22.1789 4.86494 22.2216 4.95019 22.1102C5.08632 21.9314 6.7584 19.5457 7.22729 17.8214C7.3978 17.193 8.09771 14.645 8.09771 14.645C8.55835 15.4769 9.88804 16.174 11.3044 16.174C15.5175 16.174 18.5619 12.471 18.5619 7.87555C18.5468 3.46985 14.7764 0.173828 9.92379 0.173828Z"
                                      fill="#D32F2F"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}
                          {socials?.instagram && (
                            <div className="w-full md:w-14 cursor-pointer">
                              <div className="w-14 h-14 flex items-center justify-center bg-slate-200 rounded-full p-3">
                                <a
                                  href={socials?.instagram}
                                  target="_blank"
                                  activeclassname="active"
                                >
                                  <svg
                                    className="mx-auto"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipath="url(#clip0_1_11326)">
                                      <path
                                        d="M1.87476 1.53539C0.303093 3.16789 0.624759 4.90206 0.624759 10.1704C0.624759 14.5454 -0.138574 18.9312 3.85643 19.9637C5.10393 20.2846 16.1573 20.2846 17.4031 19.9621C19.0664 19.5329 20.4198 18.1837 20.6048 15.8312C20.6306 15.5029 20.6306 4.84372 20.6039 4.50872C20.4073 2.00289 18.8648 0.558725 16.8323 0.266225C16.3664 0.198725 16.2731 0.178725 13.8831 0.174559C5.40559 0.178725 3.54726 -0.198775 1.87476 1.53539Z"
                                        fill="url(#paint0_linear_1_11326)"
                                      ></path>
                                      <path
                                        d="M10.6233 2.79033C7.59751 2.79033 4.72417 2.52116 3.62667 5.33783C3.17334 6.50116 3.23917 8.012 3.23917 10.1753C3.23917 12.0737 3.17834 13.8578 3.62667 15.012C4.72167 17.8303 7.61834 17.5603 10.6217 17.5603C13.5192 17.5603 16.5067 17.862 17.6175 15.012C18.0717 13.837 18.005 12.3487 18.005 10.1753C18.005 7.29033 18.1642 5.42783 16.765 4.0295C15.3483 2.61283 13.4325 2.79033 10.62 2.79033H10.6233ZM9.96167 4.12116C16.2733 4.11116 17.0767 3.4095 16.6333 13.157C16.4758 16.6045 13.8508 16.2262 10.6242 16.2262C4.74084 16.2262 4.57167 16.0578 4.57167 10.172C4.57167 4.21783 5.03834 4.1245 9.96167 4.1195V4.12116ZM14.565 5.347C14.0758 5.347 13.6792 5.74366 13.6792 6.23283C13.6792 6.722 14.0758 7.11866 14.565 7.11866C15.0542 7.11866 15.4508 6.722 15.4508 6.23283C15.4508 5.74366 15.0542 5.347 14.565 5.347ZM10.6233 6.38283C8.52917 6.38283 6.83167 8.08116 6.83167 10.1753C6.83167 12.2695 8.52917 13.967 10.6233 13.967C12.7175 13.967 14.4142 12.2695 14.4142 10.1753C14.4142 8.08116 12.7175 6.38283 10.6233 6.38283ZM10.6233 7.71366C13.8775 7.71366 13.8817 12.637 10.6233 12.637C7.37001 12.637 7.36501 7.71366 10.6233 7.71366Z"
                                        fill="white"
                                      ></path>
                                    </g>
                                    <defs>
                                      <linearGradient
                                        id="paint0_linear_1_11326"
                                        x1="1.91311"
                                        y1="18.8971"
                                        x2="20.501"
                                        y2="2.80954"
                                        gradientUnits="userSpaceOnUse"
                                      >
                                        <stop stopColor="#FFDD55"></stop>
                                        <stop
                                          offset="0.5"
                                          stopColor="#FF543E"
                                        ></stop>
                                        <stop
                                          offset="1"
                                          stopColor="#C837AB"
                                        ></stop>
                                      </linearGradient>
                                      <clipPath id="clip0_1_11326">
                                        <rect
                                          width="20"
                                          height="20"
                                          fill="white"
                                          transform="translate(0.625 0.173828)"
                                        ></rect>
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}
                          {socials?.linkedin && (
                            <div className="w-full md:w-14 cursor-pointer">
                              <div className="w-14 h-14 flex items-center justify-center bg-slate-200 rounded-full p-3">
                                <a
                                  href={socials?.linkedin}
                                  target="_blank"
                                  activeclassname="active"
                                >
                                  <svg
                                    className="mx-auto"
                                    width="15"
                                    height="14"
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.14795 1.55625C3.14775 1.96878 2.98172 2.36434 2.68639 2.6559C2.39107 2.94746 1.99063 3.11115 1.57319 3.11094C1.15575 3.11073 0.755481 2.94666 0.460451 2.6548C0.16542 2.36295 -0.000208525 1.96723 1.97032e-07 1.55469C0.000208919 1.14216 0.166238 0.746598 0.461564 0.455036C0.756889 0.163475 1.15732 -0.000206073 1.57476 1.94715e-07C1.99221 0.000206463 2.39247 0.164284 2.6875 0.456136C2.98253 0.747989 3.14816 1.14371 3.14795 1.55625ZM3.19517 4.26276H0.0472195V14H3.19517V4.26276ZM8.16894 4.26276H5.03673V14H8.13746V8.89028C8.13746 6.04378 11.8914 5.77935 11.8914 8.89028V14H15V7.83256C15 3.03394 9.44386 3.21282 8.13746 5.56936L8.16894 4.26276Z"
                                      fill="#007AB5"
                                    ></path>
                                  </svg>
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* <!-- right-bar  --> */}
                <div className="w-full lg:w-4/12 lg:pl-5 space-y-7 sticky top-0">
                  {/* <!-- map-content  --> */}
                  {capacity?.location?.coordinates && (
                    <div className="w-full relative min-h-[170px] xl:min-h-[220px] p-2.5 bg-white rounded-md">
                      <div
                        className="w-full min-h-[180px]"
                        style={{ position: "inherit" }}
                      >
                        <GoogleMap
                          // handleClick={handleClick}
                          coordinates={{
                            type: "Point",
                            coordinates: [
                              capacity?.location?.coordinates[1],
                              capacity?.location?.coordinates[0],
                            ],
                          }}
                        />
                      </div>
                      <div className="p-3.5 pt-0 xl:p-5 xl:pt-0">
                        <span className="input-titel">
                          <i className="icon-fill-location mr-1"></i>{" "}
                          {intl.formatMessage({ id: "LOCATION" })}
                        </span>
                        <h3 className="text-sm xl:text-base">
                          {data?.capacity?.city ? city : ""}
                          {data?.capacity?.state ? state : ""}
                          {data?.capacity?.pincode ? pincode : ""}
                          {/* {data?.capacity?.area_name} */}
                          {/* {data?.personaldetail?.flat_no ? flat_no : ""}
                          {data?.personaldetail?.street ? street : ""}
                          {data?.personaldetail?.area ? area : ""}
                          {data?.personaldetail?.city ? city : ""}
                          {data?.personaldetail?.state ? state : ""}
                          {data?.personaldetail?.pincode ? pincode : ""} */}
                        </h3>
                      </div>
                    </div>
                  )}

                  {/* <!-- Discount On Total Bill  --> */}
                  {/* <div className="bg-gradient-to-r from-[#13e1b094] to-[#13E1B0] p-3.5 xl:p-5 rounded-lg relative"> */}
                  {data?.discounts?.length > 0 && (
                    <>
                      {data?.discounts?.map((e, i) => (
                        <div
                          key={i}
                          className={
                            gradientStyle(e.discounttype) +
                            "bg-gradient-to-r from-[#13e1b094] to-[#13E1B0] p-3.5 xl:p-5 rounded-lg relative max-[820px]:py-3 max-[820px]:px-1"
                          }
                        >
                          <div className="text-center">
                            <h1 className="text-white">{e?.discountname}</h1>
                            <div className="text-[40px] text-black font-bold">
                              {e?.discount}
                            </div>
                            <div className="space-y-2">
                              <span className="text-xs text-white font-normal block">
                                {e.description}
                              </span>
                              <span className="text-xs text-white font-normal block">
                                {e.tandc}
                              </span>
                            </div>
                            <img
                              src={celebrationSvg}
                              alt="celebration"
                              className="absolute -right-2 -bottom-2 -rotate-90 opacity-80"
                            />
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                  <div className="calendar inline-block justify-center h-[450px] items-center rounded-3xl drop-shadow-one bg-white w-full px-6 py-4 max-[820px]:px-3 max-[820px]:ml-1 max-[820px]:py-4">
                    {/* <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                      events={calendarEvents}
                    /> */}
                    {/* <DatePicker /> */}
                    <DatePicker />
                  </div>
                </div>
              </div>
            </div>

            <Modal isOpen={previewVideo}>
              <VideoPreview handleClose={setPreviewVideo} data={data?.videos} />
            </Modal>
            <Modal isOpen={previewCompanyPhoto}>
              <ImageCompanyPreview
                handleClose={setPreviewcompanyPhoto}
                data={company?.photos}
              />
            </Modal>
            <Modal isOpen={previewCompanyVideo}>
              <VideoCompanyPreview
                handleClose={setPreviewCompanyVideo}
                data={company?.videos}
              />
            </Modal>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardEventViewOverview;
