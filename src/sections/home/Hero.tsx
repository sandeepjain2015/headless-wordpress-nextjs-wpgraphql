import HeroSlider from "@/sections/home/HeroSlider";
import type { HomeResponse } from "@/types/home";

type HeroProps = {
  hero: NonNullable<NonNullable<HomeResponse["page"]>["homepage"]> | null | undefined;
};

export default function Hero({ hero }: HeroProps) {
  const slides = [
    hero?.slide1?.node,
    hero?.slide2?.node,
    hero?.slide3?.node,
  ].filter((slide): slide is NonNullable<typeof slide> => Boolean(slide));

  return <HeroSlider slides={slides.map(({ sourceUrl, altText }) => ({ sourceUrl, altText: altText ?? "" }))} />;
}
