import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slickslider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1524,
                settings: {
                  slidesToShow: 8,
                  slidesToScroll: 8,
                  infinite: true,
                  dots: true
                }
              }, {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
    }
    return (

        <>

            <Slider {...settings}>
                <div className=' '>
                    <img alt='...' src={require("../images/car1.webp")}     />
                </div>
                <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                 <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                 <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                 
                <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                 <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                 <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                 <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
                 <div>
                    <img alt='...' src={require("../images/car1.webp")} />
                </div>
            </Slider>


        </>
    )
}

export default Slickslider