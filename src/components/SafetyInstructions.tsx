import { Header } from './Header'

interface SafetyInstructionsProps {
  path?: string
}

export function SafetyInstructions(_props: SafetyInstructionsProps) {
  return (
    <div className="min-h-screen bg-verona-beige-light">
      <Header />

      <div className="pt-80 md:pt-72 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-verona-white rounded-2xl p-8 md:p-12 shadow-lg border border-verona-beige">
            <h1 className="text-3xl md:text-4xl font-bold text-verona-olive mb-8 text-center">
              Veiligheidsvoorschriften
            </h1>

            {/* Safety Instructions Image */}
            <div className="mb-8">
              <img
                src="/veronawebsite/logo/pro-lI16ENM2.jpeg"
                alt="Veiligheidsvoorschriften"
                className="w-full rounded-xl shadow-md"
              />
            </div>

            <div className="space-y-6 text-verona-brown">
              <section>
                <h2 className="text-xl font-semibold text-verona-green-dark mb-3">
                  Algemene Veiligheid
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Houd handgemaakte producten buiten bereik van kleine kinderen zonder toezicht</li>
                  <li>Niet geschikt voor kinderen onder de 3 jaar vanwege kleine onderdelen</li>
                  <li>Gebruik producten alleen waarvoor ze bedoeld zijn</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-verona-green-dark mb-3">
                  Onderhoud en Verzorging
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reinig voorzichtig met een vochtige doek indien nodig</li>
                  <li>Niet in de wasmachine of vaatwasser plaatsen</li>
                  <li>Bewaar op een droge plaats, uit direct zonlicht</li>
                  <li>Controleer regelmatig op beschadigingen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-verona-green-dark mb-3">
                  Specifieke Waarschuwingen
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Sommige producten kunnen kleine onderdelen bevatten - verstikkingsgevaar</li>
                  <li>Handgemaakte items kunnen variëren in kleur en afwerking</li>
                  <li>Niet blootstellen aan extreme temperaturen</li>
                  <li>Bij twijfel over gebruik, neem contact op met Handmade by Verona</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-verona-green-dark mb-3">
                  Contact bij Vragen
                </h2>
                <p>
                  Voor vragen over veiligheid of gebruik van onze producten, neem gerust contact
                  met ons op via{' '}
                  <a
                    href="mailto:info@handmadebyverona.com"
                    className="text-verona-green hover:text-verona-green-dark underline font-medium"
                  >
                    info@handmadebyverona.com
                  </a>
                  {' '}of via Instagram{' '}
                  <a
                    href="https://www.instagram.com/handmadebyverona/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-verona-green hover:text-verona-green-dark underline font-medium"
                  >
                    @handmadebyverona
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-8 text-center">
              <a
                href="/"
                className="inline-flex items-center px-6 py-3 bg-verona-green text-verona-white rounded-xl hover:bg-verona-green-dark transition-colors duration-200 font-medium shadow-md"
              >
                ← Terug naar producten
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
