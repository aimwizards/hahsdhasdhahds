export interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
  howItWorks: string[];
  expectedResults: string[];
}

export interface AfterCareCard {
  title: string;
  instructions: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
  };
}

export interface SocialLinks {
  instagram?: string;
  facebook?: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  location: string;
  foundedYear: number;
}

export interface ResultImage {
  id: string;
  beforeImage: string;
  afterImage: string;
  treatment: string;
  title: string;
  description: string;
  featured?: boolean;
}