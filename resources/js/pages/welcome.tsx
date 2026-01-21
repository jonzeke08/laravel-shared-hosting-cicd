import ChatWidget from '@/components/ChatWidget';
import ThemeToggle from '@/components/ThemeToggle';
import { dashboard, login, register } from '@/routes';
import type { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';

import { FaReact, FaNodeJs } from "react-icons/fa";
import { FaGitAlt, FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

/* -------------------------
   Types
   ------------------------- */
type Project = {
    title: string;
    description: string;
    tags?: string[];
    href?: string; // external live link
    repo?: string; // external repo
    icon?: React.ReactNode;
};

type Education = {
    school: string;
    program: string;
    period: string;
    detail?: string;
};

type Achievement = {
    title: string;
    note?: string;
};

type Social = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

type Stat = {
    label: string;
    value: string | number;
    icon: React.ReactNode;
};

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    // Profile/portfolio content (edit freely)
    const profile = {
        name: 'Jonathan',
        role: 'Full-Stack Web Developer',
        location: 'Siquijor, Philippines',
        available: true,
        avatar: 'https://avatars.githubusercontent.com/u/26376449?v=4', // replace with your image or storage path
        emailTo: 'mailto:joensal.creates@gmail.com',
        resumeUrl: '#', // replace with your resume link
        githubUrl: 'https://github.com/Yzquile',
    };

    const about =
        'Passionate BSIT student focused on Laravel + Inertia + React. I enjoy building practical features, deploying on shared hosting with CI/CD, and shipping fast, secure web apps.';

    const stats: Stat[] = [
        { label: 'Projects Completed', value: 4, icon: <IconBriefcase /> },
        { label: 'Technologies Stack', value: 10, icon: <IconCode /> },
    ];

    const projects: Project[] = [
        {
            title: 'Next Weather',
            description:
                'A modern weather application built with Next.js 14 and Tailwind CSS.',
            tags: ['NextJS', 'OpenWeatherMap API', 'Tailwind'],
            repo: 'https://github.com/Yzquile/next-weather',
            icon: <IconFolder />,
        },
        {
            title: 'Habistay Laravel API',
            description: 'A Laravel API for finding accommodations in Siquijor, including boarding houses, inns, lodges, and more.',
            tags: ['Laravel 11', 'MySQL', 'Laravel Sanctum'],
            repo: 'https://github.com/Yzquile/habistay-laravel-api',
            icon: <IconFolder />,
        },
        {
            title: 'Island Soul Siquijor',
            description: 'School project using HTML and CSS.',
            tags: ['HTML5', 'CSS'],
            repo: 'https://github.com/Yzquile/islandsoul',
            icon: <IconFolder />,
        },
    ];

    const education: Education[] = [
        {
            school: 'Siquijor State College',
            program: 'BS Information Technology',
            period: '2022 — Present',
            detail: 'Focused on full‑stack development, web apps, and infrastructure basics.',
        },
    ];

    const achievements: Achievement[] = [
        { title: 'Programmer of the Year 2023' },
    ];

    const socials: Social[] = [
        {
            label: 'Facebook',
            href: 'https://www.facebook.com/profile.php?id=61581458731740',
            icon: <IconFacebook />,
        },
        {
            label: 'GitHub',
            href: 'https://github.com/Yzquile',
            icon: <IconGitHub />,
        },
        // { label: 'TikTok', href: 'https://tiktok.com/', icon: <IconTikTok /> },
    ];

    // Tech stack WITH COLORS (brand-accurate)
    const techStack = [
        {
            name: 'React',
            color: 'bg-blue-500/10 border-blue-200/20 text-blue-400',
            icon: <FaReact />,
        },
        {
            name: 'Javascript',
            color: 'bg-yellow-400/10 border-yellow-200/20 text-yellow-400',
            icon: <IoLogoJavascript />,
        },
        {
            name: 'Node.js',
            color: 'bg-green-500/10 border-green-200/20 text-green-500',
            icon: <FaNodeJs />,
        },
        {
            name: 'Express',
            color: 'bg-gray-500/10 border-gray-200/20 dark:text-gray-300 text-gray-500',
            icon: <SiExpress />,
        },
        {
            name: 'MongoDB',
            color: 'bg-green-600/10 border-green-200/20 text-green-600',
            icon: <SiMongodb />,
        },
        {
            name: 'Tailwind',
            color: 'bg-sky-400/10 border-sky-200/20 text-sky-400',
            icon: <SiTailwindcss />,
        },
        { name: 'Git', color: 'bg-red-600/10 border-red-200/20 text-red-600', icon: <FaGitAlt /> },
        {
            name: 'GitHub',
            color: 'bg-black text-white dark:bg-white dark:text-black',
            icon: <IconGitHub />,
        },
        { name: 'HTML5', color: 'bg-red-600/10 border-red-200/20 text-red-600', icon: <FaHtml5 /> },
        { name: 'CSS3', color: 'bg-blue-600/10 border-blue-200/20 text-blue-600', icon: <FaCss3Alt /> },
    ];

    // Colorful project folder icons
    const projectColors = [
        'bg-blue-600 text-white',
        'bg-orange-600 text-white',
        'bg-purple-600 text-white',
    ];

    const projectsWithColors = projects.map((p, i) => ({
        ...p,
        color: projectColors[i % projectColors.length],
    }));

    return (
        <>
            <Head title="Portfolio • Jonathan (joensal.ninja)">
                <meta
                    name="description"
                    content="Jonathan — Full-stack developer (Laravel + Inertia + React). Portfolio, projects, education, achievements, and tech stack."
                />
            </Head>

            <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-black dark:text-neutral-100">
                {/* Header */}
                <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 text-sm font-semibold"
                        >
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm ring-1 ring-black/10 dark:bg-white dark:text-black dark:ring-white/10">
                                JA
                            </span>
                            <span className="text-neutral-900 dark:text-neutral-100">
                                Jo Ensal
                            </span>
                        </Link>
                        <div className="flex items-center gap-3">
                            <ThemeToggle />
                            {/* {auth.user ? (
                                <NavButton href={dashboard.url()}>
                                    Dashboard
                                </NavButton>
                            ) : (
                                <>
                                    <NavLink href={login.url()}>Log in</NavLink>
                                    {canRegister && (
                                        <NavButton href={register.url()}>
                                            Sign up
                                        </NavButton>
                                    )}
                                </>
                            )} */}
                        </div>
                    </div>
                </header>

                {/* Page body */}
                <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
                    {/* Row 1: Profile (left) + Stats + About (right) */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                        {/* Profile card */}
                        <section className="lg:col-span-4">
                            <Card className="p-6">
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative">
                                        <img
                                            src={profile.avatar}
                                            alt={profile.name}
                                            className="h-28 w-28 rounded-2xl object-cover ring-1 ring-neutral-200 dark:ring-neutral-800"
                                        />
                                        {profile.available && (
                                            <span className="absolute -right-2 bottom-1 inline-flex items-center rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow ring-1 ring-black/5">
                                                AVAILABLE
                                            </span>
                                        )}
                                    </div>

                                    <h1 className="mt-4 text-2xl leading-6 font-bold">
                                        {profile.name}
                                    </h1>
                                    <Badge className="mt-2">
                                        {profile.role}
                                    </Badge>

                                    <p className="mt-2 inline-flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
                                        <IconPin />
                                        {profile.location}
                                    </p>

                                    <div className="mt-5 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
                                        <a
                                            href={profile.emailTo}
                                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-black/10 hover:bg-neutral-800 sm:col-span-3 dark:bg-white dark:text-black dark:ring-white/10 dark:hover:bg-neutral-200"
                                        >
                                            <IconMail />
                                            Send Email
                                        </a>
                                        {/* <a
                                            href={profile.resumeUrl}
                                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
                                        >
                                            <IconDoc />
                                            Resume
                                        </a> */}
                                        <a
                                            href={profile.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
                                        >
                                            <IconGitHub />
                                            GitHub
                                        </a>
                                    </div>

                                    <div className="mt-5">
                                        <p className="text-xs tracking-wide text-neutral-500 dark:text-neutral-400">
                                            SOCIALS
                                        </p>
                                        <div className="mt-3 flex items-center justify-center gap-3">
                                            {socials.map((s) => (
                                                <a
                                                    key={s.label}
                                                    href={s.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800"
                                                    aria-label={s.label}
                                                    title={s.label}
                                                >
                                                    {s.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </section>

                        {/* Stats + About - ADD COLORED ICONS */}
                        <section className="space-y-6 lg:col-span-8">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <Card className="p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-sm">
                                            <IconBriefcase />
                                        </div>
                                        <div>
                                            <p className="text-2xl leading-6 font-semibold">
                                                4
                                            </p>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                Projects Completed
                                            </p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-5">
                                    <div className="flex items-start gap-4">
                                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-sm">
                                            <IconCode />
                                        </div>
                                        <div>
                                            <p className="text-2xl leading-6 font-semibold">
                                                10
                                            </p>
                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                Technologies Stack
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* About - ADD COLORED BADGES */}
                            <Card className="p-6">
                                <div className="flex items-start gap-4">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-sm">
                                        <IconPlusCircle />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            About Me
                                        </h2>
                                        <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                                            {about}
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-600 px-3 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-cyan-500/20">
                                                Web Development
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-blue-500/20">
                                                React
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-600 px-3 py-1 text-xs font-medium text-white shadow-sm ring-1 ring-rose-500/20">
                                                Laravel
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </section>
                    </div>

                    {/* Row 2: Projects with COLORFUL ICONS */}
                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                        <section className="lg:col-span-8">
                            <Card className="p-0">
                                <SectionHeader
                                    title="Recent Projects"
                                    action={
                                        <a
                                            href={profile.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                                        >
                                            View All
                                        </a>
                                    }
                                />
                                <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
                                    {projectsWithColors.map((p) => (
                                        <li
                                            key={p.title}
                                            className="group flex items-start justify-between p-5"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-sm ring-1 ring-black/10 ${p.color}`}
                                                >
                                                    <IconFolder />
                                                </div>
                                                <div>
                                                    <p className="font-medium">
                                                        {p.title}
                                                    </p>
                                                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                                                        {p.description}
                                                    </p>
                                                    {p.tags && (
                                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                                            {p.tags.map((t) => (
                                                                <Badge
                                                                    key={t}
                                                                    variant="soft"
                                                                >
                                                                    {t}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mt-1 flex shrink-0 items-center gap-3">
                                                {p.repo && (
                                                    <a
                                                        className="gap-1. 5 inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
                                                        href={p.repo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        <IconGitHub />
                                                        Repo
                                                    </a>
                                                )}
                                                {p.href && (
                                                    <a
                                                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
                                                        href={p.href}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Live
                                                        <IconArrowUpRight />
                                                    </a>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </section>

                        {/* Education & Achievements - ADD COLORED ICONS */}
                        <section className="lg: col-span-4 space-y-6">
                            <Card className="p-0">
                                <SectionHeader
                                    title="Education"
                                    icon={
                                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                                            <IconGraduationCap />
                                        </div>
                                    }
                                />
                                <ol className="p-5">
                                    {education.map((e, i) => (
                                        <li
                                            key={e.school}
                                            className="relative pl-6"
                                        >
                                            <span className="absolute top-1.5 left-0 h-2 w-2 rounded-full bg-purple-500" />
                                            <p className="text-sm font-semibold">
                                                {e.program}
                                            </p>
                                            <p className="dark: text-xs text-neutral-400 text-neutral-500">
                                                {e.school}
                                            </p>
                                            <div className="mt-2 inline-flex items-center gap-2">
                                                <Badge variant="soft">
                                                    {e.period}
                                                </Badge>
                                            </div>
                                            {i < education.length - 1 && (
                                                <div className="dark: my-4 h-px w-full bg-neutral-200 bg-neutral-800" />
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </Card>

                            <Card className="p-0">
                                <SectionHeader
                                    title="Achievements"
                                    icon={
                                        <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
                                            <IconAward />
                                        </div>
                                    }
                                />
                                <ul className="space-y-2 p-5">
                                    {achievements.map((a, i) => {
                                        const colors = [
                                            'bg-blue-600',
                                            'bg-orange-600',
                                            'bg-purple-600',
                                        ];
                                        return (
                                            <li
                                                key={a.title}
                                                className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                                            >
                                                <span className="inline-flex items-center gap-2">
                                                    <span
                                                        className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-white ${colors[i % colors.length]}`}
                                                    >
                                                        <IconAward />
                                                    </span>
                                                    {a.title}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Card>
                        </section>
                    </div>

                    {/* Row 3: COLORFUL TECH STACK */}
                    <section className="mt-6">
                        <Card className="p-0">
                            <SectionHeader
                                title="Tech Stack"
                                icon={
                                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-pink-600 text-white">
                                        <IconCode />
                                    </div>
                                }
                            />
                            <div className="flex flex-wrap gap-3 p-5">
                                {techStack.map((t) => (
                                    <span
                                        key={t.name}
                                        className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium shadow-sm ring-1 ring-black/10 dark:ring-white/10 ${t.color}`}
                                    >
                                        <span className="inline-flex h-5 w-5 items-center justify-center">
                                            {t.icon}
                                        </span>
                                        {t.name}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </section>

                    <footer className="dark: mt-8 border-t border-neutral-200 border-neutral-800 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
                        © {new Date().getFullYear()} Built by yours truly • Built with
                        Laravel, Inertia, React & Tailwind and deployed with Hostinger.
                    </footer>
                </main>
            </div>

            <ChatWidget serverMode={false} />
        </>
    );
}

/* ---------------------------------- */
/* UI atoms                           */
/* ---------------------------------- */

function Card({
    children,
    className = '',
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={[
                'rounded-2xl border border-neutral-200 bg-white shadow-sm ring-1 ring-black/5 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-white/5',
                className,
            ].join(' ')}
        >
            {children}
        </div>
    );
}

function Badge({
    children,
    className = '',
    variant = 'solid',
    size = 'md',
    pill,
}: {
    children: React.ReactNode;
    className?: string;
    variant?: 'solid' | 'soft';
    size?: 'sm' | 'md' | 'lg';
    pill?: boolean;
}) {
    const base =
        'inline-flex items-center gap-1 font-medium ring-1 ring-black/5 dark:ring-white/10';
    const sizes =
        size === 'sm'
            ? 'text-[11px] px-2 py-0.5'
            : size === 'lg'
              ? 'text-xs px-3 py-1'
              : 'text-xs px-2.5 py-0.5';
    const rounded = pill ? 'rounded-full' : 'rounded-md';
    const tones =
        variant === 'soft'
            ? 'bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300'
            : 'bg-neutral-900 text-white dark:bg-white dark:text-black';
    return (
        <span className={[base, sizes, rounded, tones, className].join(' ')}>
            {children}
        </span>
    );
}

function SectionHeader({
    title,
    action,
    icon,
}: {
    title: string;
    action?: React.ReactNode;
    icon?: React.ReactNode;
}) {
    return (
        <div className="flex items-center justify-between rounded-t-2xl border-b border-neutral-200 bg-neutral-50 px-5 py-3 dark:border-neutral-800 dark:bg-neutral-900/60">
            <div className="flex items-center gap-2">
                {icon ? (
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700">
                        {icon}
                    </div>
                ) : (
                    <div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-neutral-900 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:ring-neutral-700">
                        <IconFolder />
                    </div>
                )}
                <h3 className="text-sm font-semibold">{title}</h3>
            </div>
            {action}
        </div>
    );
}

/* Header nav small atoms */
function NavButton({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="inline-flex items-center rounded-lg bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white shadow-sm ring-1 ring-black/10 hover:bg-neutral-800 dark:bg-white dark:text-black dark:ring-white/10 dark:hover:bg-neutral-200"
        >
            {children}
        </Link>
    );
}
function NavLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-900"
        >
            {children}
        </Link>
    );
}

/* ---------------------------------- */
/* Icons (inline, no deps)            */
/* ---------------------------------- */

function IconBriefcase() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M9 3h6a2 2 0 0 1 2 2v1h3v13H4V6h3V5a2 2 0 0 1 2-2Zm0 3h6V5H9v1Z" />
        </svg>
    );
}
function IconCode() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="m8 17-5-5 5-5 1.5 1.5L6 12l3.5 3.5L8 17Zm8 0 1.5-1.5L21 12l-3.5-3.5L16 7l5 5-5 5Zm-4.5 2h-2l3-14h2l-3 14Z" />
        </svg>
    );
}
function IconPlusCircle() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 5v4h4v2h-4v4h-2v-4H7v-2h4V7h2Z" />
        </svg>
    );
}
function IconFolder() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M10 4 12 6h8v14H4V4h6Z" />
        </svg>
    );
}
function IconArrowUpRight() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M7 7h10v10h-2V9.414l-8.293 8.293-1.414-1.414L13.586 8H7V7Z" />
        </svg>
    );
}
function IconPin() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
        </svg>
    );
}
function IconMail() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M4 6h16v12H4V6Zm8 5L4.5 7.5h15L12 11Z" />
        </svg>
    );
}
function IconDoc() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M7 2h7l5 5v13H7V2Zm7 1.5V8h4.5L14 3.5Z" />
        </svg>
    );
}
function IconGitHub() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.06.8-.23 1.64-.34 2.48-.35.84.01 1.68.12 2.47.35 1.92-1.33 2.76-1.06 2.76-1.06.55 1.43.2 2.49.1 2.75.64.72 1.03 1.64 1.03 2.77 0 3.97-2.35 4.84-4.58 5.09.36.32.67.94.67 1.9v2.82c0 .28.18.61.69.5A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}
function IconAward() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 2a6 6 0 1 0 0 12A6 6 0 0 0 12 2Zm-2 14-4 4v2l5-2 1 2 1-2 5 2v-2l-4-4H10Z" />
        </svg>
    );
}
function IconFacebook() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M13 22v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3V1h-3a5 5 0 0 0-5 5v3H6v4h3v9h4Z" />
        </svg>
    );
}
function IconLinkedIn() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 8h3v13H3V8Zm6 0h3v2h.1c.4-.7 1.4-1.5 3-1.5 3.2 0 3.9 2.1 3.9 4.7V21h-3v-6.8c0-1.6 0-3.7-2.2-3.7-2.2 0-2.5 1.7-2.5 3.6V21H9V8Z" />
        </svg>
    );
}
function IconTikTok() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M17 2h3a8 8 0 0 1-6-2v13a5 5 0 1 1-5-5c.4 0 .7 0 1 .1V6c-.3 0-.7-.1-1-.1A8 8 0 1 0 17 14V2Z" />
        </svg>
    );
}

/* ---------------------------------- */
/* NEW TECH ICONS (colorful)          */
/* ---------------------------------- */

function IconReact() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="currentColor" strokeWidth="1. 5" />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="8"
        ry="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        transform="rotate(-60 12 12)"
      />
    </svg>
  );
}

function IconJS() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M3 3h18v18H3V3Zm15 12c0 1.66-1 3-3 3s-3-1.34-3-3h1.5c0 . 83. 67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9H15v6ZM9 15c0 1.66-1 3-3 3s-3-1.34-3-3h1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V9H9v6Z" />
    </svg>
  );
}

function IconNode() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2. 18L18. 82 7 12 10.82 5. 18 7 12 4.18ZM5 8. 82l6 3.36v6.64l-6-3.36V8.82Zm8 10v-6.64l6-3.36v6.64l-6 3.36Z" />
    </svg>
  );
}

function IconExpress() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconMongoDB() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 16-6-3V8l6-3 6 3v8l-6 3Z" />
    </svg>
  );
}

function IconTailwind() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 6c-2 0-3.33. 67-4 2 1-1.33 2.17-1.83 3.5-1.5. 76. 19 1.3.74 1.9 1.35C14.5 9 15. 83 10 18 10c2 0 3.33-. 67 4-2-1 1.33-2.17 1.83-3.5 1.5-.76-. 19-1.3-.74-1.9-1.35C15.5 7 14.17 6 12 6Zm-4 6c-2 0-3.33.67-4 2 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C10. 5 15 11.83 16 14 16c2 0 3.33-.67 4-2-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C11.5 13 10.17 12 8 12Z" />
    </svg>
  );
}

function IconGit() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="m21. 62 11.11-9.73-9.73a1.34 1.34 0 0 0-1.9 0L8.04 3.33l2.42 2.42c.57-. 2 1.23-.07 1.69.4. 46. 47.6 1.14.39 1.72l2.33 2.33c.58-. 2 1.25-.07 1.72. 39a1.34 1.34 0 0 1 0 1.9 1.34 1.34 0 0 1-2.28-. 95c-.02-.17-.02-.34.03-.5l-2.17-2.17v5.73a1.34 1.34 0 0 1 . 37 2.19 1.34 1.34 0 0 1-1.9-1.9c. 21-.21.48-.34.76-.39V7.76c-. 28-.05-.55-.18-.76-. 39a1.34 1.34 0 0 1-. 37-1.46L8.84 3.48l-6.46 6.45a1.34 1.34 0 0 0 0 1.9l9.73 9.73c.52. 52 1.38.52 1.9 0l9.61-9.55a1.34 1.34 0 0 0 0-1.9Z" />
    </svg>
  );
}

function IconHTML() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4 3h16l-1.5 16-6. 5 2-6.5-2L4 3Zm3 4 . 5 6H12l-. 25 3-2.75 1-2.75-1L6 13h2l. 1 1.5 1.4. 5 1.4-. 5.15-2H6l-. 25-3H12l. 15-2H7Z" />
    </svg>
  );
}

function IconCSS() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M4 3h16l-1.5 16-6.5 2-6.5-2L4 3Zm11. 5 9.5H9l. 25 3 2.75 1 2.75-1 .3-3. 5H9l-.25-2.5h6.5L15. 5 7H8. 5l-. 25-2h9.25l-. 5 5. 5Z" />
    </svg>
  );
}

function IconGraduationCap() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12 3 1 9l4 2. 18v6L12 21l7-3. 82v-6l2-1.09V17h2V9L12 3Zm6. 82 6L12 12. 72 5.18 9 12 5.28 18.82 9ZM17 15. 99l-5 2.73-5-2.73v-3.72l5 2.73 5-2.73v3.72Z" />
    </svg>
  );
}
