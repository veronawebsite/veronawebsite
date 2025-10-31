import { Header } from './Header'

interface SafetyInstructionsProps {
  path?: string
}

export function SafetyInstructions(_props: SafetyInstructionsProps) {
  return (
    <div className="min-h-screen bg-neutral-lighter">
      <Header />

      <div className="pt-80 md:pt-72 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-neutral-lightest rounded-2xl p-8 md:p-12 shadow-sm">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-charcoal mb-6">
              Veiligheidsvoorschriften
            </h1>

            <div className="space-y-6 text-neutral-darker">
              <section>
                <h2 className="text-xl font-semibold text-neutral-charcoal mb-3">
                  Algemene Veiligheid
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>Houd handgemaakte producten buiten bereik van kleine kinderen zonder toezicht</li>
                  <li>Niet geschikt voor kinderen onder de 3 jaar vanwege kleine onderdelen</li>
                  <li>Gebruik producten alleen waarvoor ze bedoeld zijn</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-neutral-charcoal mb-3">
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
                <h2 className="text-xl font-semibold text-neutral-charcoal mb-3">
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
                <h2 className="text-xl font-semibold text-neutral-charcoal mb-3">
                  Contact bij Vragen
                </h2>
                <p>
                  Voor vragen over veiligheid of gebruik van onze producten, neem gerust contact
                  met ons op via{' '}
                  <a
                    href="mailto:info@handmadebyverona.com"
                    className="text-neutral-accent hover:text-neutral-darkest underline"
                  >
                    info@handmadebyverona.com
                  </a>
                  {' '}of via Instagram{' '}
                  <a
                    href="https://www.instagram.com/handmadebyverona/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-accent hover:text-neutral-darkest underline"
                  >
                    @handmadebyverona
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-8">
              <a
                href="/"
                className="inline-flex items-center text-neutral-charcoal hover:text-neutral-darkest transition-colors duration-200"
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
