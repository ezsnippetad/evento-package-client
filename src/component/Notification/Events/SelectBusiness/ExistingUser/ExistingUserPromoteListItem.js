import React, { useEffect, useState } from "react";
import userImage from "../../../../../assest/images/user-1.png";
import { useIntl } from "react-intl";
import { useDispatch } from "react-redux";
import { selectUser } from "./ExistingUserPromoteAction";

const ExistingUserPromoteListItem = ({
  title,
  id,
  selectAll,
  setSelectAll,
}) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const notificationId = localStorage.getItem("notificationid");

  const notifySelectedUser = async (e) => {
    if (selectAll) return;
    const singleUserNotification = {
      notificationid: notificationId,
      userid: id,
      selected: e.target.checked,
    };
    return await dispatch(selectUser(singleUserNotification));
  };

  let conditionalProps = {};
  if (selectAll) {
    conditionalProps = { checked: selectAll };
  }

  return (
    <>
      <div className="flex items-center bg-white rounded-md cursor-pointer w-full p-4">
        <label className="checkbox w-8 h-8">
          <input
            type="checkbox"
            {...conditionalProps}
            className="bg-white"
            onChange={notifySelectedUser}
          />
          <i className="icon-right"></i>
        </label>
        <div className="flex items-center ml-5">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-5">
            <img
              src={userImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-base text-japaneseIndigo font-bold">
            {intl.formatMessage({ id: `${title}` })}
            {/* <h4>{title}</h4> */}
          </span>
        </div>
      </div>
    </>
  );
};

export default ExistingUserPromoteListItem;
