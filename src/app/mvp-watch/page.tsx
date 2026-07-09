const mvpStats = [
    {
        label: "Points Per Game",
        value: "31.1",
        detail: "Top-tier scoring volume",
    },
    {
        label: "Team Record",
        value: "68-14",
        detail: "Elite team success",
    },
    {
        label: "MVP Rank",
        value: "#1",
        detail: "Current favorite",
    },
    {
        label: "Recent",
        value: "32.4 PPG",
        detail: "Last 10 games",
    },
]

function MVPWatch() {
    return (
        <section className="container mx-auto px-4 py-12">
            <header className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Award Race
                </p>
                <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                    MVP Watch
                </h1>
                <p className="mt-4 text-lg leading-8 text-slate-300">
                    Track Shai&apos;s MVP case through production, efficiency, team success, and recent form.
                </p>
            </header>

            <section aria-label="MVP stat summary" className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {mvpStats.map((mvp) => (
                    <article
                        key={mvp.label}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 p-6 transition hover:-translate-y-1 hover:border-blue-500/70 hover:bg-slate-900/70"
                    >
                        <p className="text-sm font-semibold text-blue-400">{mvp.label}</p>
                        <h2 className="mt-2 text-3xl font-bold text-white">{mvp.value}</h2>
                        <p className="mt-3 text-sm text-slate-300">{mvp.detail}</p>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default MVPWatch