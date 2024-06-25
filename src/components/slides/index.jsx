import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { LinkedlnIcon } from "../../icons";
import Wrapper from "../UI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
    
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

  
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className={styles.divs}>
       
          <Swiper
            modules={[Autoplay, Pagination]}
            className={styles.price}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }} 
            autoplay={{ delay: 2000 }}
     
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              0: {
                spaceBetween: 24,
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 24,
                slidesPerView: 1,
              },
              992: {
                spaceBetween: 50,
                slidesPerView: 2,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles.slideshow}>
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
      
      </div>
    </>
  );
};

// Example usage
const App = () => {
  const imageUrls = [
    "https://www.cumhuriyet.com.tr/Archive/2023/11/16/2141707/kapak_151158.jpg",
    "https://www.cumhuriyet.com.tr/Archive/2023/11/16/2141708/kapak_151418.jpg",
    "https://www.cumhuriyet.com.tr/Archive/2023/11/16/2141711/kapak_152121.jpg",
    "https://www.cumhuriyet.com.tr/Archive/2023/11/16/2141711/kapak_152121.jpg",
    "https://www.cumhuriyet.com.tr/Archive/2023/11/16/2141711/kapak_152121.jpg",
    "https://www.cumhuriyet.com.tr/Archive/2023/11/16/2141711/kapak_152121.jpg",
    "https://www.cumhuriyet.com.tr/Archive/2023/11/16/2141711/kapak_152121.jpg",
    "https://cdn.karar.com/news/1628113.jpg",
  ];

  return (
    <div className={styles.imagessize}>
      <Slideshow images={imageUrls} />
    </div>
  );
};

export default App;
