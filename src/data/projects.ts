// src/data/projects.ts
import axios from "axios";
import { IProject } from "../types/project";

export const fetchProjects = async (): Promise<IProject[]> => {
  const res = await axios.get("https://api.wahj.co/api/projects");
  return res.data.results.map((project: any) => ({
    id: project.id,
    title: project.title,
    type: project.type,
    description: project.description,
    image: `${project.image}`, // adjust if your backend serves media differently
  }));
};
