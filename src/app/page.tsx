import Hero from "@/components/Hero"
import StatCard from "@/components/StatCard"
import FeatureCard from "@/components/FeatureCard"
import { seasonStats, features } from "@/data/home"

function Home() {
  return (
    <>
      <Hero />
      <section className="container mx-auto px-4 py-6">

        <div className="mb-4">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Current Season
          </p>
          <h2 className="text-2xl font-bold">Season Snapshot</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {seasonStats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
            />
          ))}
        </div>

      </section>

      <section className="container mx-auto px-4 py-6">

        <div className="mb-4">
          <p className="text-sm uppercase tracking-wide text-neutral-400">
            Features
          </p>
          <h2 className="text-2xl font-bold">Explore Tracker</h2>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
          {features.map((feature) => (
            <FeatureCard
              key={feature.href}
              title={feature.title}
              description={feature.description}
              href={feature.href}
            />
          ))}
        </div>

      </section>
    </>
  )
}

export default Home