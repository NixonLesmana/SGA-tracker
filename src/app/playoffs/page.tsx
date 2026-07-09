const playoffStats = [
    {
        label: "Points Per Game",
        value: "30.3",
        detail: "Playoffs scoring"
    },
    {
        label: "Assists Per Game",
        value: "5.6",
        detail: "Playmaking pressure"
    },
    {
        label: "Rebounds Per Game",
        value: "5.4",
        detail: "Guard rebounding"
    },
    {
        label: "Steals Per Game",
        value: "1.9",
        detail: "Defensive activity"
    },
]

const playoffSeries = [
    {
        round: "NBA Finals",
        opponent: "Indiana Pacers",
        result: "Won 4-3",
        note: "Capped the championship run and earned Finals MVP.",
    },
]

function Playoffs() {
    return (
        <section className="container mx-auto px-4 py-12">
            <header className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Postseason Mode
                </p>
                <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                    Playoffs
                </h1>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                    Track Shai&apos;s playoff scoring, series results, and signature playoff moments.
                </p>
            </header>

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