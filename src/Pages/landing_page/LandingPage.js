import React, { useState, useEffect } from "react";
import $ from "jquery";
import i18n from "../../assest/js/i18n";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import fcoin from "../../assest/images/landing-page/festumcoin.webp";
import sfe from "../../assest/images/landing-page/FE.webp";
import ad from "../../assest/images/landing-page/festumadvertising.webp";
import ff from "../../assest/images/landing-page/Field.webp";
import perfact from "../../assest/images/landing-page/perfact.webp";

import Showcasebg from "../../assest/images/landing-page/Showcase-bg23.webp";
import ShowBACK from "../../assest/images/landing-page/BACK.webp";
import ShowBACK2 from "../../assest/images/landing-page/final-2.webp";
import aboutg from "../../assest/images/landing-page/about-g.webp";
import AnniversaryEvent from "../../assest/images/landing-page/video-1.webp";
import ChildrenPartyPlannersEvent from "../../assest/images/landing-page/video-2.webp";
import BirthdaypartyEvent from "../../assest/images/landing-page/video-3.webp";
import SummerGardenPartyEvent from "../../assest/images/landing-page/video-4.webp";
import ArtistVideo from "../../assest/images/landing-page/video1.webp";
import VendorVideo from "../../assest/images/landing-page/video2.webp";
import VenueVideo from "../../assest/images/landing-page/video3.webp";
// import video1 from "../../assest/images/landing-page/Anniversary-Event.mp4";
// import video2 from "../../assest/images/landing-page/Children's-Party-Planners-Event.mp4";
// import video3 from "../../assest/images/landing-page/Birthday-party-Event.mp4";
// import video4 from "../../assest/images/landing-page/Summer-Garden-Party-Event.mp4";

// import ourcompany from "../../assest/images/landing-page/company.svg";
import ourcompany from "../../assest/images/landing-page/company.webp";
import googleplay from "../../assest/images/landing-page/google-play.webp";
import appstore from "../../assest/images/landing-page/app-store.webp";
import whatsupfooter from "../../assest/images/landing-page/whatsup-footer.webp";
import facebookfooter from "../../assest/images/landing-page/facebook-footer.webp";
import telegramfooter from "../../assest/images/landing-page/telegram-footer.webp";
import instagramfooter from "../../assest/images/landing-page/instagram-footer.webp";
import twitterfooter from "../../assest/images/landing-page/twitter-footer.webp";
import linkedinfooter from "../../assest/images/landing-page/linkedin-footer.webp";
import youtubefooter from "../../assest/images/landing-page/you-tube-footer.webp";
import usa from "../../assest/images/landing-page/usa.webp";
import france from "../../assest/images/landing-page/france.webp";
import india from "../../assest/images/landing-page/india.webp";
import germany from "../../assest/images/landing-page/germany.webp";
import china from "../../assest/images/landing-page/china.webp";
import thailand from "../../assest/images/landing-page/thailand.webp";
import iphone from "../../assest/images/landing-page/Place2.webp";
import siderevento from "../../assest/images/landing-page/sider-evento.webp";
import giftfcoin from "../../assest/images/landing-page/surprise 1.webp";
import Advertisement from "../../component/Advertisement/Advertisement";
import multidivice from "../../assest/images/landing-page/Multi-Devices.webp";
import banner1 from "../../assest/images/landing-page/SevicesPhotos/Art_Galleries.webp";
import banner2 from "../../assest/images/landing-page/SevicesPhotos/Ballrooms.webp";
import banner3 from "../../assest/images/landing-page/SevicesPhotos/banquet.webp";
import banner4 from "../../assest/images/landing-page/SevicesPhotos/cakemaker.webp";
import banner5 from "../../assest/images/landing-page/SevicesPhotos/Caricature_Artist.webp";
import banner6 from "../../assest/images/landing-page/SevicesPhotos/Caterers_And_Serving_Staff.webp";
import banner7 from "../../assest/images/landing-page/SevicesPhotos/Choreographer_And_Dancer.webp";
import banner8 from "../../assest/images/landing-page/SevicesPhotos/Conference_And_Meeting_Rooms.webp";
import banner9 from "../../assest/images/landing-page/SevicesPhotos/Convention_Centers_And_Theatres.webp";
import banner10 from "../../assest/images/landing-page/SevicesPhotos/DJ.webp";
import banner11 from "../../assest/images/landing-page/SevicesPhotos/Event_Decorators.webp";
import banner12 from "../../assest/images/landing-page/SevicesPhotos/Fashion_Designer.webp";
import banner13 from "../../assest/images/landing-page/SevicesPhotos/Gardens_And_Farms.webp";
import banner14 from "../../assest/images/landing-page/SevicesPhotos/Hotels_And_Resorts.webp";
import banner15 from "../../assest/images/landing-page/SevicesPhotos/Light_and_Sound.webp";
import banner16 from "../../assest/images/landing-page/SevicesPhotos/Magician.webp";
import banner17 from "../../assest/images/landing-page/SevicesPhotos/Makeup_Artist.webp";
import banner18 from "../../assest/images/landing-page/SevicesPhotos/Mansion_And_Bungalows.webp";
import banner19 from "../../assest/images/landing-page/SevicesPhotos/Mascots_And_Clowns.webp";
import banner20 from "../../assest/images/landing-page/SevicesPhotos/Master_chef.webp";
import banner21 from "../../assest/images/landing-page/SevicesPhotos/Motivational_Speaker_And_Anchor.webp";
import banner22 from "../../assest/images/landing-page/SevicesPhotos/Museums.webp";
import banner23 from "../../assest/images/landing-page/SevicesPhotos/beach.webp";
import banner24 from "../../assest/images/landing-page/SevicesPhotos/Photo_Studio.webp";
import banner25 from "../../assest/images/landing-page/SevicesPhotos/Photographer.webp";
import banner26 from "../../assest/images/landing-page/SevicesPhotos/pubs-and-bars.webp";
import banner27 from "../../assest/images/landing-page/SevicesPhotos/rooftops.webp";
import banner28 from "../../assest/images/landing-page/SevicesPhotos/security-provider-and-bouncer.webp";
import banner29 from "../../assest/images/landing-page/SevicesPhotos/sports-clubs.webp";
import banner30 from "../../assest/images/landing-page/SevicesPhotos/stadiums-and-arenas.webp";
import banner31 from "../../assest/images/landing-page/SevicesPhotos/stately-homes.webp";
import banner32 from "../../assest/images/landing-page/SevicesPhotos/Tattoo_Artist.webp";
import banner33 from "../../assest/images/landing-page/SevicesPhotos/wedding-decorator.webp";
import banner34 from "../../assest/images/landing-page/SevicesPhotos/yachts-and-houseboats.webp";

import dj from "../../assest/images/landing-page/dj.webp";
import Speaker from "../../assest/images/landing-page/Speaker.webp";
import noiseporn from "../../assest/images/landing-page/noiseporn.webp";
import adbanner from "../../assest/images/landing-page/add-banner.webp";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Event from "./Event";
import Offer from "./Offer";
import LiveStream from "./LiveStream";
import Modal from "../../Common/Modals/Modal";
import VideoPlayer from "../../component/Popups/LandingPopup/VideoPlayer";

import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getInTouchLanding } from "./landingSlice";
import { useDispatch } from "react-redux";
import TncPopUp from "./TncPopUp";
import PolicyPopUp from "./PolicyPopUp";
import { baseUrl } from "../../api/baseUrl";
import { s3Url } from "../../config";
import axios from "axios";

const changeLanguage = (ln) => {
  return () => {
    i18n.changeLanguage(ln);
    // console.log(`lanuage changed to ${ln}`);
  };
};

const options = {
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
};

