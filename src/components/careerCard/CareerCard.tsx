import classes from "./CareerCard.module.css";
import { ICareer } from "../../types/career";
const CareerCard = ({ title, date, icon, status }: ICareer) => {
  return (
    <div className={classes["career-card"]}>
      <img className={classes["career-icon"]} src={icon} alt={title} />
      <div className={classes["career-details"]}>
        <div className={classes["career-title"]}>
          <h3 className={classes["career-title-text"]}>{title}</h3>
          <span
            className={`${classes["status-label"]}`}
            style={{
              backgroundColor: status === "Active" ? "#4CAF50" : "#f44336",
            }}
          >
            {status}
          </span>
        </div>
        <span className={classes["career-date"]}>{date}</span>
      </div>
      <div className={classes["apply-area"]}>
        {status === "Active" && (
          <button className={classes["apply-button"]}>Apply Now</button>
        )}
      </div>
    </div>
  );
};

export default CareerCard;
