import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import classes from "./CareersPage.module.css";
import CareerCard from "../../components/careerCard/CareerCard";
import HeaderMiddleSide from "../../components/header-middle-side/HeaderMiddleSide";
import useRevealOnScroll from "../../hooks/reveal.hook";
import { ICareer } from "../../types/career";
import { fetchCareers } from "../../data/careers";

const CareersPage = () => {
  const [careers, setCareers] = useState<ICareer[]>([]);
  const careersSection = useRevealOnScroll();

  useEffect(() => {
    fetchCareers()
      .then((data) => setCareers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={classes["page-container"]}>
      <HeaderMiddleSide
        title="Interested in joining our team?"
        subtitle1="Apply now and grow with us!"
        subtitle2=""
        isHorizontalLine={false}
        subtitleColor="#fbbd08"
        isContactButton={false}
      />

      <section
        ref={careersSection.ref}
        className={`${classes["careers-container"]} ${
          careersSection.isVisible ? classes["reveal"] : ""
        }`}
      >
        {careers.map((career) => (
          <CareerCard key={career.id} {...career} />
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
