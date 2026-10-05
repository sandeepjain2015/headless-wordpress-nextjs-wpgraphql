import { fetchGraphQL } from "@/lib/graphql/client";
import TestimonialsSlider from "./TestimonialsSlider";
import { GET_TESTIMONIALS } from "@/lib/graphql/queries/testimonials";


interface TestimonialsResponse {
  testimonials: {
    nodes: Testimonial[];
  };
}

export default async function Testimonials() {
  const data = await fetchGraphQL<TestimonialsResponse>(
    GET_TESTIMONIALS
  );

  return (
    <div className="section sec-testimonials">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
              Customer Says
            </h2>
          </div>

          <div className="col-md-6 text-md-end">
            <div id="testimonial-nav">
              <span className="prev testimonial-prev">
                Prev
              </span>

              <span className="next testimonial-next">
                Next
              </span>
            </div>
          </div>
        </div>

        <TestimonialsSlider
          testimonials={data.testimonials.nodes}
        />
      </div>
    </div>
  );
}