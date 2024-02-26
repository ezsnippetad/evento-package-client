import React, { useState, useRef } from "react";

import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from "react-image-crop";
import { canvasPreview } from "./canvasPreview";
import { useDebounceEffect } from "./useDebounceEffect";
import "react-image-crop/dist/ReactCrop.css";
import { useIntl } from "react-intl";
import { ClipLoader } from "react-spinners";
// import { MoonLoader } from "react-spinners";

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.
function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export default function ImageCropper({ photoChangeHandler, setCropModalOpen, buttonLoader }) {
  const intl = useIntl();
  const [imgSrc, setImgSrc] = useState("");
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const hiddenAnchorRef = useRef(null);
  const blobUrlRef = useRef("");
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [aspect, setAspect] = useState(20 / 9);
  // const [buttonLoader, setButtonLoader] = useState(false)

  function onSelectFile(e) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();

      reader.addEventListener("load", () =>
        setImgSrc(reader.result?.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error("Crop canvas does not exist");
    }

    previewCanvasRef.current.toBlob((blob) => {
      if (!blob) {
        throw new Error("Failed to create blob");
      }
      let croppedPhoto = new File([blob], "about-place-banner", {
        type: "image/jpeg",
      });


      photoChangeHandler({ target: { files: [croppedPhoto] } });

      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
      // blobUrlRef.current = URL.createObjectURL(blob)
      // hiddenAnchorRef.current.href = blobUrlRef.current
      // hiddenAnchorRef.current.click()
    }, "image/jpeg");
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate
        );
      }
    },
    100,
    [completedCrop, scale, rotate]
  );

  // function handleToggleAspectClick() {
  //   if (aspect) {
  //     setAspect(undefined)
  //   } else if (imgRef.current) {
  //     const { width, height } = imgRef.current
  //     setAspect(16 / 9)
  //     setCrop(centerAspectCrop(width, height, 16 / 9))
  //   }
  // }

  return (
    <div className="popup table fixed w-full inset-0 z-40 bg-black bg-opacity-75 h-screen">
      <div className="table-cell align-middle">
        <div className="popin max-w-[40%] w-full mx-auto max-h-[calc(100vh-55px)] overflow-y-auto lg:px-9">
          <div className="bg-brightGray p-12 max-[768px]:p-5">
            <div className="space-y-10">
              <div className="flex justify-between">
                <h1 className="h1">
                  {intl.formatMessage({ id: "PLACE BANNER" })}
                </h1>
                <button
                  onClick={() => {
                    setCropModalOpen(false);
          
                  }}
                  href="#"
                  className="text-xl"
                >
                  <i className="icon-close"></i>
                </button>
              </div>
              <div className="Crop-Controls">
                <div className="upload-holder">
                  {/* <h6 className="text-sm font-bold text-quicksilver">Select Photo <span className="text-10">2 images (up to 3MB/Image)</span></h6> */}
                  <h6 className="text-sm font-bold text-quicksilver">
                    {intl.formatMessage({ id: "SELECT PHOTO" })}{" "}
                    <span className="text-10">
                      ({intl.formatMessage({ id: "UP TO 3MB" })})
                    </span>
                  </h6>
                  <label className="upload upload-popup">
                    <input
                      type="file"
                      accept="image/*"
                      name="images"
                      className="appearance-none hidden"
                      onChange={onSelectFile}
                    />
                    <span className="input-titel mt-1">
                      <i className="icon-image mr-2"></i>
                      {intl.formatMessage({ id: "CHOOSE IMAGES" })}
                    </span>
                  </label>
                  {/* {error ? <span className="mt-1" style={{ color: "red", fontSize: "14px" }}>{errorMessage} </span> : <span className="mt-1" style={{ fontSize: "14px" }}>{image?.name || (image && <a target="blank" href={s3Url + "/" + image}>{intl.formatMessage({ id: "IMAGE LINK" })}</a>)}</span>} */}
                </div>
                {/* <div>
                  <label htmlFor="scale-input">Scale: </label>
                  <input
                    id="scale-input"
                    type=""
                    step="0.1"
                    value={scale}
                    disabled={!imgSrc}
                    onChange={(e) => setScale((e.target.value))}
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="rotate-input">Rotate: </label>
                  <input
                    id="rotate-input"
                    type=""
                    value={rotate}
                    disabled={!imgSrc}
                    onChange={(e) =>
                      setRotate(Math.min(180, Math.max(-180, (e.target.value))))
                    }
                  />
                </div> */}
                {/* <div>
                  <button onClick={handleToggleAspectClick}>
                    Toggle aspect {aspect ? 'off' : 'on'}
                  </button>
                </div> */}
              </div>
              <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 px-2">
                  {!!imgSrc && (
                    <ReactCrop
                      crop={crop}
                      onChange={(_, percentCrop) => setCrop(percentCrop)}
                      onComplete={(c) => setCompletedCrop(c)}
                      aspect={aspect}
                    >
                      <img
                        ref={imgRef}
                        alt="Crop me"
                        src={imgSrc}
                        style={{
                          transform: `scale(${scale}) rotate(${rotate}deg)`,
                        }}
                        onLoad={onImageLoad}
                      />
                    </ReactCrop>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-2">
                  {!!completedCrop && (
                    <>
                      <div>
                        <canvas
                          ref={previewCanvasRef}
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <button
                  onClick={onDownloadCropClick}
                  className="btn-primary w-full uppercase"
                >
                  {buttonLoader ? <span className="flex items-center justify-center space-x-3"><ClipLoader color="white" size={20} /> <p> Loading</p></span> : (
                    intl.formatMessage({ id: "UPLOAD PHOTO" })
                  )}
                </button>
                {/* <a
                      ref={hiddenAnchorRef}
                      download
                      style={{
                        position: 'absolute',
                        top: '-200vh',
                        visibility: 'hidden',
                      }}
                    >
                      Hidden download
                    </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
