import { useEffect, useState } from "react";
import classes from "./AboutUsPage.module.css";
import Footer from "../../components/footer/Footer";
import TeamMemberCard from "../../components/teamMemberCard/TeamMemberCard";
import HeaderMiddleSide from "../../components/header-middle-side/HeaderMiddleSide";
import useRevealOnScroll from "../../hooks/reveal.hook";
import { WHO_ARE_WE } from "../../data/whoAreWeText";
import { fetchTeamMembers } from "../../data/teamMembers";
import { ITeamMember } from "../../types/teamMember";

const AboutUsPage = () => {
  const ourTeamsection = useRevealOnScroll();
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>([]);

  useEffect(() => {
    fetchTeamMembers()
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Failed to fetch team members", err));
  }, []);

  return (
    <div className={classes["page-container"]}>
      <HeaderMiddleSide
        title="Who We Are"
        subtitle1="Turning code into clarity, and ideas into impact."
        subtitle2=""
        isHorizontalLine={true}
        isContactButton={false}
      />

      <section className={classes["who-are-we"]}>
        {WHO_ARE_WE.map((text) => {
          const revealRef = useRevealOnScroll();
          return (
            <main
              key={text.id}
              ref={revealRef.ref}
              className={`${classes["who-are-we-text"]} ${
                revealRef.isVisible ? classes["reveal"] : ""
              }`}
            >
              <h2>{text.title}</h2>
              <p>{text.description}</p>
            </main>
          );
        })}
      </section>

      <section
        id="our-team"
        ref={ourTeamsection.ref}
        className={`${classes["our-team"]} ${
          ourTeamsection.isVisible ? classes["reveal"] : ""
        }`}
      >
        <div className={classes["our-team-header"]}>
          <h2>Meet Our Team</h2>
          <div className={classes["horizontal-line"]}></div>
          <p>Connect with us now and accelerate your business</p>
          <p>See our services</p>
        </div>
        <div className={classes["team-members"]}>
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} {...member} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
