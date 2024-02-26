import React, { useState } from "react";
import { s3Url } from "../../config";
import {
  FreeMode,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Thumbs,
  Zoom,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SwiperPhotos = ({ photos, handleClose }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div className="fixed inset-0 w-full h-full bg-black z-50">
        <button
          type="button"
          onClick={() => {
            handleClose(false);
            setThumbsSwiper(null);
          }}
          className="absolute right-10 top-10 z-50 rounded-full text-red-500 text-lg"
        >
          <i className="icon-close"></i>
        </button>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
            padding: "50px 0",
          }}
          keyboard={{ enabled: true }}
          spaceBetween={10}
          onSlideChange={(i) => {
            thumbsSwiper.slideTo(i.activeIndex);
            setPhotoIndex(i.activeIndex);
          }}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs, Keyboard, Mousewheel]}
          className="mySwiper2 h-4/5"
          mousewheel={{ enabled: true }}
        >
          {photos.map((items, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <div className="flex justify-center w-full max-w-6xl h-full mx-auto">
                    <div className="flex items-center flex-wrap h-fulll -mx-5">
                      <div
                        className={
                          photos[index].description == "" ||
                          photos[index].description === undefined
                            ? "w-10/12 mx-auto h-full"
                            : "w-full md:w-1/2 p-5"
                        }
                      >
                        <img
                          src={`${s3Url}/${items.url}`}
                          className="w-full h-full"
                          alt=""
                        />
                      </div>
                      <div className="w-full md:w-1/2 p-5">
                        <p className="text-white">{items.description}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <div className="msp ">
          <Swiper
            onSwiper={setThumbsSwiper}
            keyboard={{ enabled: true }}
            slidesPerView={"auto"}
            spaceBetween={0}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper 1/5 "
          >
            {photos.map((values, index) => {
              return (
                <>
                  <SwiperSlide className="">
                    {/* <div className="w-full max-w-6xl mx-auto"> */}
                    {/* <div className=" flex justify-center rounded-md overflow-hidden py-5"> */}
                    <div className="rounded-md overflow-hidden w-28 h-28 bg-black">
                      <img
                        className={`w-full h-full object-cover ${
                          photoIndex !== index && "opacity-50"
                        }`}
                        src={`${s3Url}/${values.url}`}
                        alt=""
                      />
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SwiperPhotos;
