import { Header } from './Header'
import { ProductCard } from './ProductCard'
import { useState, useEffect } from 'preact/hooks'

interface Product {
  id: number
  productNaam: string
  prijs: string
  kleuropties: string[]
  foto: string
}

interface HomePageProps {
  path?: string
}

export function HomePage(_props: HomePageProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/veronawebsite/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error loading products:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-neutral-lighter">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-80 md:pt-72 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Products Grid - 4 columns */}
          {loading ? (
            <div className="text-center text-neutral-darker py-12">
              <p className="text-lg">Producten laden...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.productNaam}
                  price={`€${product.prijs}`}
                  imageUrl={product.foto}
                  kleuropties={product.kleuropties}
                  instagramUrl="https://www.instagram.com/handmadebyverona/"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
