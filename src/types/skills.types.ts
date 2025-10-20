// Skills Section Types

export interface Skill {
  name: string;
  icon: string;
  level?: number; // 1-5 ou 1-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface SkillsData {
  categories: SkillCategory[];
}
