import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notes } from "@/lib/notes";
import { ContactCta } from "@/components/contact-cta";
export const metadata: Metadata = {title:"Field notes",description:"Short practical notes from network engineering and security labs."};
export default function NotesPage(){return <><section className="inner-hero"><div className="container"><span className="section-kicker">ENGINEERING JOURNAL / FIELD NOTES</span><h1>Curiosity, <em>documented.</em></h1><p>Short, practical reflections from building labs and learning how infrastructure behaves under real constraints.</p></div></section><section className="section notes-directory"><div className="container"><div className="notes-list">{notes.map(note=><Link className="note-row" href={`/notes/${note.id}`} key={note.id}><span>{note.number} / {note.category}</span><div><h2>{note.title}</h2><p>{note.excerpt}</p></div><span>{note.time}</span><ArrowUpRight size={22}/></Link>)}</div></div></section><ContactCta/></>}
