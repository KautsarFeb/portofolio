export type Project = {
  id: number;
  name: string;
  category: string;
  tech_stack: string[];
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  objective: string;
  challenges: string;
  solutions: string;
  lessons: string;
  github_url: string;
  demo_url: string;
};

export type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
};

export type Certificate = {
  id: number;
  title: string;
  issuer: string;
  category: string;
  issue_date: string;
  credential_id: string;
  credential_url: string;
  image: string;
  pdf_url: string;
};
