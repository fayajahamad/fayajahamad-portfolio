import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <section className="not-found"><span className="section-kicker">ERROR / ROUTE NOT FOUND</span><h1>404<span>.</span></h1><p>That endpoint doesn&apos;t exist.</p><Link className="btn btn-primary" href="/"><ArrowLeft size={17}/> Return home</Link></section>}
