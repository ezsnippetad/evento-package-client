import React from "react";
import { s3Url } from "../../config";
import { useRef } from "react";
import EyeIcon from "../../assest/svg/eye-icon.svg";
import { useCallback } from "react";

const VideoGalleryItem = ({ e, setGalleryComment, setIsCommentPopUp }) => {
  const videoref = useRef();

  const handleMouseEnter = useCallback(() => {
    videoref.current.play();
  }, []);
  const handleMouseLeave = useCallback(() => {
    videoref.current.pause();
  }, []);

  return (
    <div
      className="relative group cursor-pointer mb-3 overflow-hidden"
      key={e.i}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={() => {
        setIsCommentPopUp(true);
        setGalleryComment(e);
      }}
    >
      <video
        muted
        ref={videoref}
        className="relative w-full h-auto object-contain object-center rounded-md"
        src={`${s3Url + "/" + e?.url}#t=1`}
        type="video/mp4"
      />
      <img
        src={EyeIcon}
        alt="Eye icon"
        className="block absolute top-1/2 left-1/2 -translate-x-1/2 group-hover:-translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 group-hover:scale-125 anim"
      />
      <span className="icon-video-reals text-lg block absolute bottom-3 right-3 text-white bg-spiroDiscoBall rounded-md p-1.5"></span>
      <span className="box absolute inset-0 block w-full h-full group-hover:bg-[#000000] group-hover:opacity-50 anim"></span>
    </div>
  );
};

export default VideoGalleryItem;
