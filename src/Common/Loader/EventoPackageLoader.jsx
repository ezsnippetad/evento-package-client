import React from "react";
import Eploader from "../../assest/images/EPLoaderImage.gif";

const EventoPackageLoader = ({ loading, className }) => {
  let updatedProps = { className: "justify-center" };
  if (className) {
    updatedProps.className = className;
  }

  return (
    <>
      <div>
        <div className={`flex  items-center ${updatedProps.className} `}>
          <img
            className="h-40 absolute top-[50%] -translate-y-1/2"
            src={Eploader}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default EventoPackageLoader;
