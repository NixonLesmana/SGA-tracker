type StatCardProps = {
    label: string;
    value: string;
    suffix: string;
};

function StatCard({ label, value, suffix }: StatCardProps) {
    return (
        <div className="rounded-lg border border-neutral-800 p-6">
            <p className="text-sm text-neutral-400">{label}</p>
            <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-bold">{value}</span>
                <span className="pb-1 text-sm text-neutral-400">{suffix}</span>
            </div>
        </div>
    );
}

export default StatCard;