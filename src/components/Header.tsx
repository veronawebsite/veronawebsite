import { InstagramIcon, MailIcon } from './Icons'
import { ShieldAlert } from 'lucide-preact'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-verona-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-4">
        {/* Mobile Layout - Compact single row */}
        <div className="md:hidden flex items-center justify-between">
          <div className="flex-1">
            <a href="/veronawebsite/" className="text-xs font-bold text-verona-olive hover:text-verona-green-dark transition-colors block leading-tight">
              Handmade by Verona
            </a>
            <p className="text-[8px] text-verona-brown mt-0.5 leading-tight">
              Unieke en Persoonlijke Creaties
            </p>
          </div>
          <nav className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/handmadebyverona/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-verona-brown hover:text-verona-green transition-colors duration-200"
            >
              <InstagramIcon size={14} />
            </a>
            <a
              href="mailto:veronapaauwe@live.nl"
              className="text-verona-brown hover:text-verona-green transition-colors duration-200"
            >
              <MailIcon size={14} />
            </a>
            <a
              href="/veronawebsite/safety"
              className="text-verona-brown hover:text-verona-green transition-colors duration-200"
            >
              <ShieldAlert size={14} />
            </a>
          </nav>
        </div>

        {/* Desktop Layout - Original */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left: Brand Name */}
          <div className="flex-1 mr-2">
            <a href="/veronawebsite/" className="text-xl font-bold text-verona-olive hover:text-verona-green-dark transition-colors block leading-tight">
              Handmade by Verona
            </a>
            <p className="text-xs text-verona-brown mt-0.5">
              Unieke en Persoonlijke Creaties
            </p>
          </div>

          {/* Right: Navigation */}
          <nav className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/handmadebyverona/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200 text-sm font-medium"
            >
              <InstagramIcon size={18} />
              <span>Instagram</span>
            </a>
            <a
              href="mailto:veronapaauwe@live.nl"
              className="flex items-center gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200 text-sm font-medium"
            >
              <MailIcon size={18} />
              <span>Email</span>
            </a>
            <a
              href="/veronawebsite/safety"
              className="flex items-center gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200 text-sm font-medium"
            >
              <ShieldAlert size={18} />
              <span>Veiligheid</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
