const bestGames = [
    {
        date: "Oct 23, 2025",
        opponent: "Indiana Pacers",
        location: "Away",
        result: "W 141-135",
        statLine: "55 PTS | 8 REB | 5 AST | 2 STL",
        note: "Career-high scoring night in a double-overtime thriller.",
    },
    {
        date: "Jan 22, 2025",
        opponent: "Utah Jazz",
        location: "Home",
        result: "W 123-114",
        statLine: "54 PTS | 8 REB | 5 AST | 3 STL",
        note: "Fueled the Thunder's offensive explosion with 50+ points.",
    },
    {
        date: "Jan 29, 2025",
        opponent: "Golden State Warriors",
        location: "Away",
        result: "L 109-116",
        statLine: "52 PTS | 3 REB | 4 AST",
        note: "Carried the offense in a tough road loss against the defending champs.",
    }
]

function BestGames() {
    return (
        <section className="container mx-auto px-4 py-12">
            <header className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Signature Performances
                </p>
                <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                    Best Games
                </h1>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                    Track Shai&apos;s most impressive scoring nights, clutch games, and all-around performances.
                </p>
            </header>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {bestGames.map((game) => (
                    <article
                        key={`${game.date}-${game.opponent}`}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-500/70 hover:bg-slate-900/70"
                    >
                        <p className="text-sm font-medium text-slate-400">{game.date}</p>

                        <h2 className="mt-3 text-xl font-bold text-white">
                            OKC {game.location === "Home" ? "vs" : "@"} {game.opponent}
                        </h2>

                        <p className="mt-1 text-sm font-semibold text-orange-400">
                            {game.result}
                        </p>

                        <p className="mt-5 text-2xl font-bold text-blue-400">
                            {game.statLine}
                        </p>

                        <p className="mt-4 text-sm leading-6 text-slate-300">
                            {game.note}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default BestGames