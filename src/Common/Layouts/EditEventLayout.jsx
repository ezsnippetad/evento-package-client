import React, { useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import EventCalender from "../../Pages/Dashboard/Event/Calendar/EventCalender";
import EventAddPlaces from "../../Pages/Dashboard/Event/AddPlace/EventAddPlaces";
import EventAboutPlace from "../../Pages/Dashboard/Event/AboutPlace/EventAboutPlace";
import EventPersonalDetails from "../../Pages/Dashboard/Event/PersonalDetails/EventPersonalDetails";
import EventPSB from "../../Pages/Dashboard/Event/EventPSB";
import EventPhotosAndVideos from "../../Pages/Dashboard/Event/Photos&Videos/EventPhotosAndVideos";
import EventAddServices from "../../Pages/Dashboard/Event/AddService/EventAddServices";
import EventAddItems from "../../Pages/Dashboard/Event/AddItems/EventAddItems";
import AddLocation from "../../Pages/Dashboard/Event/Location/AddLocation";
import EventCompanyDetails from "../../Pages/Dashboard/Event/CompanyDetails/EventCompanyDetails";
import EventTermsAndConditions from "../../Pages/Dashboard/Event/Terms&Conditions/EventTermsAndConditions";
import EventDiscounts from "../../Pages/Dashboard/Event/Discount/EventDiscounts";
import EventAddEquipments from "../../Pages/Dashboard/Event/AddEquipments/EventAddEquipments";
import PSBOtherCost from "../../Pages/Dashboard/personal_skills_business/PSBOtherCost";
import EventDiscountView from "../../Pages/Dashboard/Event/Discount/EventDiscountView";
import EventCalendarView from "../../Pages/Dashboard/Event/Calendar/EventCalendarView";
import DashboardEvent from "./../../Pages/Dashboard/Event/DashboardEvent";
import { useIntl } from "react-intl";
import StepProgressBar from "../../Pages/Dashboard/StepProgressBar";
import { clickNum } from "../CommonSlice/stepProgressCountSlice";
import { useDispatch, useSelector } from "react-redux";
import { eventPath } from "../EventPath/eventPath";

function EditEventLayout() {
  const intl = useIntl();
  const navigate = useNavigate();
  const params = useParams();
  const eventType = params.eventType;
  const displayName = localStorage.getItem("displayName");
  const dispatch = useDispatch();
  const location = useLocation();
  const count = useSelector((state) => state?.stepProgressCount?.count);
  const [IsAddEquipmentPopUpOpen, setIsAddEquipmentPopUpOpen] = useState(false);
  const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);
  const [isAddItemPopUpOpen, setIsAddItemPopUpOpen] = useState(false);

  const goTo = (index) => {
    dispatch(clickNum(index));
    navigate(`/dashboard/event/${eventType}${eventPath[eventType][index]}`);
  };

  return (
    <>
      <div className="wrapper h-full flex flex-col">
        <div className="space-y-8 h-full">
          {/* <!-- title-holder  --> */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <i
                className="icon-back-arrow mr-4 text-2xl"
                onClick={() => navigate("../")}
              ></i>
              <h1>
                {displayName && displayName !== ""
                  ? displayName
                  : intl.formatMessage({ id: "ADD NEW" })}
              </h1>
            </div>
            {location.pathname ===
              `/dashboard/event/${eventType}/addequipments` && (
              <>
                <button
                  onClick={() => setIsAddEquipmentPopUpOpen(true)}
                  className="btn-primary flex items-center"
                >
                  <i className="icon-plus mr-3"></i>
                  <span>{intl.formatMessage({ id: "Add Equipment" })}</span>
                  &nbsp;
                  <svg
                    class="w-5 h-5 tooltip"
                    data-pr-tooltip={intl.formatMessage({
                      id: "ADD ITEMS THAT YOU PROVIDE",
                    })}
                    data-pr-position="top"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </>
            )}
            {location.pathname ===
              `/dashboard/event/${eventType}/addservices` && (
              <>
                <button
                  onClick={() => setIsAddServicesPopUpOpen(true)}
                  className="btn-primary flex items-center"
                >
                  <i className="icon-plus mr-3"></i>
                  <span>{intl.formatMessage({ id: "Add Service" })}</span>&nbsp;
                  <svg
                    class="w-5 h-5 tooltip"
                    data-pr-tooltip={intl.formatMessage({
                      id: "ADD ITEMS THAT YOU PROVIDE",
                    })}
                    data-pr-position="top"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </>
            )}
            {location.pathname === `/dashboard/event/${eventType}/additem` && (
              <>
                <button
                  onClick={() => setIsAddItemPopUpOpen(true)}
                  className="btn-primary flex items-center"
                >
                  <i className="icon-plus mr-3"></i>
                  <span>{intl.formatMessage({ id: "Add Item" })}</span>&nbsp;
                  <svg
                    class="w-5 h-5 tooltip"
                    data-pr-tooltip={intl.formatMessage({
                      id: "ADD ITEMS THAT YOU PROVIDE",
                    })}
                    data-pr-position="top"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
          {/* <!-- step-progress-bar  --> */}
          <StepProgressBar eventType={eventType} goTo={goTo} />
          <Routes>
            <Route path="addplaces" element={<EventAddPlaces />} />
            <Route path="aboutplace" element={<EventAboutPlace />} />
            <Route path="personaldetails" element={<EventPersonalDetails />} />
            <Route path="personalinfo" element={<EventPSB />} />
            <Route path="photosandvideos" element={<EventPhotosAndVideos />} />
            <Route
              path="addservices"
              element={
                <EventAddServices
                  setIsAddServicesPopUpOpen={setIsAddServicesPopUpOpen}
                  isAddServicesPopUpOpen={isAddServicesPopUpOpen}
                />
              }
            />
            <Route
              path="addequipments"
              element={
                <EventAddEquipments
                  setIsAddEquipmentPopUpOpen={setIsAddEquipmentPopUpOpen}
                  IsAddEquipmentPopUpOpen={IsAddEquipmentPopUpOpen}
                />
              }
            />
            <Route path="location" element={<AddLocation />} />
            <Route path="companydetails" element={<EventCompanyDetails />} />
            <Route
              path="termsandconditions"
              element={<EventTermsAndConditions />}
            />
            <Route path="discounts" element={<EventDiscounts />} />
            {/* <Route path="discounts" element={<EventDiscountView />} /> */}
            <Route path="calender" element={<EventCalender />} />
            {/* <Route path="calender" element={<EventCalendarView />} /> */}
            <Route path="othercost" element={<PSBOtherCost />} />
            <Route
              path="additem"
              element={
                <EventAddItems
                  isAddItemPopUpOpen={isAddItemPopUpOpen}
                  setIsAddItemPopUpOpen={setIsAddItemPopUpOpen}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default EditEventLayout;
