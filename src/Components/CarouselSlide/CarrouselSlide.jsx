import { useState, useEffect } from 'react';
import CarrouselPic from '../CarrouselPic/CarrouselPic'
import {HiChevronLeft,HiChevronRight } from "react-icons/hi"

const images = [
  '/new-york.jpg',
  '/beijing.jpg',
  '/cairo.jpg',
  '/moscow.jpg',
  '/mumbai.jpg',
  '/london.jpg',
  '/paris.jpg',
  '/toronto.jpg',
  '/tokyo.jpg',
  '/rome.jpg',
  '/syndey.jpg',
  '/rio.jpg'
  // Add more image URLs here
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative  flex flex-row">
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={prevSlide}>
       <HiChevronLeft/>
      </button>
      <div className="flex  grid-col-2 overflow-hidden ">
        {/* Mapping through images to create slides */}
        {images.map((image, index) => (
          <CarrouselPic
            key={index}
            image={image}
            currentIndex={currentIndex}
            imageIndex={index}
          />
        ))}
      </div>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={nextSlide}>
        <HiChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
