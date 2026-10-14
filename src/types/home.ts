export type HomeSlide = {
  sourceUrl: string;
  altText?: string | null;
};

export type HomeProperty = {
  id: string;
  title: string;
  slug: string;
  featuredImage?: {
    node?: { sourceUrl: string; altText?: string | null } | null;
  } | null;
  propertyDetail?: {
    price?: string | null;
    bedroom?: number | null;
    bathroom?: number | null;
  } | null;
};

export type HomeTestimonial = {
  id: string;
  title: string;
  content: string;
  featuredImage?: {
    node?: { sourceUrl?: string | null; altText?: string | null } | null;
  } | null;
  testimonialDetails?: {
    rating?: number | null;
    designation?: string | null;
  } | null;
};

export type HomeAgent = {
  id: string;
  databaseId: number;
  name: string;
  description: string | null;
  designation: string | null;
  phone: string | null;
  image: { url: string | null; altText: string | null } | null;
  twitter: string | null;
  facebook: string | null;
  linkedin: string | null;
  instagram: string | null;
};

export type HomeResponse = {
  page?: {
    homepage?: {
      slide1?: { node?: HomeSlide | null } | null;
      slide2?: { node?: HomeSlide | null } | null;
      slide3?: { node?: HomeSlide | null } | null;
    } | null;
  } | null;
  properties: { nodes: HomeProperty[] };
  testimonials: { nodes: HomeTestimonial[] };
  agentUsers: HomeAgent[];
};
