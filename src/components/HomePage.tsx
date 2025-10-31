import { Header } from './Header'
import { ProductCard } from './ProductCard'

// Sample products - replace these with your actual products
const products = [
  {
    id: 1,
    title: 'Handmade Item 1',
    description: 'Beautiful handcrafted piece made with love and care',
    price: '€25.00',
    imageUrl: 'https://via.placeholder.com/400x400/F0EDE8/8B857B?text=Product+1',
    instagramUrl: 'https://www.instagram.com/handmadebyverona/'
  },
  {
    id: 2,
    title: 'Handmade Item 2',
    description: 'Unique handcrafted creation perfect for any occasion',
    price: '€30.00',
    imageUrl: 'https://via.placeholder.com/400x400/F0EDE8/8B857B?text=Product+2',
    instagramUrl: 'https://www.instagram.com/handmadebyverona/'
  },
  {
    id: 3,
    title: 'Handmade Item 3',
    description: 'Carefully crafted with attention to detail',
    price: '€20.00',
    imageUrl: 'https://via.placeholder.com/400x400/F0EDE8/8B857B?text=Product+3',
    instagramUrl: 'https://www.instagram.com/handmadebyverona/'
  },
  {
    id: 4,
    title: 'Handmade Item 4',
    description: 'One-of-a-kind handmade treasure',
    price: '€35.00',
    imageUrl: 'https://via.placeholder.com/400x400/F0EDE8/8B857B?text=Product+4',
    instagramUrl: 'https://www.instagram.com/handmadebyverona/'
  },
  {
    id: 5,
    title: 'Handmade Item 5',
    description: 'Lovingly handcrafted for your home',
    price: '€28.00',
    imageUrl: 'https://via.placeholder.com/400x400/F0EDE8/8B857B?text=Product+5',
    instagramUrl: 'https://www.instagram.com/handmadebyverona/'
  },
  {
    id: 6,
    title: 'Handmade Item 6',
    description: 'Artisan quality handmade piece',
    price: '€32.00',
    imageUrl: 'https://via.placeholder.com/400x400/F0EDE8/8B857B?text=Product+6',
    instagramUrl: 'https://www.instagram.com/handmadebyverona/'
  }
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-lighter">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-charcoal mb-4">
              Handcrafted with Love
            </h2>
            <p className="text-lg md:text-xl text-neutral-darker max-w-2xl mx-auto">
              Discover unique handmade treasures, each piece carefully crafted with passion and attention to detail
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                instagramUrl={product.instagramUrl}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-neutral-lightest rounded-2xl p-8 md:p-12 shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-charcoal mb-4">
              Interested in a Custom Order?
            </h3>
            <p className="text-neutral-darker mb-6 max-w-xl mx-auto">
              Each piece is made with care and can be customized to your preferences.
              Follow us on Instagram or send an email to discuss your ideas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/handmadebyverona/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-neutral-charcoal text-neutral-lightest rounded-lg hover:bg-neutral-darkest transition-colors duration-200 font-medium"
              >
                Follow on Instagram
              </a>
              <a
                href="mailto:info@handmadebyverona.com"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-neutral-charcoal text-neutral-charcoal rounded-lg hover:bg-neutral-charcoal hover:text-neutral-lightest transition-colors duration-200 font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
