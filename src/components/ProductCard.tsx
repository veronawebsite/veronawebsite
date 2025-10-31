interface ProductCardProps {
  title: string
  description?: string
  price?: string
  imageUrl: string
  kleuropties?: string[]
}

export function ProductCard({ title, description, price, imageUrl, kleuropties }: ProductCardProps) {
  return (
    <div className="group bg-verona-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-verona-beige-light flex flex-col h-full">
      {/* Image Container with rounded edges */}
      <div className="p-2 md:p-4">
        <div className="aspect-square overflow-hidden rounded-2xl bg-verona-cream">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Product Info - flex-1 to push button to bottom */}
      <div className="px-2 md:px-4 pb-2 md:pb-4 flex flex-col flex-1">
        {/* Title and Price Row */}
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xs md:text-base font-semibold text-verona-brown flex-1 mr-1 leading-tight">
            {title}
          </h3>
          {price && (
            <span className="text-sm md:text-lg font-bold text-verona-green-dark whitespace-nowrap">
              {price}
            </span>
          )}
        </div>

        {description && (
          <p className="text-xs md:text-sm text-verona-brown-light mb-2 line-clamp-2">
            {description}
          </p>
        )}

        {/* Color Options */}
        {kleuropties && kleuropties.length > 0 && (
          <div className="mb-2">
            <p className="text-[10px] md:text-xs font-medium text-verona-olive mb-1">Beschikbare kleuren:</p>
            <div className="flex flex-wrap gap-1">
              {kleuropties.map((kleur, index) => (
                <span
                  key={index}
                  className="text-[9px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 bg-verona-green-light text-verona-olive rounded-full font-medium"
                >
                  {kleur}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-1"></div>

        {/* Email button at bottom */}
        <a
          href={`mailto:veronapaauwe@live.nl?subject=Bestelling: ${title}&body=Hallo, ik wil graag meer informatie over ${title}.`}
          className="inline-flex items-center text-[10px] md:text-xs text-verona-green hover:text-verona-green-dark transition-colors duration-200 font-medium mt-2"
        >
          Bestel via email →
        </a>
      </div>
    </div>
  )
}
