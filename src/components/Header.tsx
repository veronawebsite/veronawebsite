import { InstagramIcon, MailIcon } from './Icons'
import { ShieldAlert } from 'lucide-preact'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-verona-cream border-b-2 border-verona-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Logo, Title & Subtitle */}
        <div className="flex flex-col items-center text-center mb-6">
          <a href="/" className="block mb-4">
            <img
              src="/veronawebsite/logo/ChatGPT Image 18 aug 2025, 18_22_31 (1).png"
              alt="Handmade by Verona Logo"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto shadow-lg border-4 border-verona-white"
            />
          </a>
          <a href="/" className="block">
            <h1 className="text-3xl md:text-4xl font-bold text-verona-olive mb-2">
              Handmade by Verona
            </h1>
            <p className="text-lg md:text-xl text-verona-brown font-medium">
              Unieke en Persoonlijke Creaties
            </p>
          </a>
        </div>

        {/* Navigation Buttons */}
        <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <a
            href="https://www.instagram.com/handmadebyverona/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-verona-green text-verona-white rounded-xl hover:bg-verona-green-dark transition-colors duration-200 font-medium text-sm shadow-md hover:shadow-lg"
          >
            <InstagramIcon size={18} />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:info@handmadebyverona.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-verona-beige text-verona-brown rounded-xl hover:bg-verona-beige-dark transition-colors duration-200 font-medium text-sm shadow-md hover:shadow-lg"
          >
            <MailIcon size={18} />
            <span>Email</span>
          </a>
          <a
            href="/safety"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-verona-olive text-verona-white rounded-xl hover:bg-verona-green-dark transition-colors duration-200 font-medium text-sm shadow-md hover:shadow-lg"
          >
            <ShieldAlert size={18} />
            <span>Veiligheidsvoorschriften</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
