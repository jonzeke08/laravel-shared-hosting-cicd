import { Link } from '@inertiajs/react';

export default function AppLogo() {
    return (
        <>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold"
            >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm">
                    <IconNinja />
                </span>
                <span className="text-white">Jo Ensal Ninja</span>
            </Link>
        </>
    );
}

function IconNinja() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            {/* Simple ninja mask */}
            <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9Z" />
            <rect
                x="5"
                y="9"
                width="14"
                height="6"
                rx="3"
                className="fill-black"
            />
            <circle cx="9" cy="12" r="1.5" className="fill-white" />
            <circle cx="15" cy="12" r="1.5" className="fill-white" />
        </svg>
    );
}
