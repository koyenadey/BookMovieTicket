import React, {useState,useEffect,FC} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import { sliderData } from './Slider-Data';
import './slider1.scss'; 

const MainSlider:FC = () =>{
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideLength:number = sliderData.length;
    let slideInterval: string | number | NodeJS.Timeout | undefined;
    const autoscroll:boolean = true;
    useEffect(()=>{
        if(autoscroll)
            auto();
        return () => clearInterval(slideInterval);
    },[currentSlide]);

    function auto():void
    {
        slideInterval = setInterval(handleNext,4000)
    }

    const handleNext = () =>{
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }

    const handlePrev = () =>{
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    }

    return (
    <div style={{marginBottom:'20px'}}>
        <IoIosArrowForward className='arrow right' onClick={handleNext} />
        <IoIosArrowBack className='arrow left' onClick={handlePrev} />
        <div className='slider'>
            {sliderData.map((slide,index)=>{
                return(
                    <div key={index} className={index === currentSlide? 'slide current':'slide'}>
                        <img src={slide.image} alt={slide.imageName} />
                    </div>
                );
            })}
        </div>
    </div>
    );
}

export default MainSlider;