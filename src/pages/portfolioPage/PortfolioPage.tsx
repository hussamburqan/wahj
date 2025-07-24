import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import classes from "./PortfolioPage.module.css";
import HeaderRightSide from "../../components/header-right-side/HeaderRightSide";
import ProjectCard from "../../components/projectCard/ProjectCard";
import useRevealOnScroll from "../../hooks/reveal.hook";

import { IProject } from "../../types/project";
import { fetchProjects } from "../../data/projects";

const PortfolioPage = () => {
  const projectsSection = useRevealOnScroll();
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={classes["page-container"]}>
      <HeaderRightSide
        title="See What We’ve Built — Imagine What We Can Build for You."
        subtitle1="From websites to smart apps, our work speaks for itself.  "
        subtitle2="Check out our projects and picture what we can create for your business next."
        isHorizontalLine={true}
        isContactButton={false}
      />

      <section
        ref={projectsSection.ref}
        className={`${classes["projects"]} ${
          projectsSection.isVisible ? classes["reveal"] : ""
        }`}
      >
        <div className={classes["projects-container"]}>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
