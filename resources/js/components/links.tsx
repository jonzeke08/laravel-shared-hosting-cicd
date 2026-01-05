import { Link } from '@inertiajs/react';
import type { RouteDefinition } from '@/wayfinder';

type Href = string | RouteDefinition<any>;

const toHref = (href: Href) => (typeof href === 'string' ? href : href.url);

export function PrimaryLink({
  href,
  children,
  className = '',
}: {
  href: Href;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={toHref(href)}
      className={`inline-flex items-center rounded-md px-5 py-2 text-sm ${className}`}
    >
      {children}
    </Link>
  );
}