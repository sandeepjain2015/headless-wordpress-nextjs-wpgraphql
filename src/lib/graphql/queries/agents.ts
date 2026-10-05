export const GET_AGENTS = `
  query GetAgents {
    agentUsers {
      id
      databaseId
      name
      description
      designation
      phone

      image{
        url
        altText
      }

      twitter
      facebook
      linkedin
      instagram
    }
  }
`;