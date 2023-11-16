import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { LinkedlnIcon } from "../../icons";
import Wrapper from "../UI";

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the index to move to the next image
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <>
    <div className={styles.divs}>

       <Wrapper>
      <div className={styles.alls}>

          <div className={styles.flex}>
            <div className={styles.slideshow}>
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <div className={styles.texts}>
              <iframe
                height="415"
                src="https://www.youtube.com/embed/OOtxXPaQvoM?si=toZgLGlAlvoC4eS8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                ></iframe>
            </div>
          </div>
        
      </div>
                </Wrapper>
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
    "https://cdn.karar.com/news/1628113.jpg"
  ];

  return (
    <div className={styles.imagessize}>
      <Slideshow images={imageUrls} />
    </div>
  );
};

export default App;
