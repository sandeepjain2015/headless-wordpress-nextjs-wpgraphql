export interface Agent {
  id: string;
  name: string;
  description?: string | null;

  agentDetails?: {
    profileImage?: {
      node?: {
        sourceUrl?: string | null;
        altText?: string | null;
      } | null;
    } | null;

    designation?: string | null;
    phone?: string | null;
    twitter?: string | null;
    facebook?: string | null;
    linkedin?: string | null;
    instagram?: string | null;
  } | null;
}

export interface AgentsResponse {
  users: {
    nodes: Agent[];
  };
}