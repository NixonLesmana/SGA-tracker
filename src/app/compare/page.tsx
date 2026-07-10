const players = [
    {
        name: "Shai Gilgeous-Alexander",
        season: "2024-25",
        points: "31.1",
        rebounds: "5.0",
        assists: "6.6",
        steals: "1.7",
        trueShooting: "63.7%",
    },
    {
        name: "Shai Gilgeous-Alexander",
        season: "2023-24",
        points: "30.1",
        rebounds: "5.5",
        assists: "6.2",
        steals: "2.0",
        trueShooting: "63.6%",
    },
]

const comparisonRows = [
    { label: "Points", first: "31.1", second: "30.1" },
    { label: "Rebounds", first: "5.0", second: "5.5" },
    { label: "Assists", first: "6.6", second: "6.2" },
    { label: "Steals", first: "1.7", second: "2.0" },
    { label: "True Shooting", first: "63.7%", second: "63.6%" },
]

function Compare() {
    return (
        <section className="container mx-auto px-4 py-12">
            <header className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Player Comparison
                </p>

                <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                    Compare Seasons
                </h1>

                <p className="mt-4 text-lg leading-8 text-slate-300">
                    Compare Shai&apos;s 2024-25 season side-by-side with his 2023-24 MVP campaign.
                </p>
            </header>

            <section
                aria-label="Compared players"
                className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
                {players.map((player) => (
                    <article
                        key={player.season}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 p-6"
                    >
                        <p className="text-sm font-semibold text-blue-400">
                            {player.season}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-white">
                            {player.name}
                        </h2>

                        <p className="mt-4 text-sm text-slate-300">
                            {player.points} PPG | {player.assists} APG | {player.rebounds} RPG
                        </p>
                    </article>
                ))}
            </section>

            <section
                aria-label="Stat comparison"
                className="mt-10 overflow-hidden rounded-lg border border-slate-800 bg-slate-950/60"
            >
                <table className="w-full border-collapse">
                    <thead className="border-b border-slate-800 bg-slate-900/60">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-300">
                                Stat
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold text-blue-400">
                                {players[0].season}
                            </th>
                            <th className="px-4 py-3 text-center text-sm font-semibold text-blue-400">
                                {players[1].season}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {comparisonRows.map((row) => (
                            <tr
                                key={row.label}
                                className="border-b border-slate-800 last:border-b-0"
                            >
                                <td className="px-4 py-4 text-left text-sm font-medium text-slate-300">
                                    {row.label}
                                </td>
                                <td className="px-4 py-4 text-center text-sm font-semibold text-white">
                                    {row.first}
                                </td>
                                <td className="px-4 py-4 text-center text-sm font-semibold text-white">
                                    {row.second}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    )
}

export default Compare