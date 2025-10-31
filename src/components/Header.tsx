import { InstagramIcon, MailIcon } from './Icons'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-lighter border-b border-neutral-light">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:info@handmadebyverona.com"
              className="flex items-center gap-2 text-neutral-charcoal hover:text-neutral-darkest transition-colors duration-300"
              aria-label="Send email"
            >
              <MailIcon size={20} />
              <span className="hidden sm:inline text-sm font-medium">Contact</span>
            </a>
          </div>

          {/* Center - Logo/Title */}
          <div className="flex-shrink-0 text-center">
            <a href="/" className="block">
              <h1 className="text-2xl md:text-3xl font-bold text-neutral-charcoal">
                Handmade by Verona
              </h1>
              <p className="text-neutral-darker text-xs md:text-sm font-medium mt-1">
                Handcrafted with Love
              </p>
            </a>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/handmadebyverona/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-neutral-charcoal hover:text-neutral-darkest transition-colors duration-300"
              aria-label="Follow on Instagram"
            >
              <InstagramIcon size={20} />
              <span className="hidden sm:inline text-sm font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
