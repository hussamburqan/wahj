import Footer from "../../components/footer/Footer";
import classes from "./FaqPage.module.css";
import { FAQ_QUESTIONS } from "../../data/faqQuestions";
import HeaderMiddleSide from "../../components/header-middle-side/HeaderMiddleSide";
import FaqQuestionCard from "../../components/faqQuestionCard/FaqQuestionCard";

const FaqPage = () => {
  return (
    <div className={classes["page-container"]}>
      {/* Header Section */}
      <HeaderMiddleSide
        title="Got Questions? We’re Here To Answer."
        subtitle1="We’ve put together responses to the most common things we get asked — so you’ll know  "
        subtitle2="exactly what to expect before working with us."
        isHorizontalLine={true}
        isContactButton={false}
      />
      {/* FAQ Section */}
      <section className={classes["faq-container"]}>
        {FAQ_QUESTIONS.map((question) => (
          <FaqQuestionCard key={question.id} {...question} />
        ))}
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default FaqPage;
