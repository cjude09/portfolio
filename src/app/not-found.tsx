import Link from "next/link";

export default function NotFound() { return <section className="not-found container"><p className="eyebrow"><span>404</span>Not found</p><h1>This page isn&apos;t part of the system.</h1><p>The route may have moved, or it may never have existed.</p><Link href="/" className="button">Return home</Link></section>; }
