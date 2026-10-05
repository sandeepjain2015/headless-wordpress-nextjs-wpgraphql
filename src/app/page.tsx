import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import Hero from "@/sections/home/Hero";
import PopularProperties from "@/sections/home/PopularProperties";
import { Agent } from "http";

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
  <Testimonials />
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
  <Agents />
</>

  );
}