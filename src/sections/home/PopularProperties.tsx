import PropertySlider from "@/components/PropertySlider";
import type { HomeProperty } from "@/types/home";

type PopularPropertiesProps = { properties: HomeProperty[] };

export default function PopularProperties({ properties }: PopularPropertiesProps) {

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
