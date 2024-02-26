import React, { useEffect, useRef, useState } from "react";
import logoImage from "../../assest/svg/logo.svg";
import userImage from "../../assest/images/userdefault.jpg";
import Modal from "../../Common/Modals/Modal.js";
import {
  Link,
  Route,
  Routes,
  useNavigate,
  NavLink,
  useParams,
} from "react-router-dom";
import LanguagePopup from "../../Common/Modals/LanguagePopup";
import bannerPreview from "../../assest/images/banner-preview.png";
import NoResults from "../../assest/images/no-result.png";

import SelectWhoYouAre from "../../Pages/Dashboard/SelectWhoYouAre";
import DashboardEventView from "../event-view/DashboardEventView";

import Gallery from "../../Pages/Entertainment/Gallery";
import ReferToEarn from "../../Pages/ReferToEarn/ReferToEarn";
import RedeemCoin from "../../Pages/Redeem/RedeemCoin";
import Booking from "../../Pages/Booking/Booking";
import Invoice from "../../Pages/Invoice/Invoice";
import Chatbot from "../../Pages/Help/Chatbot";
import FAQ from "../../Pages/FAQ/FAQ";
import Notification from "../Notification/Notification";
import Profile from "../../Pages/Profile/Profile";
import { toast, ToastContainer } from "react-toastify";
import OurProducts from "../../Pages/OurProducts/OurProducts";
import NotificationDetails from "../Notification/NotificationDetails";
import SelectBusiness from "../Notification/Events/SelectBusiness/SelectBusiness";
import SelectBusinessPromote from "../Notification/Events/User/SelectBusinessPromote";
import { s3Url } from "../../config";
import AllUserSelectPlan from "../Notification/Events/SelectBusiness/AllUsersPlan/AllUserSelectPlan";
import ExistingUserPromote from "../Notification/Events/SelectBusiness/ExistingUser/ExistingUserPromote";
import PublishDateTime from "../Notification/Events/PublishDateAndTime/PublishDateTime";
import NotificationMode from "../Notification/Events/BillDetails/NotificationMode";
import NotificationPayment from "../Notification/Events/Payment/NotificationPayment";
import Gift from "../other/Gift";
import GiftDetails from "../other/GiftDetails";
import InvoiceDetials from "../../Pages/Invoice/InvoiceDetials";
import { removeToken, useUser } from "../auth/authSlice";
import { useDispatch } from "react-redux";
import {
  getProfileDetails,
  useProfileDetails,
} from "../../Pages/Profile/profileSlice";
import { useIntl } from "react-intl";
import { userSearch } from "../../Pages/Search/SearchSlice";
import { getEventType } from "../../shared/helper";
import EventPopUpShareEvent from "../Popups/EventPopUpShareEvent";
import ToolTips from "../../Pages/ToolTips";
import SignOutPopUp from "../Popups/DashboardPopup/SignOutPopUp";
import Offline from "../../Pages/NoInternetStatus/Offline";
import QRModal from "../Modals/DashboardModals/QRModal";
import EditEventLayout from "../../Common/Layouts/EditEventLayout";
import DashboardEvent from "../../Pages/Dashboard/Event/DashboardEvent";

