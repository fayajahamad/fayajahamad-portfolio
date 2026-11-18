/** User-provided roles and dates. Responsibilities and outcomes have not been supplied. */
export type WorkExperience = {
  organization: string;
  role: string;
  type: string;
  period: string;
  note: string;
};

export type CampusInvolvement = {
  organization: string;
  role: string;
  note: string;
};

export const workExperience = [
  {
    organization: "Medifit Pharmacy",
    role: "Part-time role",
    type: "Part-time",
    period: "Jan 2023 – Present",
    note: "Ongoing part-time work alongside university studies.",
  },
  {
    organization: "We Are Team Rocket",
    role: "Data Entry",
    type: "Contract",
    period: "Nov 2025 – Feb 2026",
    note: "Contract-based data entry role.",
  },
] as const satisfies readonly WorkExperience[];

export const campusInvolvement = [
  {
    organization: "NSBM Islamic Society",
    role: "Faculty of Computing Coordinator",
    note: "University society involvement.",
  },
  {
    organization: "NSBM NForce Club",
    role: "Member",
    note: "University club involvement.",
  },
] as const satisfies readonly CampusInvolvement[];
