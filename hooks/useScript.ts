import React from "react";

export default function useScript() {
  React.useEffect(() => {
    const script1 = document.createElement("script");
    script1.src =
      "https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js";
    script1.async = false;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js";
    script2.async = false;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);
}
