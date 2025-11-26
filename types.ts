
export interface Skill {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  backendUrl?: string;
  repoUrl: string;
  tags: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CodingProfile {
  name: string;
  url: string;
  details: string[];
}