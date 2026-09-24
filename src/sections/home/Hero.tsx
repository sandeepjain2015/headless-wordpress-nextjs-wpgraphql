import HeroSlider from "@/sections/home/HeroSlider";
import { fetchGraphQL } from "@/lib/graphql/client";
import { GET_HERO_QUERY } from "@/lib/graphql/queries/hero";

type HeroProps = {
  slug: string;
};

export default async function Hero({ slug }: HeroProps) {
  const data = await fetchGraphQL(GET_HERO_QUERY, {
    slug,
  });

  const homepage = data?.page?.homepage;

  const slides = [
    homepage?.slide1?.node,
    homepage?.slide2?.node,
    homepage?.slide3?.node,
  ].filter(Boolean);

  return <HeroSlider slides={slides} />;
}