const SideBar = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const profileDetails = useProfileDetails();
  const [languagePopup, setLanguagePopup] = useState(false);
  const [qrPopup, setQrPopup] = useState(false);
  const [searchPopUp, setSearchPopUp] = useState(false);
  const [values, setValues] = useState("");
  const [SearchLists, setSearchLists] = useState([]);
  const eventType = getEventType(params.eventType);
  const eventId = localStorage.getItem("eventid");
  const intl = useIntl();
  const navigate = useNavigate();
  const { user } = useUser();
  const token = user?.token || null;
  let isToggleSidebar = useRef(false);

  const [signOutPopUp, setSignOutPopUp] = useState(false);
  const [sharePopUpOpen, setSharePopUpOpen] = useState(false);
  const url = "https://eventopackage.com/";
  const getProfile = async () => {
    try {
      await dispatch(getProfileDetails()).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const searchList = async () => {
    const payload = {
      search: values,
    };
    try {
      const response = await dispatch(userSearch(payload)).unwrap();
      if (response.data.IsSuccess) {
        setSearchLists(response.data.Data);
      } else {
        console.error("Search Not Working!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      searchList();
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [values]);

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (token == null) return navigate("../auth/login");
  }, []);

  const handleLogout = () => {
    dispatch(removeToken());
    localStorage.clear();
    toast.success(`${intl.formatMessage({ id: "LOGOUT SUCCESSFULLY." })}`);
  };

  const removeId = () => {
    localStorage.removeItem("eventId");
    localStorage.removeItem("displayName");
    localStorage.removeItem("stepCount");
  };

  const toggleSidebar = () => {
    isToggleSidebar.current = !isToggleSidebar.current;
    if (isToggleSidebar.current) {
      document.querySelector(".app")?.classList.add("sidenav-toggled-open");
    } else {
      document.querySelector(".app")?.classList.remove("sidenav-toggled-open");
    }
  };

  const Outhover = () => {
    isToggleSidebar.current = false;
    document.querySelector(".app")?.classList.remove("sidenav-toggled-open");
  };

  const Star = ({ ratings }) => {
    const numberRating = Number(ratings);
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
      let number = index + 0.5;
      return (
        <span key={index}>
          {numberRating >= index + 1 ? (
            <i className="icon-fillStar text-sm"></i>
          ) : numberRating >= number ? (
            <i className="icon-half-star text-sm"></i>
          ) : (
            <i className="icon-star text-sm"></i>
          )}
        </span>
      );
    });
    return <div>{ratingStar}</div>;
  };

  return (
    <div className="main flex min-h-screen relative">
      {/* <!-- Left Panel -->*/}
      <div className="leftPanel max-w-[230px] w-full  bg-white fixed shadow-md max-[768px]:top-[75px] z-30">
        <div className="logo text-center px-4 pt-5 pb-6 max-[768px]:py-2 max-[768px]:px-6">
          <Link to="/" className="block max-[768px]:w-24">
            <img
              src={logoImage}
              alt="Evento Package Logo"
              className="w-[160px] h-[130px] max-w-full mx-auto"
            />
          </Link>
        </div>
        <div className="nav">
          <NavLink
            to="../dashboard"
            activeclassname="active"
            title={intl.formatMessage({ id: "DASHBOARD" })}
            onClick={removeId}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-deshbord"></i>
            </span>
            <span>{intl.formatMessage({ id: "DASHBOARD" })}</span>
          </NavLink>
          {/* <NavLink to="/" activeclassname="active" title="Subscription">
            <span>
              <i className="w-6 block text-center text-lg icon-subsciption"></i>
            </span>
            <span>Subscription</span>
          </NavLink> */}
          <NavLink
            to="refer-to-earn"
            activeclassname="active"
            title={intl.formatMessage({ id: "REFER & EARN" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-refer"></i>
            </span>
            <span>{intl.formatMessage({ id: "REFER & EARN" })}</span>
          </NavLink>
          <NavLink
            to="redeem"
            activeclassname="active"
            title={intl.formatMessage({ id: "REDEEM" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-redem"></i>
            </span>
            <span>{intl.formatMessage({ id: "REDEEM" })}</span>
          </NavLink>
          <NavLink
            to="entertainment"
            activeclassname="active"
            title={intl.formatMessage({ id: "ENTERTAINMENT" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-gallery"></i>
            </span>
            <span>{intl.formatMessage({ id: "ENTERTAINMENT" })}</span>
          </NavLink>
          <a
            href="https://www.festumevento.com"
            target="_blank"
            activeclassname="active"
          >
            <span>
              <i className="w-6 block text-center text-lg icon-f-evanto"></i>
            </span>
            <span>{intl.formatMessage({ id: "FESTUM EVENTO" })}</span>
          </a>
          <NavLink
            to="booking"
            activeclassname="active"
            title={intl.formatMessage({ id: "BOOKING" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-booking"></i>
            </span>
            <span>{intl.formatMessage({ id: "BOOKING" })}</span>
          </NavLink>
          <NavLink
            to="invoice"
            activeclassname="active"
            title={intl.formatMessage({ id: "INVOICE" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-invoice"></i>
            </span>
            <span>{intl.formatMessage({ id: "INVOICE" })}</span>
          </NavLink>
          {/* <NavLink to="/" activeclassname="active" title="Membership">
            <span>
              <i className="w-6 block text-center text-lg icon-membership"></i>
            </span>
            <span>Membership</span>
          </NavLink> */}
          <NavLink
            to="our-products"
            activeclassname="active"
            title={intl.formatMessage({ id: "OUR PRODUCTS" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-our-product"></i>
            </span>
            <span>{intl.formatMessage({ id: "OUR PRODUCTS" })}</span>
          </NavLink>
          {/* <NavLink to="gift" activeclassname="active" title="Gift">
            <span>
              <i className="w-6 block text-center text-lg icon-refer"></i>
            </span>
            <span>Gift</span>
          </NavLink> */}
          <NavLink
            to="faq"
            activeclassname="active"
            title={intl.formatMessage({ id: "FAQs" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-help"></i>
            </span>
            <span>{intl.formatMessage({ id: "FAQs" })}</span>
          </NavLink>
          <NavLink
            to="chatbot"
            activeclassname="active"
            title={intl.formatMessage({ id: "ASK SRIVALLI" })}
          >
            <span>
              <i className="w-6 block text-center text-lg icon-massage"></i>
            </span>
            <span>{intl.formatMessage({ id: "ASK SRIVALLI" })}</span>
          </NavLink>
        </div>
      </div>
      {/* <!-- Content --> */}
      <div className="w-full">
        {/* <!-- Top Header --> */}
        <div className="w-[calc(100%-230px)] z-40  max-[768px]:w-full ml-[230px] max-[768px]:ml-[0] bg-white max-[550px]:px-3.5 py-3.5 px-6 xl:px-12 flex flex-wrap items-center fixed shadow-sm">
          {/* <!-- Search Box --> */}
          <button
            className="px-3.5 max-[550px]:px-2 menu-toggle min-[769px]:hidden"
            onMouseOut={() => Outhover()}
            onClick={() => {
              toggleSidebar();
            }}
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
              className="block hover:fill-spiroDiscoBall anim"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                // fill="#000000"
                stroke="none"
              >
                <path d="M799 3906 c-56 -20 -96 -53 -126 -104 -24 -40 -28 -58 -28 -123 0 -67 4 -81 30 -125 19 -30 49 -60 79 -79 l49 -30 1757 0 1757 0 49 30 c30 19 60 49 79 79 27 44 30 58 30 126 0 68 -3 82 -30 126 -19 30 -49 60 -79 79 l-49 30 -1741 2 c-1406 2 -1748 0 -1777 -11z" />
                <path d="M799 2786 c-56 -20 -96 -53 -126 -104 -24 -40 -28 -58 -28 -123 0 -67 4 -81 30 -125 19 -30 49 -60 79 -79 l49 -30 1757 0 1757 0 49 30 c30 19 60 49 79 79 27 44 30 58 30 126 0 68 -3 82 -30 126 -19 30 -49 60 -79 79 l-49 30 -1741 2 c-1406 2 -1748 0 -1777 -11z" />
                <path d="M799 1666 c-56 -20 -96 -53 -126 -104 -24 -40 -28 -58 -28 -123 0 -67 4 -81 30 -125 19 -30 49 -60 79 -79 l49 -30 1757 0 1757 0 49 30 c30 19 60 49 79 79 27 44 30 58 30 126 0 68 -3 82 -30 126 -19 30 -49 60 -79 79 l-49 30 -1741 2 c-1406 2 -1748 0 -1777 -11z" />
              </g>
            </svg>
          </button>
          {/* <div className="logo text-center px-4 pt-5 pb-8 min-[768px]:hidden">
          <Link to="/" className="block">
            <img
              src={logoImage}
              alt="Evento Package Logo"
              className="max-w-full w-auto mx-auto"
            />
          </Link>
        </div> */}
          <div className="w-72 max-[768px]:w-50 max-[550px]:w-40 max-[400px]:w-32 relative bg-brightGray rounded-md flex items-center">
            <input
              type="search"
              name="search"
              value={values || ""}
              onChange={(e) => setValues(e.target.value)}
              onKeyUp={() => setSearchPopUp(values && values !== "")}
              placeholder={`${intl.formatMessage({ id: "SEARCH" })}`}
              className="w-full h-10 bg-transparent text-sm font-bold pl-3.5 focus:outline-none"
            />
            <button type="submit" className="p-3.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.80624 7.7457C9.39675 6.93931 9.74996 5.9488 9.74996 4.87502C9.74996 2.18703 7.56294 0 4.87497 0C2.18699 0 0 2.18703 0 4.87502C0 7.56301 2.18701 9.75004 4.87499 9.75004C5.94877 9.75004 6.93936 9.39678 7.74575 8.80627L10.9395 12L12 10.9395C12 10.9394 8.80624 7.7457 8.80624 7.7457ZM4.87499 8.25002C3.01391 8.25002 1.50001 6.73611 1.50001 4.87502C1.50001 3.01393 3.01391 1.50001 4.87499 1.50001C6.73607 1.50001 8.24997 3.01393 8.24997 4.87502C8.24997 6.73611 6.73605 8.25002 4.87499 8.25002Z"
                  fill="#9BA0A8"
                />
              </svg>
            </button>
          </div>
          {/* search result */}
          {
            values && values !== "" ? (
              <div className="absolute top-full left-0 right-0 overflow-y-auto h-screen max-h-[calc(100vh-76px)] px-9 py-5 bg-brightGray shadow z-20 space-y-5 ng-star-inserted">
                {SearchLists && SearchLists.length ? (
                  <>
                    {SearchLists.map((data) => (
                      <div className="w-full flex items-center">
                        <div className="flex space-x-5 max-[820px]:space-x-0 w-full p-4 max-[820px]:pr-4 pr-7 bg-white rounded max-[820px]:flex-col">
                          <div className="max-w-xs h-[200px] w-full">
                            <Link
                              to={`../dashboard/event/event-view/${
                                data.event_type === "have_you_places"
                                  ? "hyp"
                                  : data.event_type ===
                                    "personal_skills_business"
                                  ? "psb"
                                  : "gsb"
                              }`}
                              className=""
                              onClick={() => {
                                setValues("");
                                localStorage.setItem("eventId", data?._id);
                              }}
                            >
                              <img
                                className="object-cover w-full h-full"
                                src={
                                  data &&
                                  data.aboutplace &&
                                  data.aboutplace.banner &&
                                  data.aboutplace.banner != ""
                                    ? s3Url + "/" + data.aboutplace.banner
                                    : data &&
                                      data.personaldetail &&
                                      data.personaldetail.banner &&
                                      data.personaldetail.banner !== ""
                                    ? s3Url + "/" + data.personaldetail.banner
                                    : bannerPreview
                                }
                                alt="images"
                              />
                            </Link>
                          </div>
                          <div className="w-full max-[820px]:mt-5">
                            <div className="flex justify-between border-b-2 pb-4 max-[820px]:flex-col">
                              <div className="capitalize">
                                <span className="text-sm text-white bg-spiroDiscoBall px-3 py-1">
                                  {data?.event_category?.category_name}
                                </span>
                                <span className="text-sm text-white bg-verified px-3 py-1 ml-2 capitalize">
                                  {data?.is_approved == true
                                    ? "Verified"
                                    : "Unverified"}
                                </span>
                                <h2 className="text-japaneseIndigo pt-5">
                                  {data?.display_name}
                                </h2>
                                <div className="text-sm text-quicksilver pt-3">
                                  <i className="icon-fill-location mr-3"></i>
                                  {/* {data?.capacity?.address}{data?.personaldetail?.area + "," + data?.personaldetail?.city + "," + data?.personaldetail?.state} */}
                                  {data?.capacity?.address ? (
                                    data?.capacity?.address
                                  ) : (
                                    <>
                                      {data?.personaldetail?.flat_no
                                        ? data?.personaldetail?.flat_no + ", "
                                        : ""}
                                      {data?.personaldetail?.street
                                        ? data?.personaldetail?.street + ", "
                                        : ""}
                                      {data?.personaldetail?.area
                                        ? data?.personaldetail?.area + ", "
                                        : ""}
                                      {data?.personaldetail?.city
                                        ? data?.personaldetail?.city + ", "
                                        : ""}
                                      {data?.personaldetail?.state
                                        ? data?.personaldetail?.state + "-"
                                        : ""}
                                      {data?.personaldetail?.pincode
                                        ? data?.personaldetail?.pincode
                                        : ""}
                                    </>
                                  )}
                                </div>
                              </div>
                              <div className="max-[820px]:flex max-[820px]:justify-between max-[820px]:flex-row-reverse max-[820px]:pt-3">
                                <div className="flex items-center justify-end">
                                  {data?.is_approved == true ? (
                                    <input
                                      type="checkbox"
                                      className="switch mr-3"
                                      // defaultChecked={data?.is_live}
                                      id="on"
                                      checked={data?.is_live}
                                      // onClick={() => singleEventlive(data?._id)}
                                      // onChange={() => toggleEvent(data)}
                                    />
                                  ) : (
                                    <input
                                      type="checkbox"
                                      className="switch mr-3 opacity-30 "
                                      // defaultChecked={data?.is_live}
                                      id="on"
                                      disabled
                                    />
                                  )}

                                  <label htmlFor="">
                                    <h3>
                                      {intl.formatMessage({ id: "LIVE" })}
                                    </h3>
                                  </label>
                                </div>
                                <h1 className="pt-7 max-[820px]:pt-0">
                                  {data?.aboutplace?.place_price ? (
                                    <>
                                      {parseFloat(
                                        data?.aboutplace?.place_price,
                                      ).toFixed(2)}{" "}
                                      INR
                                    </>
                                  ) : data?.personaldetail?.price ? (
                                    <>
                                      {" "}
                                      {parseFloat(
                                        data?.personaldetail?.price,
                                      ).toFixed(2)}{" "}
                                      INR
                                    </>
                                  ) : (
                                    "0 INR"
                                  )}
                                </h1>
                              </div>
                            </div>
                            <div className="flex justify-between pt-4 max-[820px]:flex-col">
                              <div className="flex items-center max-[820px]:flex-col max-[820px]:items-start">
                                <div className="flex items-center space-x-1 max-[820px]:space-x-2">
                                  <Star ratings={data?.ratings} />
                                  <span className="text-quicksilver text-xs font-bold pl-2">
                                    {data?.totalreview}{" "}
                                    {intl.formatMessage({ id: "RATINGS" })}
                                  </span>
                                </div>
                                <div className="flex text-spiroDiscoBall text-xs font-bold ml-6 max-[820px]:ml-0 max-[820px]:pt-2">
                                  {data?.discounts[0]?.discounttype ===
                                  "discount_on_total_bill" ? (
                                    <>
                                      <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M13.3563 6.99951L13.9705 8.60152C14.0379 8.77826 13.9854 8.97862 13.8375 9.09849L12.5058 10.1782L12.2364 11.8729C12.2066 12.0602 12.0596 12.2063 11.8724 12.236L10.1776 12.5055L9.09883 13.838C8.97983 13.9859 8.7751 14.0384 8.60273 13.971L6.99984 13.3559L5.39783 13.9702C5.22022 14.0384 5.0216 13.9842 4.90174 13.8372L3.82206 12.5046L2.1273 12.2352C1.94094 12.2054 1.79395 12.0584 1.7642 11.8721L1.49472 10.1773L0.162186 9.09762C0.0151959 8.97862 -0.0381755 8.77826 0.0291949 8.60152L0.643403 6.99951L0.0291949 5.39749C-0.0390504 5.22076 0.0151959 5.02039 0.162186 4.9014L1.49472 3.8226L1.7642 2.12784C1.79395 1.94061 1.94006 1.79362 2.1273 1.76387L3.82206 1.49439L4.90174 0.162727C5.0216 0.0139868 5.22197 -0.0385091 5.3987 0.0297362L6.99984 0.643069L8.60186 0.0288609C8.65261 0.00961224 8.7051 -1.04242e-05 8.75847 -1.04242e-05C8.88709 -1.04242e-05 9.01396 0.0568589 9.09883 0.162727L10.1776 1.49439L11.8724 1.76387C12.0596 1.79362 12.2066 1.94061 12.2364 2.12784L12.5058 3.8226L13.8375 4.9014C13.9854 5.02127 14.0379 5.22076 13.9705 5.39749L13.3563 6.99951Z"
                                          fill="#20C0E8"
                                        />
                                        <path
                                          d="M5.68741 7.87518C4.96383 7.87518 4.375 8.46401 4.375 9.18759C4.375 9.91117 4.96383 10.5 5.68741 10.5C6.41099 10.5 6.99982 9.91117 6.99982 9.18759C6.99982 8.46401 6.41099 7.87518 5.68741 7.87518ZM5.68741 9.62506C5.44593 9.62506 5.24994 9.42907 5.24994 9.18759C5.24994 8.94611 5.44593 8.75012 5.68741 8.75012C5.92889 8.75012 6.12488 8.94611 6.12488 9.18759C6.12488 9.42907 5.92889 9.62506 5.68741 9.62506Z"
                                          fill="#FAFAFA"
                                        />
                                        <path
                                          d="M8.31241 3.50018C7.58883 3.50018 7 4.08901 7 4.81259C7 5.53617 7.58883 6.125 8.31241 6.125C9.03599 6.125 9.62482 5.53617 9.62482 4.81259C9.62482 4.08901 9.03599 3.50018 8.31241 3.50018ZM8.31241 5.25006C8.0718 5.25006 7.87494 5.0532 7.87494 4.81259C7.87494 4.57198 8.0718 4.37512 8.31241 4.37512C8.55302 4.37512 8.74988 4.57198 8.74988 4.81259C8.74988 5.0532 8.55302 5.25006 8.31241 5.25006Z"
                                          fill="#FAFAFA"
                                        />
                                        <path
                                          d="M4.81306 3.49999C4.72469 3.49999 4.63632 3.52624 4.55932 3.58136C4.36246 3.72223 4.31697 3.99521 4.45783 4.19207L8.83253 10.3167C8.9734 10.5135 9.24638 10.559 9.44324 10.4181C9.6401 10.2782 9.68472 10.0043 9.54473 9.80831L5.17003 3.68373C5.08341 3.56387 4.94955 3.49999 4.81306 3.49999Z"
                                          fill="#FAFAFA"
                                        />
                                      </svg>{" "}
                                      <span className="ml-2 inline-block">
                                        {data?.discounts[0]?.discount}{" "}
                                        {intl.formatMessage({
                                          id: "OFF ON TOTAL BILL",
                                        })}
                                      </span>
                                    </>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                              <div className="flex space-x-2 max-[820px]:space-x-3 max-[820px]:pt-3">
                                <button className="bg-brightGray px-2 py-1 text-center rounded">
                                  <Link
                                    to={`../dashboard/event/${
                                      data.event_type === "have_you_places"
                                        ? "hyp"
                                        : data.event_type ===
                                          "personal_skills_business"
                                        ? "psb"
                                        : "gsb"
                                    }/addplaces`}
                                    onClick={() => {
                                      localStorage.setItem(
                                        "eventId",
                                        data?._id,
                                      );
                                      setValues("");
                                      localStorage.setItem(
                                        "event_type",
                                        data?.event_type,
                                      );
                                      localStorage.setItem(
                                        "displayName",
                                        data?.display_name,
                                      );
                                    }}
                                  >
                                    <i
                                      className="text-base edit text-black icon-edit"
                                      style={{ color: "#000" }}
                                    ></i>
                                  </Link>
                                </button>
                                <Link
                                  to="../notification"
                                  onClick={() => setValues("")}
                                >
                                  <button className="bg-brightGray px-2 py-1 text-center rounded">
                                    <i className="icon-fill-megaphone text-base text-black"></i>
                                  </button>
                                </Link>
                                <Link
                                  to={`../dashboard/event/${
                                    data.event_type === "have_you_places"
                                      ? "hyp"
                                      : data.event_type ===
                                        "personal_skills_business"
                                      ? "psb"
                                      : "gsb"
                                  }/calender`}
                                  onClick={() => {
                                    localStorage.setItem("eventId", data?._id);
                                    setValues("");
                                    localStorage.setItem(
                                      "displayName",
                                      data?.display_name,
                                    );
                                  }}
                                >
                                  <button className="bg-brightGray px-2 py-1 text-center rounded">
                                    <i className="icon-calendar1 text-base text-black"></i>
                                  </button>
                                </Link>
                                <Link
                                  to={`../dashboard/event/${
                                    data.event_type === "have_you_places"
                                      ? "hyp"
                                      : data.event_type ===
                                        "personal_skills_business"
                                      ? "psb"
                                      : "gsb"
                                  }/discounts`}
                                  onClick={() => {
                                    localStorage.setItem("eventId", data?._id);
                                    setValues("");
                                    localStorage.setItem(
                                      "displayName",
                                      data?.display_name,
                                    );
                                  }}
                                >
                                  <button className="bg-brightGray px-2 py-1 text-center rounded">
                                    <i className="icon-percentage text-base text-black"></i>
                                  </button>
                                </Link>
                                <button
                                  onClick={() => setSharePopUpOpen(true)}
                                  className="bg-brightGray px-2 py-1 text-center rounded"
                                >
                                  <i className="icon-share text-base text-black"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      // <>

                      //   <DashboardEventCategoryItem data={data}  />
                      // </>
                    ))}
                  </>
                ) : (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col items-center justify-center text-center">
                      <img
                        src={NoResults}
                        alt="No Result Found"
                        className="mx-auto"
                      />
                      <span className="block text-40 font-bold text-[#2E363F] pt-6 pb-3">
                        No Results Found
                      </span>
                      <span className="block text-xl text-[#9BA6A8] font-normal">
                        Try using different keywords
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )
            // <div className="absolute top-full left-0 right-0 overflow-y-auto h-screen max-h-[calc(100vh-76px)] px-9 py-5 bg-brightGray shadow z-50 space-y-5 ng-star-inserted">
            //   <h1 className="h1">Result No Found!!!</h1>
            // </div>
          }
          {/* <!-- Right Bar --> */}
          <div className="ml-auto">
            <div className="flex items-center space-x-6">
              <button
                className="block hover:text-spiroDiscoBall anim tooltip"
                onClick={() => setLanguagePopup(true)}
                data-pr-tooltip={intl.formatMessage({ id: "LANGUAGE" })}
                data-pr-position="top"
              >
                <ToolTips />
                <span className="icon-language text-2xl block"></span>
              </button>
              {/* <Link
                to="chatbot"
                className="block hover:text-spiroDiscoBall anim"
                title="Massage"
              >
                <span className="icon-massage text-2xl block"></span>
              </Link> */}
              <Link
                to="notification"
                className="block hover:text-spiroDiscoBall anim "
              >
                <button
                  className="tooltip"
                  data-pr-tooltip={intl.formatMessage({ id: "PROMOTIONS" })}
                  data-pr-position="top"
                >
                  <span className="icon-megaphone text-2xl block"></span>
                </button>
              </Link>
              <div onClick={() => setQrPopup(true)}>
                <svg
                  className=" cursor-pointer hover:text-spiroDiscoBall transition-colors duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g clipPath="url(#clip0_5874_5449)">
                    <path
                      d="M23.25 6.75C22.8358 6.75 22.5 6.41419 22.5 6V2.15625C22.5 1.79438 22.2056 1.5 21.8438 1.5H18C17.5858 1.5 17.25 1.16419 17.25 0.75C17.25 0.335812 17.5858 0 18 0H21.8438C23.0327 0 24 0.967312 24 2.15625V6C24 6.41419 23.6642 6.75 23.25 6.75Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.75 6.75C0.335766 6.75 0 6.41419 0 6V2.15625C0 0.967312 0.967312 0 2.15625 0H6C6.41423 0 6.75 0.335812 6.75 0.75C6.75 1.16419 6.41423 1.5 6 1.5H2.15625C1.79438 1.5 1.5 1.79438 1.5 2.15625V6C1.5 6.41419 1.16423 6.75 0.75 6.75Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 24H2.15625C0.967312 24 0 23.0327 0 21.8438V18C0 17.5858 0.335766 17.25 0.75 17.25C1.16423 17.25 1.5 17.5858 1.5 18V21.8438C1.5 22.2056 1.79438 22.5 2.15625 22.5H6C6.41423 22.5 6.75 22.8358 6.75 23.25C6.75 23.6642 6.41423 24 6 24Z"
                      fill="currentColor"
                    />
                    <path
                      d="M21.8438 24H18C17.5858 24 17.25 23.6642 17.25 23.25C17.25 22.8358 17.5858 22.5 18 22.5H21.8438C22.2056 22.5 22.5 22.2056 22.5 21.8438V18C22.5 17.5858 22.8358 17.25 23.25 17.25C23.6642 17.25 24 17.5858 24 18V21.8438C24 23.0327 23.0327 24 21.8438 24Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.09375 11.25H5.15625C3.96731 11.25 3 10.2827 3 9.09375V5.15625C3 3.96731 3.96731 3 5.15625 3H9.09375C10.2827 3 11.25 3.96731 11.25 5.15625V9.09375C11.25 10.2827 10.2827 11.25 9.09375 11.25ZM5.15625 4.5C4.79438 4.5 4.5 4.79438 4.5 5.15625V9.09375C4.5 9.45563 4.79438 9.75 5.15625 9.75H9.09375C9.45563 9.75 9.75 9.45563 9.75 9.09375V5.15625C9.75 4.79438 9.45563 4.5 9.09375 4.5H5.15625Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.09375 21H5.15625C3.96731 21 3 20.0327 3 18.8438V14.9062C3 13.7173 3.96731 12.75 5.15625 12.75H9.09375C10.2827 12.75 11.25 13.7173 11.25 14.9062V18.8438C11.25 20.0327 10.2827 21 9.09375 21ZM5.15625 14.25C4.79438 14.25 4.5 14.5444 4.5 14.9062V18.8438C4.5 19.2056 4.79438 19.5 5.15625 19.5H9.09375C9.45563 19.5 9.75 19.2056 9.75 18.8438V14.9062C9.75 14.5444 9.45563 14.25 9.09375 14.25H5.15625Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.8438 11.25H14.9062C13.7173 11.25 12.75 10.2827 12.75 9.09375V5.15625C12.75 3.96731 13.7173 3 14.9062 3H18.8438C20.0327 3 21 3.96731 21 5.15625V9.09375C21 10.2827 20.0327 11.25 18.8438 11.25ZM14.9062 4.5C14.5444 4.5 14.25 4.79438 14.25 5.15625V9.09375C14.25 9.45563 14.5444 9.75 14.9062 9.75H18.8438C19.2056 9.75 19.5 9.45563 19.5 9.09375V5.15625C19.5 4.79438 19.2056 4.5 18.8438 4.5H14.9062Z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.7812 16.5H18V13.9688C18 13.2967 17.4533 12.75 16.7812 12.75H13.9688C13.2967 12.75 12.75 13.2967 12.75 13.9688V16.7812C12.75 17.4532 13.2967 18 13.9688 18H16.5V19.7812C16.5 20.4532 17.0467 21 17.7188 21H19.7812C20.4533 21 21 20.4532 21 19.7812V17.7188C21 17.0468 20.4533 16.5 19.7812 16.5ZM14.25 14.25H16.5V16.5H14.25V14.25ZM19.5 19.5H18V18H19.5V19.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.5 8.25H6.75C6.33577 8.25 6 7.91419 6 7.5V6.75C6 6.33581 6.33577 6 6.75 6H7.5C7.91423 6 8.25 6.33581 8.25 6.75V7.5C8.25 7.91419 7.91423 8.25 7.5 8.25Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.25 8.25H16.5C16.0858 8.25 15.75 7.91419 15.75 7.5V6.75C15.75 6.33581 16.0858 6 16.5 6H17.25C17.6642 6 18 6.33581 18 6.75V7.5C18 7.91419 17.6642 8.25 17.25 8.25Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.5 18H6.75C6.33577 18 6 17.6642 6 17.25V16.5C6 16.0858 6.33577 15.75 6.75 15.75H7.5C7.91423 15.75 8.25 16.0858 8.25 16.5V17.25C8.25 17.6642 7.91423 18 7.5 18Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5874_5449">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="block por">
                <img
                  src={
                    profileDetails && profileDetails?.profile_pic !== ""
                      ? s3Url + "/" + profileDetails?.profile_pic
                      : userImage
                  }
                  alt="user name"
                  className="w-12 h-12 object-cover rounded-2xl relative"
                />
                <div className="dropprofile absolute pt-2.5 right-12 translate-y-5 opacity-0 anim invisible z-40">
                  <div className="profile-dropdown border-[#eee] border rounded bg-white relative px-2.5 py-[15px]">
                    <div
                      onClick={() => {
                        navigate("/profile");
                      }}
                      // to="profile"
                      className="text-xs flex items-center hover:text-spiroDiscoBall cursor-pointer mb-4"
                    >
                      <i className="w-6 block text-center text-lg icon-user mr-4"></i>
                      <span className="font-bold font-primary leading-4">
                        {intl.formatMessage({ id: "VIEW PROFILE" })}
                      </span>
                    </div>
                    <div
                      className="text-xs flex items-center cursor-pointer text-[#FE4D5F]"
                      onClick={() => {
                        setSignOutPopUp(true);
                        // handleLogout();
                      }}
                    >
                      <i className="w-6 block text-center text-lg icon-logout mr-4"></i>
                      <span className="font-bold font-primary leading-4">
                        {intl.formatMessage({ id: "SIGN OUT" })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={sharePopUpOpen}>
          <EventPopUpShareEvent handleClose={setSharePopUpOpen} url={url} />
        </Modal>
        <Modal isOpen={languagePopup}>
          <LanguagePopup handleClose={setLanguagePopup} />
        </Modal>
        {/* <!-- Content In --> */}
        <div className="rightInContent max-[768px]:ml-[0] h-full">
          <Routes>
            <Route path="dashboard">
              <Route index element={<SelectWhoYouAre />} />
              <Route path="event">
                <Route
                  path="event-view/:eventType"
                  element={<DashboardEventView />}
                />
                <Route path=":eventType">
                  <Route index element={<DashboardEvent />} />
                  <Route path="*" element={<EditEventLayout />} />
                </Route>
              </Route>
            </Route>

            {/* Side bar links */}
            <Route path="profile" element={<Profile />} />
            <Route path="refer-to-earn" element={<ReferToEarn />} />
            <Route path="redeem" element={<RedeemCoin />} />
            <Route path="entertainment" element={<Gallery />} />
            <Route path="gift" element={<Gift />} />
            <Route path="booking" element={<Booking />} />
            <Route path="gift">
              <Route index element={<Gift />} />
              <Route path="giftdetails" element={<GiftDetails />} />
            </Route>
            <Route path="invoice">
              <Route index element={<Invoice />} />
              <Route path="invoicedetials" element={<InvoiceDetials />} />
            </Route>
            <Route path="faq" element={<FAQ />} />
            <Route path="our-products" element={<OurProducts />} />

            {/* header link */}
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="notification" element={<Notification />} />
            <Route path="notification">
              <Route index element={<Notification />} />
              <Route path="details" element={<NotificationDetails />} />
              <Route path="selectbusiness">
                <Route index element={<SelectBusiness />} />
                <Route path=":notifivationType">
                  <Route
                    path="selectbusinesspromote"
                    element={<SelectBusinessPromote />}
                  />
                  <Route path="alluserpalns" element={<AllUserSelectPlan />} />
                  <Route path="publishdatetime" element={<PublishDateTime />} />
                  <Route
                    path="existinguserpromote"
                    element={<ExistingUserPromote />}
                  />
                  <Route
                    path="notificationmode"
                    element={<NotificationMode />}
                  />
                  <Route
                    path="notificationpayment"
                    element={<NotificationPayment />}
                  />
                </Route>
              </Route>
            </Route>

            <Route path="nointernent" element={<Offline />} />
          </Routes>
        </div>
      </div>
      <Modal isOpen={signOutPopUp}>
        <SignOutPopUp handleClose={setSignOutPopUp} />
      </Modal>
      <Modal isOpen={qrPopup}>
        <QRModal handleClose={setQrPopup} />
      </Modal>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default SideBar;
