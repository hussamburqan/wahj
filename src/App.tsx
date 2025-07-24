import "./App.css";
import { Routes, Route } from "react-router";

// import pages
import HomePage from "./pages/homePage/HomePage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/contactUsPage/ContactUsPage";
import FaqPage from "./pages/faqPage/FaqPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import CareersPage from "./pages/careersPage/CareersPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
