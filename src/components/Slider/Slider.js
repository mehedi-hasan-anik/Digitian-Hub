import './Slider.css';
import Photo1 from '../Image/pexels-anna-guerrero-2998998.jpg';
import Photo2 from '../Image/pexels-artem-beliaikin-1485637.jpg';
import Photo3 from '../Image/pexels-burst-374906.jpg';
import Photo4 from '../Image/pexels-day-one-photo-1178758.jpg';
import Photo5 from '../Image/pexels-griffin-wooldridge-4078308.jpg';
import Photo6 from '../Image/pexels-helena-lopes-3292065.jpg';
import Photo7 from '../Image/pexels-iresha-ratnayake-4084988.jpg';
import Photo8 from '../Image/pexels-magda-ehlers-1586948.jpg';
import Photo9 from '../Image/pexels-marcelo-moreira-2125049.jpg';
import Photo10 from '../Image/pexels-mariana-blue-1188395.jpg';

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"

// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  Navigation,Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);


const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        < div >
    
        <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
        <SwiperSlide><img src={Photo2} /></SwiperSlide><SwiperSlide><img src={Photo10} /></SwiperSlide><SwiperSlide><img src={Photo3} /></SwiperSlide><SwiperSlide><img src={Photo4} /></SwiperSlide><SwiperSlide><img src={Photo5} /></SwiperSlide><SwiperSlide><img src={Photo6} /></SwiperSlide><SwiperSlide><img src={Photo7} /></SwiperSlide><SwiperSlide><img src={Photo8} /></SwiperSlide><SwiperSlide><img src={Photo9} /></SwiperSlide><SwiperSlide><img src={Photo1} /></SwiperSlide>
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
        <SwiperSlide><img src={Photo2} /></SwiperSlide><SwiperSlide><img src={Photo10} /></SwiperSlide><SwiperSlide><img src={Photo3} /></SwiperSlide><SwiperSlide><img src={Photo4} /></SwiperSlide><SwiperSlide><img src={Photo5} /></SwiperSlide><SwiperSlide><img src={Photo6} /></SwiperSlide><SwiperSlide><img src={Photo7} /></SwiperSlide><SwiperSlide><img src={Photo8} /></SwiperSlide><SwiperSlide><img src={Photo9} /></SwiperSlide><SwiperSlide><img src={Photo1} /></SwiperSlide>
        </Swiper>
          </div>


    );
};

export default Slider;