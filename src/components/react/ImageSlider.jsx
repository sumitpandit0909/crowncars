import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const ImageSlider = ({ images = [] }) => {
  useEffect(() => {
    // Ensure Swiper JS is loaded
    if (typeof window !== "undefined" && window.Swiper) {
      console.log("Swiper JS is available");
    } else {
      console.warn("Swiper JS not detected");
    }
  }, []);

  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  console.log("ImageSlider images:", images); // Debug logging

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
      className="swiper-container"
      style={{
        height: "150px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Car ${index + 1}`}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
