import { mvpStats } from "@/data/mvpWatch"
import PageHeader from "@/components/PageHeader"

function MVPWatch() {
    return (
        <section className="container mx-auto px-4 py-12">
            <PageHeader
                eyebrow="Award Race"
                title="MVP Watch"
                description="Track Shai's MVP case through production, efficiency, team success, and recent form."
            />

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