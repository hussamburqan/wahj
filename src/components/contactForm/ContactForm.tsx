import { useState, FormEvent } from "react";
import classes from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Reset messages
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("https://api.wahj.co/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        setSuccess("Your message was sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      } else {
         await response.json();
        setError("There was an error sending your message. Please try again.");
      }
    } catch {
      setError("There was an error sending your message. Please try again.");
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes["form-group"]}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={classes["form-input"]}
          required
        />
      </div>
      <div className={classes["form-group"]}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={classes["form-input"]}
          required
        />
      </div>
      <div className={classes["form-group"]}>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={classes["form-textarea"]}
          required
        />
      </div>
      {success && <div className="success-message">{success}</div>}
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className={classes["form-button"]}>
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
