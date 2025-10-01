import React, { useRef } from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    rating: 5,
    text: "Working with Sarim has been a game-changer for our team. The frontend he built was pixel-perfect, responsive across all devices, and delivered faster than expected. His attention to detail and clean code really stood out.",
    name: "Oliver Clain",
    role: "Product Designer"
  },
  {
    rating: 5,
    text: "Sarim understood our vision instantly and turned it into a beautiful, functional site. He’s super easy to work with and communicates clearly throughout the process. Highly recommended!",
    name: "Lena Martinez",
    role: "Startup Founder"
  },
  {
    rating: 5,
    text: "We hired Sarim for a redesign of our company dashboard. He worked seamlessly with our backend team and brought the UI to life with smooth animations and fast load times. Fantastic experience.",
    name: "James O’Neil",
    role: "Technical Project Manager"
  },
  {
    rating: 5,
    text: "I’ve worked with several developers, but Sarim stands out. He not only writes solid, maintainable code but also thinks like a designer. The final product looked amazing and worked flawlessly.",
    name: "Amina Reza",
    role: "UX Lead"
  },
  {
    rating: 5,
    text: "Sarim delivered exactly what we needed — a clean, modern website for our agency that loads fast and looks sharp on every device. Plus, he provided clear documentation so we can manage updates easily.",
    name: "Ben Carter",
    role: "Creative Agency Owner"
  },
  {
    rating: 5,
    text: "I needed a personal portfolio that would help me land clients, and Sarim nailed it. From layout to performance to SEO, everything was on point. Got compliments on it the same day it launched!",
    name: "Priya Das",
    role: "Freelance Photographer"
  }
];

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="testimonials-container">
      <div className="header-with-arrows">
        <h2>Trusted By 1200+ Clients</h2>
        <div className="arrow-buttons">
          <button onClick={() => sliderRef.current.slickPrev()}>
            <FaArrowLeft />
          </button>
          <button onClick={() => sliderRef.current.slickNext()}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="col-md-12">
        <Slider ref={sliderRef} {...settings}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index}>
              <div className="testimonial-card-wrapper">
                <div className="testimonial-card">
                  <div className="test-card-head">
                    <div className="stars">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="source">
                      {testimonial.source} ↗
                    </div>
                  </div>
                  <p className="testimonial-card-detail">"{testimonial.text}"</p>
                  <p className="author">
                    <span>{testimonial.name}</span> - {testimonial.role}
                  </p>
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
