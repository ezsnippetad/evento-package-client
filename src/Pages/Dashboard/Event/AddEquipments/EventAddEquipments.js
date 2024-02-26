import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../../Common/Modals/Modal";
import EventPopUpAddEquipment from "../../../../component/Popups/DashboardPopup/EventPopUpAddEquipment";
import EventAddEquipmentsListItem from "./EventAddEquipmentsListItem";
import StepProgressBar from "../../StepProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  clickNum,
  decrement,
  increment,
} from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { toast, ToastContainer } from "react-toastify";
import { MoonLoader } from "react-spinners";
import {
  equipmentsId,
  listOfEquipment,
  useEquipmentsId,
} from "./addEquipmentsSlices";
import { useIntl } from "react-intl";
import ToolTips from "../../../ToolTips";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";

const EventAddEquipments = ({ setIsAddEquipmentPopUpOpen, IsAddEquipmentPopUpOpen }) => {
  const intl = useIntl();
  const equipmentsIDState = useEquipmentsId();
  const displayName = localStorage.getItem("displayName");
  const navigate = useNavigate();
  const params = useParams();
  const eventType = params.eventType;
  const eventId = localStorage.getItem("eventId");
  const event_type = localStorage.getItem("event_type");
  const dispatch = useDispatch();
  // const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);
  const [equipmentList, setEquipmentList] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  const count = useSelector((state) => state?.stepProgressCount?.count);

  const getequipmentList = async () => {
    try {
      const response = await dispatch(listOfEquipment(event_type)).unwrap();
      if (response?.data?.Data) {
        setEquipmentList(response?.data?.Data);
        setLoading(false);
        await dispatch(equipmentsId(eventId)).unwrap();
      }
      if (!response?.data?.IsSuccess) {
        toast.error(`${intl.formatMessage({ id: "ENABLE TO FETCH DATA." })}`);
      }
    } catch (error) {
      // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
      console.log(error);
    }
  };

  useEffect(() => {
    const temp = equipmentsIDState?.equipments?.map((e) => {
      return e._id;
    });
    setActiveList(temp);
  }, [equipmentsIDState]);

  useEffect(() => {
    getequipmentList();
  }, [IsAddEquipmentPopUpOpen, reload]);

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

  const clickNextHandler = () => {
    toast.success("Equipment saved Successfully");
    goTo(count + 1);
    // if (eventType === "hyp") navigate(`../capacity`);
    // else navigate(`../othercost`);
  };

  return (
    //  <!-- Content In -->
    <>
      {/* <!-- step-progress-bar  --> */}
      {/* <StepProgressBar eventType={eventType} /> */}
      {loading ? (
        <EventoPackageLoader />
      ) : (
        <>
          {/* <button
            onClick={() => setIsAddServicesPopUpOpen(true)}
            className="btn-primary flex items-center"
          >
            <i className="icon-plus mr-3"></i>
            <span>{intl.formatMessage({ id: "ADD EQUIPMENT" })}</span>&nbsp;
            <svg
              class="w-5 h-5 tooltip"
              data-pr-tooltip={intl.formatMessage({
                id: "ADD EQUIPMENTS THAT YOU PROVIDE",
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
          </button> */}
          <div className="pt-5 space-y-3 flex flex-col justify-between h-[80%]">
            <div className="space-y-2">
              {equipmentList?.map((element) => (
                <EventAddEquipmentsListItem
                  data={element}
                  key={element._id}
                  eventId={eventId}
                  edit={true}
                  setReload={setReload}
                  activeList={activeList}
                  setActiveList={setActiveList}
                />
              ))}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="flex items-center  text-[#9ba6a8]"
                  onClick={clickBackHander}
                >
                  <i className="icon-back-arrow mr-3 "></i>
                  <h3>{intl.formatMessage({ id: "BACK" })}</h3>
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
          </div>

          <Modal isOpen={IsAddEquipmentPopUpOpen}>
            <EventPopUpAddEquipment
              isItem={eventType === "gsb" ? false : true}
              handleClose={setIsAddEquipmentPopUpOpen}
              setReload={setReload}
              edit={false}
            />
          </Modal>
          <ToolTips />
        </>
      )}
    </>
  );
};

export default EventAddEquipments;
