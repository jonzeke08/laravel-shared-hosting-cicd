import { Link } from '@inertiajs/react';
import type { RouteDefinition } from '@/wayfinder';

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options';
type AnyRouteDefinition = RouteDefinition<HttpMethod | HttpMethod[]>;

type Href = string | AnyRouteDefinition;

const toHref = (href: Href): string => (typeof href === 'string' ? href : href.url);

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
      className={`inline-flex items-center rounded-md px-5 py-2 text-sm font-medium ${className}`}
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({
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
      className={`inline-flex items-center rounded-md border px-5 py-2 text-sm ${className}`}
    >
      {children}
    </Link>
  );
}

export function PlainLink({
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
      className={`inline-flex items-center rounded-md px-4 py-2 text-sm ${className}`}
    >
      {children}
    </Link>
  );
}