import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Owlslider = () => {

  
    const options = {
        // items: 1,
        nav: true,
        navText:["Back","next"],
        // rewind: true,
        // autoplay: true,
        // slideBy: 1,
        dots: false,
        // dotsEach: true,
        // dotData: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:5
            },
            1000:{
                items:8
            },
            1200:{
                items:8
            }
        }

      };
  return (
    <>
    {/* // className "owl-theme" is optional */}
<OwlCarousel className='owl-theme'  {...options} >
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div> 
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div> <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div> <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
    <div class='item'>
         <img alt='...' src={ require("../images/car1.webp")} />
    </div>
</OwlCarousel>;
    </>
  )
}

export default Owlslider