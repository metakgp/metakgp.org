import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/components/Carousel.css"

const Carousel = (props: { children: React.ReactNode[], ref: any, asNavFor: any }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="carousel-container" asNavFor={props.asNavFor} responsive={[{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }]}>
      {props.children}
    </Slider>
  )
}

export default Carousel;
