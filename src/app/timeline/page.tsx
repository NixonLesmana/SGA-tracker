import { timelineEvents } from "@/data/timeline"
import PageHeader from "@/components/PageHeader"

function Timeline() {
    return (
        <section className="container mx-auto px-4 py-12">
            <PageHeader
                eyebrow="Career Arc"
                title="Timeline"
                description="Follow Shai's path from promising guard to NBA MVP and champion."
            />

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