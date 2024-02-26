import React, { useState, useEffect, useCallback, useRef } from "react";
import { s3Url } from "../../config";
import { useGallery } from "../../Pages/Entertainment/gallerySlice";
import EyeIcon from "../../assest/svg/eye-icon.svg";

// import LightGallery"./styles.css";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-share.css";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgHash from "lightgallery/plugins/hash";
import lgRotate from "lightgallery/plugins/rotate";
import lgShare from "lightgallery/plugins/share";
import { MoonLoader } from "react-spinners";
import Modal from "../../Common/Modals/Modal";
import GalleryComments from "../../component/Popups/DashboardPopup/GalleryComments";
import EventoPackageLoader from "../../Common/Loader/EventoPackageLoader";
import VideoGalleryItem from "./VideoGalleryItem";

const GalleryVideos = ({ loading }) => {
  const galleryPic = useGallery();
  const [gallery, setGallery] = useState([]);
  const [isCommentPopUp, setIsCommentPopUp] = useState(false);
  const [galleryComment, setGalleryComment] = useState([]);
  const videoRef = useRef();

  useEffect(() => {
    setGallery(galleryPic?.filter((video) => video.type === "video"));
  }, [galleryPic]);

  // const onInit = () => { };
  // lightgallery
  // const getItems = useCallback(() => {
  //     return gallery.map((e) => {
  //         const videoSrc = s3Url + "/" + e?.url
  //         const videoUrl = {
  //             source: [
  //                 {
  //                     src: videoSrc,
  //                     type: 'video/mp4',
  //                 },
  //             ],
  //             tracks: [
  //                 {
  //                     src: videoSrc,
  //                     kind: "captions",
  //                     srclang: "en",
  //                     label: "English",
  //                     default: true
  //                 }
  //             ],
  //             attributes:
  //             {
  //                 preload: true,
  //                 playsinline: true,
  //                 controls: true,
  //                 animateThumb: false,
  //                 zoomFromOrigin: true,
  //                 allowMediaOverlap: true,
  //                 toggleThumb: true,
  //                 videojs: true
  //             }

  //         }
  //         return (
  //             <div
  //                 data-lg-size={encodeURI.size}
  //                 data-video={JSON.stringify(videoUrl)}
  //                 className="gallery-preview relative mb-[15px] block cursor-pointer"
  //             >
  //                 <video className="w-full" src={videoSrc} />
  //             </div>
  //         );
  //     });
  // }, [gallery]);

  return (
    <>
      {loading ? (
        <EventoPackageLoader />
      ) : (
        <div className="w-full relative" id="video">
          <div className="container">
            {/* <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgVideo, lgFullscreen, lgHash, lgRotate, lgZoom, lgShare]}
                        >
                            {getItems()}
                        </LightGallery > */}
            {gallery.map((e, i) => (
              <VideoGalleryItem
                e={e}
                setIsCommentPopUp={setIsCommentPopUp}
                setGalleryComment={setGalleryComment}
              />
            ))}
          </div>
        </div>
      )}

      <Modal isOpen={isCommentPopUp}>
        <GalleryComments
          handleClose={setIsCommentPopUp}
          galleryComment={galleryComment}
        />
      </Modal>
    </>
  );
};

export default GalleryVideos;
