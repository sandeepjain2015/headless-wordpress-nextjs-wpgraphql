const WORDPRESS_GRAPHQL_URL =
  process.env.WORDPRESS_GRAPHQL_URL;

if (!WORDPRESS_GRAPHQL_URL) {
  throw new Error("WORDPRESS_GRAPHQL_URL is not defined");
}

type GraphQLResponse<T> = {
  data?: T;
  errors?: {
    message: string;
  }[];
};

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const response = await fetch(WORDPRESS_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `GraphQL request failed: ${response.status} ${response.statusText}`
    );
  }

  const result: GraphQLResponse<T> = await response.json();

  if (result.errors?.length) {
    console.error("GraphQL Errors:", result.errors);

    throw new Error(result.errors[0].message);
  }

  if (!result.data) {
    throw new Error("No data returned from GraphQL");
  }

  return result.data;
}