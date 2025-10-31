import { LinkCard } from './LinkCard'
import { InstagramIcon, MailIcon } from './Icons'
import { Header } from './Header'

export function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-lighter">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-32 pb-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-charcoal mb-4">
              Transform Your Fitness
            </h2>
            <p className="text-lg md:text-xl text-neutral-darker">
              Personalized training programs designed for your goals
            </p>
          </div>

          {/* Links Section */}
          <div className="bg-neutral-lightest rounded-2xl p-6 md:p-8 shadow-sm mb-8">
            <nav className="space-y-3">
              <LinkCard
                href="https://www.instagram.com/handmadebyverona/"
                icon={<InstagramIcon size={20} />}
                external
              >
                Follow on Instagram
              </LinkCard>
              <LinkCard
                href="mailto:contact@hybridmethod.com"
                icon={<MailIcon size={20} />}
              >
                Get in Touch
              </LinkCard>
            </nav>
          </div>

          {/* About Section */}
          <div className="text-center text-neutral-darker">
            <p className="text-sm md:text-base">
              Hybrid Method combines strength training, mobility work, and personalized coaching
              to help you achieve sustainable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
