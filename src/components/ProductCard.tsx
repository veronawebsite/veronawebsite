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
    <div className="group bg-verona-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-verona-beige-light">
      {/* Image Container with rounded edges */}
      <div className="p-4">
        <div className="aspect-square overflow-hidden rounded-2xl bg-verona-cream">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 pb-4">
        {/* Title and Price Row */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base font-semibold text-verona-brown flex-1 mr-2">
            {title}
          </h3>
          {price && (
            <span className="text-lg font-bold text-verona-green-dark whitespace-nowrap">
              {price}
            </span>
          )}
        </div>

        {description && (
          <p className="text-sm text-verona-brown-light mb-3 line-clamp-2">
            {description}
          </p>
        )}

        {/* Color Options */}
        {kleuropties && kleuropties.length > 0 && (
          <div className="mb-3">
            <p className="text-xs font-medium text-verona-olive mb-2">Beschikbare kleuren:</p>
            <div className="flex flex-wrap gap-1.5">
              {kleuropties.map((kleur, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1 bg-verona-green-light text-verona-olive rounded-full font-medium"
                >
                  {kleur}
                </span>
              ))}
            </div>
          </div>
        )}

        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-verona-green hover:text-verona-green-dark transition-colors duration-200 font-medium mt-2"
          >
            Bekijk op Instagram →
          </a>
        )}
      </div>
    </div>
  )
}
