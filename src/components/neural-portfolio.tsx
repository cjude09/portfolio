"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Braces, BriefcaseBusiness, CircleUserRound, Mail, Network, X } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/data/experience";
import { featuredProjects } from "@/data/projects";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

type NodeId = "about" | "systems" | "work" | "experience" | "contact";

const nodes: Array<{ id: NodeId; label: string; code: string; x: string; y: string; icon: typeof Network }> = [
  { id: "about", label: "Identity", code: "N-01", x: "19%", y: "21%", icon: CircleUserRound },
  { id: "systems", label: "Systems", code: "N-02", x: "79%", y: "20%", icon: Braces },
  { id: "work", label: "Work", code: "N-03", x: "82%", y: "68%", icon: Network },
  { id: "experience", label: "Timeline", code: "N-04", x: "17%", y: "70%", icon: BriefcaseBusiness },
  { id: "contact", label: "Connect", code: "N-05", x: "50%", y: "88%", icon: Mail },
];

const expertise = [
  ["Interface", "React, Next.js, TypeScript, Tailwind CSS, mobile-first product systems"],
  ["Services", "Node.js, Express, .NET, PHP, REST APIs, authentication and integrations"],
  ["Data", "PostgreSQL, pgvector, Firestore, Prisma and durable domain modeling"],
  ["Cloud", "Google Cloud, Azure, Firebase, Cloud Run, CI/CD and production operations"],
  ["Intelligence", "RAG, semantic search, document ingestion, embeddings and LLM workflows"],
] as const;

export function NeuralPortfolio() {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className={cn("neural-page", activeNode && "has-active-node")} aria-label="Interactive neural portfolio">
      <div className="neural-grid" aria-hidden="true" />
      <header className="neural-masthead">
        <div><span className="signal-dot" />SYSTEM ONLINE</div>
        <p>CRIS JUDE / FULL-STACK SOFTWARE ENGINEER</p>
        <Link href="/" className="neural-back"><ArrowLeft size={13} /> Editorial view</Link>
      </header>

      <motion.div
        className="neural-stage"
        animate={{ x: activeNode && !reduceMotion ? "-20%" : "0%", scale: activeNode ? 0.88 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg className="neural-links" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <g className="primary-links">
            <path d="M500 350 L190 147" /><path d="M500 350 L790 140" /><path d="M500 350 L820 476" /><path d="M500 350 L170 490" /><path d="M500 350 L500 616" />
          </g>
          <g className="secondary-links">
            <path d="M190 147 L790 140" /><path d="M790 140 L820 476" /><path d="M820 476 L500 616" /><path d="M500 616 L170 490" /><path d="M170 490 L190 147" />
          </g>
          <circle className="signal signal-one" r="5"><animateMotion dur="5s" repeatCount="indefinite" path="M500 350 L790 140" /></circle>
          <circle className="signal signal-two" r="4"><animateMotion dur="6s" repeatCount="indefinite" path="M170 490 L500 350 L820 476" /></circle>
        </svg>

        <div className="core-node" aria-label="Portfolio network core">
          <span className="core-orbit orbit-one" /><span className="core-orbit orbit-two" />
          <div><strong>CJ</strong><span>CORE / 13+Y</span></div>
        </div>

        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <button
              type="button"
              className={cn("network-node", activeNode === node.id && "active")}
              style={{ left: node.x, top: node.y }}
              onClick={() => setActiveNode(node.id)}
              aria-pressed={activeNode === node.id}
              key={node.id}
            >
              <span className="node-pulse" /><Icon size={18} />
              <span className="node-copy"><small>{node.code}</small><strong>{node.label}</strong></span>
            </button>
          );
        })}
      </motion.div>

      <div className="neural-instruction" aria-hidden={Boolean(activeNode)}><span>SELECT A NODE</span><i /> <span>EXPLORE THE NETWORK</span></div>

      <AnimatePresence mode="wait">
        {activeNode && (
          <motion.aside
            key={activeNode}
            className="neural-panel"
            initial={reduceMotion ? false : { opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-live="polite"
          >
            <button className="panel-close" type="button" onClick={() => setActiveNode(null)} aria-label="Close information panel"><X size={18} /></button>
            <NodePanel node={activeNode} />
          </motion.aside>
        )}
      </AnimatePresence>
    </section>
  );
}

function NodePanel({ node }: { node: NodeId }) {
  if (node === "about") return <><PanelHead code="N-01" label="Identity" title="Engineering across the whole product." /><p className="panel-lead">I&apos;m Cris Jude, a Full-Stack Software Engineer building dependable web, mobile, cloud, and AI-powered applications from Cebu, Philippines.</p><p>I work from architecture and data models through backend services and the final interface. The goal is not complexity—it is a system that solves the right problem and remains understandable after launch.</p><Link className="panel-link" href="/about">Open full profile <ArrowUpRight size={14} /></Link></>;

  if (node === "systems") return <><PanelHead code="N-02" label="Systems map" title="One practice. Multiple layers." /><div className="system-stack">{expertise.map(([name, description], index) => <div key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{description}</p></div>)}</div></>;

  if (node === "work") return <><PanelHead code="N-03" label="Selected work" title="Systems with real constraints." /><div className="panel-projects">{featuredProjects.map((project, index) => <Link href={`/projects/${project.slug}`} key={project.id}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{project.title}</h3><p>{project.shortDescription}</p></div><ArrowUpRight size={15} /></Link>)}</div><Link className="panel-link" href="/projects">Open project archive <ArrowUpRight size={14} /></Link></>;

  if (node === "experience") return <><PanelHead code="N-04" label="Timeline" title="A practice built since 2011." /><div className="panel-timeline">{experiences.slice(0, 5).map((item) => <div key={`${item.company}-${item.period}`}><span>{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div>)}</div><Link className="panel-link" href="/experience">Open full timeline <ArrowUpRight size={14} /></Link></>;

  return <><PanelHead code="N-05" label="Connection" title="Start with the problem." /><p className="panel-lead">Have a product challenge, a system that needs untangling, or an idea worth testing?</p><p>Tell me who it affects, what is not working, and what a useful outcome would look like.</p><a className="neural-email" href={`mailto:${profile.email}`}><Mail size={17} />{profile.email}<ArrowUpRight size={16} /></a></>;
}

function PanelHead({ code, label, title }: { code: string; label: string; title: string }) {
  return <header className="panel-head"><p><span>{code}</span>{label}</p><h2>{title}</h2></header>;
}
