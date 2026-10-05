export const GET_TESTIMONIALS = `
  query GetTestimonials {
    testimonials(first: 10) {
      nodes {
        id
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        testimonialDetails {
          rating
          designation
        }
      }
    }
  }
`;