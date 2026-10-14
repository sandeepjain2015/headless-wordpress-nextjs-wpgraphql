import HeroSlider from "@/sections/home/HeroSlider";
import type { HomeSlide } from "@/types/home";

type HeroProps = {
  slides: (HomeSlide | null | undefined)[];
};

export default function Hero({ slides }: HeroProps) {
  const availableSlides = slides.filter(
    (slide): slide is HomeSlide => slide != null
  );

  return <HeroSlider slides={availableSlides} />;
}
