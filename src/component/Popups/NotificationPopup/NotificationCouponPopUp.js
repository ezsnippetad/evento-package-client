import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { couponListNotification } from "../../Notification/Events/BillDetails/billDetailsSlice";
import { useIntl } from "react-intl";
import EventoPackageLoader from "../../../Common/Loader/EventoPackageLoader";

const NotificationCouponPopUp = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState([]);
  const intl = useIntl();
  const [loading, setLoading] = useState(true);

  const getCoupomList = async () => {
    try {
      setLoading(true);
      const res = await dispatch(couponListNotification()).unwrap();
      setCoupon(res.data.Data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoupomList();
  }, []);

  return (
    <>
      {loading ? (
        <EventoPackageLoader />
      ) : (
        <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
          <div className="table-cell align-middle">
            <div className="wrapper popin w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto">
              <div className="bg-brightGray p-7 space-y-7">
                <div className="flex justify-between items-center">
                  <h1 className="h1">
                    {intl.formatMessage({ id: "DISCOUNT COUPON" })}
                  </h1>
                  <div className="flex items-center space-x-6 cursor-pointer">
                    <i
                      className="icon-close"
                      onClick={() => handleClose(false)}
                    ></i>
                  </div>
                </div>
                {coupon.length !== 0 ? (
                  coupon.map((val) => (
                    <div
                      key={val?.title}
                      className="bg-white p-[30px] rounded-md"
                    >
                      <div className="flex w-full justify-between items-center">
                        <div className="w-full">
                          <div className="flex justify-between items-center pl-4 max-[600px]:flex-col max-[600px]:pl-0">
                            <h2 className="text-2xl font-bold">{val?.title}</h2>
                            {val?.title && (
                              <button
                                type="button"
                                className="btn-primary whitespace-nowrap uppercase max-[600px]:mt-4"
                              >
                                {intl.formatMessage({ id: "APPLY" })}
                              </button>
                            )}
                          </div>
                          <span class="block border-b-2 border-dashed border-gray-300 my-5"></span>
                          <p className="text-gray-400 text-sm pt-3 font-medium pl-4 max-[600px]:pl-0">
                            {val?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h3>No coupon available</h3>
                )}
                {/* <NotificationLIstItem data={requestObj} /> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCouponPopUp;
