// src/data/testimonials.ts
import axios from "axios";
import { ITestimonial } from "../types/testimonials";

export const fetchTestimonials = async (): Promise<ITestimonial[]> => {
  const res = await axios.get("https://api.wahj.co/api/testimonials");
  return res.data.results.map((testimonial: any) => ({
    id: testimonial.id,
    name: testimonial.name,
    role: testimonial.role,
    content: testimonial.content,
    image: `${testimonial.image}`, // You can prepend a base URL if needed
  }));
};
