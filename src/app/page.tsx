import React from 'react'
import Hero from '@/components/Hero'
import StatCard from '@/components/StatCard'
import FeatureCard from '@/components/FeatureCard'

function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
          <StatCard
            label="Points Per Game"
            value="31.1"
            suffix="PPG"
          />
          <StatCard
            label="Rebounds Per Game"
            value="4.3"
            suffix="RPG"
          />
          <StatCard
            label="Assists Per Game"
            value="6.6"
            suffix="APG"
          />
          <StatCard
            label="Steals Per Game"
            value="1.3"
            suffix="SPG"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <FeatureCard
            title="Best Games"
            description="Check out Shai's best games this season."
            href="/best-games"
          />
          <FeatureCard
            title="MVP Watch"
            description="Track Shai's MVP chances this season."
            href="/mvp-watch"
          />
          <FeatureCard
            title="Compare"
            description="Compare Shai's stats with other players."
            href="/compare"
          />
          <FeatureCard
            title="Playoffs"
            description="Track Shai's playoff performance."
            href="/playoffs"
          />
          <FeatureCard
            title="Timeline"
            description="View Shai's career timeline."
            href="/timeline"
          />
        </div>
      </div>
    </>
  )
}

export default Home