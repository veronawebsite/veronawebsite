import { Header } from './Header'
import { ProductCard } from './ProductCard'
import { InfoCard } from './InfoCard'
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
    <div className="min-h-screen bg-verona-cream">
      {/* Header */}
      <Header />

      {/* Logo - positioned to sit on top of header */}
      <div className="fixed top-2 md:top-2 left-1/2 -translate-x-1/2 z-50">
        <img
          src="/veronawebsite/logo/ChatGPT Image 18 aug 2025, 18_22_31 (1).png"
          alt="Handmade by Verona"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-xl border-4 md:border-4 border-verona-white"
        />
      </div>

      {/* Hero Section */}
      <div className="pt-28 md:pt-24 pb-2 md:pb-6 bg-gradient-to-b from-verona-white to-verona-cream">
      </div>

      {/* Products Section */}
      <div className="pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center text-verona-brown py-12">
              <p className="text-lg">Producten laden...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {/* Info Card - First item, spans full width */}
              <div className="col-span-2 lg:col-span-3 xl:col-span-4">
                <InfoCard />
              </div>

              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.productNaam}
                  price={`€${product.prijs}`}
                  imageUrl={product.foto}
                  kleuropties={product.kleuropties}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
