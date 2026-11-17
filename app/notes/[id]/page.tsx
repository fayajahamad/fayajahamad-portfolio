import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft, ArrowUpRight, Check} from "lucide-react";
import {notes,getNote} from "@/lib/notes";
type Props = {params:Promise<{id:string}>};
export function generateStaticParams(){return notes.map(({id})=>({id}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {id}=await params; const n=getNote(id);return {title:n?.title||"Note",description:n?.excerpt};}
export default async function NotePage({params}:Props){const {id}=await params;const note=getNote(id);if(!note) notFound();return <section className="section note-detail"><div className="container note-content"><Link href="/notes" className="back-link"><ArrowLeft size={16}/> ALL FIELD NOTES</Link><span className="section-kicker">{note.category} / {note.time}</span><h1>{note.title}</h1><p className="note-intro">{note.excerpt}</p><div className="note-body"><h2>Key observations</h2>{note.points.map((p)=><div className="note-point" key={p}><Check size={18}/><p>{p}</p></div>)}<blockquote>{note.takeaway}</blockquote></div><Link className="text-link" href="/work">EXPLORE RELATED PROJECTS <ArrowUpRight size={16}/></Link></div></section>}
