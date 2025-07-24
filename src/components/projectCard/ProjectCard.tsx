import classes from "./ProjectCard.module.css";
import { IProject } from "../../types/project";
// export interface IProject {
//     id: number;
//     title: string;
//     type: string;
//     image: string;
//     description: string;
//   }

const ProjectCard = ({ title, type, image }: IProject) => {
  return (
    <div className={classes.card}>
      <img src={image} alt="Team Member" className={classes.image} />
      <div className={classes.info}>
        <h3 className={classes.name}>{title}</h3>
        <p className={classes.role}>{type}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