const options2 = {
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(emailRegExp, "Email is not valid")
      .required("Email is required"),
    company_name: Yup.string().required("Company name is required"),
    description: Yup.string().required("Description is required."),
  });

  const initialState = {
    name: "",
    email: "",
    company_name: "",
    description: "",
  };

  const [msg, setMsg] = useState("");

  const clickNextHandler = async (values, { resetForm }) => {
    try {
      const payload = { ...values };
      const response = await dispatch(getInTouchLanding(payload)).unwrap();
      if (response.data.IsSuccess) {
        setSubmit(true);
        setMsg(
          response.data && response.data?.Message !== ""
            ? response.data?.Message
            : "Something went wrong.",
        );
        resetForm({ values: "" });
        // toast.success(response.data?.Message);
      } else {
        setSubmit(true);
        // toast.success(response.data?.Message);
      }
    } catch (error) {
      setSubmit(true);
      setMsg("Something went wrong.");
      console.log(error);
    }
  };

  const [events, setEvents] = useState([]);
  const [star, setStar] = useState(0);

  const eventData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/landing/events/list`);
      if (response) {
        setEvents(response.data.Data);
        setStar(response.data.ratings);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    eventData();
  }, []);

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();
  const Star = () => {
    const numberRating = 5;
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

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: clickNextHandler,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik],
  );

  const [isVideoPlayerPopUpOpen, setIsVideoPlayerPopUpOpen] = useState(false);
  const [isTnc, setIsTnc] = useState(false);
  const [isPolicy, setIsPolicy] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    $(document).ready(function () {
      $(".u-tabs ul li").click(function () {
        var tab_id = $(this).attr("data-tab");

        $(".u-tabs ul li").removeClass("current");
        $(".tabs-call").removeClass("current");

        $(this).addClass("current");
        $("#" + tab_id).addClass("current");
      });
      $(".video-img").click(function () {
        $("iframe", this)[0].src += "&amp;autoPlay=1";
        $(this).addClass("open");
      });
    });

    $(document).ready(function () {
      $(function () {
        // Dropdown toggle
        $(".language-toggle").click(function () {
          $(".notification-holder").slideDown();
        });
        $(".radio-btn-icon input").click(function () {
          $(".notification-holder").slideUp();
        });
      });
    });

    $(document).ready(function () {
      $(document).ready(function () {
        $(".toggle-icon").click(function () {
          if ($(".toggle-icon").hasClass("active")) {
            $(".toggle-icon").removeClass("active");
            $(".toggle-icon").next().slideUp();
          } else {
            $(".toggle-icon").addClass("active");
            $(".toggle-icon").next().slideDown();
          }
        });
      });
    });
  }, []);

  const { t, i18n } = useTranslation();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      {/* hero section */}
      <div className="landing-wrapper w-full h-auto relative block box-border overflow-hidden z-50 bg-white">
        <div className="lmain w-full h-auto relative block box-border overflow-hidden ">
          <div
            className="landing-content wrapper h-auto my-0 pt-[50px] relative w-full"
            id="home"
          >
            <div className="landing-main  h-[700px] xl:h-screen">
              <header
                className={`fixed ${
                  scrollDirection === "down"
                    ? "header nav-up"
                    : "header nav-down"
                } landing-header top-0 inset-x-0 z-40`}
              >
                <div className="wrapper">
                  <div className="flex flex-wrap items-center justify-between space-x-0 md:space-x-5 bg-white px-3 md:px-7 py-2 md:py-3 relative">
                    {/* <!-- Logo --> */}
                    <div className="logo lg:order-1">
                      <svg
                        className="w-10 sm:w-16 lg:w-20 h-auto"
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_5278_17473)">
                          <path
                            d="M193 125.389H6V162.269H193V125.389Z"
                            fill="#1EC0E8"
                          />
                          <path
                            d="M27.6356 156.705H12.082V130.66H27.0436V135.438H17.9181V141.215H26.4014V145.976H17.9181V151.932H27.6356V156.705Z"
                            fill="white"
                          />
                          <path
                            d="M60.7981 130.66L51.8625 156.705H45.2445L36.415 130.66H42.7091L48.1151 148.786C48.38 149.631 48.5559 150.501 48.6401 151.383H48.7517C48.8544 150.477 49.0414 149.584 49.3102 148.713L54.6828 130.66H60.7981Z"
                            fill="white"
                          />
                          <path
                            d="M86.867 156.705H71.3135V130.66H86.275V135.438H77.1551V141.215H85.6384V145.976H77.1551V151.932H86.867V156.705Z"
                            fill="white"
                          />
                          <path
                            d="M121.772 156.705H115.874L105.185 140.34C104.713 139.644 104.279 138.923 103.884 138.181H103.811C103.904 139.101 103.952 140.505 103.956 142.393V156.705H98.4385V130.66H104.733L115.025 146.515C115.494 147.233 115.924 147.939 116.326 148.64H116.399C116.272 147.452 116.223 146.257 116.254 145.062V130.66H121.772V156.705Z"
                            fill="white"
                          />
                          <path
                            d="M153.326 135.438H145.926V156.705H140.068V135.438H132.713V130.66H153.332L153.326 135.438Z"
                            fill="white"
                          />
                          <path
                            d="M175.185 157.159C171.462 157.159 168.435 155.946 166.104 153.519C163.773 151.093 162.604 147.926 162.597 144.019C162.597 139.906 163.784 136.576 166.16 134.03C168.535 131.484 171.681 130.211 175.598 130.211C179.303 130.211 182.296 131.428 184.578 133.862C186.861 136.296 188.004 139.506 188.007 143.491C188.007 147.585 186.821 150.885 184.45 153.39C182.078 155.895 178.99 157.151 175.185 157.159ZM175.436 135.286C174.497 135.252 173.564 135.445 172.715 135.848C171.865 136.251 171.125 136.853 170.555 137.603C169.349 139.147 168.746 141.19 168.746 143.733C168.746 146.275 169.349 148.315 170.555 149.851C171.136 150.551 171.861 151.116 172.682 151.505C173.502 151.895 174.397 152.099 175.304 152.105C176.212 152.111 177.109 151.918 177.935 151.539C178.76 151.161 179.493 150.606 180.083 149.913C181.266 148.455 181.858 146.43 181.858 143.839C181.858 141.143 181.285 139.042 180.138 137.535C179.597 136.803 178.885 136.214 178.066 135.821C177.247 135.427 176.344 135.239 175.436 135.275V135.286Z"
                            fill="white"
                          />
                          <path
                            d="M19.4964 176.969V180.805H17V169.678H20.9093C23.7017 169.678 25.0998 170.859 25.1035 173.222C25.1199 173.737 25.0199 174.248 24.811 174.719C24.602 175.189 24.2896 175.605 23.8972 175.937C22.9881 176.663 21.8459 177.03 20.686 176.969H19.4964ZM19.4964 171.601V175.067H20.4793C21.8085 175.067 22.4731 174.484 22.4731 173.318C22.4731 172.151 21.8085 171.579 20.4793 171.601H19.4964Z"
                            fill="black"
                          />
                          <path
                            d="M52.2953 180.805H49.5755L48.7881 178.331H44.8453L44.0634 180.805H41.3604L45.3982 169.678H48.3581L52.2953 180.805ZM48.2184 176.402L47.0289 172.661C46.931 172.336 46.8674 172.002 46.839 171.663H46.7776C46.7527 171.993 46.689 172.319 46.5877 172.633L45.3814 176.402H48.2184Z"
                            fill="black"
                          />
                          <path
                            d="M77.4556 180.41C76.4549 180.841 75.3713 181.042 74.2835 180.999C73.5477 181.039 72.8117 180.925 72.1217 180.665C71.4317 180.406 70.8025 180.006 70.2736 179.491C69.7769 178.954 69.392 178.322 69.1417 177.633C68.8914 176.945 68.7807 176.213 68.816 175.481C68.7826 174.685 68.911 173.891 69.1933 173.146C69.4756 172.402 69.9059 171.723 70.4579 171.151C71.0148 170.592 71.6807 170.153 72.4139 169.864C73.147 169.574 73.9318 169.44 74.7191 169.469C75.6484 169.445 76.5746 169.586 77.4556 169.884V172.295C76.6872 171.844 75.8102 171.613 74.9201 171.628C74.4546 171.608 73.9902 171.687 73.5566 171.858C73.1229 172.028 72.7294 172.288 72.4014 172.621C72.0716 172.978 71.8168 173.399 71.6518 173.858C71.4868 174.316 71.415 174.803 71.4408 175.29C71.393 176.234 71.7181 177.159 72.3456 177.864C72.6611 178.188 73.0411 178.44 73.4608 178.606C73.8805 178.771 74.3302 178.845 74.7805 178.823C75.7204 178.831 76.6449 178.583 77.4556 178.105V180.41Z"
                            fill="black"
                          />
                          <path
                            d="M104.424 180.805H101.274L98.0407 175.987C97.9304 175.79 97.8334 175.586 97.7503 175.376H97.7112V180.821H95.2148V169.678H97.7112V174.938H97.7503C97.8117 174.793 97.9123 174.585 98.0575 174.316L101.118 169.678H104.095L100.23 174.983L104.424 180.805Z"
                            fill="black"
                          />
                          <path
                            d="M131.057 180.805H128.36L127.572 178.331H123.629L122.848 180.805H120.145L124.177 169.678H127.137L131.057 180.805ZM126.975 176.402L125.785 172.661C125.692 172.335 125.63 172.001 125.601 171.663H125.567C125.54 171.993 125.475 172.319 125.372 172.633L124.171 176.402H126.975Z"
                            fill="black"
                          />
                          <path
                            d="M157.368 180.058C156.128 180.725 154.735 181.05 153.33 181.001C151.786 181.084 150.271 180.55 149.119 179.514C148.592 178.977 148.183 178.336 147.918 177.631C147.652 176.926 147.536 176.173 147.577 175.42C147.547 174.629 147.68 173.841 147.969 173.104C148.257 172.368 148.694 171.699 149.253 171.141C149.85 170.581 150.553 170.146 151.321 169.861C152.088 169.577 152.904 169.45 153.721 169.487C154.776 169.469 155.827 169.636 156.826 169.98V172.33C155.864 171.805 154.781 171.548 153.687 171.584C153.218 171.566 152.751 171.647 152.315 171.822C151.879 171.997 151.485 172.262 151.157 172.599C150.543 173.35 150.198 174.288 150.18 175.26C150.162 176.232 150.471 177.181 151.057 177.955C151.362 178.272 151.731 178.52 152.139 178.683C152.548 178.845 152.986 178.918 153.425 178.897C153.912 178.917 154.398 178.829 154.849 178.639V176.463H152.615V174.461H157.328L157.368 180.058Z"
                            fill="black"
                          />
                          <path
                            d="M181.974 180.805H175.328V169.678H181.717V171.719H177.808V174.192H181.432V176.228H177.808V178.791H181.974V180.805Z"
                            fill="black"
                          />
                          <path
                            d="M129.619 104.143V106.723L126.234 105.921V106.521L130.395 107.508V104.143C130.403 104.144 130.41 104.143 130.417 104.14C130.425 104.138 130.431 104.134 130.436 104.128C130.442 104.123 130.446 104.116 130.448 104.109C130.451 104.102 130.452 104.094 130.451 104.087C130.451 104.08 130.449 104.072 130.447 104.066C130.444 104.059 130.439 104.054 130.434 104.049C130.429 104.044 130.423 104.04 130.416 104.038C130.409 104.036 130.402 104.035 130.395 104.036C130.405 103.959 130.386 103.881 130.343 103.816C130.3 103.751 130.235 103.704 130.16 103.683C130.085 103.638 130.025 103.572 129.987 103.492C129.947 103.571 129.885 103.637 129.809 103.683C129.734 103.704 129.669 103.751 129.626 103.816C129.583 103.881 129.565 103.959 129.574 104.036C129.567 104.035 129.56 104.036 129.553 104.038C129.546 104.04 129.54 104.044 129.535 104.049C129.53 104.054 129.525 104.059 129.522 104.066C129.52 104.072 129.518 104.08 129.518 104.087C129.511 104.1 129.509 104.116 129.513 104.131C129.517 104.145 129.527 104.158 129.541 104.165C129.554 104.173 129.57 104.174 129.584 104.17C129.599 104.166 129.611 104.156 129.619 104.143Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M118.511 102.304V102.82H119.175V103.504C119.245 103.651 119.329 103.79 119.427 103.919C119.611 104.144 119.701 104.431 119.678 104.721V105.922H118.941V106.522H125.827V105.933L126.212 106.011V103.078C126.227 103.078 126.241 103.072 126.252 103.062C126.262 103.051 126.268 103.037 126.268 103.022C126.268 103.007 126.262 102.993 126.252 102.982C126.241 102.972 126.227 102.966 126.212 102.966C126.219 102.89 126.2 102.813 126.157 102.75C126.114 102.687 126.051 102.64 125.978 102.618C125.978 102.571 125.959 102.525 125.925 102.491C125.892 102.458 125.846 102.439 125.799 102.439C125.751 102.439 125.706 102.458 125.673 102.491C125.639 102.525 125.62 102.571 125.62 102.618C125.547 102.64 125.484 102.687 125.441 102.75C125.398 102.813 125.379 102.89 125.386 102.966C125.371 102.966 125.357 102.972 125.346 102.982C125.336 102.993 125.33 103.007 125.33 103.022C125.33 103.037 125.336 103.051 125.346 103.062C125.357 103.072 125.371 103.078 125.386 103.078H125.453V105.91H123.939V104.71C123.928 104.565 123.946 104.419 123.993 104.281C124.04 104.143 124.115 104.016 124.213 103.908C124.318 103.78 124.41 103.641 124.486 103.493V102.809H125.151V102.293H124.66C124.66 100.639 123.839 100.28 123.051 99.8871C122.53 99.5807 122.109 99.1286 121.839 98.5859C121.567 99.1282 121.144 99.58 120.622 99.8871C119.834 100.28 119.013 100.639 119.013 102.293L118.511 102.304ZM122.085 104.721C122.075 104.569 122.102 104.416 122.164 104.276C122.227 104.136 122.322 104.014 122.442 103.919C122.433 103.868 122.435 103.815 122.449 103.764C122.462 103.713 122.487 103.666 122.52 103.626C122.554 103.586 122.596 103.553 122.643 103.531C122.69 103.509 122.742 103.497 122.794 103.497C122.847 103.497 122.898 103.509 122.946 103.531C122.993 103.553 123.035 103.586 123.068 103.626C123.102 103.666 123.126 103.713 123.14 103.764C123.153 103.815 123.155 103.868 123.146 103.919C123.265 104.015 123.359 104.138 123.42 104.277C123.481 104.417 123.508 104.569 123.498 104.721V105.922H122.102L122.085 104.721ZM120.192 104.721C120.182 104.569 120.209 104.417 120.27 104.277C120.331 104.138 120.425 104.015 120.544 103.919C120.679 103.797 120.797 103.658 120.895 103.504C120.998 103.657 121.118 103.796 121.253 103.919C121.371 104.015 121.465 104.138 121.527 104.277C121.588 104.417 121.615 104.569 121.605 104.721V105.922H120.192V104.721Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M28.0153 98.221H28.5737V97.6602H12.3779V98.5912H27.574C27.5749 98.5364 27.5875 98.4824 27.6111 98.433C27.6346 98.3836 27.6684 98.3398 27.7103 98.3047C27.7521 98.2695 27.8011 98.2439 27.8537 98.2295C27.9063 98.215 27.9614 98.2121 28.0153 98.221Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M29.5339 88.2001V91.9521H29.4222C29.36 91.9521 29.3003 91.9769 29.2563 92.021C29.2123 92.0652 29.1876 92.1251 29.1876 92.1876C29.1876 92.2501 29.2123 92.31 29.2563 92.3542C29.3003 92.3983 29.36 92.4232 29.4222 92.4232H33.3315C33.3937 92.4232 33.4534 92.3983 33.4974 92.3542C33.5414 92.31 33.5661 92.2501 33.5661 92.1876C33.5661 92.1251 33.5414 92.0652 33.4974 92.021C33.4534 91.9769 33.3937 91.9521 33.3315 91.9521H33.2198V88.2001C33.3304 88.1877 33.4326 88.1348 33.5068 88.0515C33.581 87.9682 33.622 87.8604 33.622 87.7486C33.622 87.6369 33.581 87.529 33.5068 87.4457C33.4326 87.3624 33.3304 87.3095 33.2198 87.2971V86.9999C33.2198 86.0353 31.3657 83.7695 31.3657 83.7695C31.3657 83.7695 29.5116 86.0128 29.5116 86.9999V87.2971C29.401 87.3095 29.2988 87.3624 29.2246 87.4457C29.1504 87.529 29.1094 87.6369 29.1094 87.7486C29.1094 87.8604 29.1504 87.9682 29.2246 88.0515C29.2988 88.1348 29.401 88.1877 29.5116 88.2001H29.5339ZM32.4045 88.9628C32.4045 88.7441 32.5162 88.5702 32.6558 88.5702C32.7954 88.5702 32.9071 88.7441 32.9071 88.9628V90.6117H32.4045V88.9628ZM30.9971 88.9628C30.9971 88.9113 31.0072 88.8602 31.0269 88.8126C31.0465 88.765 31.0753 88.7217 31.1116 88.6852C31.1479 88.6488 31.191 88.6199 31.2384 88.6001C31.2859 88.5804 31.3367 88.5702 31.388 88.5702C31.4398 88.5695 31.4913 88.5791 31.5393 88.5985C31.5874 88.6179 31.6312 88.6467 31.6681 88.6832C31.705 88.7197 31.7343 88.7633 31.7543 88.8113C31.7743 88.8593 31.7846 88.9108 31.7846 88.9628V90.6117H30.9971V88.9628ZM29.8801 88.9628C29.8801 88.7441 29.9918 88.5702 30.1259 88.5702C30.2599 88.5702 30.3772 88.7441 30.3772 88.9628V90.6117H29.8801V88.9628Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M48.9415 115.051H48.383C48.1038 108.26 42.2398 107.301 42.2398 107.301C42.2398 107.301 36.3535 108.26 36.0575 115.051H35.5381V115.792H36.7388C36.9901 115.792 36.9287 115.433 36.9287 115.433C37.1577 115.433 37.1297 115.051 37.1297 115.051H36.7165C36.9957 109.006 42.2398 108.125 42.2398 108.125C42.2398 108.125 47.4615 108.983 47.7631 115.029H47.3443C47.3443 115.029 47.3443 115.41 47.5509 115.41C47.5509 115.41 47.4839 115.769 47.7408 115.769H48.9415V115.051Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M148.959 91.2162H186.086V90.7956L186.471 90.375H148.573L148.959 90.7956V91.2162Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M185.282 87.0215H149.763V89.8873H185.282V87.0215Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M184.243 83.1523H150.802V86.0743H184.243V83.1523Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M174.9 74.8848H160.15V76.0681H174.9V74.8848Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M167.522 72.0196C165.581 72.0143 163.708 72.734 162.267 74.0386H172.783C171.338 72.7354 169.464 72.0161 167.522 72.0196Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M149.081 93.3421H185.963L186.22 92.6074H148.824L149.081 93.3421Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M181.612 76.6621H153.432V82.691H181.612V76.6621ZM159.19 81.3899C158.874 81.391 158.566 81.2982 158.304 81.1233C158.041 80.9483 157.836 80.6991 157.715 80.4071C157.594 80.1152 157.561 79.7936 157.622 79.4832C157.683 79.1728 157.834 78.8874 158.057 78.6633C158.279 78.4392 158.562 78.2864 158.871 78.2243C159.18 78.1622 159.501 78.1935 159.792 78.3143C160.083 78.4351 160.332 78.64 160.507 78.903C160.682 79.1659 160.776 79.4752 160.776 79.7916C160.776 80.2145 160.609 80.6202 160.311 80.9198C160.014 81.2194 159.611 81.3884 159.19 81.3899ZM173.71 81.5414H170.862V81.8274H164.205V81.5414H161.356V78.0474H164.205V77.7557H170.862V78.0474H173.71V81.5414ZM175.866 81.3899C175.551 81.3899 175.243 81.2962 174.981 81.1206C174.72 80.9449 174.516 80.6953 174.395 80.4032C174.275 80.1112 174.243 79.7898 174.305 79.4797C174.366 79.1697 174.518 78.8849 174.74 78.6613C174.963 78.4378 175.246 78.2856 175.555 78.2239C175.864 78.1622 176.184 78.1939 176.475 78.3149C176.766 78.4358 177.014 78.6407 177.189 78.9036C177.364 79.1664 177.457 79.4754 177.457 79.7916C177.457 80.0024 177.416 80.2112 177.335 80.4058C177.254 80.6005 177.136 80.7772 176.987 80.9258C176.838 81.0743 176.661 81.1918 176.467 81.2715C176.273 81.3512 176.064 81.3914 175.854 81.3899H175.866Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M155.805 103.51H150.885V106.056H155.805V103.51Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M155.805 99.5059H150.885V100.543H155.805V99.5059Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M153.242 97.3578C153.486 97.3578 153.725 97.2851 153.928 97.1489C154.131 97.0127 154.289 96.8191 154.382 96.5927C154.476 96.3662 154.5 96.117 154.453 95.8765C154.405 95.6361 154.287 95.4153 154.115 95.2419C153.942 95.0686 153.722 94.9505 153.483 94.9027C153.243 94.8549 152.995 94.8794 152.77 94.9733C152.544 95.0671 152.351 95.2259 152.216 95.4298C152.08 95.6336 152.008 95.8732 152.008 96.1184C152.008 96.4471 152.138 96.7623 152.369 96.9948C152.601 97.2272 152.915 97.3578 153.242 97.3578Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M158.715 94.1055V93.8587H147.975V95.6422H147.59V95.2944H147.3V94.0494C147.293 93.9704 147.303 93.891 147.328 93.8158C147.353 93.7406 147.393 93.6713 147.445 93.6119C147.502 93.5431 147.55 93.4678 147.59 93.3876V93.0175H148.148C148.202 93.0175 148.253 92.9962 148.291 92.9583C148.328 92.9205 148.35 92.8691 148.35 92.8156C148.35 92.7615 148.329 92.7095 148.291 92.6708C148.253 92.632 148.202 92.6095 148.148 92.6081H147.713C147.74 92.3234 147.668 92.038 147.51 91.8007C147.351 91.5633 147.114 91.3888 146.842 91.3069C146.842 91.1314 146.772 90.9631 146.649 90.839C146.525 90.7149 146.357 90.6451 146.183 90.6451C146.008 90.6451 145.84 90.7149 145.717 90.839C145.593 90.9631 145.524 91.1314 145.524 91.3069C145.251 91.3888 145.015 91.5633 144.856 91.8007C144.697 92.038 144.625 92.3234 144.652 92.6081H144.217C144.163 92.6095 144.112 92.632 144.074 92.6708C144.037 92.7095 144.016 92.7615 144.016 92.8156C144.016 92.8691 144.037 92.9205 144.075 92.9583C144.112 92.9962 144.163 93.0175 144.217 93.0175H144.775V93.3876C144.813 93.4664 144.858 93.5415 144.909 93.6119C144.96 93.6719 144.999 93.7415 145.023 93.8166C145.047 93.8917 145.056 93.9708 145.049 94.0494V95.272H144.775V95.6197H144.217C144.163 95.6197 144.112 95.641 144.075 95.6789C144.037 95.7167 144.016 95.7681 144.016 95.8216C144.016 95.8752 144.037 95.9265 144.075 95.9644C144.112 96.0022 144.163 96.0235 144.217 96.0235V96.3152H144.435V96.0235H144.63V96.3152H144.731L144.395 104.515H144.027C143.974 104.515 143.922 104.536 143.885 104.574C143.847 104.612 143.826 104.663 143.826 104.716C143.826 104.77 143.847 104.821 143.885 104.859C143.922 104.897 143.974 104.918 144.027 104.918V105.21H144.25V104.918H144.384L144.083 112.383H143.764C143.711 112.383 143.66 112.404 143.622 112.442C143.585 112.48 143.563 112.531 143.563 112.585C143.563 112.638 143.585 112.69 143.622 112.728C143.66 112.765 143.711 112.787 143.764 112.787V113.073H143.988V112.787H144.066L143.736 120.857H137.37L137.13 114.935H137.292V114.716C137.332 114.715 137.371 114.697 137.399 114.668C137.427 114.639 137.442 114.6 137.442 114.559C137.442 114.519 137.427 114.48 137.398 114.452C137.37 114.424 137.332 114.408 137.292 114.408H137.102L136.873 108.726H137.001V108.945H137.169V108.726C137.209 108.725 137.248 108.708 137.276 108.678C137.304 108.649 137.32 108.61 137.32 108.569C137.32 108.529 137.304 108.491 137.275 108.462C137.247 108.434 137.209 108.418 137.169 108.418H136.884L136.633 102.176H136.705V101.957H136.85V102.176H137.024V101.957C137.065 101.956 137.104 101.939 137.133 101.91C137.162 101.88 137.179 101.841 137.18 101.8C137.179 101.759 137.161 101.721 137.132 101.693C137.103 101.664 137.064 101.649 137.024 101.649H136.622V101.396H136.393V100.465C136.388 100.405 136.396 100.344 136.417 100.288C136.437 100.231 136.469 100.178 136.51 100.134C136.552 100.082 136.589 100.026 136.622 99.9662V99.6801H137.024C137.064 99.6802 137.103 99.6644 137.132 99.6361C137.161 99.6079 137.179 99.5694 137.18 99.5287C137.179 99.4875 137.162 99.4484 137.133 99.4192C137.104 99.3901 137.065 99.3731 137.024 99.3717H136.622C136.642 99.1553 136.587 98.9384 136.466 98.7583C136.344 98.5782 136.165 98.4461 135.957 98.3846C135.957 98.3183 135.944 98.2527 135.919 98.1915C135.893 98.1302 135.856 98.0746 135.81 98.0277C135.763 97.9808 135.708 97.9437 135.647 97.9183C135.586 97.8929 135.52 97.8799 135.454 97.8799C135.388 97.8799 135.323 97.8929 135.262 97.9183C135.201 97.9437 135.146 97.9808 135.099 98.0277C135.052 98.0746 135.015 98.1302 134.99 98.1915C134.965 98.2527 134.952 98.3183 134.952 98.3846C134.744 98.4463 134.565 98.5786 134.445 98.7588C134.325 98.9391 134.271 99.1558 134.293 99.3717H133.958C133.917 99.3731 133.879 99.3903 133.851 99.4196C133.822 99.4489 133.807 99.488 133.807 99.5287C133.807 99.5689 133.823 99.6074 133.851 99.6358C133.879 99.6642 133.918 99.6801 133.958 99.6801H134.388V99.9662C134.415 100.026 134.449 100.082 134.488 100.134C134.565 100.227 134.603 100.345 134.594 100.465V101.396H134.388V101.665H133.98C133.94 101.665 133.902 101.681 133.873 101.71C133.845 101.738 133.829 101.777 133.829 101.817C133.829 101.858 133.845 101.897 133.873 101.926C133.901 101.955 133.939 101.972 133.98 101.974V102.193H134.147V101.957H134.293V102.176H134.371L134.114 108.418H133.829C133.789 108.418 133.75 108.434 133.72 108.462C133.691 108.49 133.674 108.529 133.673 108.569C133.674 108.611 133.691 108.65 133.72 108.679C133.749 108.708 133.788 108.725 133.829 108.726V108.945H134.002V108.726H134.103L133.829 114.408H133.589C133.569 114.407 133.549 114.41 133.53 114.417C133.511 114.425 133.493 114.436 133.479 114.45C133.464 114.464 133.453 114.481 133.445 114.5C133.437 114.518 133.433 114.539 133.433 114.559C133.433 114.601 133.449 114.641 133.478 114.67C133.508 114.699 133.548 114.716 133.589 114.716V114.935H133.757V114.716H133.829L133.578 120.857H130.406V108.059L126.245 107.072V120.857H125.815V107.072H118.94V120.857H118.622V103.404H117.879V101.312C117.879 101.312 117.36 100.684 111.736 100.634C111.689 100.45 111.606 100.277 111.492 100.126C111.378 99.9751 111.235 99.8482 111.071 99.7531C110.891 99.6517 110.692 99.5916 110.486 99.577C110.28 99.5625 110.074 99.5939 109.882 99.6689C110.032 99.3941 110.161 99.1081 110.295 98.8389H111.043C117.449 98.8389 117.901 99.4782 117.901 99.4782C117.901 99.4782 120.482 97.1844 118.404 93.8082C117.646 92.6254 116.688 91.5852 115.573 90.7349C115.586 90.6926 115.597 90.6495 115.606 90.6059C115.656 90.3349 115.626 90.0551 115.519 89.8012C115.412 89.5473 115.234 89.3305 115.005 89.1776C114.777 89.0247 114.509 88.9425 114.235 88.9412C113.96 88.9399 113.691 89.0195 113.462 89.1702L113.344 89.086C113.502 87.9367 113.597 86.7797 113.629 85.6201C113.816 85.8426 114.066 86.0022 114.346 86.077C114.626 86.1519 114.922 86.1386 115.194 86.0388C115.466 85.939 115.701 85.7577 115.867 85.5192C116.034 85.2808 116.123 84.9969 116.123 84.7059C116.123 84.415 116.034 84.1311 115.867 83.8927C115.701 83.6543 115.466 83.4729 115.194 83.3731C114.922 83.2733 114.626 83.26 114.346 83.3349C114.066 83.4098 113.816 83.5693 113.629 83.7918C113.598 82.5717 113.495 81.3544 113.322 80.1464C113.505 80.2969 113.723 80.3988 113.956 80.4425C114.189 80.4863 114.429 80.4706 114.654 80.3968C114.879 80.3231 115.083 80.1937 115.245 80.0205C115.407 79.8473 115.524 79.6359 115.583 79.4058C115.643 79.1756 115.644 78.934 115.587 78.7033C115.529 78.4726 115.415 78.26 115.254 78.0853C115.094 77.9105 114.892 77.7792 114.667 77.7032C114.443 77.6273 114.203 77.6092 113.97 77.6507C113.77 77.6877 113.581 77.7668 113.415 77.8828C113.248 77.9989 113.108 78.1491 113.004 78.3237C112.756 77.132 112.439 75.956 112.054 74.8017C112.305 74.9487 112.595 75.0141 112.884 74.989C113.174 74.9639 113.448 74.8495 113.67 74.6615C113.893 74.4735 114.051 74.2211 114.125 73.939C114.198 73.6568 114.183 73.3587 114.081 73.0855C113.984 72.8103 113.805 72.5721 113.567 72.4036C113.329 72.2352 113.046 72.1447 112.755 72.1447C112.464 72.1447 112.181 72.2352 111.943 72.4036C111.706 72.5721 111.526 72.8103 111.429 73.0855C110.979 71.9435 110.463 70.8293 109.882 69.7486C110.074 69.8236 110.28 69.855 110.486 69.8405C110.692 69.8259 110.891 69.7658 111.071 69.6645C111.396 69.4763 111.634 69.1661 111.731 68.8022C111.829 68.4383 111.778 68.0505 111.591 67.724C111.403 67.3975 111.094 67.1591 110.732 67.0613C110.37 66.9635 109.983 67.0143 109.658 67.2024C109.479 67.3071 109.325 67.4514 109.209 67.6243C109.093 67.7972 109.017 67.9943 108.988 68.2007C108.333 67.1456 107.619 66.1289 106.849 65.1554C107.055 65.2018 107.268 65.2007 107.473 65.1521C107.678 65.1035 107.87 65.0087 108.033 64.875C108.222 64.7228 108.368 64.5247 108.459 64.2995C108.55 64.0744 108.582 63.8296 108.552 63.5886C108.522 63.3475 108.431 63.1182 108.288 62.9223C108.145 62.7264 107.955 62.5706 107.735 62.4695C107.515 62.3684 107.273 62.3255 107.031 62.3448C106.79 62.3641 106.558 62.445 106.357 62.5799C106.156 62.7147 105.992 62.8989 105.882 63.1151C105.772 63.3313 105.718 63.5722 105.727 63.815C104.905 62.8806 104.027 61.9984 103.096 61.1735C103.334 61.1781 103.57 61.1219 103.78 61.0103C103.991 60.8987 104.17 60.7353 104.3 60.5354C104.431 60.3355 104.509 60.1056 104.527 59.8672C104.544 59.6288 104.502 59.3897 104.403 59.1723C104.304 58.9549 104.151 58.7663 103.96 58.6242C103.769 58.482 103.544 58.3909 103.308 58.3594C103.072 58.328 102.832 58.3571 102.611 58.4442C102.389 58.5312 102.193 58.6734 102.041 58.8572C101.908 59.0205 101.814 59.2116 101.764 59.4164C101.715 59.6212 101.712 59.8345 101.756 60.0406C100.787 59.2684 99.7744 58.5531 98.7234 57.8982C98.9299 57.8696 99.1273 57.7941 99.3005 57.6775C99.4737 57.5609 99.6182 57.4062 99.723 57.2252C99.9104 56.8987 99.9609 56.5109 99.8635 56.147C99.7661 55.7831 99.5287 55.4729 99.2036 55.2847C98.8785 55.0966 98.4923 55.0458 98.1299 55.1437C97.7675 55.2415 97.4587 55.4798 97.2713 55.8063C97.1704 55.9869 97.1105 56.1876 97.096 56.3942C97.0815 56.6007 97.1128 56.8079 97.1875 57.0009C96.1023 56.4166 94.9834 55.8979 93.8367 55.4474C94.0289 55.3758 94.2037 55.2637 94.3491 55.1186C94.4946 54.9734 94.6074 54.7987 94.68 54.6061C94.7642 54.3815 94.7905 54.1391 94.7564 53.9015C94.7224 53.6639 94.6291 53.4389 94.4853 53.2471C94.3415 53.0554 94.1517 52.9033 93.9337 52.805C93.7156 52.7066 93.4764 52.6652 93.2381 52.6845C92.9999 52.7038 92.7704 52.7833 92.5709 52.9155C92.3714 53.0478 92.2084 53.2285 92.0971 53.4409C91.9858 53.6533 91.9297 53.8905 91.9341 54.1305C91.9385 54.3705 92.0032 54.6055 92.1222 54.8137C90.9719 54.4296 89.801 54.1113 88.6149 53.8602C88.8643 53.7115 89.0624 53.4895 89.1823 53.2242C89.3022 52.959 89.3383 52.6632 89.2856 52.3767C89.2329 52.0902 89.094 51.8269 88.8876 51.6221C88.6813 51.4174 88.4174 51.2811 88.1315 51.2316C87.8456 51.1821 87.5515 51.2219 87.2888 51.3455C87.0261 51.4691 86.8075 51.6706 86.6623 51.9228C86.5172 52.1751 86.4526 52.4659 86.4772 52.7562C86.5018 53.0465 86.6144 53.3222 86.7999 53.5462C85.5969 53.3722 84.3848 53.2692 83.1698 53.2377C83.3932 53.05 83.5536 52.7978 83.6293 52.5153C83.705 52.2329 83.6922 51.9339 83.5928 51.6589C83.4934 51.384 83.3121 51.1465 83.0735 50.9786C82.835 50.8108 82.5507 50.7207 82.2595 50.7207C81.9682 50.7207 81.684 50.8108 81.4454 50.9786C81.2069 51.1465 81.0256 51.384 80.9262 51.6589C80.8267 51.9339 80.814 52.2329 80.8897 52.5153C80.9653 52.7978 81.1258 53.05 81.3492 53.2377C80.1342 53.2692 78.9221 53.3722 77.7191 53.5462C77.8466 53.3919 77.9395 53.2119 77.9915 53.0183C78.0436 52.8248 78.0535 52.6222 78.0207 52.4245C77.9884 52.2404 77.9203 52.0644 77.8203 51.9067C77.7203 51.749 77.5904 51.6126 77.4379 51.5054C77.2855 51.3981 77.1135 51.322 76.9317 51.2815C76.75 51.241 76.5621 51.2368 76.3787 51.2692C76.1954 51.3016 76.0202 51.3699 75.8631 51.4703C75.7061 51.5707 75.5703 51.7012 75.4634 51.8543C75.3566 52.0075 75.2809 52.1802 75.2405 52.3627C75.2002 52.5452 75.196 52.7339 75.2283 52.918C75.2634 53.1181 75.3416 53.3081 75.4573 53.4747C75.5731 53.6413 75.7236 53.7805 75.8985 53.8827C74.7122 54.1331 73.5412 54.4514 72.3912 54.8361C72.5338 54.5832 72.5956 54.2924 72.5683 54.0031C72.5409 53.7138 72.4258 53.44 72.2385 53.2185C72.0511 52.997 71.8006 52.8386 71.5207 52.7648C71.2408 52.6909 70.9451 52.7052 70.6735 52.8055C70.402 52.9059 70.1677 53.0876 70.0022 53.326C69.8368 53.5645 69.7483 53.8482 69.7487 54.1388C69.749 54.4294 69.8382 54.7129 70.0042 54.9509C70.1701 55.189 70.4049 55.3701 70.6767 55.4698C69.5311 55.9208 68.4123 56.4376 67.3258 57.0177C67.4005 56.8257 67.4317 56.6194 67.4172 56.4138C67.4027 56.2081 67.3429 56.0083 67.2421 55.8288C67.0547 55.5023 66.7458 55.2639 66.3835 55.1661C66.0211 55.0683 65.6349 55.119 65.3097 55.3072C64.9846 55.4953 64.7473 55.8055 64.6499 56.1694C64.5525 56.5333 64.603 56.9212 64.7904 57.2477C64.8946 57.428 65.0383 57.5822 65.2104 57.6988C65.3826 57.8154 65.5789 57.8912 65.7844 57.9207C64.7334 58.5756 63.7208 59.2909 62.7519 60.063C62.7982 59.8571 62.7965 59.6432 62.7471 59.4379C62.6977 59.2327 62.6019 59.0417 62.4671 58.8797C62.2257 58.5911 61.88 58.4107 61.5061 58.3781C61.1322 58.3455 60.7607 58.4634 60.4734 58.7058C60.186 58.9483 60.0063 59.2954 59.9739 59.6709C59.9414 60.0464 60.0588 60.4194 60.3002 60.708C60.4376 60.8688 60.6094 60.9962 60.8029 61.0807C60.9964 61.1652 61.2064 61.2046 61.4172 61.1959C60.4895 62.0219 59.6112 62.902 58.7867 63.8318C58.7969 63.6205 58.759 63.4096 58.6757 63.2152C58.5925 63.0209 58.4662 62.8481 58.3065 62.7101C58.0164 62.4864 57.6514 62.3838 57.2879 62.4239C56.9243 62.4639 56.5901 62.6434 56.3552 62.9249C56.1202 63.2064 56.0027 63.5682 56.027 63.9347C56.0514 64.3012 56.2157 64.6441 56.4858 64.8918C56.6481 65.0255 56.8385 65.1202 57.0427 65.1688C57.2469 65.2174 57.4595 65.2186 57.6642 65.1722C56.8966 66.1462 56.1843 67.1629 55.5308 68.2175C55.5003 68.0115 55.4243 67.8149 55.3084 67.6421C55.1924 67.4694 55.0394 67.3249 54.8606 67.2192C54.6997 67.1261 54.522 67.0657 54.3378 67.0414C54.1535 67.0172 53.9664 67.0297 53.7869 67.0781C53.6075 67.1266 53.4393 67.21 53.292 67.3237C53.1447 67.4374 53.0211 67.5791 52.9283 67.7408C52.8356 67.9025 52.7754 68.0809 52.7513 68.2659C52.7272 68.4509 52.7396 68.6389 52.7878 68.8191C52.8361 68.9993 52.9192 69.1681 53.0324 69.3161C53.1456 69.464 53.2867 69.5881 53.4477 69.6813C53.6265 69.7825 53.8255 69.8426 54.0303 69.8572C54.235 69.8717 54.4405 69.8404 54.6317 69.7654C54.0531 70.8472 53.5366 71.9613 53.0847 73.1023C52.9852 72.8277 52.804 72.5904 52.5656 72.4228C52.3273 72.2551 52.0433 72.1651 51.7523 72.1649C51.4613 72.1648 51.1772 72.2546 50.9387 72.4221C50.7002 72.5896 50.5188 72.8267 50.4191 73.1012C50.3193 73.3758 50.3061 73.6745 50.3811 73.9569C50.4562 74.2392 50.616 74.4916 50.8387 74.6797C51.0614 74.8678 51.3364 74.9825 51.6263 75.0084C51.9162 75.0342 52.207 74.9699 52.4592 74.8241C52.0742 75.9784 51.7572 77.1544 51.5098 78.3461C51.3617 78.0956 51.1406 77.8968 50.8765 77.7764C50.6123 77.656 50.3178 77.6198 50.0325 77.6727C49.7472 77.7256 49.485 77.865 49.2811 78.0723C49.0772 78.2795 48.9415 78.5445 48.8922 78.8316C48.8429 79.1187 48.8825 79.414 49.0056 79.6778C49.1287 79.9416 49.3293 80.1612 49.5805 80.3069C49.8317 80.4527 50.1213 80.5176 50.4104 80.4929C50.6994 80.4682 50.974 80.3551 51.197 80.1688C51.0247 81.3771 50.9203 82.5942 50.8843 83.8142C50.7533 83.6563 50.5894 83.5293 50.4041 83.442C50.2188 83.3548 50.0167 83.3096 49.812 83.3095C49.4373 83.3095 49.0779 83.459 48.8129 83.7251C48.5479 83.9912 48.3991 84.3521 48.3991 84.7284C48.3991 85.1047 48.5479 85.4656 48.8129 85.7317C49.0779 85.9978 49.4373 86.1473 49.812 86.1473C50.0167 86.1472 50.2188 86.102 50.4041 86.0147C50.5894 85.9275 50.7533 85.8004 50.8843 85.6425C50.8843 86.2034 50.9346 86.7642 50.9793 87.3587C50.888 87.3937 50.8108 87.4582 50.76 87.542C50.7091 87.6258 50.6874 87.7243 50.6983 87.8218C50.7091 87.9194 50.7519 88.0105 50.82 88.081C50.888 88.1514 50.9774 88.1972 51.0742 88.2111C51.0742 88.4411 51.1189 88.6766 51.1524 88.9122V89.2599C50.9966 89.1364 50.8164 89.0476 50.6239 88.9992C50.4313 88.9509 50.2308 88.9441 50.0354 88.9795C49.666 89.0465 49.3378 89.2574 49.1223 89.5662C48.9069 89.875 48.8216 90.2567 48.885 90.6283C48.9085 90.7421 48.9441 90.853 48.9911 90.9592H34.1133V91.9743H34.2138C34.2432 91.9758 34.2719 91.983 34.2985 91.9956C34.325 92.0082 34.3489 92.026 34.3686 92.0479C34.3883 92.0698 34.4035 92.0953 34.4134 92.1231C34.4233 92.1509 34.4275 92.1804 34.426 92.2099C34.4275 92.2393 34.4233 92.2688 34.4134 92.2966C34.4035 92.3244 34.3883 92.35 34.3686 92.3719C34.3489 92.3937 34.325 92.4115 34.2985 92.4241C34.2719 92.4367 34.2432 92.444 34.2138 92.4454H34.1133V93.096H34.7276L34.4204 93.5447L34.1133 94.0326V97.1676H34.4204V98.6594H34.9789C35.0737 98.6594 35.1646 98.6973 35.2317 98.7646C35.2987 98.8319 35.3364 98.9232 35.3364 99.0184C35.3364 99.1136 35.2987 99.2049 35.2317 99.2722C35.1646 99.3395 35.0737 99.3773 34.9789 99.3773H34.197C34.2918 99.3773 34.3828 99.3395 34.4498 99.2722C34.5168 99.2049 34.5545 99.1136 34.5545 99.0184C34.5545 98.9232 34.5168 98.8319 34.4498 98.7646C34.3828 98.6973 34.2918 98.6594 34.197 98.6594H33.6386V97.1901H33.2923V94.055L33.9737 93.0736H28.8357L29.517 94.055V97.1901H29.1708V98.6819H28.6123C28.5175 98.6819 28.4266 98.7197 28.3596 98.787C28.2925 98.8543 28.2549 98.9456 28.2549 99.0408C28.2549 99.136 28.2925 99.2273 28.3596 99.2946C28.4266 99.3619 28.5175 99.3997 28.6123 99.3997H29.0758L29.4556 100.549H29.0758L29.0367 100.454V104.2H28.4448V100.46L28.3833 100.297L28.0315 99.4053H12.1484V100.275H11.2605L11.819 101.346V104.537H27.0374C27.0374 104.335 27.2496 104.178 27.5121 104.178H28.1097C27.8472 104.178 27.635 104.335 27.635 104.537C27.635 104.739 27.8472 104.89 28.1097 104.89H28.6682L28.7966 105.451H28.5285L28.4615 105.171H12.0814V105.451H10.043L10.6796 106.247C10.6724 106.403 10.7225 106.555 10.8205 106.675C10.9185 106.795 11.0573 106.875 11.2102 106.898C11.1762 106.967 11.1583 107.043 11.158 107.12C11.1576 107.197 11.1748 107.273 11.2082 107.342C11.2416 107.411 11.2904 107.472 11.3507 107.52C11.4111 107.567 11.4815 107.6 11.5565 107.616C11.5565 107.616 11.4559 108.463 12.1149 108.463V125.288H17.0016V108.463H17.4316V106.219H17.9901V108.463H17.6662V109.141H17.951V109.657H18.3252V125.299H26.948V109.691H27.3222V109.175H27.607V108.496H27.0486V106.253H27.607V108.496H27.7187V124.503H27.5679V124.918H27.2217V125.333H36.3081C36.3081 124.503 35.8446 124.503 35.8446 124.503V116.539C36.2913 116.539 36.3081 116.202 36.3081 115.804H35.0627V115.013H35.6212C35.9339 107.762 42.2168 106.741 42.2168 106.741C42.2168 106.741 48.5052 107.762 48.818 115.013H49.3764V115.804H48.131C48.131 116.202 48.131 116.539 48.5946 116.539V124.503C48.5946 124.503 48.131 124.503 48.131 125.333H57.2063V124.918H56.86V124.503H56.5919V124.088H56.5473V108.496H56.8042V106.909C56.9787 106.994 57.1688 107.042 57.3626 107.049V108.496H56.8042V109.175H57.089V109.691H57.4632V125.333H62.7463C62.7941 125.399 62.8574 125.453 62.9306 125.49C63.0375 125.542 63.1592 125.554 63.2745 125.526C63.3897 125.497 63.4914 125.429 63.5617 125.333H66.086V120.033L67.27 117.531V125.333H72.2963V116.09C72.3611 115.995 72.4154 115.894 72.4582 115.787C72.5264 115.594 72.5522 115.388 72.5339 115.184C72.5156 114.98 72.4536 114.782 72.3521 114.604C72.7654 114.738 73.1842 114.862 73.6087 114.985L73.3685 120.857H72.6593V125.562H147.975V125.949H149.757V121.85H156.939V125.949H158.715V109.276H159.061V108.805H158.715V108.311L159.061 107.846L159.251 107.375H158.692V102.518L159.039 102.047H157.285L157.481 101.576H159.257V101.11H158.698L158.715 94.1055ZM26.7023 103.797H17.3758V101.957H26.7023V103.797ZM13.1425 108.496H12.5841V106.253H13.1425V108.496ZM14.7509 108.496H14.1925V106.253H14.7509V108.496ZM16.3593 108.496H15.8009V106.253H16.3593V108.496ZM25.5742 112.983C25.7051 113.244 25.8116 113.516 25.8925 113.796H24.8817V112.983H25.5742ZM24.8817 112.865V112.052H24.9264C25.1466 112.298 25.3343 112.571 25.4848 112.865H24.8817ZM25.9316 113.914C26.0033 114.181 26.0574 114.453 26.0936 114.727H24.8817V113.914H25.9316ZM20.129 115.782H19.0624C19.0629 115.469 19.0815 115.156 19.1182 114.845H20.129V115.782ZM20.129 114.727H19.135C19.1712 114.453 19.2252 114.181 19.2969 113.914H20.129V114.727ZM20.129 113.796H19.3416C19.4243 113.516 19.5327 113.243 19.6655 112.983H20.1346L20.129 113.796ZM20.129 112.865H19.7214C19.8396 112.65 19.976 112.446 20.129 112.254V112.865ZM21.0561 115.782H20.2519V114.856H21.0561V115.782ZM21.0561 114.727H20.2519V113.914H21.0561V114.727ZM21.0561 113.796H20.2519V112.983H21.0561V113.796ZM21.0561 112.865H20.2519V112.114L20.3078 112.052H21.0561V112.865ZM21.0561 111.934H20.425C20.6186 111.748 20.83 111.58 21.0561 111.435V111.934ZM21.9832 115.782H21.179V114.856H21.9832V115.782ZM21.9832 114.727H21.179V113.914H21.9832V114.727ZM21.9832 113.796H21.179V112.983H21.9832V113.796ZM21.9832 112.865H21.179V112.052H21.9832V112.865ZM21.9832 111.934H21.179V111.373C21.4321 111.225 21.7021 111.109 21.9832 111.026V111.934ZM22.9103 115.782H22.1005V114.856H22.9103V115.782ZM22.9103 114.727H22.1005V113.914H22.9103V114.727ZM22.9103 113.796H22.1005V112.983H22.9103V113.796ZM22.9103 112.865H22.1005V112.052H22.9103V112.865ZM22.9103 111.934H22.1005V110.987C22.269 110.941 22.4408 110.909 22.6143 110.891C22.6143 110.891 22.7316 110.891 22.9103 110.936V111.934ZM23.8373 115.782H23.0275V114.856H23.8373V115.782ZM23.8373 114.727H23.0275V113.914H23.8373V114.727ZM23.8373 113.796H23.0275V112.983H23.8373V113.796ZM23.8373 112.865H23.0275V112.052H23.8373V112.865ZM23.8373 111.934H23.0275V110.987C23.3076 111.053 23.5793 111.15 23.8373 111.278V111.934ZM24.7644 115.782H23.9546V114.856H24.7644V115.782ZM24.7644 114.727H23.9546V113.914H24.7644V114.727ZM24.7644 113.796H23.9546V112.983H24.7644V113.796ZM24.7644 112.865H23.9546V112.052H24.7644V112.865ZM24.7644 111.934H23.9546V111.312C24.2485 111.461 24.5209 111.65 24.7644 111.873V111.934ZM24.8817 115.782V114.856H26.1103C26.147 115.167 26.1656 115.48 26.1662 115.793L24.8817 115.782ZM25.4401 106.247H25.9986V108.491H25.4401V106.247ZM23.8262 106.247H24.3847V108.491H23.8262V106.247ZM22.2178 106.247H22.7762V108.491H22.2178V106.247ZM20.6094 106.247H21.1678V108.491H20.6094V106.247ZM19.0009 106.247H19.5594V108.491H19.0009V106.247ZM33.7056 99.3661H34.158L33.7056 100.516H33.3035L33.7056 99.3661ZM33.4878 104.873H33.767L33.5436 106.029H33.3035L33.4878 104.873ZM31.6728 99.3661H32.1251L32.0022 100.516H31.6281L31.6728 99.3661ZM31.5275 104.873V106.029H31.2706V104.873H31.5275ZM31.1087 99.3661L31.1534 100.516H30.7736L30.6507 99.3661H31.1087ZM29.2881 104.873L29.4835 106.029H29.2322L29.0088 104.873H29.2881ZM28.8357 105.771L28.9027 106.062H28.8357V105.771ZM29.8856 121.418H28.8971V107.65H29.8856V121.418ZM29.7851 106.062L29.6176 104.907H29.8968L30.0364 106.062H29.7851ZM29.9024 100.549L29.6176 99.3997H30.0699L30.2877 100.549H29.9024ZM30.606 104.907H30.8853L30.93 106.062H30.6787L30.606 104.907ZM31.8682 121.418H30.8741V107.65H31.8682V121.418ZM32.0637 106.062H31.8124L31.857 104.907H32.1363L32.0637 106.062ZM32.6724 99.3997H33.1248L32.84 100.549H32.4602L32.6724 99.3997ZM32.8455 104.907H33.1248L32.9628 106.062H32.745L32.8455 104.907ZM33.862 121.418H32.8679V107.65H33.862V121.418ZM34.3758 104.958L34.2864 105.345L34.1133 106.062H33.862L34.1133 104.907H34.3925L34.3758 104.958ZM97.9806 116.735C98.0623 116.545 98.1816 116.373 98.3314 116.23C98.4811 116.088 98.6582 115.977 98.8518 115.905C99.1572 115.743 99.4486 115.555 99.723 115.344C99.995 115.556 100.285 115.743 100.589 115.905C101.03 116.124 101.706 116.37 101.706 118.087V120.891H100.321V119.315C100.321 119.236 100.306 119.157 100.277 119.083C100.247 119.01 100.203 118.943 100.148 118.887C100.092 118.831 100.026 118.786 99.953 118.755C99.8801 118.725 99.802 118.709 99.723 118.709C99.587 118.715 99.4571 118.768 99.3554 118.859C99.2537 118.95 99.1862 119.073 99.1645 119.208L97.9806 116.735ZM102.415 105.939H102.353V104.739C102.331 104.449 102.421 104.161 102.605 103.937C102.702 103.807 102.786 103.668 102.856 103.522V102.838H103.348L104.046 103.398H103.409V104.918C103.113 105.266 102.761 105.597 102.42 105.922L102.415 105.939ZM101.678 111.222V114.026H100.321V112.467C100.321 112.307 100.258 112.154 100.146 112.041C100.034 111.927 99.882 111.863 99.723 111.861C99.6293 111.865 99.5377 111.89 99.455 111.934C99.2471 111.736 98.9843 111.605 98.701 111.559C99.6194 110.981 100.509 110.358 101.365 109.691C101.601 110.159 101.711 110.681 101.683 111.205L101.678 111.222ZM85.1468 99.6801H85.4763V99.9662C85.5084 100.026 85.5458 100.082 85.588 100.134C85.628 100.179 85.6585 100.231 85.6777 100.288C85.6969 100.345 85.7044 100.405 85.6997 100.465V101.396H85.4763V101.553L85.1468 99.6801ZM85.8784 101.396V100.465C85.8749 100.403 85.8862 100.34 85.9114 100.282C85.9367 100.225 85.9751 100.174 86.0236 100.134C86.0236 100.096 86.0389 100.059 86.0661 100.031C86.0934 100.004 86.1303 99.9886 86.1688 99.9886C86.2073 99.9886 86.2443 100.004 86.2715 100.031C86.2987 100.059 86.314 100.096 86.314 100.134C86.3632 100.174 86.4022 100.224 86.4275 100.282C86.4528 100.339 86.4637 100.402 86.4592 100.465V101.396H85.8784ZM111.49 85.693C111.478 85.5824 111.426 85.4803 111.343 85.4058C111.261 85.3314 111.154 85.2899 111.043 85.2892C111.104 85.289 111.165 85.3005 111.222 85.3229V84.9864H111.49C111.49 85.2051 111.49 85.4406 111.49 85.693ZM111.378 87.4596L111.2 87.269C111.28 87.2465 111.355 87.2063 111.417 87.1512C111.378 87.2409 111.367 87.3419 111.356 87.4428L111.378 87.4596ZM110.859 84.9864V85.3285C110.777 85.3632 110.707 85.4217 110.658 85.4967C110.609 85.5717 110.584 85.6596 110.585 85.7491C110.585 85.832 110.607 85.9135 110.649 85.9846C110.692 86.0558 110.753 86.114 110.826 86.1529C110.677 86.1603 110.538 86.2266 110.439 86.337C110.339 86.4474 110.288 86.593 110.295 86.7418C110.302 86.8905 110.368 87.0302 110.478 87.1301C110.588 87.23 110.733 87.282 110.881 87.2746C110.224 87.9762 109.492 88.6025 108.698 89.1421L100.198 87.6335C100.337 86.7595 100.418 85.8769 100.438 84.992L110.859 84.9864ZM108.106 89.5572C106.809 90.4159 105.625 91.4353 104.582 92.5912L99.4214 90.7068C99.7174 89.8712 99.9507 89.0144 100.12 88.1438L108.106 89.5572ZM102.856 96.3488L98.109 93.5951C98.5408 92.8224 98.9142 92.0181 99.226 91.1892L104.23 92.9838C104.04 93.2418 103.85 93.5054 103.671 93.7858C103.169 94.5479 102.887 95.4352 102.856 96.3488ZM98.5335 104.728C98.5304 104.688 98.5304 104.649 98.5335 104.61L99.6504 105.928H98.5335V104.728ZM98.7625 104.055C98.8071 104.004 98.8518 103.965 98.8909 103.926C98.8817 103.874 98.8839 103.821 98.8973 103.77C98.9107 103.719 98.9351 103.672 98.9686 103.632C99.0022 103.592 99.0441 103.559 99.0915 103.537C99.1388 103.515 99.1905 103.503 99.2427 103.503C99.295 103.503 99.3466 103.515 99.394 103.537C99.4413 103.559 99.4833 103.592 99.5168 103.632C99.5504 103.672 99.5747 103.719 99.5881 103.77C99.6016 103.821 99.6038 103.874 99.5946 103.926C99.7149 104.02 99.8104 104.142 99.8728 104.282C99.9351 104.422 99.9623 104.575 99.952 104.728V105.468L98.7625 104.055ZM101.845 104.728V105.928H100.432V104.728C100.422 104.575 100.449 104.423 100.51 104.283C100.572 104.144 100.666 104.021 100.784 103.926C100.919 103.802 101.039 103.663 101.142 103.511C101.24 103.664 101.358 103.803 101.493 103.926C101.611 104.02 101.705 104.142 101.766 104.281C101.827 104.419 101.854 104.571 101.845 104.722V104.728ZM98.997 99.9045C98.2095 100.297 97.3886 100.656 97.3886 102.31H97.3048L94.1215 98.4968C94.789 97.9162 95.4142 97.2883 95.9924 96.618L99.4829 99.5624C99.336 99.695 99.1727 99.8081 98.997 99.8989V99.9045ZM95.9366 95.8889L84.7112 86.4333L97.3886 93.7858C96.9559 94.5195 96.4706 95.2205 95.9366 95.8833V95.8889ZM84.9737 85.9734L98.7345 91.0209C98.4319 91.821 98.0736 92.5988 97.6622 93.3484L84.9737 85.9734ZM99.5834 88.0373C99.4213 88.8772 99.1973 89.7039 98.9132 90.5106L85.1468 85.4631L99.5834 88.0373ZM85.2417 84.9695H99.8961C99.8824 85.8246 99.8059 86.6776 99.6672 87.5213L85.2417 84.9695ZM85.2417 84.4424L99.6672 81.8906C99.8059 82.7344 99.8824 83.5873 99.8961 84.4424H85.2417ZM85.1524 83.932L98.9188 78.8845C99.2021 79.6914 99.4261 80.518 99.589 81.3578L85.1524 83.932ZM84.9793 83.4385L97.6678 76.0804C98.0792 76.83 98.4375 77.6077 98.7401 78.4078L84.9793 83.4385ZM84.7168 82.9842L95.9421 73.5286C96.4764 74.1932 96.9617 74.8961 97.3942 75.6317L84.7168 82.9842ZM95.5959 96.2759C95.0401 96.9256 94.4372 97.5329 93.792 98.093L84.3761 86.8147L95.5959 96.2759ZM93.4011 98.4351C92.7382 98.973 92.0363 99.4604 91.3012 99.8933L84.1248 87.4092L84.041 87.2297L93.4011 98.4351ZM92.4014 104.901V104.144C92.409 104.145 92.4166 104.144 92.4238 104.142C92.431 104.139 92.4375 104.135 92.4429 104.13C92.4483 104.125 92.4523 104.118 92.4548 104.111C92.4573 104.104 92.4581 104.096 92.4572 104.088C92.4573 104.081 92.4558 104.074 92.453 104.068C92.4501 104.061 92.4459 104.055 92.4406 104.05C92.4353 104.046 92.4291 104.042 92.4224 104.04C92.4156 104.038 92.4085 104.037 92.4014 104.038C92.4109 103.96 92.3925 103.882 92.3495 103.817C92.3064 103.753 92.2416 103.705 92.1669 103.684C92.0907 103.639 92.0288 103.573 91.9881 103.494C91.9505 103.573 91.8903 103.64 91.815 103.684L90.5138 100.925L91.1057 100.617L94.3505 106.253L93.1665 106.534L92.4014 104.901ZM90.3015 100.46L86.9172 93.3147L90.86 100.168L90.3015 100.46ZM89.3633 100.914C89.0952 101.037 88.8048 101.138 88.5423 101.245L87.9838 99.6633H88.0955C88.1355 99.6633 88.1739 99.6474 88.2022 99.619C88.2304 99.5906 88.2463 99.5521 88.2463 99.5119C88.2464 99.4712 88.2307 99.4321 88.2025 99.4028C88.1744 99.3735 88.136 99.3563 88.0955 99.3549H87.8722L85.3367 92.423L89.3633 100.914ZM87.1294 100.118C87.1786 100.157 87.2175 100.207 87.2428 100.265C87.2681 100.323 87.2791 100.386 87.2746 100.448V101.396H86.7161V100.465C86.7126 100.403 86.7239 100.34 86.7492 100.282C86.7744 100.225 86.8128 100.174 86.8613 100.134C86.8613 100.096 86.8766 100.059 86.9038 100.031C86.9311 100.004 86.968 99.9886 87.0065 99.9886C87.045 99.9886 87.082 100.004 87.1092 100.031C87.1364 100.059 87.1517 100.096 87.1517 100.134L87.1294 100.118ZM87.4756 101.396V100.465C87.4671 100.345 87.5052 100.227 87.5818 100.134L88.0564 101.447C87.9336 101.492 87.8051 101.525 87.6767 101.565V101.396H87.4756ZM87.9727 108.743H88.0341V108.962H88.2072V108.743C88.2483 108.742 88.2873 108.725 88.3163 108.696C88.3453 108.666 88.3622 108.627 88.3636 108.586C88.3622 108.545 88.345 108.507 88.3159 108.479C88.2867 108.45 88.2478 108.435 88.2072 108.435H87.928L87.6711 102.193H87.7493V102.075L87.8945 102.03V102.193H88.062V101.957L88.2072 101.912L91.6028 111.278V112.495C90.4663 112.884 89.3059 113.199 88.1291 113.437L87.9727 108.743ZM88.7322 101.75C89.0226 101.643 89.2907 101.531 89.5978 101.402L91.6363 105.715V107.526L92.407 107.341L92.6415 107.84L91.6363 108.076V109.758L88.7322 101.75ZM92.5019 111.205C92.5019 109.483 92.8984 109.237 93.1609 109.018L94.3114 111.446C93.7138 111.716 93.1051 111.974 92.4852 112.209L92.5019 111.205ZM93.4178 107.078L94.652 106.786L94.9313 107.274L93.6524 107.577L93.4178 107.078ZM96.2102 110.476L95.7858 110.706V108.743L96.2102 109.483V110.476ZM100.544 108.99C99.6564 109.66 98.7336 110.281 97.7795 110.852C97.793 110.598 97.8342 110.346 97.9024 110.1C98.6247 109.644 99.3265 109.166 100.008 108.665C100.181 108.782 100.36 108.891 100.544 108.99ZM96.2102 107.072V108.44L95.7858 107.7V107.072L95.4674 107.15L95.1882 106.663L95.7858 106.522V105.922L94.8866 106.135L91.5358 100.348C92.2965 99.8978 93.0226 99.3917 93.7082 98.8333L96.8748 102.625V102.821H97.0367L97.5394 103.421V103.505C97.6157 103.653 97.7074 103.792 97.813 103.92C97.9109 104.028 97.9856 104.155 98.0327 104.293C98.0798 104.43 98.0981 104.577 98.0867 104.722V105.922H96.5732V103.079C96.588 103.079 96.6022 103.073 96.6127 103.062C96.6232 103.052 96.6291 103.038 96.6291 103.023C96.6291 103.008 96.6232 102.994 96.6127 102.983C96.6022 102.973 96.588 102.967 96.5732 102.967C96.5802 102.89 96.5607 102.814 96.5179 102.751C96.4751 102.687 96.4118 102.641 96.3387 102.619C96.3387 102.571 96.3198 102.526 96.2863 102.492C96.2528 102.458 96.2073 102.439 96.1599 102.439C96.1125 102.439 96.0671 102.458 96.0336 102.492C96.0001 102.526 95.9812 102.571 95.9812 102.619C95.9081 102.641 95.8447 102.687 95.802 102.751C95.7592 102.814 95.7397 102.89 95.7467 102.967C95.7319 102.967 95.7177 102.973 95.7072 102.983C95.6967 102.994 95.6908 103.008 95.6908 103.023C95.6908 103.038 95.6967 103.052 95.7072 103.062C95.7177 103.073 95.7319 103.079 95.7467 103.079H95.8528V106.001L96.2381 105.922V106.511H100.181L100.645 107.072H96.2102ZM100.834 106.511H101.778C101.599 106.674 101.421 106.836 101.22 106.993L100.834 106.511ZM104.185 101.301V102.804L103.029 101.834C102.884 100.572 102.152 100.241 101.449 99.8876C100.928 99.5813 100.506 99.1292 100.237 98.5865C100.129 98.7842 100.004 98.9718 99.8626 99.1474L96.3554 96.1918C96.9096 95.5019 97.4135 94.7728 97.8633 94.0101L102.89 96.9377C103.03 97.8921 103.477 98.7743 104.163 99.4502C104.163 99.4502 104.364 99.1642 106.397 98.9735L107.43 99.5736C107.19 99.9718 106.944 100.37 106.693 100.757C104.431 100.987 104.163 101.312 104.163 101.312L104.185 101.301ZM107.346 98.923L107.849 98.895L107.715 99.1361L107.346 98.923ZM111.256 86.1248C111.311 86.0941 111.36 86.0524 111.399 86.0024C111.439 85.9523 111.468 85.8947 111.485 85.8332C111.485 85.979 111.485 86.1249 111.485 86.2707C111.414 86.2047 111.327 86.1584 111.233 86.1361L111.256 86.1248ZM111.468 84.4424C111.487 84.3961 111.499 84.3468 111.501 84.2966C111.501 84.1746 111.453 84.0576 111.367 83.9714C111.281 83.8851 111.165 83.8367 111.043 83.8367C111.104 83.8365 111.165 83.8479 111.222 83.8703V82.6926C111.222 82.6926 111.222 82.5019 111.038 82.5019C110.853 82.5019 110.859 82.6926 110.859 82.6926V83.8759C110.777 83.9106 110.707 83.9692 110.658 84.0442C110.609 84.1191 110.584 84.207 110.585 84.2966C110.577 84.3448 110.577 84.3941 110.585 84.4424H100.416C100.395 83.5574 100.315 82.6749 100.175 81.8008L111.088 79.866C111.339 81.3787 111.472 82.9088 111.485 84.4424H111.468ZM100.12 81.2849C99.9507 80.4143 99.7174 79.5576 99.4214 78.7219L109.815 74.9138C110.325 76.3609 110.721 77.8461 110.999 79.3556L100.12 81.2849ZM99.2036 78.2284C98.8919 77.3994 98.5185 76.5951 98.0867 75.8224L107.67 70.2645C108.426 71.596 109.076 72.9856 109.614 74.4203L99.2036 78.2284ZM97.8242 75.3737C97.3745 74.6111 96.8705 73.8819 96.3163 73.1921L104.788 66.0639C105.759 67.2486 106.636 68.5067 107.413 69.8271L97.8242 75.3737ZM95.9924 72.7939C95.4142 72.1236 94.789 71.4957 94.1215 70.9151L101.236 62.4017C102.396 63.3983 103.478 64.484 104.47 65.6489L95.9924 72.7939ZM95.5903 73.1304L84.3761 82.5804L93.7864 71.3189C94.4331 71.8774 95.0362 72.4848 95.5903 73.136V73.1304ZM83.9796 82.2439L91.2956 69.513C92.0308 69.9459 92.7327 70.4333 93.3955 70.9712L83.9796 82.2439ZM83.5272 81.9803L88.5535 68.1614C89.3502 68.4653 90.1247 68.8252 90.8712 69.2382L83.5272 81.9803ZM83.0358 81.8008L85.5824 67.309C86.4186 67.4725 87.2418 67.6974 88.0453 67.982L83.0358 81.8008ZM86.8893 98.2332C86.7622 98.1159 86.6564 97.9774 86.5765 97.8238C86.4681 98.0567 86.2931 98.2519 86.0739 98.3846C85.8662 98.4461 85.6864 98.5782 85.5651 98.7583C85.4439 98.9384 85.3888 99.1553 85.4093 99.3717H85.1021L83.0358 87.6223L86.8893 98.2332ZM88.5647 114.497C88.5524 114.474 88.534 114.454 88.5114 114.44C88.4887 114.426 88.4627 114.419 88.4362 114.419H88.1961V113.987C89.3633 113.748 90.5157 113.441 91.6474 113.067V113.678C90.6312 114.003 89.5985 114.273 88.5535 114.486L88.5647 114.497ZM92.8929 113.241L92.6918 112.68C93.3285 112.439 93.954 112.175 94.5683 111.895L94.814 112.422C94.1774 112.714 93.5351 112.983 92.8817 113.23L92.8929 113.241ZM94.4454 109.225C94.6106 109.419 94.7224 109.653 94.7693 109.904L94.4454 109.225ZM95.7969 111.306L96.2214 111.082V111.738C96.0762 111.811 95.9366 111.895 95.7969 111.968V111.306ZM96.2214 112.921V112.977V112.933V112.921ZM101.957 107.083L102.566 106.522H103.124V106.001L103.442 105.681V106.494C103.241 106.691 103.046 106.887 102.839 107.055L101.957 107.083ZM103.107 108.244L103.426 107.936V108.289C103.32 108.278 103.213 108.278 103.107 108.289V108.244ZM107.363 100.746C107.542 100.46 107.72 100.185 107.894 99.8764L108.396 100.162C108.29 100.348 108.173 100.527 108.067 100.723L107.363 100.746ZM108.659 99.7138L108.156 99.4222C108.257 99.2483 108.346 99.0688 108.441 98.8894H109.111C108.949 99.153 108.804 99.4222 108.647 99.7138H108.659ZM111.842 87.9363C111.95 86.9604 112.008 85.9795 112.015 84.9976H112.574C112.561 86.1319 112.487 87.2646 112.35 88.3906C112.177 88.2168 112.004 88.0653 111.831 87.9363H111.842ZM112.596 84.4704H112.037C112.026 82.9068 111.891 81.3466 111.635 79.8043L112.194 79.7033C112.452 81.2701 112.59 82.8544 112.607 84.4424L112.596 84.4704ZM112.088 79.193L111.529 79.2883C111.248 77.7497 110.845 76.2362 110.323 74.7624L110.881 74.5661C111.399 76.0651 111.799 77.6028 112.076 79.1649L112.088 79.193ZM110.68 74.0726L110.122 74.2745C109.573 72.7965 108.91 71.3638 108.139 69.9897L108.642 69.7037C109.43 71.095 110.108 72.5464 110.669 74.0446L110.68 74.0726ZM108.396 69.2887L107.894 69.5803C107.103 68.2317 106.208 66.9472 105.218 65.7386L105.665 65.3685C106.672 66.5923 107.581 67.8937 108.385 69.2607L108.396 69.2887ZM101.946 61.5773C103.147 62.6112 104.267 63.7362 105.297 64.9423L104.85 65.318C103.84 64.1298 102.738 63.0234 101.555 62.0091L101.946 61.5773ZM97.6455 58.4927C99.0187 59.3018 100.326 60.2188 101.555 61.2352L101.181 61.6838C99.9814 60.6865 98.704 59.7881 97.3607 58.9974L97.6455 58.4927ZM100.846 62.082L93.7306 70.5786C93.045 70.0202 92.3188 69.5141 91.5581 69.0644L97.0982 59.4293C98.413 60.2097 99.6659 61.091 100.846 62.0652V62.082ZM92.8817 56.1989C94.37 56.7535 95.8118 57.4267 97.1931 58.2123L96.9027 58.717C95.5495 57.9434 94.1378 57.2777 92.6806 56.7261L92.8817 56.1989ZM96.6458 59.1881L91.1113 68.812C90.3418 68.3784 89.5409 68.0034 88.7154 67.6903L92.5019 57.2196C93.9324 57.7592 95.318 58.4118 96.6458 59.1713V59.1881ZM87.7828 54.7856C89.3487 55.0737 90.8894 55.4863 92.3902 56.0194L92.1892 56.5803C90.722 56.0546 89.2148 55.6495 87.6823 55.3689L87.7828 54.7856ZM92.0161 57.057L88.224 67.5109C87.3909 67.2181 86.538 66.9857 85.6718 66.8154L87.5929 55.868C89.0955 56.1424 90.5743 56.5343 92.0161 57.0402V57.057ZM82.522 54.2528C84.1146 54.2653 85.7037 54.4041 87.2746 54.6678L87.1741 55.2287C85.6364 54.9715 84.0808 54.8364 82.522 54.8249V54.2528ZM82.522 55.3745C84.0509 55.3872 85.5765 55.5204 87.0847 55.7727L85.158 66.7313C84.2861 66.5881 83.4052 66.5075 82.522 66.4902V55.3745ZM82.522 67.0117C83.3753 67.0302 84.2263 67.1089 85.0686 67.2473L82.522 81.7335V67.0117ZM82.522 87.7008L84.9793 101.722C84.947 101.75 84.9269 101.791 84.9234 101.834C84.925 101.864 84.9354 101.892 84.9533 101.916C84.9712 101.94 84.9958 101.958 85.0239 101.968L85.0686 102.209C84.2263 102.348 83.3753 102.427 82.522 102.445V87.7008ZM82.522 102.944C83.4054 102.93 84.2865 102.849 85.158 102.703L85.3869 104.01L85.2082 108.429H84.9234C84.8834 108.429 84.8451 108.445 84.8168 108.473C84.7885 108.502 84.7726 108.54 84.7726 108.581C84.7726 108.621 84.7883 108.66 84.8164 108.69C84.8446 108.719 84.8829 108.736 84.9234 108.738V108.956H85.0909V108.738H85.2194L85.0072 113.931C84.1974 114.009 83.3764 114.054 82.5443 114.06L82.522 102.944ZM82.522 114.581C83.2424 114.581 83.9573 114.542 84.6609 114.486C84.6408 114.51 84.629 114.539 84.6274 114.57C84.6274 114.611 84.6431 114.65 84.6712 114.679C84.6994 114.709 84.7377 114.726 84.7782 114.727V114.946H84.9402V115.047C84.1416 115.12 83.3373 115.159 82.522 115.165V114.581ZM82.0026 54.2865V54.8473C80.4456 54.8591 78.8919 54.9941 77.3561 55.2511L77.2555 54.6903C78.8249 54.4305 80.4121 54.2955 82.0026 54.2865ZM58.4349 106.64C58.5416 106.536 58.6303 106.415 58.6974 106.281H58.9934V108.524H58.4349V106.64ZM71.6038 108.496L71.883 107.908V108.496H71.6038ZM70.2746 106.253V108.496H69.7161V107.122L70.202 106.281L70.2746 106.253ZM68.0909 108.496V106.253H68.6494V107.846L68.292 108.468L68.0909 108.496ZM63.383 108.496L63.2657 108.401V107.879L63.3718 107.75L63.8409 108.121V108.496H63.383ZM53.7716 99.6353C53.6789 99.6664 53.5892 99.7058 53.5036 99.7531C53.4408 99.7915 53.3811 99.8346 53.3248 99.882V99.3997H53.7828L53.7716 99.6353ZM52.6547 90.2133L53.0289 90.1516C53.0568 90.3031 53.0959 90.4601 53.1238 90.6115H52.6547V90.2133ZM54.8886 87.297V86.9997C54.8886 86.5062 54.3971 85.665 53.9224 84.9695H64.109C64.1237 85.8548 64.204 86.7378 64.3492 87.6111L54.8886 89.2936V88.2055C54.9992 88.1931 55.1013 88.1402 55.1755 88.0569C55.2497 87.9737 55.2908 87.8658 55.2908 87.7541C55.2908 87.6423 55.2497 87.5345 55.1755 87.4512C55.1013 87.3679 54.9992 87.315 54.8886 87.3026V87.297ZM53.4254 88.9795V89.5067C53.3807 89.2375 53.3472 88.9458 53.3081 88.6991C53.3725 88.7717 53.4083 88.8654 53.4086 88.9627L53.4254 88.9795ZM54.0509 88.9795C54.0509 88.7608 54.1626 88.5869 54.3022 88.5869C54.4418 88.5869 54.5479 88.7608 54.5479 88.9795V89.3665L54.0509 89.4506V88.9795ZM54.0509 89.9834L54.5479 89.8936V90.6283H54.0509V89.9834ZM54.9947 92.4398C55.026 92.4406 55.0571 92.435 55.0862 92.4235C55.1153 92.412 55.1418 92.3948 55.1642 92.3728C55.1866 92.3509 55.2043 92.3247 55.2165 92.2957C55.2286 92.2668 55.2349 92.2357 55.2348 92.2043C55.2349 92.1728 55.2286 92.1418 55.2165 92.1128C55.2043 92.0839 55.1866 92.0576 55.1642 92.0357C55.1418 92.0137 55.1153 91.9965 55.0862 91.985C55.0571 91.9735 55.026 91.968 54.9947 91.9687H54.8886V89.8376L64.4273 88.1551C64.5969 89.0249 64.8283 89.8814 65.1198 90.7181L54.8886 94.4588V94.083L55.5699 93.1016H54.2519C54.1905 92.8885 54.1235 92.6698 54.0676 92.451L54.9947 92.4398ZM74.2286 100.477L73.6701 100.185L74.2956 99.0913L74.2398 100.448L74.2286 100.477ZM71.7769 97.6724L74.7312 94.1391V95.2888H74.4352V95.6366H73.9047C73.8514 95.6366 73.8002 95.6578 73.7625 95.6957C73.7248 95.7336 73.7036 95.7849 73.7036 95.8385C73.7036 95.892 73.7248 95.9433 73.7625 95.9812C73.8002 96.0191 73.8514 96.0404 73.9047 96.0404V96.332H74.1281V96.0404H74.3235V96.332H74.4185L74.3515 97.9696L73.2345 99.9101C72.57 99.5129 71.932 99.0727 71.3245 98.5921H72.1343V97.6724H71.7769ZM77.0321 94.5485V94.3354L77.5906 93.3315L77.0321 94.5485ZM76.7138 93.8419L75.9934 95.0981V94.0494C75.9871 93.9665 76.0012 93.8833 76.0343 93.807C76.0674 93.7308 76.1185 93.6638 76.1833 93.6119C76.2561 93.5459 76.3199 93.4705 76.3731 93.3876C76.4287 93.4687 76.4923 93.5438 76.563 93.6119C76.6313 93.6694 76.685 93.7425 76.7194 93.8251L76.7138 93.8419ZM75.3456 93.4044C75.4022 93.4863 75.4678 93.5615 75.541 93.6288C75.6047 93.6816 75.6551 93.7487 75.6881 93.8247C75.7211 93.9007 75.7357 93.9834 75.7309 94.0662V95.2888H74.9658V94.0494C74.9597 93.952 74.981 93.8548 75.0272 93.769L75.1613 93.6119C75.2336 93.5454 75.2973 93.47 75.3511 93.3876L75.3456 93.4044ZM68.5322 96.6292C68.8393 96.9882 69.1688 97.3359 69.5039 97.6724H67.27L68.5322 96.6292ZM66.4881 97.6724H60.451L66.6892 94.055C67.137 94.8176 67.6391 95.5467 68.1915 96.2366L66.4881 97.6724ZM67.1304 93.797L79.8134 86.4445L68.588 95.9002C68.055 95.2286 67.5698 94.5202 67.136 93.7802L67.1304 93.797ZM66.8623 93.3484C66.451 92.5988 66.0927 91.821 65.79 91.0209L79.5509 85.9734L66.8623 93.3484ZM65.6113 90.5442C65.3272 89.7376 65.1033 88.9109 64.9412 88.0709L79.3722 85.5135L65.6113 90.5442ZM66.41 93.6232L59.4066 97.6892H56.0558C55.6314 96.8199 55.2404 95.9338 54.8997 95.0253L65.3097 91.2172C65.6217 92.0334 65.9912 92.8261 66.4155 93.5895L66.41 93.6232ZM56.5249 98.2556C56.6248 98.2495 56.723 98.2831 56.7983 98.3493C56.8736 98.4154 56.9198 98.5088 56.927 98.609H57.815L56.8265 99.1698C56.6534 98.8669 56.4914 98.5529 56.3294 98.2444L56.5249 98.2556ZM57.4408 99.4334L58.8538 98.609H65.3935L64.4162 99.4334H57.4408ZM61.3948 101.957L59.7194 103.37C59.3396 102.911 58.9822 102.439 58.6359 101.957H61.3948ZM66.2089 98.5921H70.336L69.6491 99.4166H65.2315L66.2089 98.5921ZM70.7996 98.8501C71.0397 99.052 71.291 99.2315 71.5479 99.4109H70.3304L70.7996 98.8501ZM72.3968 99.9718C72.5588 100.078 72.7151 100.185 72.8827 100.286H72.3968V99.9718ZM73.4132 100.617C73.6087 100.723 73.8097 100.824 74.0108 100.925L72.7375 103.64V101.817L73.4132 100.617ZM76.4904 95.2664L76.7641 94.7897V95.1094L76.6915 95.2664H76.4904ZM77.3393 96.3208H77.4231V96.1245L77.4678 96.0291H77.6185V96.3208H77.7637L77.3672 97.4088L77.3393 96.3208ZM77.8419 96.0179H77.8866L77.8531 96.1133V96.0291L77.8419 96.0179ZM78.0039 95.6982C77.9854 95.6724 77.9611 95.6513 77.9329 95.6367C77.9048 95.6221 77.8736 95.6143 77.8419 95.6141H77.6744L79.1934 92.4062L78.0039 95.6982ZM77.4454 92.6025C77.4733 92.3925 77.4415 92.1788 77.3535 91.9863C77.2655 91.7937 77.1251 91.6302 76.9484 91.5144L80.5338 87.2297L80.45 87.4035L77.4454 92.6025ZM76.4793 91.2509C76.2436 91.0824 76.0519 90.8592 75.9208 90.6003C75.7739 90.8935 75.5448 91.1372 75.2618 91.3013C74.9889 91.3832 74.7528 91.5577 74.5939 91.7951C74.435 92.0324 74.3631 92.3178 74.3906 92.6025H73.9549C73.9011 92.6039 73.85 92.6264 73.8124 92.6652C73.7749 92.7039 73.7539 92.7559 73.7539 92.81C73.7539 92.8635 73.7751 92.9149 73.8128 92.9527C73.8505 92.9906 73.9016 93.0119 73.9549 93.0119H74.4855V93.382C74.5163 93.4361 74.5498 93.4885 74.586 93.539L71.1514 97.6499H70.2746C69.8028 97.2153 69.3553 96.7547 68.9342 96.2703L80.154 86.8147L76.4793 91.2509ZM67.1639 75.6261C67.6002 74.8917 68.0872 74.1889 68.6215 73.523L79.8469 82.9786L67.1639 75.6261ZM79.5565 83.4497L65.7956 78.4022C66.0982 77.6021 66.4565 76.8244 66.8679 76.0748L79.5565 83.4497ZM79.3777 83.9432L64.9467 81.3858C65.1088 80.5459 65.3328 79.7192 65.6169 78.9126L79.3777 83.9432ZM79.294 84.4536H64.634C64.6495 83.5984 64.728 82.7454 64.8686 81.9018L79.294 84.4536ZM79.294 84.9808L64.8686 87.5325C64.728 86.6889 64.6495 85.836 64.634 84.9808H79.294ZM54.8942 97.1901V96.3881C55.2348 97.1901 55.6146 97.9696 56.0111 98.738C55.9499 98.7025 55.8807 98.6832 55.8101 98.6819H55.3186L55.2293 98.4968V97.1901H54.8942ZM55.8212 99.3997C55.9127 99.4016 56.0019 99.3712 56.0733 99.3138C56.1448 99.2564 56.1939 99.1757 56.2122 99.0857C56.268 99.1922 56.3239 99.3044 56.3853 99.4109L55.8827 99.7026C55.8268 99.6016 55.7766 99.4951 55.7207 99.3997H55.8212ZM56.1452 100.151L56.2513 100.09L56.1898 100.235C56.201 100.207 56.1563 100.179 56.1452 100.151ZM58.6583 103.797C58.3791 103.449 58.0998 103.09 57.8429 102.731V101.957H57.9937C58.4144 102.559 58.8556 103.142 59.3173 103.707L59.2 103.802L58.6583 103.797ZM60.0601 103.757L62.2046 101.952H67.1751V102.361L65.9687 103.797H60.1103L60.0601 103.757ZM67.1751 103.197V103.819H66.6501L67.1751 103.197ZM65.3432 104.576L64.7848 105.227H61.3725C61.1603 105.014 60.9536 104.795 60.747 104.576H65.3432ZM61.635 107.005V106.287H61.7243L62.2102 106.741V107.521C62.0147 107.341 61.8193 107.173 61.635 107.005ZM63.2434 106.287H63.8018V106.382L63.2937 107.005L63.2434 106.96V106.287ZM65.427 108.53H65.1757L64.8518 108.289V106.315H65.4103L65.427 108.53ZM63.8186 107.487L63.6846 107.38L63.8186 107.223V107.487ZM66.0525 104.587H70.5818L70.2076 105.238H65.5052L66.0525 104.587ZM71.1849 104.587H72.3019L71.9947 105.238H70.7772L71.1849 104.587ZM74.1672 103.129L74.1113 104.548H73.7372C73.6838 104.548 73.6327 104.569 73.595 104.607C73.5573 104.645 73.5361 104.697 73.5361 104.75C73.5361 104.804 73.5573 104.855 73.595 104.893C73.6327 104.931 73.6838 104.952 73.7372 104.952H73.7092V105.244H73.927V104.952H74.0946V105.513H73.0558L74.1672 103.129ZM77.7191 104.952H77.8531V105.244H78.0765V104.952C78.1298 104.952 78.181 104.931 78.2187 104.893C78.2564 104.855 78.2776 104.804 78.2776 104.75C78.2776 104.697 78.2564 104.645 78.2187 104.607C78.181 104.569 78.1298 104.548 78.0765 104.548H77.7079L77.6185 102.35C78.0374 102.462 78.4618 102.563 78.8919 102.647L77.8643 108.474L77.7191 104.952ZM77.5906 101.794L77.4678 98.8109L81.5167 87.6391L78.9757 102.131C78.4786 102.008 78.0151 101.895 77.5627 101.761L77.5906 101.794ZM81.0308 82.0196L73.7036 69.2775C74.449 68.8623 75.2236 68.5024 76.0213 68.2007L81.0308 82.0196ZM76.5072 67.9988C77.3125 67.7143 78.1376 67.4893 78.9757 67.3258L81.5167 81.8177L76.5072 67.9988ZM80.5785 82.2607L71.1626 70.988C71.8244 70.4515 72.5244 69.9641 73.2568 69.5299L80.5785 82.2607ZM80.182 82.5972L68.9342 73.136C69.4914 72.4877 70.0943 71.8804 70.7381 71.3189L80.182 82.5972ZM68.5377 72.7939L60.0601 65.6489C61.0511 64.4827 62.1323 63.3969 63.2937 62.4017L70.4086 70.9151C69.7398 71.4943 69.1145 72.1222 68.5377 72.7939ZM68.197 73.1865C67.641 73.875 67.137 74.6042 66.6892 75.3681L57.0946 69.8047C57.8717 68.4843 58.7492 67.2261 59.7194 66.0415L68.197 73.1865ZM66.4155 75.8168C65.9859 76.5907 65.6127 77.3948 65.2986 78.2227L54.8886 74.4147C55.424 72.9801 56.072 71.5905 56.8265 70.2589L66.4155 75.8168ZM65.1366 78.7219C64.8451 79.5585 64.6137 80.415 64.4441 81.2849L53.5427 79.3556C53.818 77.8455 54.2139 76.3601 54.7266 74.9138L65.1366 78.7219ZM64.3659 81.8008C64.2208 82.6742 64.1405 83.5571 64.1258 84.4424H53.5706C53.3304 84.1227 53.135 83.8815 53.0736 83.7974C53.1121 82.4817 53.2389 81.1701 53.4533 79.8716L64.3659 81.8008ZM52.9395 89.6525L52.6547 89.703V88.9795C52.6551 88.9222 52.6683 88.8657 52.6935 88.8142C52.7186 88.7628 52.755 88.7176 52.7999 88.6822C52.8501 88.9907 52.8502 89.316 52.9283 89.6188L52.9395 89.6525ZM53.5427 92.4566C53.5985 92.6754 53.6655 92.8941 53.727 93.1072H53.1238C53.0624 92.8941 53.0009 92.6754 52.9451 92.4566H53.5427ZM52.7664 99.4334L52.8166 100.583H52.4369L52.314 99.4334H52.7664ZM53.1908 104.941V106.096H52.9395V104.941H53.1908ZM54.3469 99.4334H54.5256C54.5703 99.5175 54.6149 99.6129 54.6596 99.7026C54.5422 99.6607 54.4204 99.6325 54.2966 99.6184L54.3469 99.4334ZM55.1511 104.941H55.4303L55.2069 106.096H54.9556L55.1511 104.941ZM55.4024 104.228V101.727C55.487 101.579 55.5455 101.418 55.5755 101.25C55.7486 101.531 55.9385 101.811 56.134 102.075V104.2L55.4024 104.228ZM57.0778 104.228C57.1549 104.23 57.231 104.247 57.3012 104.279C57.1217 104.291 56.9467 104.341 56.7874 104.425C56.7371 104.361 56.6725 104.309 56.5987 104.275C56.5249 104.241 56.4441 104.225 56.3629 104.228H57.0778ZM59.3117 104.587H60.088C60.2835 104.806 60.4789 105.025 60.6856 105.238H59.8925C59.6747 104.991 59.4793 104.761 59.2894 104.554L59.3117 104.587ZM60.0433 106.92C60.2332 107.111 60.4287 107.291 60.6018 107.481V108.536H60.0433V106.92ZM65.3153 114.772H64.3157V113.959H65.1143L65.1589 113.998C65.2205 114.247 65.2653 114.5 65.293 114.755L65.3153 114.772ZM64.6675 112.91H64.3157V112.299C64.4494 112.459 64.5672 112.632 64.6675 112.815V112.91ZM64.6675 113.028C64.6905 113.328 64.8079 113.613 65.0026 113.841H64.3157V113.028H64.6675ZM63.3886 114.772V113.959H64.1984V114.772H63.3886ZM64.1984 114.89V115.826H63.3886V114.856L64.1984 114.89ZM63.3886 113.841V113.028H64.1984V113.841H63.3886ZM63.3886 112.91V112.097H64.1425L64.1984 112.159V112.91H63.3886ZM63.3886 111.979V111.491C63.6176 111.635 63.8309 111.802 64.0253 111.99L63.3886 111.979ZM62.4671 112.91V112.097H63.2713V112.91H62.4671ZM63.2713 113.028V113.841H62.4671V113.028H63.2713ZM62.4671 111.979V111.065C62.7481 111.148 63.0182 111.265 63.2713 111.413V111.974L62.4671 111.979ZM62.4671 113.959H63.2713V114.772H62.4671V113.959ZM64.3157 115.826V114.856H65.3265C65.3679 115.167 65.3884 115.48 65.3879 115.793L64.3157 115.826ZM66.1251 109.809C66.4714 110.033 66.8176 110.252 67.1695 110.465L66.8846 110.964C66.6277 110.813 66.3764 110.656 66.1251 110.499V109.809ZM66.4937 109.433V109.203H66.812V108.524H66.4881V106.281H67.0466V108.524H67.3202V109.932L66.4937 109.433ZM71.2854 106.309H71.4809L71.2854 106.719V106.309ZM72.3465 108.553C72.9832 108.553 72.905 107.706 72.905 107.706C72.9801 107.69 73.0506 107.657 73.1109 107.61C73.1712 107.562 73.2198 107.501 73.2528 107.432C73.2858 107.362 73.3023 107.286 73.3011 107.209C73.2999 107.132 73.2809 107.056 73.2457 106.988C73.4036 106.971 73.5492 106.894 73.653 106.773C73.7567 106.653 73.8107 106.497 73.8042 106.337L74.0666 106.006L74.0331 106.825L72.3912 111.351L72.3465 108.553ZM73.9214 108.553L73.7651 112.445H73.5137C73.4604 112.445 73.4093 112.466 73.3716 112.504C73.3339 112.542 73.3127 112.593 73.3127 112.647C73.3101 112.667 73.3101 112.688 73.3127 112.708L72.4973 112.433L73.9214 108.553ZM78.0709 114.295C79.3663 114.479 80.6721 114.578 81.9802 114.593V115.153C80.6722 115.142 79.3663 115.044 78.0709 114.862V114.295ZM78.0709 113.763L78.0318 112.809H78.11V113.095H78.3334V112.809C78.3867 112.809 78.4379 112.788 78.4756 112.75C78.5133 112.712 78.5344 112.661 78.5344 112.607C78.5344 112.554 78.5133 112.502 78.4756 112.465C78.4379 112.427 78.3867 112.405 78.3334 112.405H77.9816L77.9201 110.902L79.361 102.714C80.2306 102.86 81.1099 102.941 81.9914 102.955V114.071C80.671 114.05 79.3536 113.937 78.0486 113.735L78.0709 113.763ZM79.4839 102.198L82.0249 87.712V102.434C81.1654 102.409 80.3088 102.323 79.4615 102.176L79.4839 102.198ZM79.4839 67.2585C80.3243 67.1202 81.1734 67.0414 82.0249 67.0229V81.7448L79.4839 67.2585ZM79.3945 66.7425L77.4231 55.7615C78.9294 55.5091 80.4531 55.376 81.9802 55.3633V66.4789C81.1063 66.4976 80.2348 66.5782 79.3722 66.7201L79.3945 66.7425ZM78.8807 66.821C78.0145 66.9913 77.1616 67.2237 76.3285 67.5165L72.5364 57.0626C73.9757 56.551 75.4528 56.1534 76.9539 55.8736L78.8807 66.821ZM76.7641 54.7856L76.8646 55.3464C75.3324 55.6285 73.8253 56.0336 72.3577 56.5578L72.1622 55.997C73.6549 55.4683 75.186 55.0558 76.7418 54.7632L76.7641 54.7856ZM75.837 67.6847C75.0102 67.9989 74.2075 68.3738 73.4356 68.8064L67.9067 59.1825C69.2313 58.4208 70.6153 57.7681 72.045 57.2308L75.837 67.6847ZM71.6708 56.1877L71.8662 56.7485C70.4096 57.3012 68.998 57.9669 67.6442 58.7395L67.3537 58.2347C68.7292 57.4378 70.1652 56.7515 71.6484 56.1821L71.6708 56.1877ZM67.4543 59.4349L72.9553 69.0644C72.1946 69.5141 71.4684 70.0202 70.7828 70.5786L63.6846 62.0652C64.8633 61.0897 66.1162 60.2084 67.4319 59.4293L67.4543 59.4349ZM66.8958 58.4815L67.1806 58.9862C65.8403 59.7795 64.5632 60.6758 63.3607 61.667L62.9921 61.2239C64.2155 60.2064 65.5171 59.2875 66.8846 58.4759L66.8958 58.4815ZM62.5956 61.5661L62.9697 62.0147C61.7861 63.0305 60.6826 64.1368 59.6691 65.3236L59.2279 64.9479C60.2591 63.7396 61.3812 62.6128 62.5844 61.5773L62.5956 61.5661ZM58.8873 65.3461L59.3285 65.7162C58.3402 66.9262 57.4459 68.2105 56.6534 69.5579L56.1563 69.2663C56.9584 67.8877 57.8679 66.575 58.8761 65.3404L58.8873 65.3461ZM55.8938 69.7205L56.3965 70.0066C55.6271 71.368 54.9642 72.7875 54.4139 74.2521L53.8554 74.0502C54.4146 72.5529 55.0925 71.1032 55.8827 69.7149L55.8938 69.7205ZM53.6935 74.5437L54.2519 74.74C53.735 76.2154 53.3317 77.7285 53.0456 79.2659L52.4871 79.1649C52.7635 77.5934 53.1631 76.0463 53.6823 74.5381L53.6935 74.5437ZM52.3699 79.6809L52.9283 79.7818C52.6733 81.3244 52.537 82.8844 52.5206 84.448H51.9622C51.969 82.8491 52.1016 81.2532 52.3587 79.6753L52.3699 79.6809ZM52.1632 84.9752L51.9622 85.2724C51.9622 85.1714 51.9622 85.0761 51.9622 84.9752H52.1632ZM35.677 104.2H35.0794V100.555H35.677V104.2ZM37.6317 104.2H37.0285V100.555H37.6317V104.2ZM39.5863 104.2H38.9832V100.555H39.5863V104.2ZM41.5354 104.2H40.9379V100.555H41.5354V104.2ZM43.4901 104.2H42.8869V100.555H43.4901V104.2ZM45.4448 104.2H44.8416V100.555H45.4448V104.2ZM47.3938 104.2H46.7963V100.555H47.3938V104.2ZM48.3823 98.1154H36.0512V94.7112H48.3823V98.1154ZM49.3485 104.2H48.7509V100.555H49.3485V104.2ZM49.1139 99.0464C49.1154 98.9507 49.1543 98.8594 49.2222 98.7923C49.2902 98.7251 49.3816 98.6875 49.477 98.6875H50.0019V97.1901H50.3147V94.055L50.0075 93.5671L49.7115 93.0736H50.3147V92.423H50.2142C50.1848 92.4216 50.156 92.4143 50.1295 92.4017C50.1029 92.3891 50.0791 92.3713 50.0594 92.3494C50.0397 92.3275 50.0244 92.302 50.0146 92.2742C50.0047 92.2464 50.0004 92.2169 50.0019 92.1874C50.0004 92.158 50.0047 92.1285 50.0146 92.1007C50.0244 92.0729 50.0397 92.0473 50.0594 92.0255C50.0791 92.0036 50.1029 91.9858 50.1295 91.9732C50.156 91.9606 50.1848 91.9533 50.2142 91.9519H50.3147V91.778C50.4038 91.7864 50.4936 91.7864 50.5827 91.778C50.8026 91.7355 51.0093 91.6413 51.1859 91.5032V91.9687H51.0742C51.012 91.9687 50.9523 91.9935 50.9083 92.0377C50.8643 92.0819 50.8396 92.1418 50.8396 92.2043C50.8396 92.2667 50.8643 92.3266 50.9083 92.3708C50.9523 92.415 51.012 92.4398 51.0742 92.4398H51.8616L52.0292 93.0904H50.5045L51.1859 94.0718V94.5878C50.9476 94.7042 50.7467 94.8856 50.6062 95.1112C50.4657 95.3368 50.3911 95.5976 50.3911 95.8637C50.3911 96.1298 50.4657 96.3906 50.6062 96.6162C50.7467 96.8418 50.9476 97.0232 51.1859 97.1396V97.2069H50.8396V98.6987H50.2812C50.2342 98.6987 50.1877 98.708 50.1444 98.726C50.101 98.744 50.0616 98.7705 50.0284 98.8038C49.9952 98.8371 49.9689 98.8767 49.9509 98.9203C49.933 98.9638 49.9237 99.0105 49.9237 99.0576C49.9237 99.1048 49.933 99.1514 49.9509 99.195C49.9689 99.2385 49.9952 99.2781 50.0284 99.3114C50.0616 99.3448 50.101 99.3712 50.1444 99.3892C50.1877 99.4073 50.2342 99.4166 50.2812 99.4166H49.4993C49.4488 99.4197 49.3982 99.4122 49.3508 99.3946C49.3034 99.377 49.2602 99.3496 49.2239 99.3142C49.1876 99.2789 49.1591 99.2363 49.1402 99.1892C49.1212 99.1421 49.1123 99.0915 49.1139 99.0408V99.0464ZM50.9402 104.913L51.1356 106.068H50.8787L50.6609 104.913H50.9402ZM50.2644 99.4053H50.7224L51.1021 100.555H50.7224L50.2644 99.4053ZM50.3147 106.068L50.1416 105.35L50.0466 104.963V104.913H50.3258L50.5771 106.068H50.3258H50.3147ZM51.5545 121.424H50.5604V107.65H51.5545V121.424ZM51.4484 106.068L51.2864 104.913H51.5657L51.6997 106.068H51.4484ZM51.5713 100.555L51.2864 99.4053H51.7332L51.9454 100.555H51.5713ZM52.2749 104.913H52.5541L52.5988 106.068H52.3419L52.2749 104.913ZM53.5371 121.424H52.543V107.65H53.5371V121.424ZM53.7325 106.068H53.4812L53.5259 104.913H53.8052L53.7325 106.068ZM54.5144 104.913H54.7936L54.6261 106.068H54.3748L54.5144 104.913ZM55.5141 108.502V121.401H54.5256V107.65H55.5141V108.502ZM55.5755 106.068H55.5085L55.5755 105.776V106.068ZM55.905 105.507H55.6425L55.771 104.946H56.201C56.1439 105.039 56.0988 105.139 56.067 105.244H55.9553L55.905 105.507ZM59.5519 115.81H58.2618C58.2618 115.473 58.2897 115.165 58.3232 114.873H59.5519V115.81ZM59.5519 114.755H58.34C58.3762 114.481 58.4302 114.209 58.5019 113.942H59.5519V114.755ZM59.5519 113.824H58.541C58.6219 113.544 58.7285 113.272 58.8594 113.011H59.5519V113.824ZM59.5519 112.893H58.9264C59.0769 112.599 59.2646 112.326 59.4848 112.08H59.5519V112.893ZM60.4789 115.81H59.6636V114.856H60.4734L60.4789 115.81ZM60.4789 114.755H59.6636V113.942H60.4734L60.4789 114.755ZM60.4789 113.824H59.6636V113.011H60.4734L60.4789 113.824ZM60.4789 112.893H59.6636V112.08H60.4734L60.4789 112.893ZM60.4789 111.962H59.6636V111.923C59.9071 111.7 60.1795 111.512 60.4734 111.362L60.4789 111.962ZM61.406 115.81H60.5962V114.856H61.406V115.81ZM61.406 114.755H60.5962V113.942H61.406V114.755ZM61.406 113.824H60.5962V113.011H61.406V113.824ZM61.406 112.893H60.5962V112.08H61.406V112.893ZM60.5962 111.962V111.278C60.7941 111.183 60.9996 111.104 61.2105 111.043C61.2755 111.048 61.341 111.048 61.406 111.043V111.946L60.5962 111.962ZM62.3275 115.81H61.5233V114.856H62.3442L62.3275 115.81ZM62.3275 114.755H61.5233V113.942H62.3442L62.3275 114.755ZM62.3275 113.824H61.5233V113.011H62.3442L62.3275 113.824ZM62.3275 112.893H61.5233V112.08H62.3442L62.3275 112.893ZM62.3275 111.962H61.5233V111.059C61.6876 111.051 61.8487 111.011 61.998 110.942C62.0818 110.942 62.1934 110.975 62.3275 111.015V111.962ZM62.4503 115.81V114.856H63.2546V115.793L62.4503 115.81ZM66.1307 117.599V114.295C66.3671 114.285 66.5971 114.215 66.7993 114.091C67.0014 113.968 67.1691 113.795 67.2867 113.589C67.2858 113.568 67.2858 113.548 67.2867 113.527V115.081L66.1307 117.599ZM72.3521 113.482V112.865C72.8101 113.028 73.268 113.174 73.7316 113.314V113.914C73.2457 113.779 72.7933 113.634 72.3465 113.482H72.3521ZM78.9421 120.857H78.3446L78.1435 115.922C79.2107 116.064 80.2843 116.152 81.3603 116.185C81.2024 116.317 81.075 116.481 80.9872 116.667C80.8994 116.853 80.8533 117.056 80.8521 117.262C80.84 117.456 80.8676 117.651 80.9332 117.834C80.9989 118.017 81.1012 118.185 81.2338 118.327C81.3665 118.469 81.5267 118.582 81.7045 118.659C81.8823 118.736 82.0741 118.776 82.2679 118.776C82.4616 118.776 82.6534 118.736 82.8312 118.659C83.009 118.582 83.1692 118.469 83.3019 118.327C83.4345 118.185 83.5368 118.017 83.6025 117.834C83.6681 117.651 83.6958 117.456 83.6836 117.262C83.6835 117.057 83.6384 116.854 83.5516 116.668C83.4647 116.482 83.3382 116.317 83.181 116.185C83.7394 116.185 84.3314 116.135 84.9011 116.084L84.6833 120.857H78.9421ZM88.4362 120.857L88.3245 118.115C88.5832 118.033 88.8125 117.877 88.9848 117.666C89.157 117.456 89.2648 117.2 89.2949 116.929C89.3251 116.658 89.2763 116.385 89.1546 116.141C89.033 115.898 88.8436 115.695 88.6094 115.557C89.6222 115.342 90.6232 115.074 91.6084 114.755V120.857H88.4362ZM94.8643 120.857H92.5019V118.053C92.4833 117.54 92.5436 117.027 92.6806 116.533C92.8554 116.629 93.0484 116.686 93.2468 116.7C93.4452 116.715 93.6444 116.686 93.8311 116.617C94.0932 116.525 94.3211 116.355 94.4845 116.129C94.6856 116.387 94.8699 116.875 94.8699 118.053L94.8643 120.857ZM93.859 113.987H93.8311C94.1774 113.847 94.5236 113.69 94.8643 113.538V113.998L93.859 113.987ZM95.7746 120.857V114.497L96.199 115.4V120.857H95.7746ZM97.7572 118.698L98.7792 120.857H97.7572V118.698ZM103.113 120.857V111.059C103.22 111.062 103.327 111.051 103.431 111.026V120.857H103.113ZM112.104 120.857H109.965V118.053C109.955 117.905 109.975 117.757 110.024 117.618C110.072 117.478 110.15 117.35 110.25 117.242C110.35 117.134 110.472 117.047 110.607 116.988C110.742 116.929 110.888 116.899 111.035 116.899C111.182 116.899 111.328 116.929 111.463 116.988C111.598 117.047 111.72 117.134 111.82 117.242C111.92 117.35 111.997 117.478 112.046 117.618C112.095 117.757 112.115 117.905 112.104 118.053V120.857ZM112.104 114.245H109.965V112.523C109.985 112.252 110.106 111.998 110.305 111.812C110.503 111.627 110.764 111.524 111.035 111.524C111.306 111.524 111.567 111.627 111.765 111.812C111.964 111.998 112.085 112.252 112.104 112.523V114.245ZM116.209 120.857H115.399V112.787C115.399 108.861 111.959 109.242 111.049 107.633C110.133 109.242 106.693 108.861 106.693 112.787V120.857H105.872V106.276C105.951 106.455 106.07 106.614 106.218 106.741C106.361 106.861 106.525 106.952 106.703 107.008C106.88 107.063 107.067 107.084 107.252 107.067C107.437 107.05 107.617 106.997 107.782 106.91C107.947 106.824 108.093 106.705 108.212 106.562C108.362 106.383 108.464 106.169 108.508 105.939H116.22L116.209 120.857ZM124.279 120.857H122.928V119.281C122.936 119.197 122.926 119.112 122.9 119.032C122.873 118.952 122.83 118.878 122.774 118.816C122.717 118.753 122.648 118.703 122.571 118.669C122.495 118.635 122.411 118.617 122.327 118.617C122.243 118.617 122.16 118.635 122.083 118.669C122.006 118.703 121.937 118.753 121.881 118.816C121.824 118.878 121.781 118.952 121.755 119.032C121.728 119.112 121.719 119.197 121.727 119.281V120.857H120.37V118.053C120.37 116.337 121.018 116.09 121.487 115.871C121.791 115.71 122.08 115.522 122.352 115.311C122.627 115.521 122.918 115.709 123.224 115.871C123.659 116.09 124.307 116.337 124.307 118.053L124.279 120.857ZM124.279 113.987H122.928V112.428C122.936 112.344 122.926 112.259 122.9 112.179C122.873 112.099 122.83 112.025 122.774 111.962C122.717 111.9 122.648 111.85 122.571 111.816C122.495 111.782 122.411 111.764 122.327 111.764C122.243 111.764 122.16 111.782 122.083 111.816C122.006 111.85 121.937 111.9 121.881 111.962C121.824 112.025 121.781 112.099 121.755 112.179C121.728 112.259 121.719 112.344 121.727 112.428V113.987H120.37V111.183C120.37 109.461 121.018 109.214 121.487 108.996C121.791 108.834 122.08 108.646 122.352 108.435C122.627 108.646 122.918 108.833 123.224 108.996C123.659 109.214 124.307 109.461 124.307 111.183L124.279 113.987ZM129.546 120.857H127.178V118.053C127.178 116.337 127.569 116.09 127.837 115.871C128.027 115.7 128.203 115.512 128.362 115.311C128.519 115.513 128.695 115.701 128.887 115.871C129.149 116.09 129.546 116.337 129.546 118.053V120.857ZM129.546 113.987H127.178V111.183C127.178 109.461 127.569 109.214 127.837 108.996C128.027 108.824 128.203 108.636 128.362 108.435C128.519 108.638 128.695 108.825 128.887 108.996C129.149 109.214 129.546 109.461 129.546 111.183V113.987ZM135.371 101.396H134.812V100.465C134.808 100.402 134.818 100.339 134.844 100.282C134.869 100.224 134.908 100.174 134.957 100.134C134.957 100.096 134.973 100.059 135 100.031C135.027 100.004 135.064 99.9886 135.102 99.9886C135.141 99.9886 135.178 100.004 135.205 100.031C135.232 100.059 135.248 100.096 135.248 100.134C135.296 100.174 135.335 100.225 135.36 100.282C135.385 100.34 135.396 100.403 135.393 100.465L135.371 101.396ZM136.152 101.396H135.594V100.465C135.589 100.402 135.6 100.339 135.626 100.282C135.651 100.224 135.69 100.174 135.739 100.134C135.739 100.096 135.754 100.059 135.782 100.031C135.809 100.004 135.846 99.9886 135.884 99.9886C135.923 99.9886 135.96 100.004 135.987 100.031C136.014 100.059 136.03 100.096 136.03 100.134C136.078 100.174 136.116 100.225 136.142 100.282C136.167 100.34 136.178 100.403 136.175 100.465L136.152 101.396ZM146.037 95.2888H145.272V94.0494C145.267 93.966 145.282 93.8825 145.316 93.8062C145.35 93.7299 145.402 93.6632 145.468 93.6119C145.538 93.5438 145.602 93.4687 145.658 93.3876C145.711 93.4705 145.775 93.5459 145.848 93.6119C145.912 93.6638 145.963 93.7308 145.997 93.807C146.03 93.8833 146.044 93.9665 146.037 94.0494V95.2888ZM147.065 95.2888H146.3V94.0494C146.295 93.9666 146.31 93.8839 146.343 93.8079C146.376 93.7319 146.426 93.6647 146.49 93.6119C146.563 93.5447 146.629 93.4695 146.685 93.3876C146.738 93.4705 146.802 93.5459 146.875 93.6119C146.94 93.6638 146.991 93.7308 147.024 93.807C147.057 93.8833 147.071 93.9665 147.065 94.0494V95.2888ZM153.242 94.4476C153.573 94.4476 153.897 94.5463 154.173 94.7311C154.448 94.916 154.663 95.1788 154.79 95.4862C154.916 95.7937 154.95 96.132 154.885 96.4583C154.82 96.7847 154.661 97.0845 154.426 97.3198C154.192 97.5551 153.894 97.7153 153.569 97.7803C153.244 97.8452 152.907 97.8119 152.601 97.6845C152.294 97.5572 152.033 97.3415 151.849 97.0648C151.665 96.7881 151.566 96.4628 151.566 96.1301C151.564 95.9077 151.606 95.6871 151.689 95.481C151.772 95.275 151.895 95.0875 152.051 94.9295C152.207 94.7715 152.392 94.646 152.597 94.5604C152.801 94.4748 153.02 94.4307 153.242 94.4308V94.4476ZM147.975 104.543L147.892 102.395L147.998 102.518L147.975 104.543ZM147.858 102.047V101.576H149.148L149.344 102.047H147.858ZM147.724 96.3432V96.0516H147.919V96.3432H147.981V101.11H147.791L147.601 96.3432H147.724ZM156.944 120.655H149.757V109.276H156.939L156.944 120.655ZM156.944 107.403H149.757V102.518H156.939L156.944 107.403ZM156.944 101.11H149.757V99.0969H156.939L156.944 101.11ZM157.285 98.6594H149.321L149.126 98.1883H157.503L157.285 98.6594Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M187.694 101.547V101.082H187.063V93.8359H176.324V101.082H175.765V101.547H177.547L177.737 102.018H175.961L176.302 102.49V107.374H175.743L175.939 107.846L176.279 108.311V108.805H175.939V109.276H176.279V125.949H178.055V121.849H185.237V125.949H187.019V109.276H187.454V108.805H187.019V108.311L187.454 107.846L187.65 107.374H187.019V102.518L187.454 102.047H185.678L185.868 101.575L187.694 101.547ZM181.797 94.4304C182.128 94.4304 182.452 94.5291 182.728 94.714C183.003 94.8989 183.218 95.1616 183.345 95.4691C183.472 95.7765 183.505 96.1148 183.44 96.4412C183.376 96.7675 183.216 97.0673 182.982 97.3026C182.747 97.5379 182.449 97.6982 182.124 97.7631C181.799 97.828 181.462 97.7947 181.156 97.6673C180.85 97.54 180.588 97.3243 180.404 97.0477C180.22 96.771 180.122 96.4457 180.122 96.1129C180.122 95.6667 180.298 95.2387 180.612 94.9232C180.927 94.6077 181.353 94.4304 181.797 94.4304ZM185.282 120.627H178.1V109.276H185.282V120.627ZM185.282 107.374H178.1V102.518H185.282V107.374ZM185.282 101.082H178.1V99.0965H185.282V101.082ZM177.759 98.6311L177.569 98.16H185.913L185.723 98.6311H177.759Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M184.154 103.51H179.233V106.056H184.154V103.51Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M184.154 99.5059H179.233V100.543H184.154V99.5059Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M181.797 97.3578C182.041 97.3567 182.279 97.283 182.482 97.1462C182.684 97.0093 182.841 96.8154 182.934 96.5888C183.026 96.3622 183.05 96.1132 183.002 95.8731C182.953 95.6331 182.835 95.4127 182.663 95.24C182.49 95.0672 182.27 94.9497 182.031 94.9023C181.791 94.8549 181.543 94.8798 181.318 94.9738C181.093 95.0678 180.901 95.2266 180.765 95.4303C180.63 95.634 180.558 95.8734 180.558 96.1183C180.558 96.2816 180.59 96.4432 180.652 96.594C180.714 96.7447 180.806 96.8816 180.921 96.9967C181.036 97.1119 181.173 97.2031 181.323 97.265C181.474 97.327 181.635 97.3585 181.797 97.3578Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M168.114 95.0634H167.986L167.874 96.185H167.209L167.098 95.0634H166.969L166.919 94.6035H159.553V101.081H159.96V101.524L159.743 102.04H159.877L159.553 102.489V107.374H160.111L159.916 107.845L159.575 108.31V108.804H159.916V109.275H159.575V125.948H161.072V102.483L161.379 101.922H161.256C161.428 100.54 162.096 99.2692 163.136 98.3479C164.176 97.4265 165.515 96.9186 166.902 96.9197H168.187C169.574 96.9186 170.913 97.4265 171.953 98.3479C172.993 99.2692 173.661 100.54 173.833 101.922H173.71L174.017 102.483C174.017 102.534 174.017 102.584 174.017 102.64V125.948H175.508V109.275H175.157V108.804H175.497V108.31L175.157 107.845L174.967 107.374H175.497V102.517L175.201 102.068H175.307L175.095 101.552V101.109H175.497V94.6035H168.17L168.114 95.0634ZM168.22 95.3214C169.834 95.2998 171.4 95.8747 172.619 96.9367C173.838 97.9987 174.626 99.4737 174.833 101.081V101.575L174.916 101.782H174.04C173.827 100.38 173.136 99.0955 172.085 98.148C171.007 97.1876 169.617 96.6552 168.176 96.6505H166.891C165.45 96.6531 164.059 97.1858 162.982 98.148C161.927 99.0935 161.234 100.379 161.022 101.782H160.156L160.245 101.575V101.081C160.451 99.4742 161.237 97.9992 162.456 96.9371C163.674 95.875 165.239 95.2999 166.852 95.3214H166.891L167.003 96.415H168.12L168.231 95.3214H168.22Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M11.9978 125.389C11.117 120.308 10.6742 115.161 10.6742 110.005C10.6742 60.82 50.5215 20.8328 99.4719 20.8328C148.422 20.8328 188.27 60.8481 188.27 110.033C188.27 115.19 187.827 120.336 186.946 125.417H189.777C190.634 120.334 191.063 115.188 191.062 110.033C191.062 59.3058 149.964 18.0566 99.4719 18.0566C48.9801 18.0566 7.88184 59.3338 7.88184 110.061C7.88051 115.216 8.31021 120.362 9.16636 125.445L11.9978 125.389Z"
                            fill="#1FC0E8"
                          />
                          <path
                            d="M180.857 38.2122C185.296 38.2122 188.893 34.6076 188.893 30.1637C188.893 25.7199 185.296 22.1152 180.857 22.1152C176.418 22.1152 172.821 25.7199 172.821 30.1637C172.821 34.6076 176.418 38.2122 180.857 38.2122Z"
                            stroke="black"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M174.785 28.7724V27.7305H179.264V28.7724H177.657V33.0385H176.394V28.7724H174.785Z"
                            fill="black"
                          />
                          <path
                            d="M179.889 27.7305H181.475L182.821 31.0169H182.883L184.228 27.7305H185.814V33.0385H184.567V29.778H184.523L183.25 33.0048H182.453L181.18 29.7598H181.136V33.0385H179.889V27.7305Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_5278_17473">
                            <rect
                              width="187"
                              height="163"
                              fill="white"
                              transform="translate(6 18)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    {/* <!-- Contact BTN --> */}
                    <div className="flex flex-wrap items-center space-x-3 sm:space-x-4 lg:order-3">
                      <div className="language-selector ">
                        <a
                          href="#"
                          id="language-toggle"
                          className="language-toggle"
                        >
                          <svg
                            className="w-4 md:w-6"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.8905 5.67183H11.5801L9.85464 0.481309C9.75911 0.19392 9.49029 0 9.18743 0H2.10936C0.946258 0 0 0.946258 0 2.10936V16.2186C0 17.3817 0.946258 18.328 2.10936 18.328H9.85759L11.5689 23.5047C11.6635 23.8079 11.9439 24 12.2406 24C12.2422 24 12.2439 23.9998 12.2455 23.9998H21.8905C23.0536 23.9998 23.9999 23.0536 23.9999 21.8905V7.78119C23.9998 6.61809 23.0536 5.67183 21.8905 5.67183ZM2.10936 16.9217C1.72166 16.9217 1.40624 16.6063 1.40624 16.2186V2.10936C1.40624 1.72166 1.72166 1.40624 2.10936 1.40624H8.6802L13.8377 16.9217C11.2037 16.9217 4.71006 16.9217 2.10936 16.9217ZM13.7216 18.328L12.3434 21.3674L11.3387 18.328H13.7216ZM22.5936 21.8905C22.5936 22.2782 22.2782 22.5936 21.8905 22.5936H13.3315L15.4527 17.9152C15.5288 17.7474 15.5324 17.5616 15.4795 17.4028L12.0475 7.07807H21.8905C22.2782 7.07807 22.5936 7.39349 22.5936 7.78119V21.8905Z"
                              className="fill-current"
                            />
                            <path
                              d="M9.18745 8.48435H7.07809C6.68978 8.48435 6.37497 8.79916 6.37497 9.18747C6.37497 9.57578 6.68978 9.89059 7.07809 9.89059H8.36339C8.07315 10.709 7.29161 11.2968 6.37497 11.2968C5.21187 11.2968 4.26561 10.3506 4.26561 9.18747C4.26561 8.02437 5.21187 7.07811 6.37497 7.07811C6.93841 7.07811 7.46809 7.29753 7.86652 7.69592C8.14107 7.97051 8.58628 7.97051 8.86087 7.69592C9.13542 7.42133 9.13542 6.97616 8.86087 6.70157C8.19685 6.03754 7.31401 5.67188 6.37497 5.67188C4.43647 5.67188 2.85938 7.24897 2.85938 9.18747C2.85938 11.126 4.43647 12.7031 6.37497 12.7031C8.31347 12.7031 9.89057 11.126 9.89057 9.18747C9.89057 8.79916 9.57576 8.48435 9.18745 8.48435Z"
                              className="fill-current"
                            />
                            <path
                              d="M20.4355 11.2968H18.3261V10.5937C18.3261 10.2054 18.0113 9.89056 17.623 9.89056C17.2347 9.89056 16.9199 10.2054 16.9199 10.5937V11.2968H14.8105C14.4222 11.2968 14.1074 11.6116 14.1074 11.9999C14.1074 12.3882 14.4222 12.703 14.8105 12.703H18.8952C18.6715 13.368 18.1911 14.156 17.6324 14.9143C17.5121 14.7518 17.3933 14.5856 17.2787 14.417C17.0603 14.0959 16.623 14.0126 16.3019 14.231C15.9808 14.4493 15.8975 14.8866 16.1159 15.2078C16.3131 15.4979 16.5199 15.7802 16.726 16.0477C16.3747 16.4553 16.0283 16.8244 15.7244 17.123C15.4472 17.395 15.443 17.8402 15.7149 18.1173C15.9858 18.3934 16.4309 18.3999 16.7092 18.1268C16.7335 18.1029 17.117 17.7252 17.6291 17.1453C18.1289 17.7172 18.5031 18.0931 18.5321 18.1221C18.8066 18.3965 19.2516 18.3967 19.5262 18.1222C19.8008 17.8477 19.801 17.4025 19.5266 17.1279C19.5192 17.1205 19.0887 16.6876 18.5394 16.047C19.5347 14.7604 20.1415 13.6396 20.3517 12.703H20.4355C20.8238 12.703 21.1386 12.3882 21.1386 11.9999C21.1386 11.6116 20.8238 11.2968 20.4355 11.2968Z"
                              className="fill-current"
                            />
                          </svg>
                        </a>
                        <div className="notification-holder w-full max-w-[510px] h-auto bg-[#eee] absolute py-[35px] px-6 sm:px-[40px] right-0 z-50 top-full hidden">
                          <div className="notif-title flex items-center content-between w-full h-auto relative mb-[30px]">
                            <h2 className="text-3xl font-bold text-japaneseIndigo">
                              {t("Language")}
                            </h2>
                          </div>
                          <div className="notification-box notif-lag w-full h-auto relative">
                            <label className="notif-holder flex relative content-between items-center w-full max-w-full h-[60px] bg-white rounded-lg mb-2">
                              <div className="notif-data flex items-center">
                                <div className="notifiction-i text-[#13e1b0] text-xl py-[8.5px] px-[10.5px] rounded-md ml-[10px] bg-[#cfffff4] flex">
                                  <img src={usa} alt="Usa Flag" />
                                </div>
                                <div className="contry-state ml-[10px] w-full">
                                  <h3 className="text-sm text-japaneseIndigo font-semibold">
                                    United States - English
                                  </h3>
                                  <span className="text-xs font-semibold text-spiroDiscoBall">
                                    Dollar
                                  </span>
                                </div>
                              </div>
                              <div className="radio-btn-icon ml-auto h-6">
                                <input
                                  type="radio"
                                  id="United-States"
                                  name="state"
                                  value="en"
                                  onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                  }
                                />
                              </div>
                            </label>
                            <label className="notif-holder flex relative content-between items-center w-full max-w-full h-[60px] bg-white rounded-lg mb-2">
                              <div className="notif-data flex items-center">
                                <div className="notifiction-i text-[#13e1b0] text-xl py-[8.5px] px-[10.5px] rounded-md ml-[10px] bg-[#cfffff4] flex">
                                  <img src={france} alt="France Flag" />
                                </div>
                                <div className="contry-state ml-[10px] w-full">
                                  <h3 className="text-sm text-japaneseIndigo font-semibold">
                                    Europe - French
                                  </h3>
                                  <span className="text-xs font-semibold text-spiroDiscoBall">
                                    Euro
                                  </span>
                                </div>
                              </div>
                              <div className="radio-btn-icon ml-auto h-6">
                                <input
                                  type="radio"
                                  id="Europe-French"
                                  name="state"
                                  value="French"
                                  onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                  }
                                />
                              </div>
                            </label>
                            <label className="notif-holder flex relative content-between items-center w-full max-w-full h-[60px] bg-white rounded-lg mb-2">
                              <div className="notif-data flex items-center">
                                <div className="notifiction-i text-[#13e1b0] text-xl py-[8.5px] px-[10.5px] rounded-md ml-[10px] bg-[#cfffff4] flex">
                                  <img src={india} alt="India Flag" />
                                </div>
                                <div className="contry-state ml-[10px] w-full">
                                  <h3 className="text-sm text-japaneseIndigo font-semibold">
                                    India - Hindi
                                  </h3>
                                  <span className="text-xs font-semibold text-spiroDiscoBall">
                                    Indian Rupee
                                  </span>
                                </div>
                              </div>
                              <div className="radio-btn-icon ml-auto h-6">
                                <input
                                  type="radio"
                                  id="India-Hindi"
                                  name="state"
                                  value="Hindi"
                                  onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                  }
                                />
                              </div>
                            </label>
                            <label className="notif-holder flex relative content-between items-center w-full max-w-full h-[60px] bg-white rounded-lg mb-2">
                              <div className="notif-data flex items-center">
                                <div className="notifiction-i text-[#13e1b0] text-xl py-[8.5px] px-[10.5px] rounded-md ml-[10px] bg-[#cfffff4] flex">
                                  <img src={germany} alt="Germany Flag" />
                                </div>
                                <div className="contry-state ml-[10px] w-full">
                                  <h3 className="text-sm text-japaneseIndigo font-semibold">
                                    Germany - German
                                  </h3>
                                  <span className="text-xs font-semibold text-spiroDiscoBall">
                                    German Mark (DEM)
                                  </span>
                                </div>
                              </div>
                              <div className="radio-btn-icon ml-auto h-6">
                                <input
                                  type="radio"
                                  id="Germany-German"
                                  name="state"
                                  value="German"
                                  onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                  }
                                />
                              </div>
                            </label>
                            <label className="notif-holder flex relative content-between items-center w-full max-w-full h-[60px] bg-white rounded-lg mb-2">
                              <div className="notif-data flex items-center">
                                <div className="notifiction-i text-[#13e1b0] text-xl py-[8.5px] px-[10.5px] rounded-md ml-[10px] bg-[#cfffff4] flex">
                                  <img src={china} alt="China Flag" />
                                </div>
                                <div className="contry-state ml-[10px] w-full">
                                  <h3 className="text-sm text-japaneseIndigo font-semibold">
                                    China - Mandarin
                                  </h3>
                                  <span className="text-xs font-semibold text-spiroDiscoBall">
                                    Renminbi
                                  </span>
                                </div>
                              </div>
                              <div className="radio-btn-icon ml-auto h-6">
                                <input
                                  type="radio"
                                  id="China-Mandarin"
                                  name="state"
                                  value="Mandarin"
                                  onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                  }
                                />
                              </div>
                            </label>
                            <label className="notif-holder flex relative content-between items-center w-full max-w-full h-[60px] bg-white rounded-lg mb-2">
                              <div className="notif-data flex items-center">
                                <div className="notifiction-i text-[#13e1b0] text-xl py-[8.5px] px-[10.5px] rounded-md ml-[10px] bg-[#cfffff4] flex">
                                  <img src={thailand} alt="Thailand Flag" />
                                </div>
                                <div className="contry-state ml-[10px] w-full">
                                  <h3 className="text-sm text-japaneseIndigo font-semibold">
                                    Thailand - Thai
                                  </h3>
                                  <span className="text-xs font-semibold text-spiroDiscoBall">
                                    Thai Baht
                                  </span>
                                </div>
                              </div>
                              <div className="radio-btn-icon ml-auto h-6">
                                <input
                                  type="radio"
                                  id="Thailand-Thai"
                                  name="state"
                                  value="Thai"
                                  onChange={(e) =>
                                    i18n.changeLanguage(e.target.value)
                                  }
                                />
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <button className="btn-primary bg-japaneseIndigo border-japaneseIndigo hover:text-japaneseIndigo font-semibold tracking-wider px-3 py-2 sm:py-3 min-w-[70px] sm:min-w-[120px]">
                        Ads
                      </button>
                      <Link
                        to="/dashboard"
                        className="btn-primary bg-japaneseIndigo border-japaneseIndigo hover:text-japaneseIndigo font-semibold tracking-wider px-3 py-2 sm:py-3 min-w-[70px] sm:min-w-[120px]"
                      >
                        Create Service
                      </Link>

                      <span
                        className="xl:hidden inline-block"
                        onClick="toggleActive('nav', 'hidden')"
                      >
                        <svg
                          className="w-5 md:w-7 h-auto cursor-pointer fill-current hover:text-ev-sky anim"
                          viewBox="0 0 100 80"
                          width="40"
                          height="40"
                        >
                          <rect width="100" height="15"></rect>
                          <rect y="30" width="100" height="15"></rect>
                          <rect y="60" width="100" height="15"></rect>
                        </svg>
                      </span>
                    </div>
                    {/* <!-- Navbar --> */}
                    <nav className="w-full lg:w-auto py-4 lg:py-0 lg:order-2 text-center hidden xl:block">
                      <ul className="flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-8">
                        <li className="w-full lg:w-auto">
                          <a href="#" className="block hover:opacity-50">
                            {t("Home")}
                          </a>
                        </li>
                        <li className="w-full lg:w-auto">
                          <a href="#about" className="block hover:opacity-50">
                            About
                          </a>
                        </li>
                        <li className="w-full lg:w-auto">
                          <a href="#feature" className="block hover:opacity-50">
                            Feature
                          </a>
                        </li>
                        <li className="w-full lg:w-auto">
                          <a
                            href="#showcase"
                            className="block hover:opacity-50"
                          >
                            Showcase
                          </a>
                        </li>
                        <li className="w-full lg:w-auto">
                          <a
                            href="#otherproducts"
                            className="block hover:opacity-50"
                          >
                            F-coin
                          </a>
                        </li>
                        <li className="w-full lg:w-auto">
                          <a href="#aboutus" className="block hover:opacity-50">
                            About Us
                          </a>
                        </li>
                        <li className="w-full lg:w-auto">
                          <a
                            href="#contactus"
                            className="block hover:opacity-50"
                          >
                            Contact us
                          </a>
                        </li>
                        <li className="w-full lg:w-auto">
                          <a
                            href="https://agent.eventopackage.com/"
                            target={"_blank"}
                            className="block hover:opacity-50"
                          >
                            Agent
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </header>
              <div className="wrapper relative z-10 flex items-center h-full px-0">
                <div className="landing-bg-img sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] xl:max-w-[630px] ml-auto">
                  <img
                    src={multidivice}
                    alt="Multimedia Device"
                    className="max-w-[320px] inline-block sm:hidden mb-4"
                  />
                  <p className="text-base sm:text-lg leading-6 sm:leading-7 font-bold text-white uppercase tracking-wide mb-4 lg:mb-7">
                    {t("Services at your Fingertips")}
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white max-w-full font-bold capitalize">
                    Why have just one service when you get the whole package{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EVANT bANNER */}
      <div className="bg-white">
        {/* banner slider */}
        <div className="wrapper">
          <div className="w-full py-14">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner1}
                    alt="Art gallery"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner2}
                    alt="Ballrooms"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner3}
                    alt="Banquet Hall"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner4}
                    alt="Cake Maker"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner5}
                    alt="Character Artists"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner6}
                    alt="Caterers And Serving Staff"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner7}
                    alt="Choreographer And Dancer"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner8}
                    alt="Conference Room"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner9}
                    alt="Convention Centers And Theatres"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner10}
                    alt="DJ"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner11}
                    alt="Event Decorators"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner12}
                    alt="Fashion Designer"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner13}
                    alt="Garden And Farm"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner14}
                    alt="Hotel & Resorts"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner15}
                    alt="Lights And Sound"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner16}
                    alt="Magician"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner17}
                    alt="Makeup Artist"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner18}
                    alt="Mention & Bungalow"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner19}
                    alt="Mascot & Clouns"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner20}
                    alt="Chef"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner21}
                    alt="Motivational Speaker"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner22}
                    alt="Museum"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner23}
                    alt="Beach"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner24}
                    alt="Photo Studio"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner25}
                    alt="Photographer"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner26}
                    alt="Pubs & Bars"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner27}
                    alt="Rooftops"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner28}
                    alt="Security Provider And Bouncers"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner29}
                    alt="Sports Clubs"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner30}
                    alt="Stadium"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner31}
                    alt="Stately Home"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner32}
                    alt="Tattoo Artist"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner33}
                    alt=" Wedding Decorator"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full min-h-[250px] md:min-h-[350px] xl:min-h-[450px] rounded-xl lg:rounded-2xl 2xl:rounded-3xl overflow-hidden relative">
                  <img
                    src={banner34}
                    alt="Yachts"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="sm:pt-8 lg:pt-16ss xl:pt-28 bg-white"></div>

      {/* who are you app photo */}
      <section id="feature" className="w-full bg-[#EEEEEE]">
        <div className="wrapper relative">
          <div className="flex flex-wrap -mx-3.5">
            <div className="w-full md:w-6/12 lg:w-1/3 px-3.5 pt-16 py-5 md:py-24 space-y-10">
              <div className="flex items-start space-x-4">
                <div className="px-4 py-5 bg-white flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1212 0L9.30562 12.1025L2.87883 5.51966L0 8.4684L9.30562 18L24 2.94879L21.1212 0Z"
                      fill="#1FC0E8"
                    />
                  </svg>
                </div>
                <div className="xl:space-y-2.5">
                  <h2 className="text-xl xl:text-3xl text-ev-dark">
                    Free Register
                  </h2>
                  <p className="text-sm xl:text-base text-[#9BA0A8]">
                    Absolutely free to download for all users. Just fill in
                    basic details and get registered.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="px-4 py-5 bg-white flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1212 0L9.30562 12.1025L2.87883 5.51966L0 8.4684L9.30562 18L24 2.94879L21.1212 0Z"
                      fill="#1FC0E8"
                    />
                  </svg>
                </div>
                <div className="xl:space-y-2.5">
                  <h2 className="text-xl xl:text-3xl text-ev-dark">
                    Gift Coupon
                  </h2>
                  <p className="text-sm xl:text-base text-[#9BA0A8]">
                    Get premium offers and gift coupons on each booking.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="px-4 py-5 bg-white flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1212 0L9.30562 12.1025L2.87883 5.51966L0 8.4684L9.30562 18L24 2.94879L21.1212 0Z"
                      fill="#1FC0E8"
                    />
                  </svg>
                </div>
                <div className="xl:space-y-2.5">
                  <h2 className="text-xl xl:text-3xl text-ev-dark">
                    {t("Language")}
                  </h2>
                  <p className="text-sm xl:text-base text-[#9BA0A8]">
                    Choose from multiple languages for your convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/12 lg:w-1/3 px-3.5 relative hidden lg:block">
              <div className="relative lg:absolute top-1/2 -translate-y-1/2 inset-x-0 pt-[100px]">
                <img src={iphone} alt="iPhone" className="mx-auto" />
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-1/3 px-3.5 pb-16 py-5 md:py-24 space-y-10">
              <div className="flex items-start space-x-4">
                <div className="px-4 py-5 bg-white flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1212 0L9.30562 12.1025L2.87883 5.51966L0 8.4684L9.30562 18L24 2.94879L21.1212 0Z"
                      fill="#1FC0E8"
                    />
                  </svg>
                </div>
                <div className="xl:space-y-2.5">
                  <h2 className="text-xl xl:text-3xl text-ev-dark">
                    Refer and Earn
                  </h2>
                  <p className="text-sm xl:text-base text-[#9BA0A8]">
                    Earn referral coins and get special offers and discounts.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="px-4 py-5 bg-white flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1212 0L9.30562 12.1025L2.87883 5.51966L0 8.4684L9.30562 18L24 2.94879L21.1212 0Z"
                      fill="#1FC0E8"
                    />
                  </svg>
                </div>
                <div className="xl:space-y-2.5">
                  <h2 className="text-xl xl:text-3xl text-ev-dark">
                    Entertainment
                  </h2>
                  <p className="text-sm xl:text-base text-[#9BA0A8]">
                    Watch and upload videos. Showcase your talent and services.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="px-4 py-5 bg-white flex items-center justify-center rounded-full">
                  <svg
                    width="24"
                    height="18"
                    viewBox="0 0 24 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1212 0L9.30562 12.1025L2.87883 5.51966L0 8.4684L9.30562 18L24 2.94879L21.1212 0Z"
                      fill="#1FC0E8"
                    />
                  </svg>
                </div>
                <div className="xl:space-y-2.5">
                  <h2 className="text-xl xl:text-3xl text-ev-dark">
                    Easy to use
                  </h2>
                  <p className="text-sm xl:text-base text-[#9BA0A8]">
                    A user-friendly platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Slider */}
      <section className="bg-white swiper-main">
        <div className="wrapper px-3 md:px-5 xl:px-8 2xl:px-10 relative pt-14 md:pt-20 lg:pt-48 xl:pt-56 pb-14 lg:pb-24">
          <h2 className="w-full text-center sm:text-left sm:w-auto text-spiroDiscoBall text-4xl md:text-40 xl:text-5xl px-[30px] mb-2 sm:mb-4">
            Events
          </h2>
          {/* <div className="flex flex-wrap items-center sm:justify-between space-y-10 sm:space-y-0">
            <ul className="flex u-tabs w-full sm:w-auto justify-center sm:justify-end">
              <li data-tab="event" className={tab === 1 ? "active" : undefined} onClick={() => setTab(1)} >Events</li>
              <li data-tab="Offers" className={tab === 2 ? "active" : undefined} onClick={() => setTab(2)}>Offers</li>
              <li data-tab="Live" className={tab === 3 ? "active" : undefined} onClick={() => setTab(3)}>Live Stream</li>
            </ul>
          </div> */}
          {/* <div className="w-full">
            {tab === 1 && <Event />} 
            {tab === 2 && <Offer />}
            {tab === 3 && <LiveStream />}
          </div> */}
          <div className="w-full">
            <Swiper
              slidesPerView={3}
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {events.map((ele) => {
                return (
                  <SwiperSlide className="px-0">
                    <div className="swiper-slide py-5">
                      <div className="w-full">
                        <div className="block pb-4 sm:p-4 shadow-lg bg-white rounded-lg relative">
                          <img
                            src={
                              ele &&
                              ele?.aboutplace &&
                              ele?.aboutplace?.banner &&
                              ele?.aboutplace?.banner != ""
                                ? s3Url + "/" + ele?.aboutplace?.banner
                                : ele &&
                                  ele?.personaldetail &&
                                  ele?.personaldetail?.banner &&
                                  ele?.personaldetail?.banner != ""
                                ? s3Url + "/" + ele?.personaldetail?.banner
                                : dj
                            }
                            alt="card-1"
                            className="object-cover w-full h-44 md:h-56 rounded-md"
                          />
                          <span className="block absolute top-6 left-0 leading-4 bg-spiroDiscoBall text-white text-sm font-bold py-1 px-2.5">
                            {ele.event_category.category_name}
                          </span>
                          <div className="absolute top-6 right-5">
                            <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white mb-3 cursor-pointer">
                              <svg
                                width="13"
                                height="12"
                                viewBox="0 0 13 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M3.68959 0.654297C4.34449 0.654297 4.94493 0.865867 5.47417 1.28314C5.98156 1.68319 6.31937 2.19272 6.51825 2.56323C6.71713 2.1927 7.05494 1.68319 7.56234 1.28314C8.09158 0.865867 8.69201 0.654297 9.34692 0.654297C11.1745 0.654297 12.5527 2.17828 12.5527 4.19922C12.5527 6.38255 10.8333 7.87635 8.23032 10.1377C7.7883 10.5218 7.28727 10.9571 6.76651 11.4213C6.69787 11.4826 6.60971 11.5164 6.51825 11.5164C6.42679 11.5164 6.33863 11.4826 6.26999 11.4214C5.74918 10.957 5.24818 10.5218 4.8059 10.1375C2.2032 7.87635 0.483769 6.38255 0.483769 4.19922C0.483769 2.17828 1.86199 0.654297 3.68959 0.654297Z"
                                  fill="#2E363F"
                                />
                              </svg>
                            </span>
                            <span className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white cursor-pointer">
                              <svg
                                width="13"
                                height="13"
                                viewBox="0 0 13 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0834 8.31035C9.33809 8.31035 8.68134 8.65405 8.26884 9.17674L4.70238 7.46467C4.76159 7.27545 4.80321 7.07936 4.80321 6.87244C4.80321 6.59179 4.74183 6.32498 4.6358 6.07957L8.36825 3.97391C8.78363 4.43093 9.39417 4.72737 10.0834 4.72737C11.3312 4.72737 12.3463 3.77574 12.3463 2.60587C12.3463 1.43601 11.3312 0.484375 10.0834 0.484375C8.83552 0.484375 7.82045 1.43601 7.82045 2.60587C7.82045 2.87547 7.87966 3.1312 7.9779 3.36862L4.23433 5.48046C3.81931 5.03702 3.21757 4.75094 2.54027 4.75094C1.29242 4.75094 0.277344 5.70258 0.277344 6.87244C0.277344 8.04231 1.29242 8.99394 2.54027 8.99394C3.29785 8.99394 3.9657 8.64014 4.37664 8.10277L7.93136 9.80928C7.86588 10.0074 7.82045 10.2138 7.82045 10.4318C7.82045 11.6017 8.83552 12.5533 10.0834 12.5533C11.3312 12.5533 12.3463 11.6017 12.3463 10.4318C12.3463 9.26198 11.3312 8.31035 10.0834 8.31035Z"
                                  fill="#2E363F"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="pb-0 p-3 sm:pt-5 sm:px-2">
                            <div className="flex flex-wrap justify-between items-center">
                              <Star />
                              <div className="flex space-x-5">
                                <p className="text-sm font-bold text-[#13E1B0]">
                                  {ele?.is_live === true
                                    ? "Available"
                                    : "Not Available"}
                                </p>
                              </div>
                            </div>
                            <h2 className="max-w-[450px] w-full text-japaneseIndigo text-base sm:text-lg xl:text-2xl font-semibold pt-1 pb-2 xl:py-2 truncate">
                              {ele?.display_name}
                            </h2>
                            <div className="flex justify-between items-center pt-2 xl:pt-4 border-t border-[#dddddd]">
                              <span className="text-lg font-bold text-spiroDiscoBall mr-3">
                                {ele &&
                                ele?.aboutplace &&
                                ele?.aboutplace?.place_price &&
                                ele?.aboutplace?.place_price != ""
                                  ? ele?.aboutplace?.place_price
                                  : ele &&
                                    ele?.personaldetail &&
                                    ele?.personaldetail?.price &&
                                    ele?.personaldetail?.price != ""
                                  ? ele?.personaldetail?.price
                                  : "00"}{" "}
                                INR
                              </span>
                              <div className="flex space-x-3">
                                <p className="text-xs font-bold text-[#9BA0A8]">
                                  {ele.capacity ? (
                                    <>
                                      {ele?.capacity?.city
                                        ? ele?.capacity?.city
                                        : ""}
                                      ,
                                      {ele?.capacity?.state
                                        ? ele?.capacity?.state
                                        : ""}
                                    </>
                                  ) : (
                                    <>
                                      {ele?.personaldetail?.city
                                        ? ele?.personaldetail?.city
                                        : ""}
                                      ,
                                      {ele?.personaldetail?.state
                                        ? ele?.personaldetail?.state
                                        : ""}
                                    </>
                                  )}
                                </p>
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g clipPath="url(#clip0_2535_16260)">
                                    <path
                                      d="M8 0C5.18859 0 2.84375 2.26469 2.84375 5.15625C2.84375 6.25631 3.17431 7.23725 3.80872 8.15644L7.60541 14.0808C7.78959 14.3688 8.21078 14.3683 8.39459 14.0808L12.2078 8.13628C12.8285 7.25875 13.1562 6.22834 13.1562 5.15625C13.1562 2.31309 10.8432 0 8 0ZM8 7.5C6.70772 7.5 5.65625 6.44853 5.65625 5.15625C5.65625 3.86397 6.70772 2.8125 8 2.8125C9.29228 2.8125 10.3438 3.86397 10.3438 5.15625C10.3438 6.44853 9.29228 7.5 8 7.5Z"
                                      fill="#9BA0A8"
                                    />
                                    <path
                                      d="M11.6645 10.7715L9.30416 14.4617C8.69319 15.4143 7.30341 15.4111 6.69537 14.4626L4.33119 10.7725C2.25106 11.2534 0.96875 12.1344 0.96875 13.1873C0.96875 15.0142 4.5915 15.9998 8 15.9998C11.4085 15.9998 15.0312 15.0142 15.0312 13.1873C15.0312 12.1337 13.7472 11.2522 11.6645 10.7715Z"
                                      fill="#9BA0A8"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_2535_16260">
                                      <rect
                                        width="16"
                                        height="16"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section id="showcase" className="relative bg-white">
        <div className="px-3.5 relative pt-16 lg:pt-24">
          <div className="w-full pt-4">
            <h1 className="w-full text-center sm:w-auto text-4xl lg:text-[50px] text-white font-bold mb-4 lg:mb-6 relative z-10">
              App Showcase
            </h1>
            <p className="max-w-5xl mx-auto text-white text-center relative z-10 text-base md:text-lg xl:text-xl">
              By connecting planners and organizers, this medium aims to ease
              the efforts of end users to find all event needs in one place. The
              platform lets people from around the globe register, book, and
              make payments.
            </p>
            <img
              src={ShowBACK}
              className="absolute inset-0 w-full h-full z-0"
              alt="Showcase"
            />
          </div>
          <div className="flex items-center text-center -mx-3.5 pt-8 lg:pt-16 relative z-10">
            <img src={Showcasebg} className="w-full" alt="Showcase" />
          </div>
        </div>
      </section>

      {/* f-coin */}
      {/* <section className="py-12 lg:pt-20 2xl:pt-24 lg:pb-40 bg-white">
        <div className="wrapper">
          <h2 className="text-center pb-3 xl:pb-6 font-extrabold text-4xl md:text-40 xl:text-5xl">F - Coin</h2>
          <p className="lg:max-w-screen-lg lg:px-8 mx-auto font-bold text-center text-[#9BA0A8] text-base md:text-lg xl:text-xl">Refer a friend and get an additional 10 coins and your friend gets additional 10 point. So Refer away</p>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full bg-[#2E363F] py-10 pb-12 px-5 md:p-[50px]">
              <div className="flex flex-wrap">
                <div className="pt-3 w-full md:w-2/12 mb-5 md:mb-0">
                  <img src={giftfcoin} alt="GIFT iCON" />
                </div>
                <div className="flex flex-wrap lg:flex-nowrap w-full justify-between md:w-10/12 md:pl-12">
                  <div className="fcoin-left w-full lg:w-auto">
                    <h4 className="text-2xl xl:text-3xl font-bold xl:leading-9 text-white">Refer to your Friends and Earn</h4>
                    <p className="text-base w-full max-w-[460px] text-[#9BA0A8] xl:leading-7 pt-2.5 mb-5 md:mb-10">Refer a friend and get an additional 10 coins and your friend
                      gets additional 10 point. So Refer away</p>
                    <span className="inline-block bg-spiroDiscoBall text-xl md:text-2xl xl:text-3xl leading-9 text-white px-[15px] py-[17px]">Refer and Get 10 Coin</span>
                  </div>
                  <div className="flex items-end w-full mt-3 lg:mt-0 lg:w-auto">
                    <div className="flex w-[353px]-  justify-between bg-[#C4FBEE] border-2 border-[#13E1B0] border-dashed px-5 py-2">
                      <div className="flex flex-col justify-between pr-20">
                        <span className="text-[#2E363F] text-xs leading-6 font-normal">Referral Code</span>
                        <span className="text-[#13E1B0] text-2xl leading-6 font-bold pt-1">Z128HN</span>
                      </div>
                      <div className="flex items-center text-sm font-bold border-l-2 border-dashed border-[#13e1b0] leading-[14px] pl-[18px] cursor-pointer">
                        Copy <br /> Code
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-14 lg:pt-28 flex flex-wrap items-center justify-center text-center">
            <div className="w-full md:w-1/3 py-5 md:py-0">
              <h2 className="text-5xl lg:text-7xl text-ev-dark font-bold"><span data-purecounter-start="0" data-purecounter-end="1000" data-purecounter-duration="0" className="purecounter">02+</span></h2>
              <p className="text-base font-bold lg:text-2xl text-ev-gray">Year of Experience</p>
            </div>
            <div className="w-full md:w-1/3 py-5 md:py-0 border-y-2 md:border-y-0 md:border-x-2">
              <h2 className="text-5xl lg:text-7xl text-ev-dark font-bold"><span data-purecounter-start="0" data-purecounter-end="60" data-purecounter-duration="0" className="purecounter">21+</span></h2>
              <p className="text-base font-bold lg:text-2xl text-ev-gray">Team Member</p>
            </div>
            <div className="w-full md:w-1/3 py-5 md:py-0">
              <h2 className="text-5xl lg:text-7xl text-ev-dark font-bold"><span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="0" className="purecounter">5000+</span></h2>
              <p className="text-base font-bold lg:text-2xl text-ev-gray">Download</p>
            </div>
          </div> 
        </div>
      </section> */}

      {/* Who we are? */}
      <section id="about" className="bg-[#EEEEEE]">
        <div className="wrapper flex flex-wrap py-16 md:py-24 xl:py-40 relative">
          <img
            src={aboutg}
            alt="Our Company"
            className="w-full md:w-1/2 md:max-w-[650px] md:absolute right-0 top-1/2 md:-translate-y-1/2"
          />
          <div className="w-full md:w-1/2 max-w-xl md:pr-10 mt-6 md:mt-0">
            <h2 className="text-4xl md:text-40 xl:text-5xl mb-5">
              Who we are?
            </h2>
            <p className="text-base md:text-lg xl:text-xl text-[#9BA0A8] font-semibold mb-3 text-justify">
              Evento Package is an easy-to-use platform that helps every small
              and big professional to connect with potential clients who are
              planning to conduct an event. It also empowers event planners to
              connect and hire every small and big professional who is related
              to the event industry.
            </p>
            <p className="text-base md:text-lg xl:text-xl text-[#9BA0A8] font-semibold mb-3 text-justify">
              Our mission is to achieve growth by making our clients grow with
              innovative ideas and solutions. We aim to enhance our customers
              business with the latest and creative digital solutions that
              create an impeccable reputation all over the globe. We love
              challenges and solving the complex problems that our clients bring
              to us.
            </p>
            <p className="text-base md:text-lg xl:text-xl text-[#9BA0A8] font-semibold mb-3 text-justify">
              Our expert team has the potential to find out the possible way of
              the most complicated problems that the world needs. We believe in
              unique and user-friendly solutions that work efficiently no matter
              if its reinvented.
            </p>
          </div>
        </div>
      </section>

      {/* Ads Video Gallery */}
      <section className="bg-white pt-20">
        <div className="max-w-screen-2xl mx-auto px-4">
          <h2 className="text-center text-ev-dark pb-3 lg:pb-6">
            Ads Video Gallery
          </h2>
          <div className="flex flex-wrap ">
            <div className="swiper mySwiper px-5 responsive">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={25}
                slidesPerView={4}
                loop={true}
                centeredSlides={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="w-full p-2">
                    <div className="block shadow">
                      <div className="relative">
                        <img
                          className="object-cover w-full h-56"
                          src={AnniversaryEvent}
                          alt="Anniversary Event"
                        />
                        <button
                          onClick={() => {
                            setIsVideoPlayerPopUpOpen(true);
                            setVideoUrl(
                              "https://www.youtube.com/embed/9-x-dqX4yxo",
                            );
                          }}
                          className="w-12 h-12 flex justify-center items-center bg-spiroDiscoBall anim absolute bottom-0 right-0 hover:opacity-75"
                        >
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L17 10L0 20V0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h5 className="text-xl font-bold text-ev-dark">
                          Anniversary Event
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full p-2">
                    <div className="block shadow">
                      <div className="relative">
                        <img
                          className="object-cover w-full h-56"
                          src={ChildrenPartyPlannersEvent}
                          alt="Children Party Planners Event"
                        />
                        <button
                          onClick={() => {
                            setIsVideoPlayerPopUpOpen(true);
                            setVideoUrl(
                              "https://www.youtube.com/embed/IC8rX1VcANI",
                            );
                          }}
                          className="w-12 h-12 flex justify-center items-center bg-spiroDiscoBall anim absolute bottom-0 right-0 hover:opacity-75"
                        >
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L17 10L0 20V0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h5 className="text-xl font-bold text-ev-dark">
                          Children's Party Planners Event
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full p-2">
                    <div className="block shadow">
                      <div className="relative">
                        <img
                          className="object-cover w-full h-56"
                          src={BirthdaypartyEvent}
                          alt="Birthday Party Event"
                        />
                        <button
                          onClick={() => {
                            setIsVideoPlayerPopUpOpen(true);
                            setVideoUrl(
                              "https://www.youtube.com/embed/h-ve-ArQFck",
                            );
                          }}
                          className="w-12 h-12 flex justify-center items-center bg-spiroDiscoBall anim absolute bottom-0 right-0 hover:opacity-75"
                        >
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L17 10L0 20V0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h5 className="text-xl font-bold text-ev-dark">
                          Birthday party Event
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full p-2">
                    <div className="block shadow">
                      <div className="relative">
                        <img
                          className="object-cover w-full h-56"
                          src={SummerGardenPartyEvent}
                          alt="Summer Garden Party Event"
                        />
                        <button
                          onClick={() => {
                            setIsVideoPlayerPopUpOpen(true);
                            setVideoUrl(
                              "https://www.youtube.com/embed/yiD2r64xMFc",
                            );
                          }}
                          className="w-12 h-12 flex justify-center items-center bg-spiroDiscoBall anim absolute bottom-0 right-0 hover:opacity-75"
                        >
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L17 10L0 20V0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h5 className="text-xl font-bold text-ev-dark">
                          Summer Garden Party Event
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full p-2">
                    <div className="block shadow">
                      <div className="relative">
                        <img
                          className="object-cover w-full h-56"
                          src={ArtistVideo}
                          alt="Artist"
                        />
                        <button
                          onClick={() => {
                            setIsVideoPlayerPopUpOpen(true);
                            setVideoUrl(
                              "https://eventopackage.s3.ap-south-1.amazonaws.com/global/artist2.mp4",
                            );
                          }}
                          className="w-12 h-12 flex justify-center items-center bg-spiroDiscoBall anim absolute bottom-0 right-0 hover:opacity-75"
                        >
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L17 10L0 20V0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h5 className="text-xl font-bold text-ev-dark">
                          Artist
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full p-2">
                    <div className="block shadow">
                      <div className="relative">
                        <img
                          className="object-cover w-full h-56"
                          src={VendorVideo}
                          alt="Vendor"
                        />
                        <button
                          onClick={() => {
                            setIsVideoPlayerPopUpOpen(true);
                            setVideoUrl(
                              "https://eventopackage.s3.ap-south-1.amazonaws.com/global/vendors2.mp4",
                            );
                          }}
                          className="w-12 h-12 flex justify-center items-center bg-spiroDiscoBall anim absolute bottom-0 right-0 hover:opacity-75"
                        >
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L17 10L0 20V0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h5 className="text-xl font-bold text-ev-dark">
                          Vendors Event
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full p-2">
                    <div className="block shadow">
                      <div className="relative">
                        <img
                          className="object-cover w-full h-56"
                          src={VenueVideo}
                          alt="Venue"
                        />
                        <button
                          onClick={() => {
                            setIsVideoPlayerPopUpOpen(true);
                            setVideoUrl(
                              "https://eventopackage.s3.ap-south-1.amazonaws.com/global/venue_package2.mp4",
                            );
                          }}
                          className="w-12 h-12 flex justify-center items-center bg-spiroDiscoBall anim absolute bottom-0 right-0 hover:opacity-75"
                        >
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0L17 10L0 20V0Z" fill="white" />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4">
                        <h5 className="text-xl font-bold text-ev-dark">
                          Venue Event
                        </h5>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <div ref={navigationNextRef} className={"swiper-button-next text-3xl"} />
              <div ref={navigationPrevRef} className={"swiper-button-prev"} /> */}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Our Company */}
      <div id="aboutus" className="bg-white">
        <div className="wrapper pt-14 md:pt-24">
          <div className="flex flex-wrap items-center justify-center bg-[#EEEEEE] lg:h-[524px]">
            <div className="w-full lg:w-6/12 h-full">
              <img
                src={ourcompany}
                alt="Our Company"
                className="w-full h-full object-contain py-10 xl:py-5"
              />
            </div>
            <div className="w-full lg:w-6/12">
              <div className="pl-5 pr-3 lg:pl-14 lg:pr-10 py-10 xl:py-5">
                <h2 className="text-ev-dark font-semibold pb-6 text-4xl md:text-40 xl:text-5xl">
                  Our Company
                </h2>
                <p className="font-semibold text-[#9BA0A8] pb-4 text-base md:text-lg xl:text-xl  max-h-96 overflow-y-auto text-ellipsis pr-2 lg:pr-4 text-justify">
                  Festum Evento, established in 2019, brings a unique blend of
                  the organization through emerging IT solutions such as
                  accounting software, erp management system, and many more.
                  earlier, we started as a product-based organization. after the
                  positive response from our client and the successful evolution
                  of our product, we decided to establish the organization based
                  on our product. after successfully implementing our products,
                  we are expanding our services with the latest it solutions
                  such as mobile app development, web development, etc. we have
                  a strong marketing team of professionals and experts who
                  actively work on your projects to fulfil your requirements. we
                  have intelligent techies who are ready to solve any real-time
                  problems in the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advertisement rate for your website */}
      <div className="bg-white">
        <div className="wrapper pt-8 md:pt-12">
          <div className="flex flex-wrap justify-between items-center p-8 md:p-10 xl:p-12 xl:px-16 bg-gradient-to-r from-[#83DCF2] to-[#23C1E8]">
            <div className="w-full md:w-7/12 space-y-2 lg:space-y-4">
              <span className="text-2xl lg:text-3xl font-bold text-white">
                Download our user app
              </span>
              <p className="text-bold font-bold text-sm lg:text-base pr-5 text-white">
                Download the app and register your account with us. Discover the
                perfect planning package for any occasion. Find everything you
                need to create the most memorable moments.
              </p>
            </div>
            <div className="w-full md:w-5/12">
              <div className="flex space-x-3 mt-5 md:mt-0 md:justify-end">
                <a
                  href="https://play.google.com/store/apps/details?id=com.eventopackage.evento_package"
                  className="max-w-[125px]"
                >
                  <img src={googleplay} alt="Google Playstore" />
                </a>
                {/* //https://testflight.apple.com/join/LZvR2BZj */}
                <a
                  href="https://apps.apple.com/us/app/evento-package/id1607233336"
                  className="max-w-[125px]"
                >
                  <img src={appstore} alt="Apple Store" />
                </a>
              </div>
            </div>
          </div>
          {/* <div class="w-full px-4 mx-auto py-4 md:py-9 relative mt-8 md:mt-12">
            <img src={adbanner} alt="Lates Ring collection" class="w-full block absolute inset-0 h-full object-cover object-[15%] sm:object-center"/>
            <div class="flex items-center flex-wrap justify-between pr-10 lg:px-8 relative">
              <h1 class="text-3xl md:text-4xl xl:text-5xl font-normal text-white">50% off</h1>
              <p class="text-xl md:text-30 xl:text-40 text-white font-normal">Lates Ring collection</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Other Products */}
      <div id="otherproducts" className="bg-white swiper-main">
        <div className="wrapper py-14 md:py-24">
          <h2 className="text-center text-ev-dark pb-3 lg:pb-6 text-4xl md:text-40 xl:text-5xl">
            Other Products
          </h2>
          <div className="swiper mySwiper px-5 responsive max-w-6xl">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={25}
              slidesPerView={4}
              loop={true}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="swiper-slide py-5">
                  <div className="px-5 py-6 bg-white drop-shadow-lg">
                    <img
                      src={fcoin}
                      className="mx-auto fixed-images"
                      alt="F coin"
                    />
                    <div className="text-center pt-7 w-full overflow-hidden">
                      <p className="text-xl font-bold text-ev-dark">F-Coin</p>
                      {/* <p className="text-spiroDiscoBall text-sm font-bold text-ellipsis">Coming Soon..</p> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide py-5">
                  <a
                    href="https://www.festumevento.com"
                    target="blank"
                    className="px-5 py-6 bg-white drop-shadow-lg block"
                  >
                    <img
                      src={sfe}
                      className="mx-auto fixed-images"
                      alt="Festum Evento"
                    />
                    <div className="text-center pt-7 w-full overflow-hidden">
                      <p className="text-xl font-bold text-ev-dark">
                        Festum Evento
                      </p>
                      {/* <a href="" className="text-spiroDiscoBall text-sm font-bold text-ellipsis">https://www.festumevento.com</a> */}
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide py-5">
                  <div className="px-5 py-6 bg-white drop-shadow-lg">
                    <img
                      src={ad}
                      className="mx-auto fixed-images"
                      alt="Festum Advertising Media"
                    />
                    <div className="text-center pt-0 w-full overflow-hidden">
                      <p className="text-xl font-bold text-ev-dark">
                        Festum Advertising Media
                      </p>
                      {/* <p className="text-spiroDiscoBall text-sm font-bold text-ellipsis">Coming Soon..</p> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide py-5">
                  <a
                    href="https://festumfield.com"
                    target="blank"
                    className="px-5 py-6 bg-white drop-shadow-lg block"
                  >
                    <img
                      src={ff}
                      className="mx-auto fixed-images"
                      alt="Festum Field"
                    />
                    <div className="text-center pt-7 w-full overflow-hidden">
                      <p className="text-xl font-bold text-ev-dark">
                        Festum Field
                      </p>
                      {/* <a href="https://friendsfield.in" target="blank" className="text-spiroDiscoBall text-sm font-bold text-ellipsis">https://friendsfield.in</a> */}
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide py-5">
                  <div className="px-5 py-6 bg-white drop-shadow-lg">
                    <img
                      src={perfact}
                      className="mx-auto fixed-images"
                      alt="Perfect Account Manager"
                    />
                    <div className="text-center pt-0 w-full overflow-hidden">
                      <p className="text-xl font-bold text-ev-dark">
                        Perfect Account Manage{" "}
                      </p>
                      {/* <p className="text-spiroDiscoBall text-sm font-bold text-ellipsis">Coming Soon..</p> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div
                ref={navigationNextRef}
                className={"swiper-button-next text-3xl"}
              />
              <div ref={navigationPrevRef} className={"swiper-button-prev"} />
            </Swiper>
          </div>
        </div>
      </div>

      {/* Get in touch with Us */}
      <div id="contactus" className="md:py-10 relative bg-white">
        <span className="gradiyent-c inline-block absolute w-full h-full max-h-[550px]"></span>
        <div className="wrapper flex flex-wrap justify-center relative">
          <div className="text-center text-white pb-8 lg:pb-12 pt-12 mt:pt-14 xl:pt-24">
            <h2 className="text-[30px] md:text-40 xl:text-5xl">
              Get in touch with Us
            </h2>
            <p className="text-base md:text-lg xl:text-xl pt-4 md:pt-8">
              Feel free to contact us for any queries.
            </p>
          </div>
          <div className="w-full max-w-[1200px] mx-auto">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-wrap w-full bg-white shadow-lg p-8"
            >
              <div className="w-full p-1.5 px-0 sm:p-3.5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm font-medium"
                  >
                    Your Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    id="name"
                    name="name"
                    value={formik.values?.name}
                    onChange={(e) => setInputValue("name", e.target.value)}
                    className="htmlForm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#EEEEEE] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:border-gray-500 focus:ring-2 focus:ring-gray-300 outline-none"
                  />
                  <small className="absolute top-full left-0 text-red-500 text-xs">
                    {formik.errors.name}
                  </small>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-1.5 px-0 sm:p-3.5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm font-medium"
                  >
                    Company Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    id="company_name"
                    name="company_name"
                    value={formik.values?.company_name}
                    onChange={(e) =>
                      setInputValue("company_name", e.target.value)
                    }
                    className="htmlForm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#EEEEEE] bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0focus:border-gray-500 focus:ring-2 focus:ring-gray-300 outline-none"
                  />
                  <small className="absolute top-full left-0 text-red-500 text-xs">
                    {formik.errors.company_name}
                  </small>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-1.5 px-0 sm:p-3.5">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm font-medium"
                  >
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name@domain.com"
                    id="email"
                    name="email"
                    value={formik.values?.email}
                    onChange={(e) => setInputValue("email", e.target.value)}
                    className="htmlForm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#EEEEEE] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:border-gray-500 focus:ring-2 focus:ring-gray-300 outline-none"
                  />
                  <small className="absolute top-full left-0 text-red-500 text-xs">
                    {formik.errors.email}
                  </small>
                </div>
              </div>
              <div className="w-full mb-7 p-1.5 px-0 sm:p-3.5 pb-0">
                <div className="relative">
                  <label
                    htmlFor="description"
                    className="leading-7 text-sm font-medium"
                  >
                    Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    placeholder="Describe the query message here..."
                    name="description"
                    col="5"
                    rows="3"
                    value={formik.values?.description}
                    onChange={(e) =>
                      setInputValue("description", e.target.value)
                    }
                    className="htmlForm-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#EEEEEE] bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:border-gray-500 focus:ring-2 focus:ring-gray-300 outline-none"
                  ></textarea>
                  <small className="absolute top-full left-0 text-red-500 text-xs">
                    {formik.errors.description}
                  </small>
                </div>
              </div>
              <div className="relative w-full p-1.5 px-0 sm:p-3.5 pt-0">
                <button
                  className="w-full text-white text-lg font-semibold bg-spiroDiscoBall hover:bg-japaneseIndigo anim py-2 relative"
                  type="submit"
                >
                  Submit your query
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Get Our Brochure */}
      <div className="py-12 md:pb-14 bg-white">
        <div className="wrapper md:py-10 text-center space-y-3 md:space-y-6">
          <h2 className="text-japaneseIndigo text-4xl md:text-40 xl:text-5xl">
            Get Our Brochure
          </h2>
          <p className="text-[#9BA0A8] text-xl md:text-2xl xl:text-3xl">
            Ready to get Our Brochure & Enjoy your Life Through Our Evento
            Package App.
          </p>
          <a
            href="https://eventopackage.s3.ap-south-1.amazonaws.com/global/brochure/EventoPackageBrochure.pdf"
            target={"_blank"}
            className="text-white text-lg inline-block font-semibold bg-spiroDiscoBall hover:bg-japaneseIndigo anim px-12 py-2"
          >
            Download Brochure
          </a>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-white">
        <div className="bg-japaneseIndigo text-white pt-24 pb-10">
          <div className="max-w-screen-2xl mx-auto px-5">
            <div className="flex flex-wrap pb-10 border-b border-white border-opacity-20 space-y-7 md:space-y-0">
              <div className="w-full md:w-6/12 pr-5 space-y-5">
                <svg
                  className="w-[149px] h-[130px]"
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5278_17473)">
                    <path
                      d="M193 125.389H6V162.269H193V125.389Z"
                      fill="#1EC0E8"
                    />
                    <path
                      d="M27.6356 156.705H12.082V130.66H27.0436V135.438H17.9181V141.215H26.4014V145.976H17.9181V151.932H27.6356V156.705Z"
                      fill="white"
                    />
                    <path
                      d="M60.7981 130.66L51.8625 156.705H45.2445L36.415 130.66H42.7091L48.1151 148.786C48.38 149.631 48.5559 150.501 48.6401 151.383H48.7517C48.8544 150.477 49.0414 149.584 49.3102 148.713L54.6828 130.66H60.7981Z"
                      fill="white"
                    />
                    <path
                      d="M86.867 156.705H71.3135V130.66H86.275V135.438H77.1551V141.215H85.6384V145.976H77.1551V151.932H86.867V156.705Z"
                      fill="white"
                    />
                    <path
                      d="M121.772 156.705H115.874L105.185 140.34C104.713 139.644 104.279 138.923 103.884 138.181H103.811C103.904 139.101 103.952 140.505 103.956 142.393V156.705H98.4385V130.66H104.733L115.025 146.515C115.494 147.233 115.924 147.939 116.326 148.64H116.399C116.272 147.452 116.223 146.257 116.254 145.062V130.66H121.772V156.705Z"
                      fill="white"
                    />
                    <path
                      d="M153.326 135.438H145.926V156.705H140.068V135.438H132.713V130.66H153.332L153.326 135.438Z"
                      fill="white"
                    />
                    <path
                      d="M175.185 157.159C171.462 157.159 168.435 155.946 166.104 153.519C163.773 151.093 162.604 147.926 162.597 144.019C162.597 139.906 163.784 136.576 166.16 134.03C168.535 131.484 171.681 130.211 175.598 130.211C179.303 130.211 182.296 131.428 184.578 133.862C186.861 136.296 188.004 139.506 188.007 143.491C188.007 147.585 186.821 150.885 184.45 153.39C182.078 155.895 178.99 157.151 175.185 157.159ZM175.436 135.286C174.497 135.252 173.564 135.445 172.715 135.848C171.865 136.251 171.125 136.853 170.555 137.603C169.349 139.147 168.746 141.19 168.746 143.733C168.746 146.275 169.349 148.315 170.555 149.851C171.136 150.551 171.861 151.116 172.682 151.505C173.502 151.895 174.397 152.099 175.304 152.105C176.212 152.111 177.109 151.918 177.935 151.539C178.76 151.161 179.493 150.606 180.083 149.913C181.266 148.455 181.858 146.43 181.858 143.839C181.858 141.143 181.285 139.042 180.138 137.535C179.597 136.803 178.885 136.214 178.066 135.821C177.247 135.427 176.344 135.239 175.436 135.275V135.286Z"
                      fill="white"
                    />
                    <path
                      d="M19.4964 176.969V180.805H17V169.678H20.9093C23.7017 169.678 25.0998 170.859 25.1035 173.222C25.1199 173.737 25.0199 174.248 24.811 174.719C24.602 175.189 24.2896 175.605 23.8972 175.937C22.9881 176.663 21.8459 177.03 20.686 176.969H19.4964ZM19.4964 171.601V175.067H20.4793C21.8085 175.067 22.4731 174.484 22.4731 173.318C22.4731 172.151 21.8085 171.579 20.4793 171.601H19.4964Z"
                      fill="white"
                    />
                    <path
                      d="M52.2953 180.805H49.5755L48.7881 178.331H44.8453L44.0634 180.805H41.3604L45.3982 169.678H48.3581L52.2953 180.805ZM48.2184 176.402L47.0289 172.661C46.931 172.336 46.8674 172.002 46.839 171.663H46.7776C46.7527 171.993 46.689 172.319 46.5877 172.633L45.3814 176.402H48.2184Z"
                      fill="white"
                    />
                    <path
                      d="M77.4556 180.41C76.4549 180.841 75.3713 181.042 74.2835 180.999C73.5477 181.039 72.8117 180.925 72.1217 180.665C71.4317 180.406 70.8025 180.006 70.2736 179.491C69.7769 178.954 69.392 178.322 69.1417 177.633C68.8914 176.945 68.7807 176.213 68.816 175.481C68.7826 174.685 68.911 173.891 69.1933 173.146C69.4756 172.402 69.9059 171.723 70.4579 171.151C71.0148 170.592 71.6807 170.153 72.4139 169.864C73.147 169.574 73.9318 169.44 74.7191 169.469C75.6484 169.445 76.5746 169.586 77.4556 169.884V172.295C76.6872 171.844 75.8102 171.613 74.9201 171.628C74.4546 171.608 73.9902 171.687 73.5566 171.858C73.1229 172.028 72.7294 172.288 72.4014 172.621C72.0716 172.978 71.8168 173.399 71.6518 173.858C71.4868 174.316 71.415 174.803 71.4408 175.29C71.393 176.234 71.7181 177.159 72.3456 177.864C72.6611 178.188 73.0411 178.44 73.4608 178.606C73.8805 178.771 74.3302 178.845 74.7805 178.823C75.7204 178.831 76.6449 178.583 77.4556 178.105V180.41Z"
                      fill="white"
                    />
                    <path
                      d="M104.424 180.805H101.274L98.0407 175.987C97.9304 175.79 97.8334 175.586 97.7503 175.376H97.7112V180.821H95.2148V169.678H97.7112V174.938H97.7503C97.8117 174.793 97.9123 174.585 98.0575 174.316L101.118 169.678H104.095L100.23 174.983L104.424 180.805Z"
                      fill="white"
                    />
                    <path
                      d="M131.057 180.805H128.36L127.572 178.331H123.629L122.848 180.805H120.145L124.177 169.678H127.137L131.057 180.805ZM126.975 176.402L125.785 172.661C125.692 172.335 125.63 172.001 125.601 171.663H125.567C125.54 171.993 125.475 172.319 125.372 172.633L124.171 176.402H126.975Z"
                      fill="white"
                    />
                    <path
                      d="M157.368 180.058C156.128 180.725 154.735 181.05 153.33 181.001C151.786 181.084 150.271 180.55 149.119 179.514C148.592 178.977 148.183 178.336 147.918 177.631C147.652 176.926 147.536 176.173 147.577 175.42C147.547 174.629 147.68 173.841 147.969 173.104C148.257 172.368 148.694 171.699 149.253 171.141C149.85 170.581 150.553 170.146 151.321 169.861C152.088 169.577 152.904 169.45 153.721 169.487C154.776 169.469 155.827 169.636 156.826 169.98V172.33C155.864 171.805 154.781 171.548 153.687 171.584C153.218 171.566 152.751 171.647 152.315 171.822C151.879 171.997 151.485 172.262 151.157 172.599C150.543 173.35 150.198 174.288 150.18 175.26C150.162 176.232 150.471 177.181 151.057 177.955C151.362 178.272 151.731 178.52 152.139 178.683C152.548 178.845 152.986 178.918 153.425 178.897C153.912 178.917 154.398 178.829 154.849 178.639V176.463H152.615V174.461H157.328L157.368 180.058Z"
                      fill="white"
                    />
                    <path
                      d="M181.974 180.805H175.328V169.678H181.717V171.719H177.808V174.192H181.432V176.228H177.808V178.791H181.974V180.805Z"
                      fill="white"
                    />
                    <path
                      d="M129.619 104.143V106.723L126.234 105.921V106.521L130.395 107.508V104.143C130.403 104.144 130.41 104.143 130.417 104.14C130.425 104.138 130.431 104.134 130.436 104.128C130.442 104.123 130.446 104.116 130.448 104.109C130.451 104.102 130.452 104.094 130.451 104.087C130.451 104.08 130.449 104.072 130.447 104.066C130.444 104.059 130.439 104.054 130.434 104.049C130.429 104.044 130.423 104.04 130.416 104.038C130.409 104.036 130.402 104.035 130.395 104.036C130.405 103.959 130.386 103.881 130.343 103.816C130.3 103.751 130.235 103.704 130.16 103.683C130.085 103.638 130.025 103.572 129.987 103.492C129.947 103.571 129.885 103.637 129.809 103.683C129.734 103.704 129.669 103.751 129.626 103.816C129.583 103.881 129.565 103.959 129.574 104.036C129.567 104.035 129.56 104.036 129.553 104.038C129.546 104.04 129.54 104.044 129.535 104.049C129.53 104.054 129.525 104.059 129.522 104.066C129.52 104.072 129.518 104.08 129.518 104.087C129.511 104.1 129.509 104.116 129.513 104.131C129.517 104.145 129.527 104.158 129.541 104.165C129.554 104.173 129.57 104.174 129.584 104.17C129.599 104.166 129.611 104.156 129.619 104.143Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M118.511 102.304V102.82H119.175V103.504C119.245 103.651 119.329 103.79 119.427 103.919C119.611 104.144 119.701 104.431 119.678 104.721V105.922H118.941V106.522H125.827V105.933L126.212 106.011V103.078C126.227 103.078 126.241 103.072 126.252 103.062C126.262 103.051 126.268 103.037 126.268 103.022C126.268 103.007 126.262 102.993 126.252 102.982C126.241 102.972 126.227 102.966 126.212 102.966C126.219 102.89 126.2 102.813 126.157 102.75C126.114 102.687 126.051 102.64 125.978 102.618C125.978 102.571 125.959 102.525 125.925 102.491C125.892 102.458 125.846 102.439 125.799 102.439C125.751 102.439 125.706 102.458 125.673 102.491C125.639 102.525 125.62 102.571 125.62 102.618C125.547 102.64 125.484 102.687 125.441 102.75C125.398 102.813 125.379 102.89 125.386 102.966C125.371 102.966 125.357 102.972 125.346 102.982C125.336 102.993 125.33 103.007 125.33 103.022C125.33 103.037 125.336 103.051 125.346 103.062C125.357 103.072 125.371 103.078 125.386 103.078H125.453V105.91H123.939V104.71C123.928 104.565 123.946 104.419 123.993 104.281C124.04 104.143 124.115 104.016 124.213 103.908C124.318 103.78 124.41 103.641 124.486 103.493V102.809H125.151V102.293H124.66C124.66 100.639 123.839 100.28 123.051 99.8871C122.53 99.5807 122.109 99.1286 121.839 98.5859C121.567 99.1282 121.144 99.58 120.622 99.8871C119.834 100.28 119.013 100.639 119.013 102.293L118.511 102.304ZM122.085 104.721C122.075 104.569 122.102 104.416 122.164 104.276C122.227 104.136 122.322 104.014 122.442 103.919C122.433 103.868 122.435 103.815 122.449 103.764C122.462 103.713 122.487 103.666 122.52 103.626C122.554 103.586 122.596 103.553 122.643 103.531C122.69 103.509 122.742 103.497 122.794 103.497C122.847 103.497 122.898 103.509 122.946 103.531C122.993 103.553 123.035 103.586 123.068 103.626C123.102 103.666 123.126 103.713 123.14 103.764C123.153 103.815 123.155 103.868 123.146 103.919C123.265 104.015 123.359 104.138 123.42 104.277C123.481 104.417 123.508 104.569 123.498 104.721V105.922H122.102L122.085 104.721ZM120.192 104.721C120.182 104.569 120.209 104.417 120.27 104.277C120.331 104.138 120.425 104.015 120.544 103.919C120.679 103.797 120.797 103.658 120.895 103.504C120.998 103.657 121.118 103.796 121.253 103.919C121.371 104.015 121.465 104.138 121.527 104.277C121.588 104.417 121.615 104.569 121.605 104.721V105.922H120.192V104.721Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M28.0153 98.221H28.5737V97.6602H12.3779V98.5912H27.574C27.5749 98.5364 27.5875 98.4824 27.6111 98.433C27.6346 98.3836 27.6684 98.3398 27.7103 98.3047C27.7521 98.2695 27.8011 98.2439 27.8537 98.2295C27.9063 98.215 27.9614 98.2121 28.0153 98.221Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M29.5339 88.2001V91.9521H29.4222C29.36 91.9521 29.3003 91.9769 29.2563 92.021C29.2123 92.0652 29.1876 92.1251 29.1876 92.1876C29.1876 92.2501 29.2123 92.31 29.2563 92.3542C29.3003 92.3983 29.36 92.4232 29.4222 92.4232H33.3315C33.3937 92.4232 33.4534 92.3983 33.4974 92.3542C33.5414 92.31 33.5661 92.2501 33.5661 92.1876C33.5661 92.1251 33.5414 92.0652 33.4974 92.021C33.4534 91.9769 33.3937 91.9521 33.3315 91.9521H33.2198V88.2001C33.3304 88.1877 33.4326 88.1348 33.5068 88.0515C33.581 87.9682 33.622 87.8604 33.622 87.7486C33.622 87.6369 33.581 87.529 33.5068 87.4457C33.4326 87.3624 33.3304 87.3095 33.2198 87.2971V86.9999C33.2198 86.0353 31.3657 83.7695 31.3657 83.7695C31.3657 83.7695 29.5116 86.0128 29.5116 86.9999V87.2971C29.401 87.3095 29.2988 87.3624 29.2246 87.4457C29.1504 87.529 29.1094 87.6369 29.1094 87.7486C29.1094 87.8604 29.1504 87.9682 29.2246 88.0515C29.2988 88.1348 29.401 88.1877 29.5116 88.2001H29.5339ZM32.4045 88.9628C32.4045 88.7441 32.5162 88.5702 32.6558 88.5702C32.7954 88.5702 32.9071 88.7441 32.9071 88.9628V90.6117H32.4045V88.9628ZM30.9971 88.9628C30.9971 88.9113 31.0072 88.8602 31.0269 88.8126C31.0465 88.765 31.0753 88.7217 31.1116 88.6852C31.1479 88.6488 31.191 88.6199 31.2384 88.6001C31.2859 88.5804 31.3367 88.5702 31.388 88.5702C31.4398 88.5695 31.4913 88.5791 31.5393 88.5985C31.5874 88.6179 31.6312 88.6467 31.6681 88.6832C31.705 88.7197 31.7343 88.7633 31.7543 88.8113C31.7743 88.8593 31.7846 88.9108 31.7846 88.9628V90.6117H30.9971V88.9628ZM29.8801 88.9628C29.8801 88.7441 29.9918 88.5702 30.1259 88.5702C30.2599 88.5702 30.3772 88.7441 30.3772 88.9628V90.6117H29.8801V88.9628Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M48.9415 115.051H48.383C48.1038 108.26 42.2398 107.301 42.2398 107.301C42.2398 107.301 36.3535 108.26 36.0575 115.051H35.5381V115.792H36.7388C36.9901 115.792 36.9287 115.433 36.9287 115.433C37.1577 115.433 37.1297 115.051 37.1297 115.051H36.7165C36.9957 109.006 42.2398 108.125 42.2398 108.125C42.2398 108.125 47.4615 108.983 47.7631 115.029H47.3443C47.3443 115.029 47.3443 115.41 47.5509 115.41C47.5509 115.41 47.4839 115.769 47.7408 115.769H48.9415V115.051Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M148.959 91.2162H186.086V90.7956L186.471 90.375H148.573L148.959 90.7956V91.2162Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M185.282 87.0215H149.763V89.8873H185.282V87.0215Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M184.243 83.1523H150.802V86.0743H184.243V83.1523Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M174.9 74.8848H160.15V76.0681H174.9V74.8848Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M167.522 72.0196C165.581 72.0143 163.708 72.734 162.267 74.0386H172.783C171.338 72.7354 169.464 72.0161 167.522 72.0196Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M149.081 93.3421H185.963L186.22 92.6074H148.824L149.081 93.3421Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M181.612 76.6621H153.432V82.691H181.612V76.6621ZM159.19 81.3899C158.874 81.391 158.566 81.2982 158.304 81.1233C158.041 80.9483 157.836 80.6991 157.715 80.4071C157.594 80.1152 157.561 79.7936 157.622 79.4832C157.683 79.1728 157.834 78.8874 158.057 78.6633C158.279 78.4392 158.562 78.2864 158.871 78.2243C159.18 78.1622 159.501 78.1935 159.792 78.3143C160.083 78.4351 160.332 78.64 160.507 78.903C160.682 79.1659 160.776 79.4752 160.776 79.7916C160.776 80.2145 160.609 80.6202 160.311 80.9198C160.014 81.2194 159.611 81.3884 159.19 81.3899ZM173.71 81.5414H170.862V81.8274H164.205V81.5414H161.356V78.0474H164.205V77.7557H170.862V78.0474H173.71V81.5414ZM175.866 81.3899C175.551 81.3899 175.243 81.2962 174.981 81.1206C174.72 80.9449 174.516 80.6953 174.395 80.4032C174.275 80.1112 174.243 79.7898 174.305 79.4797C174.366 79.1697 174.518 78.8849 174.74 78.6613C174.963 78.4378 175.246 78.2856 175.555 78.2239C175.864 78.1622 176.184 78.1939 176.475 78.3149C176.766 78.4358 177.014 78.6407 177.189 78.9036C177.364 79.1664 177.457 79.4754 177.457 79.7916C177.457 80.0024 177.416 80.2112 177.335 80.4058C177.254 80.6005 177.136 80.7772 176.987 80.9258C176.838 81.0743 176.661 81.1918 176.467 81.2715C176.273 81.3512 176.064 81.3914 175.854 81.3899H175.866Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M155.805 103.51H150.885V106.056H155.805V103.51Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M155.805 99.5059H150.885V100.543H155.805V99.5059Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M153.242 97.3578C153.486 97.3578 153.725 97.2851 153.928 97.1489C154.131 97.0127 154.289 96.8191 154.382 96.5927C154.476 96.3662 154.5 96.117 154.453 95.8765C154.405 95.6361 154.287 95.4153 154.115 95.2419C153.942 95.0686 153.722 94.9505 153.483 94.9027C153.243 94.8549 152.995 94.8794 152.77 94.9733C152.544 95.0671 152.351 95.2259 152.216 95.4298C152.08 95.6336 152.008 95.8732 152.008 96.1184C152.008 96.4471 152.138 96.7623 152.369 96.9948C152.601 97.2272 152.915 97.3578 153.242 97.3578Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M158.715 94.1055V93.8587H147.975V95.6422H147.59V95.2944H147.3V94.0494C147.293 93.9704 147.303 93.891 147.328 93.8158C147.353 93.7406 147.393 93.6713 147.445 93.6119C147.502 93.5431 147.55 93.4678 147.59 93.3876V93.0175H148.148C148.202 93.0175 148.253 92.9962 148.291 92.9583C148.328 92.9205 148.35 92.8691 148.35 92.8156C148.35 92.7615 148.329 92.7095 148.291 92.6708C148.253 92.632 148.202 92.6095 148.148 92.6081H147.713C147.74 92.3234 147.668 92.038 147.51 91.8007C147.351 91.5633 147.114 91.3888 146.842 91.3069C146.842 91.1314 146.772 90.9631 146.649 90.839C146.525 90.7149 146.357 90.6451 146.183 90.6451C146.008 90.6451 145.84 90.7149 145.717 90.839C145.593 90.9631 145.524 91.1314 145.524 91.3069C145.251 91.3888 145.015 91.5633 144.856 91.8007C144.697 92.038 144.625 92.3234 144.652 92.6081H144.217C144.163 92.6095 144.112 92.632 144.074 92.6708C144.037 92.7095 144.016 92.7615 144.016 92.8156C144.016 92.8691 144.037 92.9205 144.075 92.9583C144.112 92.9962 144.163 93.0175 144.217 93.0175H144.775V93.3876C144.813 93.4664 144.858 93.5415 144.909 93.6119C144.96 93.6719 144.999 93.7415 145.023 93.8166C145.047 93.8917 145.056 93.9708 145.049 94.0494V95.272H144.775V95.6197H144.217C144.163 95.6197 144.112 95.641 144.075 95.6789C144.037 95.7167 144.016 95.7681 144.016 95.8216C144.016 95.8752 144.037 95.9265 144.075 95.9644C144.112 96.0022 144.163 96.0235 144.217 96.0235V96.3152H144.435V96.0235H144.63V96.3152H144.731L144.395 104.515H144.027C143.974 104.515 143.922 104.536 143.885 104.574C143.847 104.612 143.826 104.663 143.826 104.716C143.826 104.77 143.847 104.821 143.885 104.859C143.922 104.897 143.974 104.918 144.027 104.918V105.21H144.25V104.918H144.384L144.083 112.383H143.764C143.711 112.383 143.66 112.404 143.622 112.442C143.585 112.48 143.563 112.531 143.563 112.585C143.563 112.638 143.585 112.69 143.622 112.728C143.66 112.765 143.711 112.787 143.764 112.787V113.073H143.988V112.787H144.066L143.736 120.857H137.37L137.13 114.935H137.292V114.716C137.332 114.715 137.371 114.697 137.399 114.668C137.427 114.639 137.442 114.6 137.442 114.559C137.442 114.519 137.427 114.48 137.398 114.452C137.37 114.424 137.332 114.408 137.292 114.408H137.102L136.873 108.726H137.001V108.945H137.169V108.726C137.209 108.725 137.248 108.708 137.276 108.678C137.304 108.649 137.32 108.61 137.32 108.569C137.32 108.529 137.304 108.491 137.275 108.462C137.247 108.434 137.209 108.418 137.169 108.418H136.884L136.633 102.176H136.705V101.957H136.85V102.176H137.024V101.957C137.065 101.956 137.104 101.939 137.133 101.91C137.162 101.88 137.179 101.841 137.18 101.8C137.179 101.759 137.161 101.721 137.132 101.693C137.103 101.664 137.064 101.649 137.024 101.649H136.622V101.396H136.393V100.465C136.388 100.405 136.396 100.344 136.417 100.288C136.437 100.231 136.469 100.178 136.51 100.134C136.552 100.082 136.589 100.026 136.622 99.9662V99.6801H137.024C137.064 99.6802 137.103 99.6644 137.132 99.6361C137.161 99.6079 137.179 99.5694 137.18 99.5287C137.179 99.4875 137.162 99.4484 137.133 99.4192C137.104 99.3901 137.065 99.3731 137.024 99.3717H136.622C136.642 99.1553 136.587 98.9384 136.466 98.7583C136.344 98.5782 136.165 98.4461 135.957 98.3846C135.957 98.3183 135.944 98.2527 135.919 98.1915C135.893 98.1302 135.856 98.0746 135.81 98.0277C135.763 97.9808 135.708 97.9437 135.647 97.9183C135.586 97.8929 135.52 97.8799 135.454 97.8799C135.388 97.8799 135.323 97.8929 135.262 97.9183C135.201 97.9437 135.146 97.9808 135.099 98.0277C135.052 98.0746 135.015 98.1302 134.99 98.1915C134.965 98.2527 134.952 98.3183 134.952 98.3846C134.744 98.4463 134.565 98.5786 134.445 98.7588C134.325 98.9391 134.271 99.1558 134.293 99.3717H133.958C133.917 99.3731 133.879 99.3903 133.851 99.4196C133.822 99.4489 133.807 99.488 133.807 99.5287C133.807 99.5689 133.823 99.6074 133.851 99.6358C133.879 99.6642 133.918 99.6801 133.958 99.6801H134.388V99.9662C134.415 100.026 134.449 100.082 134.488 100.134C134.565 100.227 134.603 100.345 134.594 100.465V101.396H134.388V101.665H133.98C133.94 101.665 133.902 101.681 133.873 101.71C133.845 101.738 133.829 101.777 133.829 101.817C133.829 101.858 133.845 101.897 133.873 101.926C133.901 101.955 133.939 101.972 133.98 101.974V102.193H134.147V101.957H134.293V102.176H134.371L134.114 108.418H133.829C133.789 108.418 133.75 108.434 133.72 108.462C133.691 108.49 133.674 108.529 133.673 108.569C133.674 108.611 133.691 108.65 133.72 108.679C133.749 108.708 133.788 108.725 133.829 108.726V108.945H134.002V108.726H134.103L133.829 114.408H133.589C133.569 114.407 133.549 114.41 133.53 114.417C133.511 114.425 133.493 114.436 133.479 114.45C133.464 114.464 133.453 114.481 133.445 114.5C133.437 114.518 133.433 114.539 133.433 114.559C133.433 114.601 133.449 114.641 133.478 114.67C133.508 114.699 133.548 114.716 133.589 114.716V114.935H133.757V114.716H133.829L133.578 120.857H130.406V108.059L126.245 107.072V120.857H125.815V107.072H118.94V120.857H118.622V103.404H117.879V101.312C117.879 101.312 117.36 100.684 111.736 100.634C111.689 100.45 111.606 100.277 111.492 100.126C111.378 99.9751 111.235 99.8482 111.071 99.7531C110.891 99.6517 110.692 99.5916 110.486 99.577C110.28 99.5625 110.074 99.5939 109.882 99.6689C110.032 99.3941 110.161 99.1081 110.295 98.8389H111.043C117.449 98.8389 117.901 99.4782 117.901 99.4782C117.901 99.4782 120.482 97.1844 118.404 93.8082C117.646 92.6254 116.688 91.5852 115.573 90.7349C115.586 90.6926 115.597 90.6495 115.606 90.6059C115.656 90.3349 115.626 90.0551 115.519 89.8012C115.412 89.5473 115.234 89.3305 115.005 89.1776C114.777 89.0247 114.509 88.9425 114.235 88.9412C113.96 88.9399 113.691 89.0195 113.462 89.1702L113.344 89.086C113.502 87.9367 113.597 86.7797 113.629 85.6201C113.816 85.8426 114.066 86.0022 114.346 86.077C114.626 86.1519 114.922 86.1386 115.194 86.0388C115.466 85.939 115.701 85.7577 115.867 85.5192C116.034 85.2808 116.123 84.9969 116.123 84.7059C116.123 84.415 116.034 84.1311 115.867 83.8927C115.701 83.6543 115.466 83.4729 115.194 83.3731C114.922 83.2733 114.626 83.26 114.346 83.3349C114.066 83.4098 113.816 83.5693 113.629 83.7918C113.598 82.5717 113.495 81.3544 113.322 80.1464C113.505 80.2969 113.723 80.3988 113.956 80.4425C114.189 80.4863 114.429 80.4706 114.654 80.3968C114.879 80.3231 115.083 80.1937 115.245 80.0205C115.407 79.8473 115.524 79.6359 115.583 79.4058C115.643 79.1756 115.644 78.934 115.587 78.7033C115.529 78.4726 115.415 78.26 115.254 78.0853C115.094 77.9105 114.892 77.7792 114.667 77.7032C114.443 77.6273 114.203 77.6092 113.97 77.6507C113.77 77.6877 113.581 77.7668 113.415 77.8828C113.248 77.9989 113.108 78.1491 113.004 78.3237C112.756 77.132 112.439 75.956 112.054 74.8017C112.305 74.9487 112.595 75.0141 112.884 74.989C113.174 74.9639 113.448 74.8495 113.67 74.6615C113.893 74.4735 114.051 74.2211 114.125 73.939C114.198 73.6568 114.183 73.3587 114.081 73.0855C113.984 72.8103 113.805 72.5721 113.567 72.4036C113.329 72.2352 113.046 72.1447 112.755 72.1447C112.464 72.1447 112.181 72.2352 111.943 72.4036C111.706 72.5721 111.526 72.8103 111.429 73.0855C110.979 71.9435 110.463 70.8293 109.882 69.7486C110.074 69.8236 110.28 69.855 110.486 69.8405C110.692 69.8259 110.891 69.7658 111.071 69.6645C111.396 69.4763 111.634 69.1661 111.731 68.8022C111.829 68.4383 111.778 68.0505 111.591 67.724C111.403 67.3975 111.094 67.1591 110.732 67.0613C110.37 66.9635 109.983 67.0143 109.658 67.2024C109.479 67.3071 109.325 67.4514 109.209 67.6243C109.093 67.7972 109.017 67.9943 108.988 68.2007C108.333 67.1456 107.619 66.1289 106.849 65.1554C107.055 65.2018 107.268 65.2007 107.473 65.1521C107.678 65.1035 107.87 65.0087 108.033 64.875C108.222 64.7228 108.368 64.5247 108.459 64.2995C108.55 64.0744 108.582 63.8296 108.552 63.5886C108.522 63.3475 108.431 63.1182 108.288 62.9223C108.145 62.7264 107.955 62.5706 107.735 62.4695C107.515 62.3684 107.273 62.3255 107.031 62.3448C106.79 62.3641 106.558 62.445 106.357 62.5799C106.156 62.7147 105.992 62.8989 105.882 63.1151C105.772 63.3313 105.718 63.5722 105.727 63.815C104.905 62.8806 104.027 61.9984 103.096 61.1735C103.334 61.1781 103.57 61.1219 103.78 61.0103C103.991 60.8987 104.17 60.7353 104.3 60.5354C104.431 60.3355 104.509 60.1056 104.527 59.8672C104.544 59.6288 104.502 59.3897 104.403 59.1723C104.304 58.9549 104.151 58.7663 103.96 58.6242C103.769 58.482 103.544 58.3909 103.308 58.3594C103.072 58.328 102.832 58.3571 102.611 58.4442C102.389 58.5312 102.193 58.6734 102.041 58.8572C101.908 59.0205 101.814 59.2116 101.764 59.4164C101.715 59.6212 101.712 59.8345 101.756 60.0406C100.787 59.2684 99.7744 58.5531 98.7234 57.8982C98.9299 57.8696 99.1273 57.7941 99.3005 57.6775C99.4737 57.5609 99.6182 57.4062 99.723 57.2252C99.9104 56.8987 99.9609 56.5109 99.8635 56.147C99.7661 55.7831 99.5287 55.4729 99.2036 55.2847C98.8785 55.0966 98.4923 55.0458 98.1299 55.1437C97.7675 55.2415 97.4587 55.4798 97.2713 55.8063C97.1704 55.9869 97.1105 56.1876 97.096 56.3942C97.0815 56.6007 97.1128 56.8079 97.1875 57.0009C96.1023 56.4166 94.9834 55.8979 93.8367 55.4474C94.0289 55.3758 94.2037 55.2637 94.3491 55.1186C94.4946 54.9734 94.6074 54.7987 94.68 54.6061C94.7642 54.3815 94.7905 54.1391 94.7564 53.9015C94.7224 53.6639 94.6291 53.4389 94.4853 53.2471C94.3415 53.0554 94.1517 52.9033 93.9337 52.805C93.7156 52.7066 93.4764 52.6652 93.2381 52.6845C92.9999 52.7038 92.7704 52.7833 92.5709 52.9155C92.3714 53.0478 92.2084 53.2285 92.0971 53.4409C91.9858 53.6533 91.9297 53.8905 91.9341 54.1305C91.9385 54.3705 92.0032 54.6055 92.1222 54.8137C90.9719 54.4296 89.801 54.1113 88.6149 53.8602C88.8643 53.7115 89.0624 53.4895 89.1823 53.2242C89.3022 52.959 89.3383 52.6632 89.2856 52.3767C89.2329 52.0902 89.094 51.8269 88.8876 51.6221C88.6813 51.4174 88.4174 51.2811 88.1315 51.2316C87.8456 51.1821 87.5515 51.2219 87.2888 51.3455C87.0261 51.4691 86.8075 51.6706 86.6623 51.9228C86.5172 52.1751 86.4526 52.4659 86.4772 52.7562C86.5018 53.0465 86.6144 53.3222 86.7999 53.5462C85.5969 53.3722 84.3848 53.2692 83.1698 53.2377C83.3932 53.05 83.5536 52.7978 83.6293 52.5153C83.705 52.2329 83.6922 51.9339 83.5928 51.6589C83.4934 51.384 83.3121 51.1465 83.0735 50.9786C82.835 50.8108 82.5507 50.7207 82.2595 50.7207C81.9682 50.7207 81.684 50.8108 81.4454 50.9786C81.2069 51.1465 81.0256 51.384 80.9262 51.6589C80.8267 51.9339 80.814 52.2329 80.8897 52.5153C80.9653 52.7978 81.1258 53.05 81.3492 53.2377C80.1342 53.2692 78.9221 53.3722 77.7191 53.5462C77.8466 53.3919 77.9395 53.2119 77.9915 53.0183C78.0436 52.8248 78.0535 52.6222 78.0207 52.4245C77.9884 52.2404 77.9203 52.0644 77.8203 51.9067C77.7203 51.749 77.5904 51.6126 77.4379 51.5054C77.2855 51.3981 77.1135 51.322 76.9317 51.2815C76.75 51.241 76.5621 51.2368 76.3787 51.2692C76.1954 51.3016 76.0202 51.3699 75.8631 51.4703C75.7061 51.5707 75.5703 51.7012 75.4634 51.8543C75.3566 52.0075 75.2809 52.1802 75.2405 52.3627C75.2002 52.5452 75.196 52.7339 75.2283 52.918C75.2634 53.1181 75.3416 53.3081 75.4573 53.4747C75.5731 53.6413 75.7236 53.7805 75.8985 53.8827C74.7122 54.1331 73.5412 54.4514 72.3912 54.8361C72.5338 54.5832 72.5956 54.2924 72.5683 54.0031C72.5409 53.7138 72.4258 53.44 72.2385 53.2185C72.0511 52.997 71.8006 52.8386 71.5207 52.7648C71.2408 52.6909 70.9451 52.7052 70.6735 52.8055C70.402 52.9059 70.1677 53.0876 70.0022 53.326C69.8368 53.5645 69.7483 53.8482 69.7487 54.1388C69.749 54.4294 69.8382 54.7129 70.0042 54.9509C70.1701 55.189 70.4049 55.3701 70.6767 55.4698C69.5311 55.9208 68.4123 56.4376 67.3258 57.0177C67.4005 56.8257 67.4317 56.6194 67.4172 56.4138C67.4027 56.2081 67.3429 56.0083 67.2421 55.8288C67.0547 55.5023 66.7458 55.2639 66.3835 55.1661C66.0211 55.0683 65.6349 55.119 65.3097 55.3072C64.9846 55.4953 64.7473 55.8055 64.6499 56.1694C64.5525 56.5333 64.603 56.9212 64.7904 57.2477C64.8946 57.428 65.0383 57.5822 65.2104 57.6988C65.3826 57.8154 65.5789 57.8912 65.7844 57.9207C64.7334 58.5756 63.7208 59.2909 62.7519 60.063C62.7982 59.8571 62.7965 59.6432 62.7471 59.4379C62.6977 59.2327 62.6019 59.0417 62.4671 58.8797C62.2257 58.5911 61.88 58.4107 61.5061 58.3781C61.1322 58.3455 60.7607 58.4634 60.4734 58.7058C60.186 58.9483 60.0063 59.2954 59.9739 59.6709C59.9414 60.0464 60.0588 60.4194 60.3002 60.708C60.4376 60.8688 60.6094 60.9962 60.8029 61.0807C60.9964 61.1652 61.2064 61.2046 61.4172 61.1959C60.4895 62.0219 59.6112 62.902 58.7867 63.8318C58.7969 63.6205 58.759 63.4096 58.6757 63.2152C58.5925 63.0209 58.4662 62.8481 58.3065 62.7101C58.0164 62.4864 57.6514 62.3838 57.2879 62.4239C56.9243 62.4639 56.5901 62.6434 56.3552 62.9249C56.1202 63.2064 56.0027 63.5682 56.027 63.9347C56.0514 64.3012 56.2157 64.6441 56.4858 64.8918C56.6481 65.0255 56.8385 65.1202 57.0427 65.1688C57.2469 65.2174 57.4595 65.2186 57.6642 65.1722C56.8966 66.1462 56.1843 67.1629 55.5308 68.2175C55.5003 68.0115 55.4243 67.8149 55.3084 67.6421C55.1924 67.4694 55.0394 67.3249 54.8606 67.2192C54.6997 67.1261 54.522 67.0657 54.3378 67.0414C54.1535 67.0172 53.9664 67.0297 53.7869 67.0781C53.6075 67.1266 53.4393 67.21 53.292 67.3237C53.1447 67.4374 53.0211 67.5791 52.9283 67.7408C52.8356 67.9025 52.7754 68.0809 52.7513 68.2659C52.7272 68.4509 52.7396 68.6389 52.7878 68.8191C52.8361 68.9993 52.9192 69.1681 53.0324 69.3161C53.1456 69.464 53.2867 69.5881 53.4477 69.6813C53.6265 69.7825 53.8255 69.8426 54.0303 69.8572C54.235 69.8717 54.4405 69.8404 54.6317 69.7654C54.0531 70.8472 53.5366 71.9613 53.0847 73.1023C52.9852 72.8277 52.804 72.5904 52.5656 72.4228C52.3273 72.2551 52.0433 72.1651 51.7523 72.1649C51.4613 72.1648 51.1772 72.2546 50.9387 72.4221C50.7002 72.5896 50.5188 72.8267 50.4191 73.1012C50.3193 73.3758 50.3061 73.6745 50.3811 73.9569C50.4562 74.2392 50.616 74.4916 50.8387 74.6797C51.0614 74.8678 51.3364 74.9825 51.6263 75.0084C51.9162 75.0342 52.207 74.9699 52.4592 74.8241C52.0742 75.9784 51.7572 77.1544 51.5098 78.3461C51.3617 78.0956 51.1406 77.8968 50.8765 77.7764C50.6123 77.656 50.3178 77.6198 50.0325 77.6727C49.7472 77.7256 49.485 77.865 49.2811 78.0723C49.0772 78.2795 48.9415 78.5445 48.8922 78.8316C48.8429 79.1187 48.8825 79.414 49.0056 79.6778C49.1287 79.9416 49.3293 80.1612 49.5805 80.3069C49.8317 80.4527 50.1213 80.5176 50.4104 80.4929C50.6994 80.4682 50.974 80.3551 51.197 80.1688C51.0247 81.3771 50.9203 82.5942 50.8843 83.8142C50.7533 83.6563 50.5894 83.5293 50.4041 83.442C50.2188 83.3548 50.0167 83.3096 49.812 83.3095C49.4373 83.3095 49.0779 83.459 48.8129 83.7251C48.5479 83.9912 48.3991 84.3521 48.3991 84.7284C48.3991 85.1047 48.5479 85.4656 48.8129 85.7317C49.0779 85.9978 49.4373 86.1473 49.812 86.1473C50.0167 86.1472 50.2188 86.102 50.4041 86.0147C50.5894 85.9275 50.7533 85.8004 50.8843 85.6425C50.8843 86.2034 50.9346 86.7642 50.9793 87.3587C50.888 87.3937 50.8108 87.4582 50.76 87.542C50.7091 87.6258 50.6874 87.7243 50.6983 87.8218C50.7091 87.9194 50.7519 88.0105 50.82 88.081C50.888 88.1514 50.9774 88.1972 51.0742 88.2111C51.0742 88.4411 51.1189 88.6766 51.1524 88.9122V89.2599C50.9966 89.1364 50.8164 89.0476 50.6239 88.9992C50.4313 88.9509 50.2308 88.9441 50.0354 88.9795C49.666 89.0465 49.3378 89.2574 49.1223 89.5662C48.9069 89.875 48.8216 90.2567 48.885 90.6283C48.9085 90.7421 48.9441 90.853 48.9911 90.9592H34.1133V91.9743H34.2138C34.2432 91.9758 34.2719 91.983 34.2985 91.9956C34.325 92.0082 34.3489 92.026 34.3686 92.0479C34.3883 92.0698 34.4035 92.0953 34.4134 92.1231C34.4233 92.1509 34.4275 92.1804 34.426 92.2099C34.4275 92.2393 34.4233 92.2688 34.4134 92.2966C34.4035 92.3244 34.3883 92.35 34.3686 92.3719C34.3489 92.3937 34.325 92.4115 34.2985 92.4241C34.2719 92.4367 34.2432 92.444 34.2138 92.4454H34.1133V93.096H34.7276L34.4204 93.5447L34.1133 94.0326V97.1676H34.4204V98.6594H34.9789C35.0737 98.6594 35.1646 98.6973 35.2317 98.7646C35.2987 98.8319 35.3364 98.9232 35.3364 99.0184C35.3364 99.1136 35.2987 99.2049 35.2317 99.2722C35.1646 99.3395 35.0737 99.3773 34.9789 99.3773H34.197C34.2918 99.3773 34.3828 99.3395 34.4498 99.2722C34.5168 99.2049 34.5545 99.1136 34.5545 99.0184C34.5545 98.9232 34.5168 98.8319 34.4498 98.7646C34.3828 98.6973 34.2918 98.6594 34.197 98.6594H33.6386V97.1901H33.2923V94.055L33.9737 93.0736H28.8357L29.517 94.055V97.1901H29.1708V98.6819H28.6123C28.5175 98.6819 28.4266 98.7197 28.3596 98.787C28.2925 98.8543 28.2549 98.9456 28.2549 99.0408C28.2549 99.136 28.2925 99.2273 28.3596 99.2946C28.4266 99.3619 28.5175 99.3997 28.6123 99.3997H29.0758L29.4556 100.549H29.0758L29.0367 100.454V104.2H28.4448V100.46L28.3833 100.297L28.0315 99.4053H12.1484V100.275H11.2605L11.819 101.346V104.537H27.0374C27.0374 104.335 27.2496 104.178 27.5121 104.178H28.1097C27.8472 104.178 27.635 104.335 27.635 104.537C27.635 104.739 27.8472 104.89 28.1097 104.89H28.6682L28.7966 105.451H28.5285L28.4615 105.171H12.0814V105.451H10.043L10.6796 106.247C10.6724 106.403 10.7225 106.555 10.8205 106.675C10.9185 106.795 11.0573 106.875 11.2102 106.898C11.1762 106.967 11.1583 107.043 11.158 107.12C11.1576 107.197 11.1748 107.273 11.2082 107.342C11.2416 107.411 11.2904 107.472 11.3507 107.52C11.4111 107.567 11.4815 107.6 11.5565 107.616C11.5565 107.616 11.4559 108.463 12.1149 108.463V125.288H17.0016V108.463H17.4316V106.219H17.9901V108.463H17.6662V109.141H17.951V109.657H18.3252V125.299H26.948V109.691H27.3222V109.175H27.607V108.496H27.0486V106.253H27.607V108.496H27.7187V124.503H27.5679V124.918H27.2217V125.333H36.3081C36.3081 124.503 35.8446 124.503 35.8446 124.503V116.539C36.2913 116.539 36.3081 116.202 36.3081 115.804H35.0627V115.013H35.6212C35.9339 107.762 42.2168 106.741 42.2168 106.741C42.2168 106.741 48.5052 107.762 48.818 115.013H49.3764V115.804H48.131C48.131 116.202 48.131 116.539 48.5946 116.539V124.503C48.5946 124.503 48.131 124.503 48.131 125.333H57.2063V124.918H56.86V124.503H56.5919V124.088H56.5473V108.496H56.8042V106.909C56.9787 106.994 57.1688 107.042 57.3626 107.049V108.496H56.8042V109.175H57.089V109.691H57.4632V125.333H62.7463C62.7941 125.399 62.8574 125.453 62.9306 125.49C63.0375 125.542 63.1592 125.554 63.2745 125.526C63.3897 125.497 63.4914 125.429 63.5617 125.333H66.086V120.033L67.27 117.531V125.333H72.2963V116.09C72.3611 115.995 72.4154 115.894 72.4582 115.787C72.5264 115.594 72.5522 115.388 72.5339 115.184C72.5156 114.98 72.4536 114.782 72.3521 114.604C72.7654 114.738 73.1842 114.862 73.6087 114.985L73.3685 120.857H72.6593V125.562H147.975V125.949H149.757V121.85H156.939V125.949H158.715V109.276H159.061V108.805H158.715V108.311L159.061 107.846L159.251 107.375H158.692V102.518L159.039 102.047H157.285L157.481 101.576H159.257V101.11H158.698L158.715 94.1055ZM26.7023 103.797H17.3758V101.957H26.7023V103.797ZM13.1425 108.496H12.5841V106.253H13.1425V108.496ZM14.7509 108.496H14.1925V106.253H14.7509V108.496ZM16.3593 108.496H15.8009V106.253H16.3593V108.496ZM25.5742 112.983C25.7051 113.244 25.8116 113.516 25.8925 113.796H24.8817V112.983H25.5742ZM24.8817 112.865V112.052H24.9264C25.1466 112.298 25.3343 112.571 25.4848 112.865H24.8817ZM25.9316 113.914C26.0033 114.181 26.0574 114.453 26.0936 114.727H24.8817V113.914H25.9316ZM20.129 115.782H19.0624C19.0629 115.469 19.0815 115.156 19.1182 114.845H20.129V115.782ZM20.129 114.727H19.135C19.1712 114.453 19.2252 114.181 19.2969 113.914H20.129V114.727ZM20.129 113.796H19.3416C19.4243 113.516 19.5327 113.243 19.6655 112.983H20.1346L20.129 113.796ZM20.129 112.865H19.7214C19.8396 112.65 19.976 112.446 20.129 112.254V112.865ZM21.0561 115.782H20.2519V114.856H21.0561V115.782ZM21.0561 114.727H20.2519V113.914H21.0561V114.727ZM21.0561 113.796H20.2519V112.983H21.0561V113.796ZM21.0561 112.865H20.2519V112.114L20.3078 112.052H21.0561V112.865ZM21.0561 111.934H20.425C20.6186 111.748 20.83 111.58 21.0561 111.435V111.934ZM21.9832 115.782H21.179V114.856H21.9832V115.782ZM21.9832 114.727H21.179V113.914H21.9832V114.727ZM21.9832 113.796H21.179V112.983H21.9832V113.796ZM21.9832 112.865H21.179V112.052H21.9832V112.865ZM21.9832 111.934H21.179V111.373C21.4321 111.225 21.7021 111.109 21.9832 111.026V111.934ZM22.9103 115.782H22.1005V114.856H22.9103V115.782ZM22.9103 114.727H22.1005V113.914H22.9103V114.727ZM22.9103 113.796H22.1005V112.983H22.9103V113.796ZM22.9103 112.865H22.1005V112.052H22.9103V112.865ZM22.9103 111.934H22.1005V110.987C22.269 110.941 22.4408 110.909 22.6143 110.891C22.6143 110.891 22.7316 110.891 22.9103 110.936V111.934ZM23.8373 115.782H23.0275V114.856H23.8373V115.782ZM23.8373 114.727H23.0275V113.914H23.8373V114.727ZM23.8373 113.796H23.0275V112.983H23.8373V113.796ZM23.8373 112.865H23.0275V112.052H23.8373V112.865ZM23.8373 111.934H23.0275V110.987C23.3076 111.053 23.5793 111.15 23.8373 111.278V111.934ZM24.7644 115.782H23.9546V114.856H24.7644V115.782ZM24.7644 114.727H23.9546V113.914H24.7644V114.727ZM24.7644 113.796H23.9546V112.983H24.7644V113.796ZM24.7644 112.865H23.9546V112.052H24.7644V112.865ZM24.7644 111.934H23.9546V111.312C24.2485 111.461 24.5209 111.65 24.7644 111.873V111.934ZM24.8817 115.782V114.856H26.1103C26.147 115.167 26.1656 115.48 26.1662 115.793L24.8817 115.782ZM25.4401 106.247H25.9986V108.491H25.4401V106.247ZM23.8262 106.247H24.3847V108.491H23.8262V106.247ZM22.2178 106.247H22.7762V108.491H22.2178V106.247ZM20.6094 106.247H21.1678V108.491H20.6094V106.247ZM19.0009 106.247H19.5594V108.491H19.0009V106.247ZM33.7056 99.3661H34.158L33.7056 100.516H33.3035L33.7056 99.3661ZM33.4878 104.873H33.767L33.5436 106.029H33.3035L33.4878 104.873ZM31.6728 99.3661H32.1251L32.0022 100.516H31.6281L31.6728 99.3661ZM31.5275 104.873V106.029H31.2706V104.873H31.5275ZM31.1087 99.3661L31.1534 100.516H30.7736L30.6507 99.3661H31.1087ZM29.2881 104.873L29.4835 106.029H29.2322L29.0088 104.873H29.2881ZM28.8357 105.771L28.9027 106.062H28.8357V105.771ZM29.8856 121.418H28.8971V107.65H29.8856V121.418ZM29.7851 106.062L29.6176 104.907H29.8968L30.0364 106.062H29.7851ZM29.9024 100.549L29.6176 99.3997H30.0699L30.2877 100.549H29.9024ZM30.606 104.907H30.8853L30.93 106.062H30.6787L30.606 104.907ZM31.8682 121.418H30.8741V107.65H31.8682V121.418ZM32.0637 106.062H31.8124L31.857 104.907H32.1363L32.0637 106.062ZM32.6724 99.3997H33.1248L32.84 100.549H32.4602L32.6724 99.3997ZM32.8455 104.907H33.1248L32.9628 106.062H32.745L32.8455 104.907ZM33.862 121.418H32.8679V107.65H33.862V121.418ZM34.3758 104.958L34.2864 105.345L34.1133 106.062H33.862L34.1133 104.907H34.3925L34.3758 104.958ZM97.9806 116.735C98.0623 116.545 98.1816 116.373 98.3314 116.23C98.4811 116.088 98.6582 115.977 98.8518 115.905C99.1572 115.743 99.4486 115.555 99.723 115.344C99.995 115.556 100.285 115.743 100.589 115.905C101.03 116.124 101.706 116.37 101.706 118.087V120.891H100.321V119.315C100.321 119.236 100.306 119.157 100.277 119.083C100.247 119.01 100.203 118.943 100.148 118.887C100.092 118.831 100.026 118.786 99.953 118.755C99.8801 118.725 99.802 118.709 99.723 118.709C99.587 118.715 99.4571 118.768 99.3554 118.859C99.2537 118.95 99.1862 119.073 99.1645 119.208L97.9806 116.735ZM102.415 105.939H102.353V104.739C102.331 104.449 102.421 104.161 102.605 103.937C102.702 103.807 102.786 103.668 102.856 103.522V102.838H103.348L104.046 103.398H103.409V104.918C103.113 105.266 102.761 105.597 102.42 105.922L102.415 105.939ZM101.678 111.222V114.026H100.321V112.467C100.321 112.307 100.258 112.154 100.146 112.041C100.034 111.927 99.882 111.863 99.723 111.861C99.6293 111.865 99.5377 111.89 99.455 111.934C99.2471 111.736 98.9843 111.605 98.701 111.559C99.6194 110.981 100.509 110.358 101.365 109.691C101.601 110.159 101.711 110.681 101.683 111.205L101.678 111.222ZM85.1468 99.6801H85.4763V99.9662C85.5084 100.026 85.5458 100.082 85.588 100.134C85.628 100.179 85.6585 100.231 85.6777 100.288C85.6969 100.345 85.7044 100.405 85.6997 100.465V101.396H85.4763V101.553L85.1468 99.6801ZM85.8784 101.396V100.465C85.8749 100.403 85.8862 100.34 85.9114 100.282C85.9367 100.225 85.9751 100.174 86.0236 100.134C86.0236 100.096 86.0389 100.059 86.0661 100.031C86.0934 100.004 86.1303 99.9886 86.1688 99.9886C86.2073 99.9886 86.2443 100.004 86.2715 100.031C86.2987 100.059 86.314 100.096 86.314 100.134C86.3632 100.174 86.4022 100.224 86.4275 100.282C86.4528 100.339 86.4637 100.402 86.4592 100.465V101.396H85.8784ZM111.49 85.693C111.478 85.5824 111.426 85.4803 111.343 85.4058C111.261 85.3314 111.154 85.2899 111.043 85.2892C111.104 85.289 111.165 85.3005 111.222 85.3229V84.9864H111.49C111.49 85.2051 111.49 85.4406 111.49 85.693ZM111.378 87.4596L111.2 87.269C111.28 87.2465 111.355 87.2063 111.417 87.1512C111.378 87.2409 111.367 87.3419 111.356 87.4428L111.378 87.4596ZM110.859 84.9864V85.3285C110.777 85.3632 110.707 85.4217 110.658 85.4967C110.609 85.5717 110.584 85.6596 110.585 85.7491C110.585 85.832 110.607 85.9135 110.649 85.9846C110.692 86.0558 110.753 86.114 110.826 86.1529C110.677 86.1603 110.538 86.2266 110.439 86.337C110.339 86.4474 110.288 86.593 110.295 86.7418C110.302 86.8905 110.368 87.0302 110.478 87.1301C110.588 87.23 110.733 87.282 110.881 87.2746C110.224 87.9762 109.492 88.6025 108.698 89.1421L100.198 87.6335C100.337 86.7595 100.418 85.8769 100.438 84.992L110.859 84.9864ZM108.106 89.5572C106.809 90.4159 105.625 91.4353 104.582 92.5912L99.4214 90.7068C99.7174 89.8712 99.9507 89.0144 100.12 88.1438L108.106 89.5572ZM102.856 96.3488L98.109 93.5951C98.5408 92.8224 98.9142 92.0181 99.226 91.1892L104.23 92.9838C104.04 93.2418 103.85 93.5054 103.671 93.7858C103.169 94.5479 102.887 95.4352 102.856 96.3488ZM98.5335 104.728C98.5304 104.688 98.5304 104.649 98.5335 104.61L99.6504 105.928H98.5335V104.728ZM98.7625 104.055C98.8071 104.004 98.8518 103.965 98.8909 103.926C98.8817 103.874 98.8839 103.821 98.8973 103.77C98.9107 103.719 98.9351 103.672 98.9686 103.632C99.0022 103.592 99.0441 103.559 99.0915 103.537C99.1388 103.515 99.1905 103.503 99.2427 103.503C99.295 103.503 99.3466 103.515 99.394 103.537C99.4413 103.559 99.4833 103.592 99.5168 103.632C99.5504 103.672 99.5747 103.719 99.5881 103.77C99.6016 103.821 99.6038 103.874 99.5946 103.926C99.7149 104.02 99.8104 104.142 99.8728 104.282C99.9351 104.422 99.9623 104.575 99.952 104.728V105.468L98.7625 104.055ZM101.845 104.728V105.928H100.432V104.728C100.422 104.575 100.449 104.423 100.51 104.283C100.572 104.144 100.666 104.021 100.784 103.926C100.919 103.802 101.039 103.663 101.142 103.511C101.24 103.664 101.358 103.803 101.493 103.926C101.611 104.02 101.705 104.142 101.766 104.281C101.827 104.419 101.854 104.571 101.845 104.722V104.728ZM98.997 99.9045C98.2095 100.297 97.3886 100.656 97.3886 102.31H97.3048L94.1215 98.4968C94.789 97.9162 95.4142 97.2883 95.9924 96.618L99.4829 99.5624C99.336 99.695 99.1727 99.8081 98.997 99.8989V99.9045ZM95.9366 95.8889L84.7112 86.4333L97.3886 93.7858C96.9559 94.5195 96.4706 95.2205 95.9366 95.8833V95.8889ZM84.9737 85.9734L98.7345 91.0209C98.4319 91.821 98.0736 92.5988 97.6622 93.3484L84.9737 85.9734ZM99.5834 88.0373C99.4213 88.8772 99.1973 89.7039 98.9132 90.5106L85.1468 85.4631L99.5834 88.0373ZM85.2417 84.9695H99.8961C99.8824 85.8246 99.8059 86.6776 99.6672 87.5213L85.2417 84.9695ZM85.2417 84.4424L99.6672 81.8906C99.8059 82.7344 99.8824 83.5873 99.8961 84.4424H85.2417ZM85.1524 83.932L98.9188 78.8845C99.2021 79.6914 99.4261 80.518 99.589 81.3578L85.1524 83.932ZM84.9793 83.4385L97.6678 76.0804C98.0792 76.83 98.4375 77.6077 98.7401 78.4078L84.9793 83.4385ZM84.7168 82.9842L95.9421 73.5286C96.4764 74.1932 96.9617 74.8961 97.3942 75.6317L84.7168 82.9842ZM95.5959 96.2759C95.0401 96.9256 94.4372 97.5329 93.792 98.093L84.3761 86.8147L95.5959 96.2759ZM93.4011 98.4351C92.7382 98.973 92.0363 99.4604 91.3012 99.8933L84.1248 87.4092L84.041 87.2297L93.4011 98.4351ZM92.4014 104.901V104.144C92.409 104.145 92.4166 104.144 92.4238 104.142C92.431 104.139 92.4375 104.135 92.4429 104.13C92.4483 104.125 92.4523 104.118 92.4548 104.111C92.4573 104.104 92.4581 104.096 92.4572 104.088C92.4573 104.081 92.4558 104.074 92.453 104.068C92.4501 104.061 92.4459 104.055 92.4406 104.05C92.4353 104.046 92.4291 104.042 92.4224 104.04C92.4156 104.038 92.4085 104.037 92.4014 104.038C92.4109 103.96 92.3925 103.882 92.3495 103.817C92.3064 103.753 92.2416 103.705 92.1669 103.684C92.0907 103.639 92.0288 103.573 91.9881 103.494C91.9505 103.573 91.8903 103.64 91.815 103.684L90.5138 100.925L91.1057 100.617L94.3505 106.253L93.1665 106.534L92.4014 104.901ZM90.3015 100.46L86.9172 93.3147L90.86 100.168L90.3015 100.46ZM89.3633 100.914C89.0952 101.037 88.8048 101.138 88.5423 101.245L87.9838 99.6633H88.0955C88.1355 99.6633 88.1739 99.6474 88.2022 99.619C88.2304 99.5906 88.2463 99.5521 88.2463 99.5119C88.2464 99.4712 88.2307 99.4321 88.2025 99.4028C88.1744 99.3735 88.136 99.3563 88.0955 99.3549H87.8722L85.3367 92.423L89.3633 100.914ZM87.1294 100.118C87.1786 100.157 87.2175 100.207 87.2428 100.265C87.2681 100.323 87.2791 100.386 87.2746 100.448V101.396H86.7161V100.465C86.7126 100.403 86.7239 100.34 86.7492 100.282C86.7744 100.225 86.8128 100.174 86.8613 100.134C86.8613 100.096 86.8766 100.059 86.9038 100.031C86.9311 100.004 86.968 99.9886 87.0065 99.9886C87.045 99.9886 87.082 100.004 87.1092 100.031C87.1364 100.059 87.1517 100.096 87.1517 100.134L87.1294 100.118ZM87.4756 101.396V100.465C87.4671 100.345 87.5052 100.227 87.5818 100.134L88.0564 101.447C87.9336 101.492 87.8051 101.525 87.6767 101.565V101.396H87.4756ZM87.9727 108.743H88.0341V108.962H88.2072V108.743C88.2483 108.742 88.2873 108.725 88.3163 108.696C88.3453 108.666 88.3622 108.627 88.3636 108.586C88.3622 108.545 88.345 108.507 88.3159 108.479C88.2867 108.45 88.2478 108.435 88.2072 108.435H87.928L87.6711 102.193H87.7493V102.075L87.8945 102.03V102.193H88.062V101.957L88.2072 101.912L91.6028 111.278V112.495C90.4663 112.884 89.3059 113.199 88.1291 113.437L87.9727 108.743ZM88.7322 101.75C89.0226 101.643 89.2907 101.531 89.5978 101.402L91.6363 105.715V107.526L92.407 107.341L92.6415 107.84L91.6363 108.076V109.758L88.7322 101.75ZM92.5019 111.205C92.5019 109.483 92.8984 109.237 93.1609 109.018L94.3114 111.446C93.7138 111.716 93.1051 111.974 92.4852 112.209L92.5019 111.205ZM93.4178 107.078L94.652 106.786L94.9313 107.274L93.6524 107.577L93.4178 107.078ZM96.2102 110.476L95.7858 110.706V108.743L96.2102 109.483V110.476ZM100.544 108.99C99.6564 109.66 98.7336 110.281 97.7795 110.852C97.793 110.598 97.8342 110.346 97.9024 110.1C98.6247 109.644 99.3265 109.166 100.008 108.665C100.181 108.782 100.36 108.891 100.544 108.99ZM96.2102 107.072V108.44L95.7858 107.7V107.072L95.4674 107.15L95.1882 106.663L95.7858 106.522V105.922L94.8866 106.135L91.5358 100.348C92.2965 99.8978 93.0226 99.3917 93.7082 98.8333L96.8748 102.625V102.821H97.0367L97.5394 103.421V103.505C97.6157 103.653 97.7074 103.792 97.813 103.92C97.9109 104.028 97.9856 104.155 98.0327 104.293C98.0798 104.43 98.0981 104.577 98.0867 104.722V105.922H96.5732V103.079C96.588 103.079 96.6022 103.073 96.6127 103.062C96.6232 103.052 96.6291 103.038 96.6291 103.023C96.6291 103.008 96.6232 102.994 96.6127 102.983C96.6022 102.973 96.588 102.967 96.5732 102.967C96.5802 102.89 96.5607 102.814 96.5179 102.751C96.4751 102.687 96.4118 102.641 96.3387 102.619C96.3387 102.571 96.3198 102.526 96.2863 102.492C96.2528 102.458 96.2073 102.439 96.1599 102.439C96.1125 102.439 96.0671 102.458 96.0336 102.492C96.0001 102.526 95.9812 102.571 95.9812 102.619C95.9081 102.641 95.8447 102.687 95.802 102.751C95.7592 102.814 95.7397 102.89 95.7467 102.967C95.7319 102.967 95.7177 102.973 95.7072 102.983C95.6967 102.994 95.6908 103.008 95.6908 103.023C95.6908 103.038 95.6967 103.052 95.7072 103.062C95.7177 103.073 95.7319 103.079 95.7467 103.079H95.8528V106.001L96.2381 105.922V106.511H100.181L100.645 107.072H96.2102ZM100.834 106.511H101.778C101.599 106.674 101.421 106.836 101.22 106.993L100.834 106.511ZM104.185 101.301V102.804L103.029 101.834C102.884 100.572 102.152 100.241 101.449 99.8876C100.928 99.5813 100.506 99.1292 100.237 98.5865C100.129 98.7842 100.004 98.9718 99.8626 99.1474L96.3554 96.1918C96.9096 95.5019 97.4135 94.7728 97.8633 94.0101L102.89 96.9377C103.03 97.8921 103.477 98.7743 104.163 99.4502C104.163 99.4502 104.364 99.1642 106.397 98.9735L107.43 99.5736C107.19 99.9718 106.944 100.37 106.693 100.757C104.431 100.987 104.163 101.312 104.163 101.312L104.185 101.301ZM107.346 98.923L107.849 98.895L107.715 99.1361L107.346 98.923ZM111.256 86.1248C111.311 86.0941 111.36 86.0524 111.399 86.0024C111.439 85.9523 111.468 85.8947 111.485 85.8332C111.485 85.979 111.485 86.1249 111.485 86.2707C111.414 86.2047 111.327 86.1584 111.233 86.1361L111.256 86.1248ZM111.468 84.4424C111.487 84.3961 111.499 84.3468 111.501 84.2966C111.501 84.1746 111.453 84.0576 111.367 83.9714C111.281 83.8851 111.165 83.8367 111.043 83.8367C111.104 83.8365 111.165 83.8479 111.222 83.8703V82.6926C111.222 82.6926 111.222 82.5019 111.038 82.5019C110.853 82.5019 110.859 82.6926 110.859 82.6926V83.8759C110.777 83.9106 110.707 83.9692 110.658 84.0442C110.609 84.1191 110.584 84.207 110.585 84.2966C110.577 84.3448 110.577 84.3941 110.585 84.4424H100.416C100.395 83.5574 100.315 82.6749 100.175 81.8008L111.088 79.866C111.339 81.3787 111.472 82.9088 111.485 84.4424H111.468ZM100.12 81.2849C99.9507 80.4143 99.7174 79.5576 99.4214 78.7219L109.815 74.9138C110.325 76.3609 110.721 77.8461 110.999 79.3556L100.12 81.2849ZM99.2036 78.2284C98.8919 77.3994 98.5185 76.5951 98.0867 75.8224L107.67 70.2645C108.426 71.596 109.076 72.9856 109.614 74.4203L99.2036 78.2284ZM97.8242 75.3737C97.3745 74.6111 96.8705 73.8819 96.3163 73.1921L104.788 66.0639C105.759 67.2486 106.636 68.5067 107.413 69.8271L97.8242 75.3737ZM95.9924 72.7939C95.4142 72.1236 94.789 71.4957 94.1215 70.9151L101.236 62.4017C102.396 63.3983 103.478 64.484 104.47 65.6489L95.9924 72.7939ZM95.5903 73.1304L84.3761 82.5804L93.7864 71.3189C94.4331 71.8774 95.0362 72.4848 95.5903 73.136V73.1304ZM83.9796 82.2439L91.2956 69.513C92.0308 69.9459 92.7327 70.4333 93.3955 70.9712L83.9796 82.2439ZM83.5272 81.9803L88.5535 68.1614C89.3502 68.4653 90.1247 68.8252 90.8712 69.2382L83.5272 81.9803ZM83.0358 81.8008L85.5824 67.309C86.4186 67.4725 87.2418 67.6974 88.0453 67.982L83.0358 81.8008ZM86.8893 98.2332C86.7622 98.1159 86.6564 97.9774 86.5765 97.8238C86.4681 98.0567 86.2931 98.2519 86.0739 98.3846C85.8662 98.4461 85.6864 98.5782 85.5651 98.7583C85.4439 98.9384 85.3888 99.1553 85.4093 99.3717H85.1021L83.0358 87.6223L86.8893 98.2332ZM88.5647 114.497C88.5524 114.474 88.534 114.454 88.5114 114.44C88.4887 114.426 88.4627 114.419 88.4362 114.419H88.1961V113.987C89.3633 113.748 90.5157 113.441 91.6474 113.067V113.678C90.6312 114.003 89.5985 114.273 88.5535 114.486L88.5647 114.497ZM92.8929 113.241L92.6918 112.68C93.3285 112.439 93.954 112.175 94.5683 111.895L94.814 112.422C94.1774 112.714 93.5351 112.983 92.8817 113.23L92.8929 113.241ZM94.4454 109.225C94.6106 109.419 94.7224 109.653 94.7693 109.904L94.4454 109.225ZM95.7969 111.306L96.2214 111.082V111.738C96.0762 111.811 95.9366 111.895 95.7969 111.968V111.306ZM96.2214 112.921V112.977V112.933V112.921ZM101.957 107.083L102.566 106.522H103.124V106.001L103.442 105.681V106.494C103.241 106.691 103.046 106.887 102.839 107.055L101.957 107.083ZM103.107 108.244L103.426 107.936V108.289C103.32 108.278 103.213 108.278 103.107 108.289V108.244ZM107.363 100.746C107.542 100.46 107.72 100.185 107.894 99.8764L108.396 100.162C108.29 100.348 108.173 100.527 108.067 100.723L107.363 100.746ZM108.659 99.7138L108.156 99.4222C108.257 99.2483 108.346 99.0688 108.441 98.8894H109.111C108.949 99.153 108.804 99.4222 108.647 99.7138H108.659ZM111.842 87.9363C111.95 86.9604 112.008 85.9795 112.015 84.9976H112.574C112.561 86.1319 112.487 87.2646 112.35 88.3906C112.177 88.2168 112.004 88.0653 111.831 87.9363H111.842ZM112.596 84.4704H112.037C112.026 82.9068 111.891 81.3466 111.635 79.8043L112.194 79.7033C112.452 81.2701 112.59 82.8544 112.607 84.4424L112.596 84.4704ZM112.088 79.193L111.529 79.2883C111.248 77.7497 110.845 76.2362 110.323 74.7624L110.881 74.5661C111.399 76.0651 111.799 77.6028 112.076 79.1649L112.088 79.193ZM110.68 74.0726L110.122 74.2745C109.573 72.7965 108.91 71.3638 108.139 69.9897L108.642 69.7037C109.43 71.095 110.108 72.5464 110.669 74.0446L110.68 74.0726ZM108.396 69.2887L107.894 69.5803C107.103 68.2317 106.208 66.9472 105.218 65.7386L105.665 65.3685C106.672 66.5923 107.581 67.8937 108.385 69.2607L108.396 69.2887ZM101.946 61.5773C103.147 62.6112 104.267 63.7362 105.297 64.9423L104.85 65.318C103.84 64.1298 102.738 63.0234 101.555 62.0091L101.946 61.5773ZM97.6455 58.4927C99.0187 59.3018 100.326 60.2188 101.555 61.2352L101.181 61.6838C99.9814 60.6865 98.704 59.7881 97.3607 58.9974L97.6455 58.4927ZM100.846 62.082L93.7306 70.5786C93.045 70.0202 92.3188 69.5141 91.5581 69.0644L97.0982 59.4293C98.413 60.2097 99.6659 61.091 100.846 62.0652V62.082ZM92.8817 56.1989C94.37 56.7535 95.8118 57.4267 97.1931 58.2123L96.9027 58.717C95.5495 57.9434 94.1378 57.2777 92.6806 56.7261L92.8817 56.1989ZM96.6458 59.1881L91.1113 68.812C90.3418 68.3784 89.5409 68.0034 88.7154 67.6903L92.5019 57.2196C93.9324 57.7592 95.318 58.4118 96.6458 59.1713V59.1881ZM87.7828 54.7856C89.3487 55.0737 90.8894 55.4863 92.3902 56.0194L92.1892 56.5803C90.722 56.0546 89.2148 55.6495 87.6823 55.3689L87.7828 54.7856ZM92.0161 57.057L88.224 67.5109C87.3909 67.2181 86.538 66.9857 85.6718 66.8154L87.5929 55.868C89.0955 56.1424 90.5743 56.5343 92.0161 57.0402V57.057ZM82.522 54.2528C84.1146 54.2653 85.7037 54.4041 87.2746 54.6678L87.1741 55.2287C85.6364 54.9715 84.0808 54.8364 82.522 54.8249V54.2528ZM82.522 55.3745C84.0509 55.3872 85.5765 55.5204 87.0847 55.7727L85.158 66.7313C84.2861 66.5881 83.4052 66.5075 82.522 66.4902V55.3745ZM82.522 67.0117C83.3753 67.0302 84.2263 67.1089 85.0686 67.2473L82.522 81.7335V67.0117ZM82.522 87.7008L84.9793 101.722C84.947 101.75 84.9269 101.791 84.9234 101.834C84.925 101.864 84.9354 101.892 84.9533 101.916C84.9712 101.94 84.9958 101.958 85.0239 101.968L85.0686 102.209C84.2263 102.348 83.3753 102.427 82.522 102.445V87.7008ZM82.522 102.944C83.4054 102.93 84.2865 102.849 85.158 102.703L85.3869 104.01L85.2082 108.429H84.9234C84.8834 108.429 84.8451 108.445 84.8168 108.473C84.7885 108.502 84.7726 108.54 84.7726 108.581C84.7726 108.621 84.7883 108.66 84.8164 108.69C84.8446 108.719 84.8829 108.736 84.9234 108.738V108.956H85.0909V108.738H85.2194L85.0072 113.931C84.1974 114.009 83.3764 114.054 82.5443 114.06L82.522 102.944ZM82.522 114.581C83.2424 114.581 83.9573 114.542 84.6609 114.486C84.6408 114.51 84.629 114.539 84.6274 114.57C84.6274 114.611 84.6431 114.65 84.6712 114.679C84.6994 114.709 84.7377 114.726 84.7782 114.727V114.946H84.9402V115.047C84.1416 115.12 83.3373 115.159 82.522 115.165V114.581ZM82.0026 54.2865V54.8473C80.4456 54.8591 78.8919 54.9941 77.3561 55.2511L77.2555 54.6903C78.8249 54.4305 80.4121 54.2955 82.0026 54.2865ZM58.4349 106.64C58.5416 106.536 58.6303 106.415 58.6974 106.281H58.9934V108.524H58.4349V106.64ZM71.6038 108.496L71.883 107.908V108.496H71.6038ZM70.2746 106.253V108.496H69.7161V107.122L70.202 106.281L70.2746 106.253ZM68.0909 108.496V106.253H68.6494V107.846L68.292 108.468L68.0909 108.496ZM63.383 108.496L63.2657 108.401V107.879L63.3718 107.75L63.8409 108.121V108.496H63.383ZM53.7716 99.6353C53.6789 99.6664 53.5892 99.7058 53.5036 99.7531C53.4408 99.7915 53.3811 99.8346 53.3248 99.882V99.3997H53.7828L53.7716 99.6353ZM52.6547 90.2133L53.0289 90.1516C53.0568 90.3031 53.0959 90.4601 53.1238 90.6115H52.6547V90.2133ZM54.8886 87.297V86.9997C54.8886 86.5062 54.3971 85.665 53.9224 84.9695H64.109C64.1237 85.8548 64.204 86.7378 64.3492 87.6111L54.8886 89.2936V88.2055C54.9992 88.1931 55.1013 88.1402 55.1755 88.0569C55.2497 87.9737 55.2908 87.8658 55.2908 87.7541C55.2908 87.6423 55.2497 87.5345 55.1755 87.4512C55.1013 87.3679 54.9992 87.315 54.8886 87.3026V87.297ZM53.4254 88.9795V89.5067C53.3807 89.2375 53.3472 88.9458 53.3081 88.6991C53.3725 88.7717 53.4083 88.8654 53.4086 88.9627L53.4254 88.9795ZM54.0509 88.9795C54.0509 88.7608 54.1626 88.5869 54.3022 88.5869C54.4418 88.5869 54.5479 88.7608 54.5479 88.9795V89.3665L54.0509 89.4506V88.9795ZM54.0509 89.9834L54.5479 89.8936V90.6283H54.0509V89.9834ZM54.9947 92.4398C55.026 92.4406 55.0571 92.435 55.0862 92.4235C55.1153 92.412 55.1418 92.3948 55.1642 92.3728C55.1866 92.3509 55.2043 92.3247 55.2165 92.2957C55.2286 92.2668 55.2349 92.2357 55.2348 92.2043C55.2349 92.1728 55.2286 92.1418 55.2165 92.1128C55.2043 92.0839 55.1866 92.0576 55.1642 92.0357C55.1418 92.0137 55.1153 91.9965 55.0862 91.985C55.0571 91.9735 55.026 91.968 54.9947 91.9687H54.8886V89.8376L64.4273 88.1551C64.5969 89.0249 64.8283 89.8814 65.1198 90.7181L54.8886 94.4588V94.083L55.5699 93.1016H54.2519C54.1905 92.8885 54.1235 92.6698 54.0676 92.451L54.9947 92.4398ZM74.2286 100.477L73.6701 100.185L74.2956 99.0913L74.2398 100.448L74.2286 100.477ZM71.7769 97.6724L74.7312 94.1391V95.2888H74.4352V95.6366H73.9047C73.8514 95.6366 73.8002 95.6578 73.7625 95.6957C73.7248 95.7336 73.7036 95.7849 73.7036 95.8385C73.7036 95.892 73.7248 95.9433 73.7625 95.9812C73.8002 96.0191 73.8514 96.0404 73.9047 96.0404V96.332H74.1281V96.0404H74.3235V96.332H74.4185L74.3515 97.9696L73.2345 99.9101C72.57 99.5129 71.932 99.0727 71.3245 98.5921H72.1343V97.6724H71.7769ZM77.0321 94.5485V94.3354L77.5906 93.3315L77.0321 94.5485ZM76.7138 93.8419L75.9934 95.0981V94.0494C75.9871 93.9665 76.0012 93.8833 76.0343 93.807C76.0674 93.7308 76.1185 93.6638 76.1833 93.6119C76.2561 93.5459 76.3199 93.4705 76.3731 93.3876C76.4287 93.4687 76.4923 93.5438 76.563 93.6119C76.6313 93.6694 76.685 93.7425 76.7194 93.8251L76.7138 93.8419ZM75.3456 93.4044C75.4022 93.4863 75.4678 93.5615 75.541 93.6288C75.6047 93.6816 75.6551 93.7487 75.6881 93.8247C75.7211 93.9007 75.7357 93.9834 75.7309 94.0662V95.2888H74.9658V94.0494C74.9597 93.952 74.981 93.8548 75.0272 93.769L75.1613 93.6119C75.2336 93.5454 75.2973 93.47 75.3511 93.3876L75.3456 93.4044ZM68.5322 96.6292C68.8393 96.9882 69.1688 97.3359 69.5039 97.6724H67.27L68.5322 96.6292ZM66.4881 97.6724H60.451L66.6892 94.055C67.137 94.8176 67.6391 95.5467 68.1915 96.2366L66.4881 97.6724ZM67.1304 93.797L79.8134 86.4445L68.588 95.9002C68.055 95.2286 67.5698 94.5202 67.136 93.7802L67.1304 93.797ZM66.8623 93.3484C66.451 92.5988 66.0927 91.821 65.79 91.0209L79.5509 85.9734L66.8623 93.3484ZM65.6113 90.5442C65.3272 89.7376 65.1033 88.9109 64.9412 88.0709L79.3722 85.5135L65.6113 90.5442ZM66.41 93.6232L59.4066 97.6892H56.0558C55.6314 96.8199 55.2404 95.9338 54.8997 95.0253L65.3097 91.2172C65.6217 92.0334 65.9912 92.8261 66.4155 93.5895L66.41 93.6232ZM56.5249 98.2556C56.6248 98.2495 56.723 98.2831 56.7983 98.3493C56.8736 98.4154 56.9198 98.5088 56.927 98.609H57.815L56.8265 99.1698C56.6534 98.8669 56.4914 98.5529 56.3294 98.2444L56.5249 98.2556ZM57.4408 99.4334L58.8538 98.609H65.3935L64.4162 99.4334H57.4408ZM61.3948 101.957L59.7194 103.37C59.3396 102.911 58.9822 102.439 58.6359 101.957H61.3948ZM66.2089 98.5921H70.336L69.6491 99.4166H65.2315L66.2089 98.5921ZM70.7996 98.8501C71.0397 99.052 71.291 99.2315 71.5479 99.4109H70.3304L70.7996 98.8501ZM72.3968 99.9718C72.5588 100.078 72.7151 100.185 72.8827 100.286H72.3968V99.9718ZM73.4132 100.617C73.6087 100.723 73.8097 100.824 74.0108 100.925L72.7375 103.64V101.817L73.4132 100.617ZM76.4904 95.2664L76.7641 94.7897V95.1094L76.6915 95.2664H76.4904ZM77.3393 96.3208H77.4231V96.1245L77.4678 96.0291H77.6185V96.3208H77.7637L77.3672 97.4088L77.3393 96.3208ZM77.8419 96.0179H77.8866L77.8531 96.1133V96.0291L77.8419 96.0179ZM78.0039 95.6982C77.9854 95.6724 77.9611 95.6513 77.9329 95.6367C77.9048 95.6221 77.8736 95.6143 77.8419 95.6141H77.6744L79.1934 92.4062L78.0039 95.6982ZM77.4454 92.6025C77.4733 92.3925 77.4415 92.1788 77.3535 91.9863C77.2655 91.7937 77.1251 91.6302 76.9484 91.5144L80.5338 87.2297L80.45 87.4035L77.4454 92.6025ZM76.4793 91.2509C76.2436 91.0824 76.0519 90.8592 75.9208 90.6003C75.7739 90.8935 75.5448 91.1372 75.2618 91.3013C74.9889 91.3832 74.7528 91.5577 74.5939 91.7951C74.435 92.0324 74.3631 92.3178 74.3906 92.6025H73.9549C73.9011 92.6039 73.85 92.6264 73.8124 92.6652C73.7749 92.7039 73.7539 92.7559 73.7539 92.81C73.7539 92.8635 73.7751 92.9149 73.8128 92.9527C73.8505 92.9906 73.9016 93.0119 73.9549 93.0119H74.4855V93.382C74.5163 93.4361 74.5498 93.4885 74.586 93.539L71.1514 97.6499H70.2746C69.8028 97.2153 69.3553 96.7547 68.9342 96.2703L80.154 86.8147L76.4793 91.2509ZM67.1639 75.6261C67.6002 74.8917 68.0872 74.1889 68.6215 73.523L79.8469 82.9786L67.1639 75.6261ZM79.5565 83.4497L65.7956 78.4022C66.0982 77.6021 66.4565 76.8244 66.8679 76.0748L79.5565 83.4497ZM79.3777 83.9432L64.9467 81.3858C65.1088 80.5459 65.3328 79.7192 65.6169 78.9126L79.3777 83.9432ZM79.294 84.4536H64.634C64.6495 83.5984 64.728 82.7454 64.8686 81.9018L79.294 84.4536ZM79.294 84.9808L64.8686 87.5325C64.728 86.6889 64.6495 85.836 64.634 84.9808H79.294ZM54.8942 97.1901V96.3881C55.2348 97.1901 55.6146 97.9696 56.0111 98.738C55.9499 98.7025 55.8807 98.6832 55.8101 98.6819H55.3186L55.2293 98.4968V97.1901H54.8942ZM55.8212 99.3997C55.9127 99.4016 56.0019 99.3712 56.0733 99.3138C56.1448 99.2564 56.1939 99.1757 56.2122 99.0857C56.268 99.1922 56.3239 99.3044 56.3853 99.4109L55.8827 99.7026C55.8268 99.6016 55.7766 99.4951 55.7207 99.3997H55.8212ZM56.1452 100.151L56.2513 100.09L56.1898 100.235C56.201 100.207 56.1563 100.179 56.1452 100.151ZM58.6583 103.797C58.3791 103.449 58.0998 103.09 57.8429 102.731V101.957H57.9937C58.4144 102.559 58.8556 103.142 59.3173 103.707L59.2 103.802L58.6583 103.797ZM60.0601 103.757L62.2046 101.952H67.1751V102.361L65.9687 103.797H60.1103L60.0601 103.757ZM67.1751 103.197V103.819H66.6501L67.1751 103.197ZM65.3432 104.576L64.7848 105.227H61.3725C61.1603 105.014 60.9536 104.795 60.747 104.576H65.3432ZM61.635 107.005V106.287H61.7243L62.2102 106.741V107.521C62.0147 107.341 61.8193 107.173 61.635 107.005ZM63.2434 106.287H63.8018V106.382L63.2937 107.005L63.2434 106.96V106.287ZM65.427 108.53H65.1757L64.8518 108.289V106.315H65.4103L65.427 108.53ZM63.8186 107.487L63.6846 107.38L63.8186 107.223V107.487ZM66.0525 104.587H70.5818L70.2076 105.238H65.5052L66.0525 104.587ZM71.1849 104.587H72.3019L71.9947 105.238H70.7772L71.1849 104.587ZM74.1672 103.129L74.1113 104.548H73.7372C73.6838 104.548 73.6327 104.569 73.595 104.607C73.5573 104.645 73.5361 104.697 73.5361 104.75C73.5361 104.804 73.5573 104.855 73.595 104.893C73.6327 104.931 73.6838 104.952 73.7372 104.952H73.7092V105.244H73.927V104.952H74.0946V105.513H73.0558L74.1672 103.129ZM77.7191 104.952H77.8531V105.244H78.0765V104.952C78.1298 104.952 78.181 104.931 78.2187 104.893C78.2564 104.855 78.2776 104.804 78.2776 104.75C78.2776 104.697 78.2564 104.645 78.2187 104.607C78.181 104.569 78.1298 104.548 78.0765 104.548H77.7079L77.6185 102.35C78.0374 102.462 78.4618 102.563 78.8919 102.647L77.8643 108.474L77.7191 104.952ZM77.5906 101.794L77.4678 98.8109L81.5167 87.6391L78.9757 102.131C78.4786 102.008 78.0151 101.895 77.5627 101.761L77.5906 101.794ZM81.0308 82.0196L73.7036 69.2775C74.449 68.8623 75.2236 68.5024 76.0213 68.2007L81.0308 82.0196ZM76.5072 67.9988C77.3125 67.7143 78.1376 67.4893 78.9757 67.3258L81.5167 81.8177L76.5072 67.9988ZM80.5785 82.2607L71.1626 70.988C71.8244 70.4515 72.5244 69.9641 73.2568 69.5299L80.5785 82.2607ZM80.182 82.5972L68.9342 73.136C69.4914 72.4877 70.0943 71.8804 70.7381 71.3189L80.182 82.5972ZM68.5377 72.7939L60.0601 65.6489C61.0511 64.4827 62.1323 63.3969 63.2937 62.4017L70.4086 70.9151C69.7398 71.4943 69.1145 72.1222 68.5377 72.7939ZM68.197 73.1865C67.641 73.875 67.137 74.6042 66.6892 75.3681L57.0946 69.8047C57.8717 68.4843 58.7492 67.2261 59.7194 66.0415L68.197 73.1865ZM66.4155 75.8168C65.9859 76.5907 65.6127 77.3948 65.2986 78.2227L54.8886 74.4147C55.424 72.9801 56.072 71.5905 56.8265 70.2589L66.4155 75.8168ZM65.1366 78.7219C64.8451 79.5585 64.6137 80.415 64.4441 81.2849L53.5427 79.3556C53.818 77.8455 54.2139 76.3601 54.7266 74.9138L65.1366 78.7219ZM64.3659 81.8008C64.2208 82.6742 64.1405 83.5571 64.1258 84.4424H53.5706C53.3304 84.1227 53.135 83.8815 53.0736 83.7974C53.1121 82.4817 53.2389 81.1701 53.4533 79.8716L64.3659 81.8008ZM52.9395 89.6525L52.6547 89.703V88.9795C52.6551 88.9222 52.6683 88.8657 52.6935 88.8142C52.7186 88.7628 52.755 88.7176 52.7999 88.6822C52.8501 88.9907 52.8502 89.316 52.9283 89.6188L52.9395 89.6525ZM53.5427 92.4566C53.5985 92.6754 53.6655 92.8941 53.727 93.1072H53.1238C53.0624 92.8941 53.0009 92.6754 52.9451 92.4566H53.5427ZM52.7664 99.4334L52.8166 100.583H52.4369L52.314 99.4334H52.7664ZM53.1908 104.941V106.096H52.9395V104.941H53.1908ZM54.3469 99.4334H54.5256C54.5703 99.5175 54.6149 99.6129 54.6596 99.7026C54.5422 99.6607 54.4204 99.6325 54.2966 99.6184L54.3469 99.4334ZM55.1511 104.941H55.4303L55.2069 106.096H54.9556L55.1511 104.941ZM55.4024 104.228V101.727C55.487 101.579 55.5455 101.418 55.5755 101.25C55.7486 101.531 55.9385 101.811 56.134 102.075V104.2L55.4024 104.228ZM57.0778 104.228C57.1549 104.23 57.231 104.247 57.3012 104.279C57.1217 104.291 56.9467 104.341 56.7874 104.425C56.7371 104.361 56.6725 104.309 56.5987 104.275C56.5249 104.241 56.4441 104.225 56.3629 104.228H57.0778ZM59.3117 104.587H60.088C60.2835 104.806 60.4789 105.025 60.6856 105.238H59.8925C59.6747 104.991 59.4793 104.761 59.2894 104.554L59.3117 104.587ZM60.0433 106.92C60.2332 107.111 60.4287 107.291 60.6018 107.481V108.536H60.0433V106.92ZM65.3153 114.772H64.3157V113.959H65.1143L65.1589 113.998C65.2205 114.247 65.2653 114.5 65.293 114.755L65.3153 114.772ZM64.6675 112.91H64.3157V112.299C64.4494 112.459 64.5672 112.632 64.6675 112.815V112.91ZM64.6675 113.028C64.6905 113.328 64.8079 113.613 65.0026 113.841H64.3157V113.028H64.6675ZM63.3886 114.772V113.959H64.1984V114.772H63.3886ZM64.1984 114.89V115.826H63.3886V114.856L64.1984 114.89ZM63.3886 113.841V113.028H64.1984V113.841H63.3886ZM63.3886 112.91V112.097H64.1425L64.1984 112.159V112.91H63.3886ZM63.3886 111.979V111.491C63.6176 111.635 63.8309 111.802 64.0253 111.99L63.3886 111.979ZM62.4671 112.91V112.097H63.2713V112.91H62.4671ZM63.2713 113.028V113.841H62.4671V113.028H63.2713ZM62.4671 111.979V111.065C62.7481 111.148 63.0182 111.265 63.2713 111.413V111.974L62.4671 111.979ZM62.4671 113.959H63.2713V114.772H62.4671V113.959ZM64.3157 115.826V114.856H65.3265C65.3679 115.167 65.3884 115.48 65.3879 115.793L64.3157 115.826ZM66.1251 109.809C66.4714 110.033 66.8176 110.252 67.1695 110.465L66.8846 110.964C66.6277 110.813 66.3764 110.656 66.1251 110.499V109.809ZM66.4937 109.433V109.203H66.812V108.524H66.4881V106.281H67.0466V108.524H67.3202V109.932L66.4937 109.433ZM71.2854 106.309H71.4809L71.2854 106.719V106.309ZM72.3465 108.553C72.9832 108.553 72.905 107.706 72.905 107.706C72.9801 107.69 73.0506 107.657 73.1109 107.61C73.1712 107.562 73.2198 107.501 73.2528 107.432C73.2858 107.362 73.3023 107.286 73.3011 107.209C73.2999 107.132 73.2809 107.056 73.2457 106.988C73.4036 106.971 73.5492 106.894 73.653 106.773C73.7567 106.653 73.8107 106.497 73.8042 106.337L74.0666 106.006L74.0331 106.825L72.3912 111.351L72.3465 108.553ZM73.9214 108.553L73.7651 112.445H73.5137C73.4604 112.445 73.4093 112.466 73.3716 112.504C73.3339 112.542 73.3127 112.593 73.3127 112.647C73.3101 112.667 73.3101 112.688 73.3127 112.708L72.4973 112.433L73.9214 108.553ZM78.0709 114.295C79.3663 114.479 80.6721 114.578 81.9802 114.593V115.153C80.6722 115.142 79.3663 115.044 78.0709 114.862V114.295ZM78.0709 113.763L78.0318 112.809H78.11V113.095H78.3334V112.809C78.3867 112.809 78.4379 112.788 78.4756 112.75C78.5133 112.712 78.5344 112.661 78.5344 112.607C78.5344 112.554 78.5133 112.502 78.4756 112.465C78.4379 112.427 78.3867 112.405 78.3334 112.405H77.9816L77.9201 110.902L79.361 102.714C80.2306 102.86 81.1099 102.941 81.9914 102.955V114.071C80.671 114.05 79.3536 113.937 78.0486 113.735L78.0709 113.763ZM79.4839 102.198L82.0249 87.712V102.434C81.1654 102.409 80.3088 102.323 79.4615 102.176L79.4839 102.198ZM79.4839 67.2585C80.3243 67.1202 81.1734 67.0414 82.0249 67.0229V81.7448L79.4839 67.2585ZM79.3945 66.7425L77.4231 55.7615C78.9294 55.5091 80.4531 55.376 81.9802 55.3633V66.4789C81.1063 66.4976 80.2348 66.5782 79.3722 66.7201L79.3945 66.7425ZM78.8807 66.821C78.0145 66.9913 77.1616 67.2237 76.3285 67.5165L72.5364 57.0626C73.9757 56.551 75.4528 56.1534 76.9539 55.8736L78.8807 66.821ZM76.7641 54.7856L76.8646 55.3464C75.3324 55.6285 73.8253 56.0336 72.3577 56.5578L72.1622 55.997C73.6549 55.4683 75.186 55.0558 76.7418 54.7632L76.7641 54.7856ZM75.837 67.6847C75.0102 67.9989 74.2075 68.3738 73.4356 68.8064L67.9067 59.1825C69.2313 58.4208 70.6153 57.7681 72.045 57.2308L75.837 67.6847ZM71.6708 56.1877L71.8662 56.7485C70.4096 57.3012 68.998 57.9669 67.6442 58.7395L67.3537 58.2347C68.7292 57.4378 70.1652 56.7515 71.6484 56.1821L71.6708 56.1877ZM67.4543 59.4349L72.9553 69.0644C72.1946 69.5141 71.4684 70.0202 70.7828 70.5786L63.6846 62.0652C64.8633 61.0897 66.1162 60.2084 67.4319 59.4293L67.4543 59.4349ZM66.8958 58.4815L67.1806 58.9862C65.8403 59.7795 64.5632 60.6758 63.3607 61.667L62.9921 61.2239C64.2155 60.2064 65.5171 59.2875 66.8846 58.4759L66.8958 58.4815ZM62.5956 61.5661L62.9697 62.0147C61.7861 63.0305 60.6826 64.1368 59.6691 65.3236L59.2279 64.9479C60.2591 63.7396 61.3812 62.6128 62.5844 61.5773L62.5956 61.5661ZM58.8873 65.3461L59.3285 65.7162C58.3402 66.9262 57.4459 68.2105 56.6534 69.5579L56.1563 69.2663C56.9584 67.8877 57.8679 66.575 58.8761 65.3404L58.8873 65.3461ZM55.8938 69.7205L56.3965 70.0066C55.6271 71.368 54.9642 72.7875 54.4139 74.2521L53.8554 74.0502C54.4146 72.5529 55.0925 71.1032 55.8827 69.7149L55.8938 69.7205ZM53.6935 74.5437L54.2519 74.74C53.735 76.2154 53.3317 77.7285 53.0456 79.2659L52.4871 79.1649C52.7635 77.5934 53.1631 76.0463 53.6823 74.5381L53.6935 74.5437ZM52.3699 79.6809L52.9283 79.7818C52.6733 81.3244 52.537 82.8844 52.5206 84.448H51.9622C51.969 82.8491 52.1016 81.2532 52.3587 79.6753L52.3699 79.6809ZM52.1632 84.9752L51.9622 85.2724C51.9622 85.1714 51.9622 85.0761 51.9622 84.9752H52.1632ZM35.677 104.2H35.0794V100.555H35.677V104.2ZM37.6317 104.2H37.0285V100.555H37.6317V104.2ZM39.5863 104.2H38.9832V100.555H39.5863V104.2ZM41.5354 104.2H40.9379V100.555H41.5354V104.2ZM43.4901 104.2H42.8869V100.555H43.4901V104.2ZM45.4448 104.2H44.8416V100.555H45.4448V104.2ZM47.3938 104.2H46.7963V100.555H47.3938V104.2ZM48.3823 98.1154H36.0512V94.7112H48.3823V98.1154ZM49.3485 104.2H48.7509V100.555H49.3485V104.2ZM49.1139 99.0464C49.1154 98.9507 49.1543 98.8594 49.2222 98.7923C49.2902 98.7251 49.3816 98.6875 49.477 98.6875H50.0019V97.1901H50.3147V94.055L50.0075 93.5671L49.7115 93.0736H50.3147V92.423H50.2142C50.1848 92.4216 50.156 92.4143 50.1295 92.4017C50.1029 92.3891 50.0791 92.3713 50.0594 92.3494C50.0397 92.3275 50.0244 92.302 50.0146 92.2742C50.0047 92.2464 50.0004 92.2169 50.0019 92.1874C50.0004 92.158 50.0047 92.1285 50.0146 92.1007C50.0244 92.0729 50.0397 92.0473 50.0594 92.0255C50.0791 92.0036 50.1029 91.9858 50.1295 91.9732C50.156 91.9606 50.1848 91.9533 50.2142 91.9519H50.3147V91.778C50.4038 91.7864 50.4936 91.7864 50.5827 91.778C50.8026 91.7355 51.0093 91.6413 51.1859 91.5032V91.9687H51.0742C51.012 91.9687 50.9523 91.9935 50.9083 92.0377C50.8643 92.0819 50.8396 92.1418 50.8396 92.2043C50.8396 92.2667 50.8643 92.3266 50.9083 92.3708C50.9523 92.415 51.012 92.4398 51.0742 92.4398H51.8616L52.0292 93.0904H50.5045L51.1859 94.0718V94.5878C50.9476 94.7042 50.7467 94.8856 50.6062 95.1112C50.4657 95.3368 50.3911 95.5976 50.3911 95.8637C50.3911 96.1298 50.4657 96.3906 50.6062 96.6162C50.7467 96.8418 50.9476 97.0232 51.1859 97.1396V97.2069H50.8396V98.6987H50.2812C50.2342 98.6987 50.1877 98.708 50.1444 98.726C50.101 98.744 50.0616 98.7705 50.0284 98.8038C49.9952 98.8371 49.9689 98.8767 49.9509 98.9203C49.933 98.9638 49.9237 99.0105 49.9237 99.0576C49.9237 99.1048 49.933 99.1514 49.9509 99.195C49.9689 99.2385 49.9952 99.2781 50.0284 99.3114C50.0616 99.3448 50.101 99.3712 50.1444 99.3892C50.1877 99.4073 50.2342 99.4166 50.2812 99.4166H49.4993C49.4488 99.4197 49.3982 99.4122 49.3508 99.3946C49.3034 99.377 49.2602 99.3496 49.2239 99.3142C49.1876 99.2789 49.1591 99.2363 49.1402 99.1892C49.1212 99.1421 49.1123 99.0915 49.1139 99.0408V99.0464ZM50.9402 104.913L51.1356 106.068H50.8787L50.6609 104.913H50.9402ZM50.2644 99.4053H50.7224L51.1021 100.555H50.7224L50.2644 99.4053ZM50.3147 106.068L50.1416 105.35L50.0466 104.963V104.913H50.3258L50.5771 106.068H50.3258H50.3147ZM51.5545 121.424H50.5604V107.65H51.5545V121.424ZM51.4484 106.068L51.2864 104.913H51.5657L51.6997 106.068H51.4484ZM51.5713 100.555L51.2864 99.4053H51.7332L51.9454 100.555H51.5713ZM52.2749 104.913H52.5541L52.5988 106.068H52.3419L52.2749 104.913ZM53.5371 121.424H52.543V107.65H53.5371V121.424ZM53.7325 106.068H53.4812L53.5259 104.913H53.8052L53.7325 106.068ZM54.5144 104.913H54.7936L54.6261 106.068H54.3748L54.5144 104.913ZM55.5141 108.502V121.401H54.5256V107.65H55.5141V108.502ZM55.5755 106.068H55.5085L55.5755 105.776V106.068ZM55.905 105.507H55.6425L55.771 104.946H56.201C56.1439 105.039 56.0988 105.139 56.067 105.244H55.9553L55.905 105.507ZM59.5519 115.81H58.2618C58.2618 115.473 58.2897 115.165 58.3232 114.873H59.5519V115.81ZM59.5519 114.755H58.34C58.3762 114.481 58.4302 114.209 58.5019 113.942H59.5519V114.755ZM59.5519 113.824H58.541C58.6219 113.544 58.7285 113.272 58.8594 113.011H59.5519V113.824ZM59.5519 112.893H58.9264C59.0769 112.599 59.2646 112.326 59.4848 112.08H59.5519V112.893ZM60.4789 115.81H59.6636V114.856H60.4734L60.4789 115.81ZM60.4789 114.755H59.6636V113.942H60.4734L60.4789 114.755ZM60.4789 113.824H59.6636V113.011H60.4734L60.4789 113.824ZM60.4789 112.893H59.6636V112.08H60.4734L60.4789 112.893ZM60.4789 111.962H59.6636V111.923C59.9071 111.7 60.1795 111.512 60.4734 111.362L60.4789 111.962ZM61.406 115.81H60.5962V114.856H61.406V115.81ZM61.406 114.755H60.5962V113.942H61.406V114.755ZM61.406 113.824H60.5962V113.011H61.406V113.824ZM61.406 112.893H60.5962V112.08H61.406V112.893ZM60.5962 111.962V111.278C60.7941 111.183 60.9996 111.104 61.2105 111.043C61.2755 111.048 61.341 111.048 61.406 111.043V111.946L60.5962 111.962ZM62.3275 115.81H61.5233V114.856H62.3442L62.3275 115.81ZM62.3275 114.755H61.5233V113.942H62.3442L62.3275 114.755ZM62.3275 113.824H61.5233V113.011H62.3442L62.3275 113.824ZM62.3275 112.893H61.5233V112.08H62.3442L62.3275 112.893ZM62.3275 111.962H61.5233V111.059C61.6876 111.051 61.8487 111.011 61.998 110.942C62.0818 110.942 62.1934 110.975 62.3275 111.015V111.962ZM62.4503 115.81V114.856H63.2546V115.793L62.4503 115.81ZM66.1307 117.599V114.295C66.3671 114.285 66.5971 114.215 66.7993 114.091C67.0014 113.968 67.1691 113.795 67.2867 113.589C67.2858 113.568 67.2858 113.548 67.2867 113.527V115.081L66.1307 117.599ZM72.3521 113.482V112.865C72.8101 113.028 73.268 113.174 73.7316 113.314V113.914C73.2457 113.779 72.7933 113.634 72.3465 113.482H72.3521ZM78.9421 120.857H78.3446L78.1435 115.922C79.2107 116.064 80.2843 116.152 81.3603 116.185C81.2024 116.317 81.075 116.481 80.9872 116.667C80.8994 116.853 80.8533 117.056 80.8521 117.262C80.84 117.456 80.8676 117.651 80.9332 117.834C80.9989 118.017 81.1012 118.185 81.2338 118.327C81.3665 118.469 81.5267 118.582 81.7045 118.659C81.8823 118.736 82.0741 118.776 82.2679 118.776C82.4616 118.776 82.6534 118.736 82.8312 118.659C83.009 118.582 83.1692 118.469 83.3019 118.327C83.4345 118.185 83.5368 118.017 83.6025 117.834C83.6681 117.651 83.6958 117.456 83.6836 117.262C83.6835 117.057 83.6384 116.854 83.5516 116.668C83.4647 116.482 83.3382 116.317 83.181 116.185C83.7394 116.185 84.3314 116.135 84.9011 116.084L84.6833 120.857H78.9421ZM88.4362 120.857L88.3245 118.115C88.5832 118.033 88.8125 117.877 88.9848 117.666C89.157 117.456 89.2648 117.2 89.2949 116.929C89.3251 116.658 89.2763 116.385 89.1546 116.141C89.033 115.898 88.8436 115.695 88.6094 115.557C89.6222 115.342 90.6232 115.074 91.6084 114.755V120.857H88.4362ZM94.8643 120.857H92.5019V118.053C92.4833 117.54 92.5436 117.027 92.6806 116.533C92.8554 116.629 93.0484 116.686 93.2468 116.7C93.4452 116.715 93.6444 116.686 93.8311 116.617C94.0932 116.525 94.3211 116.355 94.4845 116.129C94.6856 116.387 94.8699 116.875 94.8699 118.053L94.8643 120.857ZM93.859 113.987H93.8311C94.1774 113.847 94.5236 113.69 94.8643 113.538V113.998L93.859 113.987ZM95.7746 120.857V114.497L96.199 115.4V120.857H95.7746ZM97.7572 118.698L98.7792 120.857H97.7572V118.698ZM103.113 120.857V111.059C103.22 111.062 103.327 111.051 103.431 111.026V120.857H103.113ZM112.104 120.857H109.965V118.053C109.955 117.905 109.975 117.757 110.024 117.618C110.072 117.478 110.15 117.35 110.25 117.242C110.35 117.134 110.472 117.047 110.607 116.988C110.742 116.929 110.888 116.899 111.035 116.899C111.182 116.899 111.328 116.929 111.463 116.988C111.598 117.047 111.72 117.134 111.82 117.242C111.92 117.35 111.997 117.478 112.046 117.618C112.095 117.757 112.115 117.905 112.104 118.053V120.857ZM112.104 114.245H109.965V112.523C109.985 112.252 110.106 111.998 110.305 111.812C110.503 111.627 110.764 111.524 111.035 111.524C111.306 111.524 111.567 111.627 111.765 111.812C111.964 111.998 112.085 112.252 112.104 112.523V114.245ZM116.209 120.857H115.399V112.787C115.399 108.861 111.959 109.242 111.049 107.633C110.133 109.242 106.693 108.861 106.693 112.787V120.857H105.872V106.276C105.951 106.455 106.07 106.614 106.218 106.741C106.361 106.861 106.525 106.952 106.703 107.008C106.88 107.063 107.067 107.084 107.252 107.067C107.437 107.05 107.617 106.997 107.782 106.91C107.947 106.824 108.093 106.705 108.212 106.562C108.362 106.383 108.464 106.169 108.508 105.939H116.22L116.209 120.857ZM124.279 120.857H122.928V119.281C122.936 119.197 122.926 119.112 122.9 119.032C122.873 118.952 122.83 118.878 122.774 118.816C122.717 118.753 122.648 118.703 122.571 118.669C122.495 118.635 122.411 118.617 122.327 118.617C122.243 118.617 122.16 118.635 122.083 118.669C122.006 118.703 121.937 118.753 121.881 118.816C121.824 118.878 121.781 118.952 121.755 119.032C121.728 119.112 121.719 119.197 121.727 119.281V120.857H120.37V118.053C120.37 116.337 121.018 116.09 121.487 115.871C121.791 115.71 122.08 115.522 122.352 115.311C122.627 115.521 122.918 115.709 123.224 115.871C123.659 116.09 124.307 116.337 124.307 118.053L124.279 120.857ZM124.279 113.987H122.928V112.428C122.936 112.344 122.926 112.259 122.9 112.179C122.873 112.099 122.83 112.025 122.774 111.962C122.717 111.9 122.648 111.85 122.571 111.816C122.495 111.782 122.411 111.764 122.327 111.764C122.243 111.764 122.16 111.782 122.083 111.816C122.006 111.85 121.937 111.9 121.881 111.962C121.824 112.025 121.781 112.099 121.755 112.179C121.728 112.259 121.719 112.344 121.727 112.428V113.987H120.37V111.183C120.37 109.461 121.018 109.214 121.487 108.996C121.791 108.834 122.08 108.646 122.352 108.435C122.627 108.646 122.918 108.833 123.224 108.996C123.659 109.214 124.307 109.461 124.307 111.183L124.279 113.987ZM129.546 120.857H127.178V118.053C127.178 116.337 127.569 116.09 127.837 115.871C128.027 115.7 128.203 115.512 128.362 115.311C128.519 115.513 128.695 115.701 128.887 115.871C129.149 116.09 129.546 116.337 129.546 118.053V120.857ZM129.546 113.987H127.178V111.183C127.178 109.461 127.569 109.214 127.837 108.996C128.027 108.824 128.203 108.636 128.362 108.435C128.519 108.638 128.695 108.825 128.887 108.996C129.149 109.214 129.546 109.461 129.546 111.183V113.987ZM135.371 101.396H134.812V100.465C134.808 100.402 134.818 100.339 134.844 100.282C134.869 100.224 134.908 100.174 134.957 100.134C134.957 100.096 134.973 100.059 135 100.031C135.027 100.004 135.064 99.9886 135.102 99.9886C135.141 99.9886 135.178 100.004 135.205 100.031C135.232 100.059 135.248 100.096 135.248 100.134C135.296 100.174 135.335 100.225 135.36 100.282C135.385 100.34 135.396 100.403 135.393 100.465L135.371 101.396ZM136.152 101.396H135.594V100.465C135.589 100.402 135.6 100.339 135.626 100.282C135.651 100.224 135.69 100.174 135.739 100.134C135.739 100.096 135.754 100.059 135.782 100.031C135.809 100.004 135.846 99.9886 135.884 99.9886C135.923 99.9886 135.96 100.004 135.987 100.031C136.014 100.059 136.03 100.096 136.03 100.134C136.078 100.174 136.116 100.225 136.142 100.282C136.167 100.34 136.178 100.403 136.175 100.465L136.152 101.396ZM146.037 95.2888H145.272V94.0494C145.267 93.966 145.282 93.8825 145.316 93.8062C145.35 93.7299 145.402 93.6632 145.468 93.6119C145.538 93.5438 145.602 93.4687 145.658 93.3876C145.711 93.4705 145.775 93.5459 145.848 93.6119C145.912 93.6638 145.963 93.7308 145.997 93.807C146.03 93.8833 146.044 93.9665 146.037 94.0494V95.2888ZM147.065 95.2888H146.3V94.0494C146.295 93.9666 146.31 93.8839 146.343 93.8079C146.376 93.7319 146.426 93.6647 146.49 93.6119C146.563 93.5447 146.629 93.4695 146.685 93.3876C146.738 93.4705 146.802 93.5459 146.875 93.6119C146.94 93.6638 146.991 93.7308 147.024 93.807C147.057 93.8833 147.071 93.9665 147.065 94.0494V95.2888ZM153.242 94.4476C153.573 94.4476 153.897 94.5463 154.173 94.7311C154.448 94.916 154.663 95.1788 154.79 95.4862C154.916 95.7937 154.95 96.132 154.885 96.4583C154.82 96.7847 154.661 97.0845 154.426 97.3198C154.192 97.5551 153.894 97.7153 153.569 97.7803C153.244 97.8452 152.907 97.8119 152.601 97.6845C152.294 97.5572 152.033 97.3415 151.849 97.0648C151.665 96.7881 151.566 96.4628 151.566 96.1301C151.564 95.9077 151.606 95.6871 151.689 95.481C151.772 95.275 151.895 95.0875 152.051 94.9295C152.207 94.7715 152.392 94.646 152.597 94.5604C152.801 94.4748 153.02 94.4307 153.242 94.4308V94.4476ZM147.975 104.543L147.892 102.395L147.998 102.518L147.975 104.543ZM147.858 102.047V101.576H149.148L149.344 102.047H147.858ZM147.724 96.3432V96.0516H147.919V96.3432H147.981V101.11H147.791L147.601 96.3432H147.724ZM156.944 120.655H149.757V109.276H156.939L156.944 120.655ZM156.944 107.403H149.757V102.518H156.939L156.944 107.403ZM156.944 101.11H149.757V99.0969H156.939L156.944 101.11ZM157.285 98.6594H149.321L149.126 98.1883H157.503L157.285 98.6594Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M187.694 101.547V101.082H187.063V93.8359H176.324V101.082H175.765V101.547H177.547L177.737 102.018H175.961L176.302 102.49V107.374H175.743L175.939 107.846L176.279 108.311V108.805H175.939V109.276H176.279V125.949H178.055V121.849H185.237V125.949H187.019V109.276H187.454V108.805H187.019V108.311L187.454 107.846L187.65 107.374H187.019V102.518L187.454 102.047H185.678L185.868 101.575L187.694 101.547ZM181.797 94.4304C182.128 94.4304 182.452 94.5291 182.728 94.714C183.003 94.8989 183.218 95.1616 183.345 95.4691C183.472 95.7765 183.505 96.1148 183.44 96.4412C183.376 96.7675 183.216 97.0673 182.982 97.3026C182.747 97.5379 182.449 97.6982 182.124 97.7631C181.799 97.828 181.462 97.7947 181.156 97.6673C180.85 97.54 180.588 97.3243 180.404 97.0477C180.22 96.771 180.122 96.4457 180.122 96.1129C180.122 95.6667 180.298 95.2387 180.612 94.9232C180.927 94.6077 181.353 94.4304 181.797 94.4304ZM185.282 120.627H178.1V109.276H185.282V120.627ZM185.282 107.374H178.1V102.518H185.282V107.374ZM185.282 101.082H178.1V99.0965H185.282V101.082ZM177.759 98.6311L177.569 98.16H185.913L185.723 98.6311H177.759Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M184.154 103.51H179.233V106.056H184.154V103.51Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M184.154 99.5059H179.233V100.543H184.154V99.5059Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M181.797 97.3578C182.041 97.3567 182.279 97.283 182.482 97.1462C182.684 97.0093 182.841 96.8154 182.934 96.5888C183.026 96.3622 183.05 96.1132 183.002 95.8731C182.953 95.6331 182.835 95.4127 182.663 95.24C182.49 95.0672 182.27 94.9497 182.031 94.9023C181.791 94.8549 181.543 94.8798 181.318 94.9738C181.093 95.0678 180.901 95.2266 180.765 95.4303C180.63 95.634 180.558 95.8734 180.558 96.1183C180.558 96.2816 180.59 96.4432 180.652 96.594C180.714 96.7447 180.806 96.8816 180.921 96.9967C181.036 97.1119 181.173 97.2031 181.323 97.265C181.474 97.327 181.635 97.3585 181.797 97.3578Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M168.114 95.0634H167.986L167.874 96.185H167.209L167.098 95.0634H166.969L166.919 94.6035H159.553V101.081H159.96V101.524L159.743 102.04H159.877L159.553 102.489V107.374H160.111L159.916 107.845L159.575 108.31V108.804H159.916V109.275H159.575V125.948H161.072V102.483L161.379 101.922H161.256C161.428 100.54 162.096 99.2692 163.136 98.3479C164.176 97.4265 165.515 96.9186 166.902 96.9197H168.187C169.574 96.9186 170.913 97.4265 171.953 98.3479C172.993 99.2692 173.661 100.54 173.833 101.922H173.71L174.017 102.483C174.017 102.534 174.017 102.584 174.017 102.64V125.948H175.508V109.275H175.157V108.804H175.497V108.31L175.157 107.845L174.967 107.374H175.497V102.517L175.201 102.068H175.307L175.095 101.552V101.109H175.497V94.6035H168.17L168.114 95.0634ZM168.22 95.3214C169.834 95.2998 171.4 95.8747 172.619 96.9367C173.838 97.9987 174.626 99.4737 174.833 101.081V101.575L174.916 101.782H174.04C173.827 100.38 173.136 99.0955 172.085 98.148C171.007 97.1876 169.617 96.6552 168.176 96.6505H166.891C165.45 96.6531 164.059 97.1858 162.982 98.148C161.927 99.0935 161.234 100.379 161.022 101.782H160.156L160.245 101.575V101.081C160.451 99.4742 161.237 97.9992 162.456 96.9371C163.674 95.875 165.239 95.2999 166.852 95.3214H166.891L167.003 96.415H168.12L168.231 95.3214H168.22Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M11.9978 125.389C11.117 120.308 10.6742 115.161 10.6742 110.005C10.6742 60.82 50.5215 20.8328 99.4719 20.8328C148.422 20.8328 188.27 60.8481 188.27 110.033C188.27 115.19 187.827 120.336 186.946 125.417H189.777C190.634 120.334 191.063 115.188 191.062 110.033C191.062 59.3058 149.964 18.0566 99.4719 18.0566C48.9801 18.0566 7.88184 59.3338 7.88184 110.061C7.88051 115.216 8.31021 120.362 9.16636 125.445L11.9978 125.389Z"
                      fill="#1FC0E8"
                    />
                    <path
                      d="M180.857 38.2122C185.296 38.2122 188.893 34.6076 188.893 30.1637C188.893 25.7199 185.296 22.1152 180.857 22.1152C176.418 22.1152 172.821 25.7199 172.821 30.1637C172.821 34.6076 176.418 38.2122 180.857 38.2122Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M174.785 28.7724V27.7305H179.264V28.7724H177.657V33.0385H176.394V28.7724H174.785Z"
                      fill="white"
                    />
                    <path
                      d="M179.889 27.7305H181.475L182.821 31.0169H182.883L184.228 27.7305H185.814V33.0385H184.567V29.778H184.523L183.25 33.0048H182.453L181.18 29.7598H181.136V33.0385H179.889V27.7305Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5278_17473">
                      <rect
                        width="187"
                        height="163"
                        fill="white"
                        transform="translate(6 18)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <p className="max-w-sm text-base text-white opacity-60 font-normal text-justify">
                  Evento allows organizers to advertise their works and
                  portfolios providing them with extended online visibility. By
                  connecting planners and organizers, this medium aims to ease
                  the efforts of end users to find all event needs in one place.
                </p>
              </div>
              <div className="w-full md:w-6/12 space-y-5 lg:space-y-10">
                <div className="space-y-4">
                  <span className="ft-titel">Useful Links</span>
                  <div className="flex flex-wrap f-manu">
                    <a
                      href="#"
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      {t("Home")}
                    </a>
                    <a
                      href="#about"
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      About
                    </a>
                    <a
                      href="#feature"
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      Feature
                    </a>
                    {/* <a href="#" className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim">Upcoming</a> */}
                    <a
                      href="#showcase"
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      Showcase
                    </a>
                    <a
                      href="#otherproducts"
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      F-Coin
                    </a>
                    <a
                      href="#aboutus"
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      About us
                    </a>
                    <a
                      href="#contactus"
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      Become a Partner
                    </a>
                    <a
                      href="https://agent.eventopackage.com/"
                      target={"_blank"}
                      className="block opacity-50 mr-4 hover:text-white hover:opacity-100 anim"
                    >
                      Become an Agent
                    </a>
                  </div>
                </div>
                <div className="space-y-2 lg:space-y-4">
                  <div className="flex flex-wrap items-center -mx-3.5 space-y-4 lg:space-y-0">
                    <div className="w-full lg:w-1/2 px-3.5 ">
                      <span className="ft-titel px-2">Email Us :</span>
                      <a
                        href="mailto:help@eventopackage.com"
                        className="py-2 ft-text inline-block opacity-50"
                      >
                        help@eventopackage.com
                      </a>
                      <br />
                      <span className="ft-titel px-2">Call Us :</span>
                      <a
                        href="tel:+919727938000"
                        className="py-2 ft-text inline-block opacity-50"
                      >
                        +91 97279 38000
                      </a>
                    </div>
                    <div className="w-full lg:w-1/2 px-3.5 flex md:justify-end">
                      <div className="space-y-2 md:space-y-4">
                        <span className="ft-titel">For Users</span>
                        <div className="flex space-x-3">
                          <a
                            href="https://play.google.com/store/apps/details?id=com.eventopackage.evento_package"
                            className="w-32 md:w-auto"
                          >
                            <img src={googleplay} alt="Google Playstore" />
                          </a>
                          <a
                            href="https://apps.apple.com/us/app/evento-package/id1607233336"
                            className="w-32 md:w-auto"
                          >
                            <img src={appstore} alt="Apple Store" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap pt-10 justify-between items-center">
              <div className="w-full flex justify-center space-x-3">
                <a
                  href="https://web.whatsapp.com/"
                  target="blank"
                  className="block hover:opacity-60 anim"
                >
                  <img src={whatsupfooter} alt="Whapsapp" />
                </a>
                <a
                  href="https://www.facebook.com/EventoPackage"
                  target="blank"
                  className="block hover:opacity-60 anim"
                >
                  <img src={facebookfooter} alt="Facebook" />
                </a>
                <a
                  href="https://web.telegram.org/z/"
                  target="blank"
                  className="block hover:opacity-60 anim"
                >
                  <img src={telegramfooter} alt="Massanger" />
                </a>
                <a
                  href="https://www.instagram.com/EventoPackage/"
                  target="blank"
                  className="block hover:opacity-60 anim"
                >
                  <img src={instagramfooter} alt="Instagram" />
                </a>
                <a
                  href="https://twitter.com/EventoPackage"
                  target="blank"
                  className="block hover:opacity-60 anim"
                >
                  <img src={twitterfooter} alt="Twitter" />
                </a>
                <a
                  href="https://www.linkedin.com/company/eventopackage"
                  target="blank"
                  className="block hover:opacity-60 anim"
                >
                  <img src={linkedinfooter} alt="Linkin" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCmtm1FLrLLtecvKhvu2KdHA"
                  target="blank"
                  className="block hover:opacity-60 anim"
                >
                  <img src={youtubefooter} alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper py-3">
          <div className="flex flex-wrap justify-between text-xs md:text-sm">
            <span>© 2020 Festum Evento Private Limited</span>
            <ul className="flex items-center capitalize space-x-3">
              <li className="cursor-pointer" onClick={(e) => setIsPolicy(true)}>
                privacy policy
              </li>
              <li>|</li>
              <li className="cursor-pointer" onClick={(e) => setIsTnc(true)}>
                terms and conditions
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <Modal isOpen={isVideoPlayerPopUpOpen}>
        <VideoPlayer
          handleClose={setIsVideoPlayerPopUpOpen}
          videoUrl={videoUrl}
        />
      </Modal>

      <Modal isOpen={submit}>
        <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
          <div className="table-cell align-middle">
            <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
              <div className="bg-brightGray px-12 py-8 max-[640px]:p-8 rounded-2xl">
                <div className="flex items-center justify-start">
                  <h3 className="text-[#2E363F] font-bold pl-4">{msg}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {setTimeout(() => {
          setSubmit(false);
        }, 2000)}
      </Modal>

      <Modal isOpen={isTnc}>
        <TncPopUp handleClose={setIsTnc} />
      </Modal>
      <Modal isOpen={isPolicy}>
        <PolicyPopUp handleClose={setIsPolicy} />
      </Modal>
    </>
  );
};

export default LandingPage;
