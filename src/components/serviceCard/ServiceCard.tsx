import classes from "./ServiceCard.module.css";
import { IService } from "../../types/service";

const ServiceCard = ({ title, iconPath, description }: IService) => {
  return (
    <div className={classes["card"]}>
      <img
        src={iconPath}
        alt={`Icon for ${title}`}
        className={classes["card-icon"]}
      />
      <h3 className={classes["card-title"]}>{title}</h3>
      <div className={classes["card-description"]}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
