import { CaretRight } from "@phosphor-icons/react";
import Navbar from "../../components/navbar/Navbar";
import classes from "./ContactUsPage.module.css";
import { NavLink } from "react-router";
import Footer from "../../components/footer/Footer";
import ContactForm from "../../components/contactForm/ContactForm";
import { useEffect, useState } from "react";
import useRevealOnScroll from "../../hooks/reveal.hook";
// Custom hook to track window width

const useWindowWidth = () => {
  // Changed name to be more specific
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const ContactUsPage = () => {
  const contactForm = useRevealOnScroll();

  const windowWidth = useWindowWidth();
  return (
    <div className={classes["page-container"]}>
      <div className={classes["header"]}>
        <div className={classes["masked-header"]}>
          <div className={classes["header-text"]}>
            <h1>
              Let’s <span>Build</span> Something
              <h1>Great Together</h1>
            </h1>
            <div className={classes["horizontal-line"]}></div>
            <p>
              Have an idea, a question, or just want to say hi? Fill out the
              form and
            </p>
            <p>we’ll get back to you as soon as possible.</p>
          </div>
          <img
            className={classes["background"]}
            src="/wahj-company-website/assets/Laptop.webp"
            alt="Background"
          />
        </div>
        <img
          className={classes["sun"]}
          src="/wahj-company-website/assets/sun.svg"
          alt="sun"
        />
        <div className={classes["logo-container"]}>
          <NavLink to="/" className={classes["logo-link"]}>
            <img
              src="/wahj-company-website/assets/wahj-logo.svg"
              alt="Wahj Logo"
              className={classes["logo"]}
            />
            <span className={classes["logo-text"]}>Wahj</span>
          </NavLink>
        </div>
        <Navbar />
        {windowWidth > 992 && (
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `${classes["contact-link"]} ${isActive ? "active" : ""}`
            }
          >
            <button className={classes["contact-button"]}>
              <span className={classes["contact-icon"]}>
                <CaretRight weight="bold" />
              </span>
              <span className={classes["contact-text"]}>Contact Us</span>
            </button>
          </NavLink>
        )}
      </div>

      {/* Contact Form Section */}
      <main
        ref={contactForm.ref}
        className={`${classes["contact-form-container"]} ${
          contactForm.isVisible ? classes["reveal"] : ""
        }`}
      >
        <ContactForm />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
