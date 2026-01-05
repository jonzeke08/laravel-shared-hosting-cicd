import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a]">
                {/* Header */}
                <header className="mx-auto w-full max-w-4xl p-6 text-sm">
                    <nav className="flex justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-sm border px-5 py-1.5 text-sm hover:border-[#1915014a] dark:border-[#3E3E3A]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="rounded-sm px-5 py-1.5 text-sm hover:border"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="rounded-sm border px-5 py-1.5 text-sm"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>

                {/* Main */}
                <main className="flex-1 bg-gray-50 dark:bg-[#0a0a0a]">
                    <div className="mx-auto max-w-6xl px-6 py-10">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                            Dashboard
                        </h1>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Laravel 12 · Inertia · React · Shared Hosting CI/CD
                        </p>

                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card
                                title="Deployment"
                                value="Git-based"
                                description="Auto-deployed from GitHub"
                            />
                            <Card
                                title="Hosting"
                                value="Shared"
                                description="No Docker. No VPS. Still works."
                            />
                            <Card
                                title="Assets"
                                value="Vite 5"
                                description="Built locally, served fast"
                            />
                        </div>

                        <div className="mt-10 rounded-lg border border-dashed border-gray-300 p-6 text-center dark:border-gray-700">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                This is a temporary dashboard.
                                <br />
                                GAUNSA MAN KA DIRE? HAHAHAHA
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

/* ---------------------------------- */
/* Card Component                     */
/* ---------------------------------- */

function Card({
    title,
    value,
    description,
}: {
    title: string;
    value: string;
    description: string;
}) {
    return (
        <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#161615]">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {title}
            </h2>
            <p className="mt-2 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {value}
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {description}
            </p>
        </div>
    );
}
