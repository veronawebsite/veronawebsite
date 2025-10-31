import { Header } from './Header'

interface SafetyInstructionsProps {
  path?: string
}

export function SafetyInstructions(_props: SafetyInstructionsProps) {
  return (
    <div className="min-h-screen bg-verona-cream">
      <Header />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <a
              href="/veronawebsite/"
              className="inline-flex items-center gap-2 text-verona-brown hover:text-verona-green transition-colors duration-200 font-medium"
            >
              ← Terug naar producten
            </a>
          </div>

          {/* Safety Instructions */}
          <div className="bg-verona-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-verona-olive mb-8 text-center">
              Veiligheidsvoorschriften
            </h1>
            <img
              src="/veronawebsite/logo/pro-lI16ENM2.jpeg"
              alt="Veiligheidsvoorschriften"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
