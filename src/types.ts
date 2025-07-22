// Définition des types globaux utilisés dans l'application

// Types pour les données de CV
export interface Contact {
  phone: string;
  email: string;
  address: string;
}

export interface Headline {
  title: string;
  subtitle: string;
}

export interface SkillItem {
  icon?: string;
  name: string;
  rating?: string;
  description?: string;
}

export interface SkillGroup {
  groupTitle: string;
  items?: SkillItem[];
}

export interface Formation {
  name: string;
  description: string;
}

export interface Experience {
  title: string;
  employer?: string;
  date?: string;
}

export interface Mission {
  employer: string;
  description: string;
  startDate: string;
  endDate?: string;
}

export interface Hobby {
  title: string;
  descriptions?: string[];
}
