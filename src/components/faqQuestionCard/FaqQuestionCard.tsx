import classes from "./FaqQuestionCard.module.css";
import { IFaqQuestion } from "../../types/faqQuestion";
import useRevealOnScroll from "../../hooks/reveal.hook";
const FaqQuestionCard = ({ id, title, answer }: IFaqQuestion) => {
  const faqCard = useRevealOnScroll();

  return (
    <article
      ref={faqCard.ref}
      className={`${classes["faq-card"]} ${
        faqCard.isVisible ? classes["reveal"] : ""
      }`}
    >
      <h3 className={classes["faq-title"]}>
        {id}. {title}
      </h3>
      <p className={classes["faq-answer"]}>{answer}</p>
    </article>
  );
};

export default FaqQuestionCard;
