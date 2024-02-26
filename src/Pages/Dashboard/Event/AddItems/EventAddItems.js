import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../../Common/Modals/Modal";
import EventPopUpAddItems from "../../../../component/Popups/DashboardPopup/EventPopUpAddItems";
import StepProgressBar from "../../StepProgressBar";
import axios from "axios";
import { baseUrl } from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import {
  clickNum,
  decrement,
  increment,
} from "../../../../Common/CommonSlice/stepProgressCountSlice";
import { toast, ToastContainer } from "react-toastify";
import { MoonLoader } from "react-spinners";
import { additemId, listOfAdditem } from "../../eventSlice";
import EventAddItemListItem from "./EventAddItemListItem";
import { useIntl } from "react-intl";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";

const EventAddItems = ({ isAddItemPopUpOpen, setIsAddItemPopUpOpen }) => {
  const displayName = localStorage.getItem("displayName");
  const navigate = useNavigate();
  const params = useParams();
  const intl = useIntl();
  const eventType = params.eventType;
  const eventId = localStorage.getItem("eventId");
  const event_type = localStorage.getItem("event_type");
  const dispatch = useDispatch();
  // const [isAddItemPopUpOpen, setIsAddItemPopUpOpen] = useState(false);
  const [itemList, setItemList] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("Token");

  const getItemList = async () => {
    try {
      const response = await dispatch(listOfAdditem(event_type)).unwrap();
      if (response?.data?.Data) {
        setItemList(response?.data?.Data);
        setLoading(false);
        const responseActive = await dispatch(additemId(eventId)).unwrap();
        if (responseActive?.data?.Data?.items) {
          const temp = responseActive?.data?.Data?.items?.map((e) => {
            return e._id;
          });
          setActiveList(temp);
        }
      }
      if (!response?.data?.IsSuccess) {
        toast.error(`${intl.formatMessage({ id: "ENABLE TO FETCH DATA." })}`);
      }
    } catch (error) {
      // toast.error(`${intl.formatMessage({ id: "SOMETHING WENT WRONG." })}`);
      console.log(error);
    }
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

  useEffect(() => {
    getItemList();
  }, [isAddItemPopUpOpen, reload]);

  const clickNextHandler = () => {
    toast.success(`${intl.formatMessage({ id: "ITEMS SAVED SUCCESSFULLY." })}`);
    goTo(count + 1);
    //   if (eventType === "hyp") navigate(`../capacity`);
    //   else if (eventType === "gsb") navigate(`../addequipments`);
    //   else navigate(`../othercost`);
    // };
  };

  return (
    <>
      {loading ? <EventoPackageLoader /> : undefined}


      <div className="pt-5 space-y-3 flex flex-col justify-between h-[80%]">
        <div className="space-y-2">
          {itemList?.map((element) => (
            <EventAddItemListItem
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
              className="flex items-center text-[#9ba6a8]"
              onClick={clickBackHander}
            >
              <i className="icon-back-arrow mr-3"></i>
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

      <Modal isOpen={isAddItemPopUpOpen}>
        <EventPopUpAddItems
          handleClose={setIsAddItemPopUpOpen}
          setReload={setReload}
          edit={false}
        />
      </Modal>
    </>
  );
};

export default EventAddItems;
