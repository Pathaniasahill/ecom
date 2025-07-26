import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = (e) => {
    setActiveIndex(e.item);
  };

  return (
    <div className='relative px-4 lg:px-8'>
        <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5 border'>
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          ref={carouselRef}
        />
      </div>

      {/* Left Button */}
      {activeIndex!==0 &&<Button
        variant='contained'
        onClick={slidePrev}
        className="z-50"
        sx={{ position: 'absolute', top: "12rem", left: "0rem" }}
        aria-label='previous' color='white'
      >
        <KeyboardArrowLeftIcon />
      </Button>}

      {/* Right Button */}
      {activeIndex < items.length - 5 && (
        <Button
          variant='contained'
          onClick={slideNext}
          className="z-50"
          sx={{ position: 'absolute', top: "12rem", right: "0rem" }}
          aria-label='next' color='white'
        >
          <KeyboardArrowRightIcon />
        </Button>
      )}
    </div>
  );
};

export default HomeSectionCarousel;
