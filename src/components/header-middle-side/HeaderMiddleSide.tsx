import { NavLink } from "react-router";
import Navbar from "../navbar/Navbar";
import classes from "./HeaderMiddleSide.module.css";
import { CaretRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface IProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  isHorizontalLine: boolean;
  subtitleColor?: string;
  isContactButton: boolean; // Note: This prop isn't used in current logic
}

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

const HeaderMiddleSide = ({
  title,
  subtitle1,
  subtitle2,
  isHorizontalLine,
  subtitleColor,
}: IProps) => {
  const windowWidth = useWindowWidth();

  return (
    <div className={classes["header"]}>
      <div className={classes["masked-header"]}>
        <div className={classes["header-text"]}>
          <h1>{title}</h1>
          {isHorizontalLine && (
            <div className={classes["horizontal-line"]}></div>
          )}
          <p style={subtitleColor ? { color: subtitleColor } : undefined}>
            {subtitle1}
          </p>
          <p>{subtitle2}</p>
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
  );
};

export default HeaderMiddleSide;
