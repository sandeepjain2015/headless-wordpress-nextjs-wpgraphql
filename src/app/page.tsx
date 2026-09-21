export default async function Home() {
  const response = await fetch(
    "http://localhost/agra-properties/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetProperties {
            properties {
              nodes {
                title
                slug
              }
            }
          }
        `,
      }),
    }
  );

  const result = await response.json();

  const properties = result.data.properties.nodes;

  return (
    <main>
      {properties.map((property) => (
        <div key={property.slug}>
          <h2>{property.title}</h2>
          <p>{property.price}</p>
        </div>
      ))}
    </main>
  );
}