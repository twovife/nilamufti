"use client";

import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-pager.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgPager from "lightgallery/plugins/pager";
import Image from "next/image";

import galeri1 from "../../public/galeri1.jpg";
import galeri2 from "../../public/galeri2.jpg";

const Photos = () => {
  return (
    <LightGallery
      speed={500}
      plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
      elementClassNames="grid grid-cols-2 gap-x-4 gap-y-6"
      mode="lg-fade"
    >
      <a href={"galeri1.jpg"}>
        <Image
          alt="foto praweding"
          src={galeri1}
          className="object-cover object-center w-full h-56 rounded-lg"
        />
      </a>
      <a href="galeri2.jpg" className="bg-red-200 w-full">
        <Image
          alt="foto praweding"
          src={galeri2}
          className="object-cover object-center w-full h-56 rounded-lg"
        />
      </a>
    </LightGallery>
  );
};

export default Photos;
