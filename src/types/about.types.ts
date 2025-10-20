// About Section Types

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface AboutData {
  title: string;
  description: string[];
  stats: Stat[];
  highlights: string[];
}
