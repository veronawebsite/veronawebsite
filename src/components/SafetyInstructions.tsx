import { Header } from './Header'

interface SafetyInstructionsProps {
  path?: string
}

export function SafetyInstructions(_props: SafetyInstructionsProps) {
  return (
    <div className="min-h-screen bg-verona-cream">
      <Header />

      <div className="pt-20 md:pt-24 pb-8 md:pb-16 px-2 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-4 md:mb-8 px-2">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200 font-medium text-sm md:text-base"
            >
              ← Terug naar producten
            </a>
          </div>

          {/* Safety Instructions Image - Larger and no title */}
          <div className="bg-verona-white rounded-xl md:rounded-2xl p-2 md:p-4 shadow-lg">
            <img
              src="/logo/pro-lI16ENM2.jpeg"
              alt="Veiligheidsvoorschriften"
              className="w-full rounded-lg md:rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
