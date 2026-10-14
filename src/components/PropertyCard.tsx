import type { HomeProperty } from "@/types/home";

type PropertyCardProps = {
  property: HomeProperty;
};

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  const image = property.featuredImage?.node;
  const details = property.propertyDetail;

  return (
    <div className="property-item">
      <a href={`/properties/${property.slug}`} className="img">
        {image?.sourceUrl && (
          <img
            src={image.sourceUrl}
            alt={image.altText || property.title}
            className="img-fluid"
          />
        )}
      </a>

      <div className="property-content">
        <div className="price mb-2">
          <span>${details?.price}</span>
        </div>

        <div>
          <span className="d-block mb-2 text-black-50">
            {property.title}
          </span>

          <span className="city d-block mb-3">
            California, USA
          </span>

          <div className="specs d-flex mb-4">
            <span className="d-block d-flex align-items-center me-3">
              <span className="icon-bed me-2" />
              <span className="caption">
                {details?.bedroom} beds
              </span>
            </span>

            <span className="d-block d-flex align-items-center">
              <span className="icon-bath me-2" />
              <span className="caption">
                {details?.bathroom} baths
              </span>
            </span>
          </div>

          <a
            href={`/properties/${property.slug}`}
            className="btn btn-primary py-2 px-3"
          >
            See details
          </a>
        </div>
      </div>
    </div>
  );
}
