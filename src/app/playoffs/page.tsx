import { playoffStats, playoffSeries } from "@/data/playoffs"
import PageHeader from "@/components/PageHeader"

function Playoffs() {
    return (
        <section className="container mx-auto px-4 py-12">
            <PageHeader
                eyebrow="Postseason Mode"
                title="Playoffs"
                description="Track Shai's playoff scoring, series results, and signature playoff moments."
            />

            <section
                aria-label="Playoff stat summary"
                className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
            >
                {playoffStats.map((stat) => (
                    <article
                        key={stat.label}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 p-6"
                    >
                        <p className="text-sm font-semibold text-blue-400">{stat.label}</p>
                        <h2 className="mt-2 text-3xl font-bold text-white">{stat.value}</h2>
                        <p className="mt-3 text-sm text-slate-300">{stat.detail}</p>
                    </article>
                ))}
            </section>

            <section
                aria-label="Playoff series log"
                className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
                {playoffSeries.map((series) => (
                    <article
                        key={`${series.round}-${series.opponent}`}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 p-6"
                    >
                        <p className="text-sm font-semibold text-orange-400">{series.round}</p>
                        <h2 className="mt-2 text-2xl font-bold text-white">
                            vs {series.opponent}
                        </h2>
                        <p className="mt-2 text-sm font-semibold text-blue-400">
                            {series.result}
                        </p>
                        <p className="mt-4 text-sm leading-6 text-slate-300">
                            {series.note}
                        </p>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default Playoffs