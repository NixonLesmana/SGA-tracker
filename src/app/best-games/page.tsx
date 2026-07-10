import { bestGames } from "@/data/bestGames"
import PageHeader from "@/components/PageHeader"

function BestGames() {
    return (
        <section className="container mx-auto px-4 py-12">
            <PageHeader
                eyebrow="Signature Performances"
                title="Best Games"
                description="Track Shai's most impressive scoring nights, clutch games, and all-around performances."
            />

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