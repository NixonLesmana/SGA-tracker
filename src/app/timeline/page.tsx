const timelineEvents = [
    {
        year: "2018",
        title: "Draft Night",
        description: "Selected 11th overall and traded to the LA Clippers, beginning his NBA career as a smooth, versatile guard.",
    },
    {
        year: "2019",
        title: "Traded to OKC Thunder",
        description: "Moved to OKC in the Paul George trade, becoming one of the centerpiece pieces of the Thunder rebuild.",
    },
    {
        year: "2022",
        title: "Star Leap",
        description: "Emerged as a true franchise player with elite scoring, rim pressure, and improved playmaking.",
    },
    {
        year: "2023",
        title: "First All-Star Selection",
        description: "Earned his first All-Star selection and established himself as one of the league's best guards.",
    },
    {
        year: "2024",
        title: "All-NBA First Team Selection",
        description: "Led OKC into contention with elite scoring efficiency, two-way impact, and nightly consistency.",
    },
    {
        year: "2025",
        title: "MVP, NBA Champion & Finals MVP",
        description: "Completed a historic season by winning MVP, leading OKC to the NBA championship, and earning Finals MVP.",
    },
]

function Timeline() {
    return (
        <section className="container mx-auto px-4 py-12">
            <header className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                    Career Arc
                </p>

                <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                    Timeline
                </h1>

                <p className="mt-4 text-lg leading-8 text-slate-300">
                    Follow Shai&apos;s path from promising guard to NBA MVP and champion.
                </p>
            </header>

            <section
                aria-label="Career timeline"
                className="mt-10 space-y-4"
            >
                {timelineEvents.map((event) => (
                    <article
                        key={`${event.year}-${event.title}`}
                        className="rounded-lg border border-slate-800 bg-slate-950/60 p-6 transition duration-200 hover:border-blue-500/70 hover:bg-slate-900/70"
                    >
                        <p className="text-sm font-semibold text-orange-400">
                            {event.year}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-white">
                            {event.title}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-slate-300">
                            {event.description}
                        </p>
                    </article>
                ))}
            </section>
        </section>
    )
}

export default Timeline