"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { HomeTestimonial } from "@/types/home";

import "swiper/css";
import "swiper/css/navigation";

interface TestimonialsSliderProps {
  testimonials: HomeTestimonial[];
}

export default function TestimonialsSlider({
  testimonials,
}: TestimonialsSliderProps) {
  return (
    <div className="testimonial-slider-wrap">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".testimonial-prev",
          nextEl: ".testimonial-next",
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="testimonial-slider"
      >
        {testimonials.map((testimonial) => {
          const image =
            testimonial.featuredImage?.node?.sourceUrl;

          const rating =
            testimonial.testimonialDetails?.rating || 5;

          return (
            <SwiperSlide key={testimonial.id}>
              <div className="item">
                <div className="testimonial">
                  {image && (
                    <Image
                      src={image}
                      alt={
                        testimonial.featuredImage?.node?.altText ||
                        testimonial.title
                      }
                      width={120}
                      height={120}
                      className="img-fluid rounded-circle w-25 mb-4"
                      unoptimized
                    />
                  )}

                  <div className="rate">
                    {Array.from({ length: rating }).map(
                      (_, index) => (
                        <span
                          key={index}
                          className="icon-star text-warning"
                        />
                      )
                    )}
                  </div>

                  <h3 className="h5 text-primary mb-4">
                    {testimonial.title}
                  </h3>

                  <blockquote>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: testimonial.content,
                      }}
                    />
                  </blockquote>

                  <p className="text-black-50">
                    {testimonial.testimonialDetails?.designation}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
