import React from "react";
import { useIntl } from "react-intl";
import { useProfileDetails } from "../../../Pages/Profile/profileSlice";
import { downloadImage } from "../../../shared/helper";

function QRModal({ handleClose }) {
  const intl = useIntl();
  const profileData = useProfileDetails();

  return (
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-2xl w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-7 space-y-7">
            <div className="flex justify-between items-center max-[640px]:items-start max-[640px]:flex-col">
              <div className="flex items-center justify-start">
                <h1 className="h1 pl-5">
                  {intl.formatMessage({ id: "SCAN QR CODE" })}
                </h1>
              </div>
              <div className="flex items-center space-x-6 max-[640px]:justify-between max-[640px]:space-x-20">
                <button
                  onClick={() => handleClose(false)}
                  href="#"
                  className="text-xl max-[640px]:pl-6"
                >
                  <i className="icon-close"></i>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center m-8">
              <h3 className="m-4">{profileData.name}</h3>
              <img
                className="h-[300px] w-[300px]"
                src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${profileData._id}`}
              />
              <span className="input-titel capitalize m-4">
                {intl.formatMessage({ id: "SCAN THIS CODE TO PAY ME" })}
              </span>
              <button
                className="btn-primary btn-create"
                onClick={() =>
                  downloadImage(
                    `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${profileData._id}`,
                    `${profileData.name}-QR-Code.png`,
                  )
                }
              >
                {intl.formatMessage({ id: "DOWNLOAD QR" })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRModal;
