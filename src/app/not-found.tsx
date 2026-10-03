import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found shell">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This moment isn&apos;t on the schedule.</h1>
      <p>The page you were looking for may have moved.</p>
      <Link className="button button--dark" href="/">Return home</Link>
    </main>
  );
}

