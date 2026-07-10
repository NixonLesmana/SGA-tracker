type PageHeaderProps = {
    eyebrow: string;
    title: string;
    description: string;
};

function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
    return (
        <header className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                {eyebrow}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
                {title}
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
                {description}
            </p>
        </header>
    );
}

export default PageHeader;