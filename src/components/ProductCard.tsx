interface ProductCardProps {
  title: string
  description?: string
  price?: string
  imageUrl: string
  instagramUrl?: string
  kleuropties?: string[]
}

export function ProductCard({ title, description, price, imageUrl, instagramUrl, kleuropties }: ProductCardProps) {
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
        <h3 className="text-lg font-semibold text-neutral-charcoal mb-2">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-neutral-darker mb-2 line-clamp-2">
            {description}
          </p>
        )}

        {kleuropties && kleuropties.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-neutral-darker mb-1">Kleuren:</p>
            <div className="flex flex-wrap gap-1">
              {kleuropties.map((kleur, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-neutral-light text-neutral-darkest rounded"
                >
                  {kleur}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-3">
          {price && (
            <span className="text-lg font-semibold text-neutral-darkest">
              {price}
            </span>
          )}

          {instagramUrl && (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-accent hover:text-neutral-darkest transition-colors duration-200 font-medium"
            >
              Bekijk →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
