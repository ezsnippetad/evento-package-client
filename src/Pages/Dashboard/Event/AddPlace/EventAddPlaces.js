import React, { useEffect, useState } from "react";
import EventAddPlacesEventList from "../EventAddPlacesEventList";
import { useNavigate, useParams } from "react-router-dom";
import StepProgressBar from "../../StepProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  clickNum,
  decrement,
  increment,
  reset,
} from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { toast, ToastContainer } from "react-toastify";
import { addPlaces, useAddPlaces } from "./eventAddPlaceSlice";
import { useIntl } from "react-intl";
import { MoonLoader } from "react-spinners";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";

const EventAddPlaces = () => {
  const intl = useIntl();
  const addPlace = useAddPlaces();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const eventType = params.eventType;
  const [newEvent, setNewEvent] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const eventId = localStorage.getItem("eventId");
  const displayName = localStorage.getItem("displayName");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
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
  const clickNextHandler = () => {
    goTo(count + 1);
  };

  const getAddedEvent = async () => {
    try {
      const response = await dispatch(addPlaces(eventId)).unwrap();
      if (!response?.data?.IsSuccess) {
        toast.error(
          `${intl.formatMessage({ id: "ERROR OCCURED WHILE FETCHING DATA." })}`,
        );
        setNewEvent(response?.data?.Data);
        setCategoryName(addPlace?.event_category?.category_name);
      }
      localStorage.setItem(
        "isFormSubmitted",
        response?.data?.Data?.isFormSubmitted,
      );
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const clicBackHandler = () => {
    dispatch(reset());
    navigate("/dashboard");
  };

  useEffect(() => {
    getAddedEvent();
  }, [reload]);

  useEffect(() => {
    setNewEvent(addPlace);
    setCategoryName(addPlace?.event_category?.category_name);
  }, [addPlace]);

  return (
    //  <!-- Content In -->
    <>
      {/* <!-- main-content  --> */}
      {loading ? (
        <EventoPackageLoader />
      ) : (
        <>
          <div className="flex flex-col justify-between h-[80%]">

            <div className=" space-y-3">
              <EventAddPlacesEventList
                displayName={newEvent?.display_name}
                categoryName={categoryName}
                eventId={newEvent?._id}
                setReload={setReload}
              />
            </div>

            <div className="navbtns flex justify-between items-center">
              <button
                type="button"
                className="flex items-center text-[#9ba6a8]"
                onClick={clicBackHandler}
              >
                <i className="icon-back-arrow mr-3 "></i>
                <h3 className="">{intl.formatMessage({ id: "BACK" })}</h3>
              </button>
              <button
                type="button"
                className={`flex items-center active  text-[#20C0E8] `}
                onClick={clickNextHandler}
              >
                <h3 className="">{intl.formatMessage({ id: "NEXT" })}</h3>
                <i className="icon-next-arrow ml-3"></i>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EventAddPlaces;
