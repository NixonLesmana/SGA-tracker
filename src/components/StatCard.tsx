type StatCardProps = {
    label: string;
    value: string;
    suffix: string;
};

function StatCard({ label, value, suffix }: StatCardProps) {
    return (
        <article className="rounded-lg border border-slate-800 bg-slate-950/60 p-6 transition hover:border-blue-500/70 hover:bg-slate-900/70">
            <p className="text-sm text-neutral-400">{label}</p>
            <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-bold text-white">{value}</span>
                <span className="pb-1 text-sm font-semibold text-blue-400">{suffix}</span>
            </div>
        </article>
    );
}

export default StatCard;