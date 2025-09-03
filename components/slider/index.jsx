"use client";
import React, { useRef, useState } from "react";
import { slides } from "./imageData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide>
              <Image className="rounded-2xl" alt={slide.id} src={slide.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
