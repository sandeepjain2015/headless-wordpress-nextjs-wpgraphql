import Hero from "@/sections/home/Hero";
import PopularProperties from "@/sections/home/PopularProperties";

export default async function Home() {
  return (
    <>
 <Hero slug="home" />
 <PopularProperties /> 
  <section className="features-1">
    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={300}>
          <div className="box-feature">
            <span className="flaticon-house" />
            <h3 className="mb-3">Our Properties</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, accusamus.
            </p>
            <p>
              <a href="#" className="learn-more">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={500}>
          <div className="box-feature">
            <span className="flaticon-building" />
            <h3 className="mb-3">Property for Sale</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, accusamus.
            </p>
            <p>
              <a href="#" className="learn-more">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={400}>
          <div className="box-feature">
            <span className="flaticon-house-3" />
            <h3 className="mb-3">Real Estate Agent</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, accusamus.
            </p>
            <p>
              <a href="#" className="learn-more">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay={600}>
          <div className="box-feature">
            <span className="flaticon-house-1" />
            <h3 className="mb-3">House for Sale</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptates, accusamus.
            </p>
            <p>
              <a href="#" className="learn-more">
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
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
            <span className="prev" data-controls="prev">
              Prev
            </span>
            <span className="next" data-controls="next">
              Next
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4" />
      </div>
      <div className="testimonial-slider-wrap">
        <div className="testimonial-slider">
          <div className="item">
            <div className="testimonial">
              <img
                src="images/person_1-min.jpg"
                alt="Image"
                className="img-fluid rounded-circle w-25 mb-4"
              />
              <div className="rate">
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
              </div>
              <h3 className="h5 text-primary mb-4">James Smith</h3>
              <blockquote>
                <p>
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
              </blockquote>
              <p className="text-black-50">Designer, Co-founder</p>
            </div>
          </div>
          <div className="item">
            <div className="testimonial">
              <img
                src="images/person_2-min.jpg"
                alt="Image"
                className="img-fluid rounded-circle w-25 mb-4"
              />
              <div className="rate">
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
              </div>
              <h3 className="h5 text-primary mb-4">Mike Houston</h3>
              <blockquote>
                <p>
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
              </blockquote>
              <p className="text-black-50">Designer, Co-founder</p>
            </div>
          </div>
          <div className="item">
            <div className="testimonial">
              <img
                src="images/person_3-min.jpg"
                alt="Image"
                className="img-fluid rounded-circle w-25 mb-4"
              />
              <div className="rate">
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
              </div>
              <h3 className="h5 text-primary mb-4">Cameron Webster</h3>
              <blockquote>
                <p>
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
              </blockquote>
              <p className="text-black-50">Designer, Co-founder</p>
            </div>
          </div>
          <div className="item">
            <div className="testimonial">
              <img
                src="images/person_4-min.jpg"
                alt="Image"
                className="img-fluid rounded-circle w-25 mb-4"
              />
              <div className="rate">
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
                <span className="icon-star text-warning" />
              </div>
              <h3 className="h5 text-primary mb-4">Dave Smith</h3>
              <blockquote>
                <p>
                  “Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.”
                </p>
              </blockquote>
              <p className="text-black-50">Designer, Co-founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section section-4 bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-5">
          <h2 className="font-weight-bold heading text-primary mb-4">
            Let's find home that's perfect for you
          </h2>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit.
          </p>
        </div>
      </div>
      <div className="row justify-content-between mb-5">
        <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
          <div className="img-about dots">
            <img src="images/hero_bg_3.jpg" alt="Image" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-home2" />
            </span>
            <div className="feature-text">
              <h3 className="heading">2M Properties</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-person" />
            </span>
            <div className="feature-text">
              <h3 className="heading">Top Rated Agents</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
          <div className="d-flex feature-h">
            <span className="wrap-icon me-3">
              <span className="icon-security" />
            </span>
            <div className="feature-text">
              <h3 className="heading">Legit Properties</h3>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                iste.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row section-counter mt-5">
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">3298</span>
            </span>
            <span className="caption text-black-50"># of Buy Properties</span>
          </div>
        </div>
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">2181</span>
            </span>
            <span className="caption text-black-50"># of Sell Properties</span>
          </div>
        </div>
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">9316</span>
            </span>
            <span className="caption text-black-50"># of All Properties</span>
          </div>
        </div>
        <div
          className="col-6 col-sm-6 col-md-6 col-lg-3"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="counter-wrap mb-5 mb-lg-0">
            <span className="number">
              <span className="countup text-primary">7191</span>
            </span>
            <span className="caption text-black-50"># of Agents</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="row justify-content-center footer-cta" data-aos="fade-up">
      <div className="col-lg-7 mx-auto text-center">
        <h2 className="mb-4">Be a part of our growing real state agents</h2>
        <p>
          <a
            href="#"
            target="_blank"
            className="btn btn-primary text-white py-3 px-4"
          >
            Apply for Real Estate agent
          </a>
        </p>
      </div>
      {/* /.col-lg-7 */}
    </div>
    {/* /.row */}
  </div>
  <div className="section section-5 bg-light">
    <div className="container">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-6 mb-5">
          <h2 className="font-weight-bold heading text-primary mb-4">
            Our Agents
          </h2>
          <p className="text-black-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit totam?
            Quod maiores.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="h-100 person">
            <img
              src="images/person_1-min.jpg"
              alt="Image"
              className="img-fluid"
            />
            <div className="person-contents">
              <h2 className="mb-0">
                <a href="#">James Doe</a>
              </h2>
              <span className="meta d-block mb-3">Real Estate Agent</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                officiis inventore cumque tenetur laboriosam, minus culpa
                doloremque odio, neque molestias?
              </p>
              <ul className="social list-unstyled list-inline dark-hover">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="h-100 person">
            <img
              src="images/person_2-min.jpg"
              alt="Image"
              className="img-fluid"
            />
            <div className="person-contents">
              <h2 className="mb-0">
                <a href="#">Jean Smith</a>
              </h2>
              <span className="meta d-block mb-3">Real Estate Agent</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                officiis inventore cumque tenetur laboriosam, minus culpa
                doloremque odio, neque molestias?
              </p>
              <ul className="social list-unstyled list-inline dark-hover">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-4 mb-5 mb-lg-0">
          <div className="h-100 person">
            <img
              src="images/person_3-min.jpg"
              alt="Image"
              className="img-fluid"
            />
            <div className="person-contents">
              <h2 className="mb-0">
                <a href="#">Alicia Huston</a>
              </h2>
              <span className="meta d-block mb-3">Real Estate Agent</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                officiis inventore cumque tenetur laboriosam, minus culpa
                doloremque odio, neque molestias?
              </p>
              <ul className="social list-unstyled list-inline dark-hover">
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}