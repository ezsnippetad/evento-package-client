import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  clickNum,
  decrement,
  reset,
} from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { useDispatch, useSelector } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useState } from "react";
import moment from "moment/moment";
import {
  getOneEventDetails,
  idCalendar,
  useEventCalender,
} from "./calenderSlice";
import { useIntl } from "react-intl";
import { MoonLoader } from "react-spinners";
import StepProgressBar from "../../StepProgressBar";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";

const EventCalender = () => {
  const [isChange, setIsChange] = useState(false);
  const calendarRef = useRef();
  const intl = useIntl();
  const params = useParams();
  const eventType = params.eventType;
  const stateEventCalender = useEventCalender();
  const displayName = localStorage.getItem("displayName");
  const eventId = localStorage.getItem("eventId");
  const [date, setDate] = useState(new Date());
  const [isMonthChange, setIsMonthChange] = useState();
  const newDate = moment(isMonthChange).format("MM").toString();
  const ChangeDate =
    newDate === "01"
      ? newDate === "12"
      : newDate - 1 < 10
        ? "0" + (newDate - 1)
        : newDate - 1;
  const ChangeYear =
    moment(isMonthChange).format("MM").toString() == "01"
      ? moment(isMonthChange).format("YYYY").toString() - 1
      : moment(isMonthChange).format("YYYY").toString();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [values, setValues] = useState({
    month:
      new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1)
        : new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const CalendarViewList = async () => {
    try {
      const response = await dispatch(getOneEventDetails(eventId)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };
  const setMonthYear = () => {
    let mon = new Date();
    mon.setMonth(values?.month - 1);
    mon.setFullYear(values?.year);
    setDate(mon);
    setTimeout(() => {
      setIsChange(false);
    }, [3000]);
  };

  const IdCalendar = async () => {
    try {
      setIsChange(true);
      const response = await dispatch(
        idCalendar({
          eventId: eventId,
          month: values.month,
          year: values.year,
        }),
      ).unwrap();
      if (response) {
        const calendarEvents = [];
        Object.keys(response?.data?.Data).forEach((val) => {
          if (response?.data?.Data[val]?.length) {
            for (let i = 0; i < response?.data?.Data[val]?.length; i++) {
              calendarEvents.push({
                title: response?.data?.Data[val][i]?.name,
                start: new Date(
                  response?.data?.Data[val][i]?.start_date +
                  " " +
                  response?.data?.Data[val][i]?.start_time,
                ),
                end: new Date(
                  response?.data?.Data[val][i]?.end_date +
                  " " +
                  response?.data?.Data[val][i]?.end_time,
                ),
                color: generateRandomColor(),
              });
            }
            setCalendarEvents(calendarEvents);
            setIsChange(false);
          }
        });
        setMonthYear();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    CalendarViewList();
  }, []);
  useEffect(() => {
    IdCalendar();
  }, [values]);

  const clickNextHandler = () => {
    dispatch(reset());
    navigate("/dashboard");
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

  const clickBackHander = () => {
    goTo(count - 1);
  };

  const generateRandomColor = () => {
    let maxVal = 0xffffff; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
  };

  const year = new Date().getFullYear();

  return (
    <>
      {/* <!-- main-content  --> */}
      <div className="flex flex-col h-[calc(100%-150px)]">
        <div className="flex items-end -mx-3.5 max-[820px]:flex-col mb-5">
          <div className="w-full lg:w-1/2 px-3.5 max-[820px]:pt-1">
            <h3 className="pb-2">{intl.formatMessage({ id: "MONTHS" })}</h3>
            <select
              className="bg-white rounded-md flex space-x-3 outline-0 px-6 py-4 relative arrow"
              value={ChangeDate ? ChangeDate : values.month}
              onChange={(e) => {
                setIsChange(true);
                setValues({ ...values, month: e.target.value });
              }}
            >
              <option value="01">
                {intl.formatMessage({ id: "JANUARY" })}
              </option>
              <option value="02">
                {intl.formatMessage({ id: "FEBRUARY" })}
              </option>
              <option value="03">{intl.formatMessage({ id: "MARCH" })}</option>
              <option value="04">{intl.formatMessage({ id: "APRIL" })}</option>
              <option value="05">{intl.formatMessage({ id: "MAY" })}</option>
              <option value="06">{intl.formatMessage({ id: "JUNE" })}</option>
              <option value="07">{intl.formatMessage({ id: "JULY" })}</option>
              <option value="08">{intl.formatMessage({ id: "AUGUST" })}</option>
              <option value="09">
                {intl.formatMessage({ id: "SEPTEMBER" })}
              </option>
              <option value="10">
                {intl.formatMessage({ id: "OCTOBER" })}
              </option>
              <option value="11">
                {intl.formatMessage({ id: "NOVEMBER" })}
              </option>
              <option value="12">
                {intl.formatMessage({ id: "DECEMBER" })}
              </option>
            </select>
          </div>
          <div className="w-full lg:w-1/2 px-3.5 max-[820px]:pt-1">
            <h3 className="pb-2">{intl.formatMessage({ id: "YEARS" })}</h3>
            <select
              className="bg-white rounded-md flex space-x-3 outline-0 px-6 py-4 relative arrow"
              value={ChangeYear ? ChangeYear : values.year}
              onChange={(e) => {
                setIsChange(true);
                setValues({ ...values, year: e.target.value });
              }}
            >
              <option>{year}</option>
              <option>{year + 1}</option>
              <option>{year + 2}</option>
              <option>{year + 3}</option>
              <option>{year + 4}</option>
              <option>{year + 5}</option>
              <option>{year + 6}</option>
              <option>{year + 7}</option>
              <option>{year + 8}</option>
              <option>{year + 9}</option>
            </select>
          </div>
        </div>
        {!isChange ? (
          <>
            <div className="calendar inline-block justify-center items-center rounded-md drop-shadow-one bg-white w-full px-12 py-7">
              <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={calendarEvents ? calendarEvents : null}
                initialDate={date}
                datesSet={(e) => {
                  setIsMonthChange(e.end);
                }}
              />
            </div>
          </>
        ) : (
          <div className="calendar inline-block- flex justify-center items-center rounded-md drop-shadow-one bg-white w-full px-12 py-7">
            <EventoPackageLoader loding={isChange} />
          </div>
        )}
      </div>
      <div className="flex justify-between items-cente pb-11">
        <button
          type="button"
          className="flex items-center  text-[#9ba6a8]"
          onClick={clickBackHander}
        >
          <i className="icon-back-arrow mr-3"></i>
          <h3>{intl.formatMessage({ id: "BACK" })}</h3>
        </button>
        <button
          type="button"
          className="flex items-center justify-end active btn-primary "
          onClick={clickNextHandler}
        >
          {intl.formatMessage({ id: "DONE" })}
        </button>
      </div>
    </>
  );
};

export default EventCalender;
