import { fetchGraphQL } from "@/lib/graphql/client";
import { GET_PROPERTIES_QUERY } from "@/lib/graphql/queries/properties";
import PropertySlider from "@/components/PropertySlider";

type Property = {
  id: string;
  title: string;
  slug: string;

  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText?: string;
    } | null;
  } | null;

  propertyDetail?: {
    price?: string | null;
    bedroom?: number | null;
    bathroom?: number | null;
  } | null;
};

type PropertiesData = {
  properties: {
    nodes: Property[];
  };
};

export default async function PopularProperties() {
  const data = await fetchGraphQL<PropertiesData>(
    GET_PROPERTIES_QUERY
  );

  const properties = data.properties.nodes;

  return (
    <section className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold heading text-primary mb-0">
              Popular Properties
            </h2>
          </div>

          <div className="col-lg-6 text-lg-end">
            <p>
              <a
                href="/properties"
                className="btn btn-primary text-white py-3 px-4"
              >
                View all properties
              </a>
            </p>
          </div>
        </div>

        <PropertySlider properties={properties} />
      </div>
    </section>
  );
}