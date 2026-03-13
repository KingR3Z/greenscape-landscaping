export interface CaseStudy {
  id: string;
  client: string;
  metric: string;
  metricValue: number;
  metricSuffix: string;
  description: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Sector {
  id: string;
  name: string;
  description: string;
  benefits: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}
