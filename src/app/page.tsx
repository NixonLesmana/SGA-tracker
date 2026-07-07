import React from 'react'
import Hero from '@/components/Hero'
import StatCard from '@/components/StatCard'
import FeatureCard from '@/components/FeatureCard'

const seasonStats = [
  {
    label: "Points Per Game",
    value: "31.1",
    suffix: "PPG",
  },
  {
    label: "Rebounds Per Game",
    value: "4.3",
    suffix: "RPG",
  },
  {
    label: "Assists Per Game",
    value: "6.6",
    suffix: "APG",
  },
  {
    label: "Steals Per Game",
    value: "1.3",
    suffix: "SPG",
  },
]

const features = [
  {
    title: "Best Games",
    description: "Check out Shai's best games this season.",
    href: "/best-games",
  },
  {
    title: "MVP Watch",
    description: "Track Shai's MVP chances this season.",
    href: "/mvp-watch",
  },
  {
    title: "Compare",
    description: "Compare Shai's stats with other players.",
    href: "/compare",
  },
  {
    title: "Playoffs",
    description: "Track Shai's playoff performance.",
    href: "/playoffs",
  },
  {
    title: "Timeline",
    description: "View Shai's career timeline.",
    href: "/timeline",
  },
]

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
              key={feature.title}
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