import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../../Common/Modals/Modal";
import EventPopUpAddService from "../../../../component/Popups/DashboardPopup/EventPopUpAddService";
import EventAddServicesListItem from "./EventAddServiceListItem";
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
  selectServiceGet,
  servicesList,
  useSelectServices,
} from "./addServiceSlice";
import { useIntl } from "react-intl";
import EventoPackageLoader from "../../../../Common/Loader/EventoPackageLoader";

const EventAddServices = ({
  setIsAddServicesPopUpOpen,
  isAddServicesPopUpOpen,
}) => {
  const intl = useIntl();
  const selectServices = useSelectServices();
  const displayName = localStorage.getItem("displayName");
  const navigate = useNavigate();
  const params = useParams();
  const eventType = params.eventType;
  const eventId = localStorage.getItem("eventId");
  const event_type = localStorage.getItem("event_type");
  const dispatch = useDispatch();
  // const [isAddServicesPopUpOpen, setIsAddServicesPopUpOpen] = useState(false);
  const [serviceList, setServiceList] = useState([]);
  const [activeList, setActiveList] = useState([]);
  const [reload, setReload] = useState(false);
  const [loading, setLoading] = useState(true);
  const count = useSelector((state) => state?.stepProgressCount?.count);

  const getServiceList = async () => {
    try {
      const response = await dispatch(servicesList(event_type)).unwrap();
      if (response?.data?.Data) {
        setServiceList(response?.data?.Data);
        setLoading(false);
        await dispatch(selectServiceGet(eventId)).unwrap();
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
    let temp = selectServices?.services?.map((e) => {
      return e._id;
    });
    setActiveList(temp);
  }, [selectServices]);

  useEffect(() => {
    getServiceList();
  }, [reload]);

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
    goTo(count + 1);
    toast.success("Services saved Successfully.");
    // dispatch(increment());
    if (eventType === "hyp") navigate("../personaldetails");
    else if (eventType === "gsb") navigate(`../addequipments`);
    else navigate(`../othercost`);
  };

  return (
    <>

      {/* <!-- step-progress-bar  --> */}
      {/* <StepProgressBar eventType={eventType} /> */}
      {
        loading ? (
          <EventoPackageLoader />
        ) : (
          <React.Fragment>
            <div className="pt-5 flex flex-col justify-between h-[80%] space-y-2">
              <div className="">
                {serviceList?.map((element) => (
                  <>
                    <div className="my-2">
                      <EventAddServicesListItem
                        data={element}
                        key={element._id}
                        eventId={eventId}
                        edit={true}
                        setReload={setReload}
                        activeList={activeList}
                        setActiveList={setActiveList}
                      />
                    </div>
                  </>
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
          </React.Fragment>
        )
      }
      <Modal isOpen={isAddServicesPopUpOpen}>
        <EventPopUpAddService
          handleClose={setIsAddServicesPopUpOpen}
          setReload={setReload}
          edit={false}
        />
      </Modal>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default EventAddServices;
