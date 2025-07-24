import { useEffect, useState } from "react";
import classes from "./HomePage.module.css";

import ServiceCard from "../../components/serviceCard/ServiceCard";
import TestimonialCarousel from "../../components/testimonialCarousel/TestimonialCarousel";
import Footer from "../../components/footer/Footer";
import HeaderRightSide from "../../components/header-right-side/HeaderRightSide";
import ClientsSwiper from "../../components/clientsSwiper/ClientsSwiper";

import { SERVICES } from "../../data/services";
import useRevealOnScroll from "../../hooks/reveal.hook";
import { IClient } from "../../types/client";
import { ITestimonial } from "../../types/testimonials";
import { fetchClients } from "../../data/clients";
import { fetchTestimonials } from "../../data/testimonials";

const HomePage = () => {
  const servicesSection = useRevealOnScroll();
  const clientsSection = useRevealOnScroll();
  const testimonialsSection = useRevealOnScroll();

  const [clients, setClients] = useState<IClient[]>([]);
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);

  useEffect(() => {
    fetchClients()
      .then((data) => setClients(data))
      .catch((err) => console.error("Error fetching clients:", err));

    fetchTestimonials()
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  return (
    <div className={classes["page-container"]}>
      <HeaderRightSide
        title="Where Ideas Ignite into Digital Brilliance."
        subtitle1="Partner with Wahj to build fast, smart, and beautiful tech solutions tailored to your business."
        subtitle2="Explore our services."
        isHorizontalLine={true}
        isContactButton={true}
      />

      {/* Services Section */}
      <section
        ref={servicesSection.ref}
        id="services"
        className={`${classes["services"]} ${
          servicesSection.isVisible ? classes["reveal"] : ""
        }`}
      >
        <h2>Our Services</h2>
        <div className={classes["services-container"]}>
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section
        id="clients"
        ref={clientsSection.ref}
        className={`${classes["clients"]} ${
          clientsSection.isVisible ? classes["reveal"] : ""
        }`}
      >
        <ClientsSwiper clients={clients} />
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={testimonialsSection.ref}
        className={`${classes["testimonials"]} ${
          testimonialsSection.isVisible ? classes["reveal"] : ""
        }`}
      >
        <h2>Testimonials</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
