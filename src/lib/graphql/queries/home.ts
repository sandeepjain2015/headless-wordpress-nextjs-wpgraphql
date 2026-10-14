export const GET_HOME_QUERY = `
  query GetHomePage {
    page(id: "home", idType: URI) {
      homepage {
        slide1 { node { sourceUrl altText } }
        slide2 { node { sourceUrl altText } }
        slide3 { node { sourceUrl altText } }
      }
    }
    properties(first: 10) {
      nodes {
        id
        title
        slug
        featuredImage { node { sourceUrl altText } }
        propertyDetail { price bedroom bathroom }
      }
    }
    testimonials(first: 10) {
      nodes {
        id
        title
        content
        featuredImage { node { sourceUrl altText } }
        testimonialDetails { rating designation }
      }
    }
    agentUsers {
      id
      databaseId
      name
      description
      designation
      phone
      image { url altText }
      twitter
      facebook
      linkedin
      instagram
    }
  }
`;
