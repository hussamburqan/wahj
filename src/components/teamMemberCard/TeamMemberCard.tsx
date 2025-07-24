import classes from "./TeamMemberCard.module.css";
import { ITeamMember } from "../../types/teamMember";
const TeamMemberCard = ({ name, role, image }: ITeamMember) => {
  return (
    <div className={classes.card}>
      <img src={image} alt="Team Member" className={classes.image} />
      <div className={classes.info}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.role}>{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
