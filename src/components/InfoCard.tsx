import { InstagramIcon, MailIcon } from './Icons'
import { ShieldAlert } from 'lucide-preact'

export function InfoCard() {
  return (
    <div className="bg-verona-white rounded-2xl overflow-hidden shadow-md border border-verona-beige-light p-4 md:p-6">
      {/* Title and Subtitle */}
      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-verona-olive mb-2">
          Handmade by Verona
        </h1>
        <p className="text-sm md:text-base text-verona-brown">
          Unieke en Persoonlijke Creaties
        </p>
      </div>

      {/* Welcome Text */}
      <div className="text-center mb-4 md:mb-6">
        <p className="text-xs md:text-sm text-verona-brown leading-relaxed">
          Welkom op mijn pagina. Ik maak unieke, persoonlijke producten voor de allerkleinste.
          Voor ieder product zijn er meerdere dingen mogelijk. Neem gerust een kijkje in de collectie
          en laat je inspireren om iets écht bijzonders te vinden voor de allerkleinste.
          Heeft u vragen of wilt u iets bestellen? Stuurt u een berichtje via de link naar mijn
          emailadres of stuur een berichtje via Instagram.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-6 md:gap-8">
        <a
          href="https://www.instagram.com/handmadebyverona/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 md:gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200"
        >
          <InstagramIcon size={24} className="md:w-8 md:h-8" />
          <span className="text-xs md:text-sm font-medium">Instagram</span>
        </a>
        <a
          href="mailto:veronapaauwe@live.nl"
          className="flex flex-col items-center gap-1 md:gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200"
        >
          <MailIcon size={24} className="md:w-8 md:h-8" />
          <span className="text-xs md:text-sm font-medium">Email</span>
        </a>
        <a
          href="/veronawebsite/safety"
          className="flex flex-col items-center gap-1 md:gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200"
        >
          <ShieldAlert size={24} className="md:w-8 md:h-8" />
          <span className="text-xs md:text-sm font-medium">Veiligheid</span>
        </a>
      </div>
    </div>
  )
}
