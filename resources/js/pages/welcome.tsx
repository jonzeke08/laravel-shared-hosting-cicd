import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import type { SharedData } from '@/types';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Step = {
  title: string;
  detail: string;
  icon: React.ReactNode;
};

type FAQ = {
  q: string;
  a: string;
};

export default function Welcome({ canRegister = true }: { canRegister?: boolean }) {
  const { auth } = usePage<SharedData>().props;

  const features: Feature[] = [
    {
      title: 'Stealth CI/CD',
      description:
        'Push to main → deploy runs over SSH. Code is pulled, Composer installed, caches rebuilt — silent and swift.',
      icon: <IconShuriken />,
    },
    {
      title: 'Fortress Security',
      description:
        'public_html is a symlink to /public. The real app lives outside the webroot — hardened for shared hosting.',
      icon: <IconKatana />,
    },
    {
      title: 'No Server Node',
      description:
        'Vite assets are built locally and committed. No Node on the server. Fewer moving parts, fewer surprises.',
      icon: <IconSmoke />,
    },
    {
      title: 'Modern Stack',
      description:
        'Laravel 12 + Inertia + React + Tailwind. Dev-only providers excluded in production for lean installs.',
      icon: <IconLaravel />,
    },
    {
      title: 'Predictable Releases',
      description:
        'composer install --no-dev, artisan caches, optional migrations. Simple to ship, simple to roll back.',
      icon: <IconLayers />,
    },
    {
      title: 'Shared Hosting Native',
      description:
        'Designed for Hostinger shared hosting: no root required. Just SSH and a reliable symlink.',
      icon: <IconServer />,
    },
  ];

  const steps: Step[] = [
    {
      title: 'Commit & Push',
      detail:
        'Develop locally. Run “npm run build”. Commit code plus public/build. Push to main.',
      icon: <IconGit />,
    },
    {
      title: 'Action Executes',
      detail:
        'GitHub Actions SSHs in, fetches latest code, installs Composer deps, and rebuilds caches.',
      icon: <IconWorkflow />,
    },
    {
      title: 'Instant Update',
      detail:
        'Site updates without touching public_html. Symlink stays intact. Structure remains secure.',
      icon: <IconCheck />,
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'Do I need Hostinger Git Deploy?',
      a: "No. We avoid it to keep public_html as a symlink and the app outside the webroot. GitHub Actions handles deployment over SSH.",
    },
    {
      q: 'Where do I put my .env?',
      a: 'Keep .env on the server at your project root. It should not be committed. The workflow does not touch .env.',
    },
    {
      q: 'How are assets built?',
      a: 'Locally with Vite. Commit public/build so the server never needs Node. If you prefer, add a CI job to build and upload only public/build.',
    },
    {
      q: 'Can I run migrations automatically?',
      a: 'Yes. Uncomment the migrate line in the workflow to run “php artisan migrate --force” during deploys.',
    },
  ];

  return (
    <>
      <Head title="Jo Ensal Ninja">
        <meta
          name="description"
          content="Jo Ensal Ninja — a sleek, ninja‑themed Laravel + Inertia + React starter optimized for Hostinger shared hosting with GitHub Actions CI/CD."
        />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>

      {/* Global background: deep black gradient with subtle accents */}
      <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505] text-gray-100">
        <Header canRegister={canRegister} isAuthenticated={Boolean(auth.user)} />

        {/* Hero */}
        <section className="relative">
          {/* Decorative aura behind hero */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 blur-2xl" aria-hidden="true">
            <div className="mx-auto h-64 max-w-3xl rounded-full bg-gradient-to-r from-rose-700/30 via-fuchsia-700/30 to-slate-700/30" />
          </div>

          <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 sm:pt-16 sm:pb-16">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-300 shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-rose-500" />
                Jo Ensal Ninja
              </span>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Stealthy deployments. Solid structure. Shared‑hosting friendly.
              </h1>
              <p className="mt-4 text-base leading-7 text-gray-300">
                Keep your app outside public_html, deploy via GitHub Actions, and serve Vite assets
                built locally. No Docker, no VPS — just a clean, secure, repeatable workflow.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {auth.user ? (
                  <PrimaryLink href={dashboard.url()}>Go to Dashboard</PrimaryLink>
                ) : (
                  <>
                    <PrimaryLink href={login.url()}>Log in</PrimaryLink>
                    {canRegister && <SecondaryLink href={register.url()}>Get Started</SecondaryLink>}
                  </>
                )}
                <AnchorLink href="#how-it-works">See how it works</AnchorLink>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-left sm:grid-cols-4">
                <Stat label="Laravel" value="12" />
                <Stat label="Inertia" value="React" />
                <Stat label="Assets" value="Vite 5" />
                <Stat label="Hosting" value="Hostinger" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-white">Ninja‑grade features</h2>
            <p className="mt-2 text-sm text-gray-400">
              Everything you need — nothing you don’t. Simple, fast, and secure.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-white">How the deployment works</h2>
            <p className="mt-2 text-sm text-gray-400">
              Push to main, and your server updates itself — keeping the symlink intact.
            </p>
          </div>

          <ol className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <StepCard key={s.title} index={i + 1} {...s} />
            ))}
          </ol>

          <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-dashed border-gray-700 p-4 text-sm text-gray-300">
            <p>
              Tip: Keep public/build committed. If you prefer CI‑built assets, add a build job and
              upload only public/build — still no touching public_html.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
            <p className="mt-2 text-sm text-gray-400">Short answers to help you ship confidently.</p>
          </div>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4">
            {faqs.map((f) => (
              <FAQItem key={f.q} {...f} />
            ))}
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

