// src/data/careers.ts
import axios from "axios";
import { ICareer } from "../types/career";

export const fetchCareers = async (): Promise<ICareer[]> => {
  const res = await axios.get("https://api.wahj.co/api/careers");
  return res.data.results.map((career: any) => ({
    id: career.id,
    title: career.title,
    date: career.date,
    icon: `${career.icon}`,
    status: career.status ? "Active" : "Expired",
  }));
};
