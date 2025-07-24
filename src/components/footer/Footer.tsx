import { NavLink, useLocation } from "react-router";
import classes from "./Footer.module.css";
import {
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import useRevealOnScroll from "../../hooks/reveal.hook";
import { useEffect } from "react";

const Footer = () => {
  const footerSection = useRevealOnScroll();
  const location = useLocation();

  // Add this effect to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Only run when the path changes
  // Add this function to handle scroll to section after navigation
  const handleSectionNavigation = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <footer
      ref={footerSection.ref}
      className={`${classes["footer"]} ${
        footerSection.isVisible ? classes["reveal"] : ""
      }`}
    >
      <div className={classes["upper-section"]}>
        <p>want to improve your business?</p>
        <NavLink to="/contact-us" className={classes["contact-link"]}>
          <button className={classes["contact-button"]}>
            <span className={classes["contact-icon"]}>
              <CaretRight weight="bold" />
            </span>
            <span className={classes["contact-text"]}>Contact Us</span>
          </button>
        </NavLink>
      </div>
      <div className={classes["middle-section"]}>
        <div className={classes["left"]}>
          <p>Follow us on social media</p>
          <div className={classes["social-media-links"]}>
            <a
              className={classes["social-media-link"]}
              href="https://www.instagram.com/wahjco/?utm_source=ig_web_button_share_sheet"
              target="_blank"
            >
              <InstagramLogo />
            </a>
            <a
              className={classes["social-media-link"]}
              href="
            https://www.linkedin.com/company/wahjco/"
              target="_blank"
            >
              <LinkedinLogo />
            </a>
            <a
              className={classes["social-media-link"]}
              href="https://www.facebook.com/share/1J2CBF8fYK/"
              target="_blank"
            >
              <FacebookLogo />
            </a>
            <a
              className={classes["social-media-link"]}
              href="https://www.tiktok.com/@wahjco?_t=ZS-8vEIJXk2Qc6&_r=1"
              target="_blank"
            >
              <TiktokLogo />
            </a>
          </div>
        </div>
        <div className={classes["right"]}>
          <div className={classes["lists"]}>
            <div className={classes["list-container"]}>
              <h3 className={classes["list-title"]}>Navigate</h3>
              <ul className={classes["list"]}>
                <li>
                  <NavLink to="/" className={classes["link"]}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio" className={classes["link"]}>
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/careers" className={classes["link"]}>
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className={classes["link"]}>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className={classes["link"]}>
                    FAQ
                  </NavLink>
                </li>
                {/* <li>Careers</li>
                <li>About Us</li>
                <li>FAQ</li> */}
              </ul>
            </div>
            <div className={classes["list-container"]}>
              <h3 className={classes["list-title"]}>Home</h3>
              <ul className={classes["list"]}>
                <li>
                  {/* <a href="#services">Our Services </a> */}
                  <NavLink
                    to="/#services"
                    onClick={() => handleSectionNavigation("services")}
                  >
                    Our Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#clients"
                    onClick={() => handleSectionNavigation("clients")}
                  >
                    Our Clients
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/#testimonials"
                    onClick={() => handleSectionNavigation("testimonials")}
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us#our-team"
                    onClick={() => handleSectionNavigation("our-team")}
                  >
                    Our Team
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["lower-section"]}>
        <div className={classes["left"]}>
          <img src="/wahj-company-website/assets/wahj-logo.svg" alt="" />
          <p>Wahj</p>
        </div>
        <div className={classes["right"]}>
          <p>Copyrights © 2025 Wahj</p>
          {/* <p>Cookies</p>
          <p>Privacy Policy</p>
          <p>Terms of use</p> */}
        </div>
      </div>
      <img
        className={classes["background"]}
        src="/wahj-company-website/assets/footer-background-logo.webp"
        alt="Background"
      />
    </footer>
  );
};

export default Footer;
