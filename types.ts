export interface Project {
  id: number;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
}

export interface Metric {
  id: number;
  value: string;
  label: string;
  detail: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export enum SectionId {
  HERO = 'hero',
  IMPACT = 'impact',
  PROJECTS = 'projects',
  QUANTITATIVE = 'quantitative',
  TECH = 'tech',
  TRAJECTORY = 'trajectory',
  CONTACT = 'contact'
}