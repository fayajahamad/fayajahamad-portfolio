import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound(){return <section className="not-found container-wide"><span className="eyebrow"><span className="eyebrow-dot"/>404 / NOT FOUND</span><h1>Not every path<br/><span>leads somewhere.</span></h1><p>The page you requested could not be found.</p><Link className="button button-primary" href="/"><ArrowLeft size={16}/> Back to homepage</Link></section>}
