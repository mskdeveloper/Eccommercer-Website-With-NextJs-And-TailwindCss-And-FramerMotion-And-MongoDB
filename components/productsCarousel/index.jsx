"use client";
import { productsDetails } from "./productDetail";
import { IoChevronBackOutline, IoPricetagsOutline } from "react-icons/io5";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function ProductsCarousel() {
  return (
    <>
      <div className="mt-5 text-2xl px-5 flex items-center container mx-auto">
        <span>
          <IoChevronBackOutline />
        </span>
        <h1>محصولات ویژه</h1>
      </div>
      <div className="bg-blue-500 p-5 rounded-xl m-2 container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper container"
        >
          {productsDetails.map((card) => (
            <SwiperSlide className="flex flex-col bg-white rounded-xl p-5">
              <div>
                <Image alt={card.title} src={card.img} />
              </div>
              <div className="flex flex-col gap-3 px-3">
                <h2 className="text-xl">{card.title}</h2>
                <p>{card.desc}</p>
                <div className="flex justify-end gap-3 items-center">
                  <span className=" text-xl">{card.price}</span>
                  <span className="text-red-500">
                    <IoPricetagsOutline />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
