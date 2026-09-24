export const GET_PROPERTIES_QUERY = `
  query GetProperties {
    properties(first: 10) {
      nodes {
        id
        title
        slug
        date

        featuredImage {
          node {
            sourceUrl
            altText
          }
        }

        propertyDetail {
          price
          bedroom
          bathroom
        }
      }
    }
  }
`;