import React, { useRef } from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { testimonials } from "../../data/portfolioData";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Testimonials = () => {
  const sliderRef = useRef(null);

  return (
    <div className="testimonials-container">
      <div className="header-with-arrows">
        <h2>What Clients Say</h2>
        <div className="arrow-buttons">
          <button onClick={() => sliderRef.current.slickPrev()}><FaArrowLeft /></button>
          <button onClick={() => sliderRef.current.slickNext()}><FaArrowRight /></button>
        </div>
      </div>

      <div className="col-md-12">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
            <div key={index}>
              <div className="testimonial-card-wrapper">
                <div className="testimonial-card">
                  <div className="test-card-head">
                    <div className="stars">
                      {Array.from({ length: t.rating }, (_, i) => <FaStar key={i} />)}
                    </div>
                  </div>
                  <p className="testimonial-card-detail">"{t.text}"</p>
                  <p className="author"><span>{t.name}</span> - {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
