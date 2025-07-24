import classes from "./TestimonialCarousel.module.css";
import { ITestimonial } from "../../types/testimonials";
import { useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface IProps {
  testimonials: ITestimonial[];
}

const TestimonialCarousel = ({ testimonials }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen width on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate items per view based on screen size
  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // const goToIndex = (index: number) => {
  //   setCurrentIndex(index);
  // };

  // Get current testimonials based on itemsPerView
  const startIndex = currentIndex * itemsPerView;
  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerView
  );

  return (
    <div className={classes["carousel-wrapper"]}>
      <div className={classes["carousel-container"]}>
        <button
          className={`${classes["carousel-button"]} ${classes["prev"]}`}
          onClick={prev}
        >
          <CaretLeft weight="bold" />
        </button>
        <div className={classes["carousel-content"]}>
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={classes["testimonial-card"]}>
              <div className={classes["testimonial-header"]}>
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={classes["testimonial-image"]}
                  />
                )}
                <div className={classes["testimonial-info"]}>
                  <h3 className={classes["name"]}>{testimonial.name}</h3>
                  <p className={classes["role"]}>{testimonial.role}</p>
                </div>
              </div>
              <p className={classes["content"]}>"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        <button
          className={`${classes["carousel-button"]} ${classes["next"]}`}
          onClick={next}
        >
          <CaretRight weight="bold" />
        </button>
      </div>
      {/* <div className={classes["carousel-navigation"]}>
        <div className={classes["carousel-dots"]}>
          {Array.from({
            length: Math.ceil(testimonials.length / itemsPerView),
          }).map((_, index) => (
            <span
              key={index}
              className={`${classes["dot"]} ${
                index === currentIndex ? classes["active"] : ""
              }`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default TestimonialCarousel;
