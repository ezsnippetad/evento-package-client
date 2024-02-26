import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import {
  clickNum,
  setNumber,
} from "../../Common/CommonSlice/stepProgressCountSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function StepProgressBar({ eventType }) {
  const dispatch = useDispatch();
  const intl = useIntl();
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const eventHeading = {
    hyp: [
      `${intl.formatMessage({ id: "ADD PLACE" })}`,
      `${intl.formatMessage({ id: "ABOUT PLACE" })}`,
      `${intl.formatMessage({ id: "LOCATION" })}`,
      `${intl.formatMessage({ id: "PHOTOS & VIDEOS" })}`,
      `${intl.formatMessage({ id: "ADD SERVICE" })}`,
      `${intl.formatMessage({ id: "PERSONAL DETAILS" })}`,
      `${intl.formatMessage({ id: "COMPANY DETAILS" })}`,
      `${intl.formatMessage({ id: "TERMS & CONDITIONS" })}`,
      `${intl.formatMessage({ id: "DISCOUNT" })}`,
      `${intl.formatMessage({ id: "CALENDAR" })}`,
    ],
    psb: [
      `${intl.formatMessage({ id: "SELECT SKILL" })}`,
      `${intl.formatMessage({ id: "PERSONAL DETAILS" })}`,
      `${intl.formatMessage({ id: "PHOTOS & VIDEOS" })}`,
      `${intl.formatMessage({ id: "EQUIPMENT" })}`,
      `${intl.formatMessage({ id: "OTHER COST" })}`,
      `${intl.formatMessage({ id: "COMPANY DETAILS" })}`,
      `${intl.formatMessage({ id: "TERMS & CONDITIONS" })}`,
      `${intl.formatMessage({ id: "DISCOUNT" })}`,
      `${intl.formatMessage({ id: "CALENDAR" })}`,
    ],
    gsb: [
      `${intl.formatMessage({ id: "SELECT SKILL" })}`,
      `${intl.formatMessage({ id: "PERSONAL DETAILS" })}`,
      `${intl.formatMessage({ id: "PHOTOS & VIDEOS" })}`,
      `${intl.formatMessage({ id: "ADD ITEM" })}`,
      `${intl.formatMessage({ id: "EQUIPMENT" })}`,
      `${intl.formatMessage({ id: "OTHER COST" })}`,
      `${intl.formatMessage({ id: "COMPANY DETAILS" })}`,
      `${intl.formatMessage({ id: "TERMS & CONDITIONS" })}`,
      `${intl.formatMessage({ id: "DISCOUNT" })}`,
      `${intl.formatMessage({ id: "CALENDAR" })}`,
    ],
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

  useEffect(() => {
    const lastpath = location.pathname.split("/").pop();
    const stepIndex = eventPath[eventType].indexOf("/" + lastpath);
    dispatch(clickNum(stepIndex));
  }, [location.pathname]);



  useEffect(() => {
    const lastpath = location.pathname.split("/").pop();
    const stepIndex = eventPath[eventType].indexOf("/" + lastpath);

    dispatch(clickNum(stepIndex));
  }, [location.pathname]);

  const goTo = (index) => {
    if (
      localStorage.getItem("isEdit") == "true" &&
      localStorage.getItem("isFormSubmitted") == "true"
    ) {
      dispatch(clickNum(index));
      navigate("/dashboard/event/" + eventType + eventPath[eventType][index]);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <ul className="flex justify-between step-progress-holder">
        {eventHeading[eventType].map((item, index) => {
          return (
            <React.Fragment key={item}>
              <li className={count >= index ? "active" : ""} key={index}>
                <div
                  onClick={(e) => {
                    goTo(index);
                  }}
                >
                  <span
                    className={
                      count >= index + 1
                        ? "active cursor-pointer"
                        : "cursor-pointer"
                    }
                  >
                    {index + 1}
                  </span>
                </div>
                <h3>{item}</h3>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default StepProgressBar;
