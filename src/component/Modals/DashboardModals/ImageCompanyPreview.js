import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { s3Url } from "../../../config";
import ImagePreviewMainSlide from "./ImagePreviewMainSlide";

const ImageCompanyPreview = ({ handleClose, data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="fixed inset-0 w-full h-full bg-black flex justify-center items-center z-50">
      <button
        type="button"
        onClick={() => handleClose(false)}
        className="absolute right-10 top-10 z-50 rounded-full text-white text-lg"
      >
        <i className="icon-close"></i>
      </button>
      <div className="relative w-full py-10">
        <div className="swiper-container gallery-top relative flex justify-center items-center">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[Navigation, Thumbs]}
          >
            {data?.map((e, i) => (
              <SwiperSlide key={i}>
                <ImagePreviewMainSlide link={e.url} desc={e.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="swiper-container gallery-thumbs bg-black">
          <Swiper
            centeredSlides={true}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            freeMode={true}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
          >
            {data.map((e, i) => (
              <SwiperSlide key={i}>
                <ImagePreviewMainSlide link={e.url} desc={e.description} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default ImageCompanyPreview;
