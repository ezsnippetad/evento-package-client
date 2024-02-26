import React, { useRef, useState } from "react";
import { s3Url } from "../../config";
import Lightbox from "yet-another-react-lightbox";
import ZoomLightBox from "yet-another-react-lightbox/plugins/zoom";

const LightBoxImagePreview = ({ photoIndex, photos }) => {
  console.log("photos", photos);
  const [imagePreview, setImagePreview] = useState(false);
  const zoomRef = useRef(null);
  return (
    <div>
      <Lightbox
        plugins={[ZoomLightBox]}
        zoom={{
          ref: zoomRef,
        }}
        on={{
          click: () => zoomRef.current?.zoomIn(),
        }}
        open={imagePreview}
        close={() => setImagePreview(false)}
        slides={[
          {
            src: `${s3Url}/${photos[photoIndex].url}`,
            width: 840,
            height: 626,
          },
        ]}
      />
    </div>
  );
};

export default LightBoxImagePreview;
