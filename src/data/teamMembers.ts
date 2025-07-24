import axios from "axios";
import { ITeamMember } from "../types/teamMember";

export const fetchTeamMembers = async (): Promise<ITeamMember[]> => {
  const res = await axios.get("https://api.wahj.co/api/team");
  return res.data.results.map((member: any) => ({
    id: member.id,
    name: member.name,
    role: member.role,
    image: `${member.image}`, // adjust based on your Django media config
  }));
};
