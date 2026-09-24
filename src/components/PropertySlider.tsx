"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PropertyCard from "@/components/PropertyCard";

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

type PropertySliderProps = {
  properties: Property[];
};

export default function PropertySlider({
  properties,
}: PropertySliderProps) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="property-slider-wrap">

          <Swiper
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
            className="property-slider"
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>

          

        </div>
      </div>
    </div>
  );
}