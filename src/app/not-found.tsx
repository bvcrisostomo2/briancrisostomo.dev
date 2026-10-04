import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">This page couldn&apos;t be found.</h1>
      <Link href="/" className="mt-6 inline-block text-muted hover:text-accent">
        ← Back home
      </Link>
    </section>
  );
}