/* ---------------------------------- */
/* Header + Footer                    */
/* ---------------------------------- */

function Header({
  canRegister,
  isAuthenticated,
}: {
  canRegister: boolean;
  isAuthenticated: boolean;
}) {
  return (
    <header className="mx-auto w-full max-w-7xl px-6 py-5">
      <nav className="flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white shadow-sm">
            <IconNinja />
          </span>
          <span className="text-white">Jo Ensal Ninja</span>
        </Link>

        <div className="flex items-center gap-3 text-sm">
          {isAuthenticated ? (
            <SecondaryLink href={dashboard.url()}>Dashboard</SecondaryLink>
          ) : (
            <>
              <PlainLink href={login.url()}>Log in</PlainLink>
              {canRegister && <SecondaryLink href={register.url()}>Sign up</SecondaryLink>}
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Jo Ensal Ninja</p>
        <div className="flex items-center gap-4">
          <a
            href="https://laravel.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200"
          >
            Laravel
          </a>
          <a
            href="https://inertiajs.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200"
          >
            Inertia
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-200"
          >
            React
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------- */
/* Links                              */
/* ---------------------------------- */

function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-md bg-rose-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-600"
    >
      {children}
    </Link>
  );
}

function SecondaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-md border border-gray-700 bg-black/40 px-5 py-2 text-sm font-medium text-gray-100 transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-700"
    >
      {children}
    </Link>
  );
}

function PlainLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-100 transition hover:bg-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-700"
    >
      {children}
    </Link>
  );
}

/* ---------------------------------- */
/* Cards + Items                      */
/* ---------------------------------- */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-gray-800 bg-black/40 p-4 shadow-sm">
      <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function FeatureCard({ title, description, icon }: Feature) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/40 p-6 shadow-sm transition hover:shadow md:p-7">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-600 via-fuchsia-600 to-slate-600 opacity-70" />
      <div className="flex items-start gap-4">
        <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-gray-200 ring-1 ring-gray-800 group-hover:scale-105">
          {icon}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

function StepCard({ index, title, detail, icon }: Step & { index: number }) {
  return (
    <li className="relative rounded-xl border border-gray-800 bg-black/40 p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-gray-200 ring-1 ring-gray-800">
          {index}
        </span>
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-gray-200 ring-1 ring-gray-800">
          {icon}
        </div>
      </div>
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-gray-300">{detail}</p>
    </li>
  );
}

function FAQItem({ q, a }: FAQ) {
  return (
    <details className="group rounded-lg border border-gray-800 bg-black/40 p-5 shadow-sm open:shadow md:p-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <h3 className="text-base font-medium text-white">{q}</h3>
        <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-gray-300 ring-1 ring-gray-800 transition group-open:rotate-45">
          <IconPlus />
        </span>
      </summary>
      <p className="mt-3 text-sm leading-6 text-gray-300">{a}</p>
    </details>
  );
}

/* ---------------------------------- */
/* Icons (inline SVG)                 */
/* ---------------------------------- */

function IconNinja() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      {/* Simple ninja mask */}
      <path d="M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9-9-4.03-9-9 4.03-9 9-9Z" />
      <rect x="5" y="9" width="14" height="6" rx="3" className="fill-black" />
      <circle cx="9" cy="12" r="1.5" className="fill-white" />
      <circle cx="15" cy="12" r="1.5" className="fill-white" />
    </svg>
  );
}

function IconShuriken() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2 9 9 2 12l7 3 3 7 3-7 7-3-7-3-3-7Z" />
      <circle cx="12" cy="12" r="1.5" className="fill-black" />
    </svg>
  );
}

function IconKatana() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M3 20l6-6 2 2-6 6-2-2Zm10-8 8-8 2 2-8 8-2-2Z" />
      <rect x="11" y="11" width="2" height="2" />
    </svg>
  );
}

function IconSmoke() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M6 18c0-2 2-3 4-3s4 1 4 3-2 3-4 3-4-1-4-3Zm4-6c-2 0-4-1-4-3s2-3 4-3 4 1 4 3-2 3-4 3Z" />
    </svg>
  );
}

function IconLaravel() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M3 7 12 2l9 5-9 5-9-5Zm0 10 9 5 9-5v-6l-9 5-9-5v6Z" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="m12 3 9 5-9 5-9-5 9-5Zm0 8 9 5-9 5-9-5 9-5Z" />
    </svg>
  );
}

function IconServer() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M3 4h18v6H3V4Zm0 10h18v6H3v-6Zm3 2v2h2v-2H6Zm0-10v2h2V6H6Z" />
    </svg>
  );
}

function IconGit() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="m12 2 10 10-10 10L2 12 12 2Zm1 8a2 2 0 1 0-2 0v4a2 2 0 1 0 2 0v-4Z" />
    </svg>
  );
}

function IconWorkflow() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 4h6v2h-6v-2Z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="m9 16-4-4 2-2 2 2 6-6 2 2-8 8Z" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2h6Z" />
    </svg>
  );
}

function AnchorLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-300 underline underline-offset-4 transition hover:text-white"
    >
      {children}
    </a>
  );
}