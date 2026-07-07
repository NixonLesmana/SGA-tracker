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
            className="block rounded-lg border border-neutral-800 p-6 transition hover:border-blue-500"
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{description}</p>
        </Link>
    )
}

export default FeatureCard