import TestimonialsSlider from "./TestimonialsSlider";
import type { HomeTestimonial } from "@/types/home";

export default function Testimonials({
  testimonials,
}: {
  testimonials: HomeTestimonial[];
}) {
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

        <TestimonialsSlider testimonials={testimonials} />
      </div>
    </div>
  );
}
