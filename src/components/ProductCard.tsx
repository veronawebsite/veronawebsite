interface ProductCardProps {
  title: string
  description?: string
  price?: string
  imageUrl: string
  instagramUrl?: string
}

export function ProductCard({ title, description, price, imageUrl, instagramUrl }: ProductCardProps) {
  return (
    <div className="group bg-neutral-lightest rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}
      <div className="aspect-square overflow-hidden bg-neutral-light">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-neutral-charcoal mb-1">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-neutral-darker mb-2 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between mt-3">
          {price && (
            <span className="text-lg font-medium text-neutral-darkest">
              {price}
            </span>
          )}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-accent hover:text-neutral-darkest transition-colors duration-200 font-medium"
            >
              View on Instagram →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
