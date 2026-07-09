import Link from "next/link"

type FeatureCardProps = {
    title: string;
    description: string;
    href: string;
}

function FeatureCard({ title, description, href }: FeatureCardProps) {
    return (
        <Link
            href={href}
            className="block rounded-lg border border-slate-800 bg-slate-950/60 p-6 transition duration-200 hover:-translate-y-1 hover:border-orange-500/70 hover:bg-slate-900/70"
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{description}</p>
        </Link>
    )
}

export default FeatureCard