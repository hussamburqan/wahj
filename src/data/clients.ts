// src/data/clients.ts
import axios from "axios";
import { IClient } from "../types/client";

export const fetchClients = async (): Promise<IClient[]> => {
  const res = await axios.get("https://api.wahj.co/api/clients");
  return res.data.results.map((client: any) => ({
    id: client.id,
    name: client.name,
    logo: `${client.logo}`,
    website: client.website,
  }));
};
