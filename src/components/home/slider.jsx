import React, { useEffect, useState } from "react";
import SliderImage from "../../assets/slider-image-1.png";

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleDark");

    const nextSlide = () => {
      setActiveSlide((prevSlide) =>
        prevSlide === 2 ? 0 : prevSlide + 1
      );
    };

    const slideInterval = setInterval(nextSlide, 8000); // Adjust the delay time as needed

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section id="slider">
      <div className="container">
        <div className="row">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slider Item 1 */}
              <div
                className={`carousel-item ${activeSlide === 0 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="row">
                  <div className="col-md-6 center">
                    <div className="content">
                      <h5 className="title">Explore New Horizons</h5>
                      <p className="description">
                        Embark on a journey of discovery with SoftUp.
                      </p>
                      <a className="btn" href="#">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 center">
                    <div className="image">
                      <img
                        src={SliderImage}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Item 2 */}
              <div
                className={`carousel-item ${activeSlide === 1 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="row">
                  <div className="col-md-6 center">
                    <div className="image">
                      <img
                        src={SliderImage}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col-md-6 center">
                    <div className="content">
                      <h5 className="title">Connect and Collaborate</h5>
                      <p className="description">
                        Join our community of innovators and creators.
                      </p>
                      <a className="btn" href="#">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Item 3 */}
              <div
                className={`carousel-item ${activeSlide === 2 ? "active" : ""}`}
                data-bs-interval="10000"
              >
                <div className="row">
                  <div className="col-md-6 center">
                    <div className="content">
                      <h5 className="title">Elevate Your Business</h5>
                      <p className="description">
                        Our solutions are tailored to boost your success.
                      </p>
                      <a className="btn" href="#">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 center">
                    <div className="image">
                      <img
                        src={SliderImage}
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
