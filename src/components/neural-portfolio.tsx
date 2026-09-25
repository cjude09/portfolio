"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion, type Transition } from "motion/react";
import { Braces, BriefcaseBusiness, CircleUserRound, Mail, Network, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type NodeId = "about" | "systems" | "work" | "experience" | "contact";

type Point = { x: number; y: number };

/** Positions are percentages of the map box, so the links and the nodes always share one coordinate system. */
const core = { desktop: { x: 50, y: 47 }, mobile: { x: 50, y: 45 } };

const nodes: Array<{ id: NodeId; label: string; code: string; icon: typeof Network; desktop: Point; mobile: Point }> = [
  { id: "about", label: "Identity", code: "N-01", icon: CircleUserRound, desktop: { x: 17, y: 16 }, mobile: { x: 25, y: 10 } },
  { id: "systems", label: "Systems", code: "N-02", icon: Braces, desktop: { x: 83, y: 16 }, mobile: { x: 75, y: 10 } },
  { id: "work", label: "Work", code: "N-03", icon: Network, desktop: { x: 85, y: 78 }, mobile: { x: 75, y: 80 } },
  { id: "experience", label: "Timeline", code: "N-04", icon: BriefcaseBusiness, desktop: { x: 15, y: 78 }, mobile: { x: 25, y: 80 } },
  { id: "contact", label: "Connect", code: "N-05", icon: Mail, desktop: { x: 50, y: 100 }, mobile: { x: 50, y: 100 } },
];

const ring: NodeId[] = ["about", "systems", "work", "contact", "experience"];
const ease = [0.22, 1, 0.36, 1] as const;

export function NeuralPortfolio({ panels, name, role }: { panels: Record<NodeId, ReactNode>; name: string; role: string }) {
  const [activeNode, setActiveNode] = useState<NodeId | null>(null);
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLElement>(null);
  const lastNode = useRef<NodeId | null>(null);

  const dock: Transition = { duration: reduceMotion ? 0 : 0.6, ease };

  const open = useCallback((id: NodeId) => {
    lastNode.current = id;
    setActiveNode(id);
  }, []);

  const close = useCallback(() => {
    setActiveNode(null);
    const id = lastNode.current;
    if (id) requestAnimationFrame(() => document.getElementById(`node-${id}`)?.focus({ preventScroll: true }));
  }, []);

  // On narrow screens the panel sits below the map, so bring it into view when a node opens.
  useEffect(() => {
    if (!activeNode || !window.matchMedia("(max-width: 900px)").matches) return;
    const frame = requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" }));
    return () => cancelAnimationFrame(frame);
  }, [activeNode, reduceMotion]);

  // Move focus to the new panel's heading so keyboard and screen reader users land on what just opened.
  const focusTitle = useCallback((content: HTMLDivElement | null) => {
    content?.querySelector<HTMLElement>("[data-panel-title]")?.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "Escape" && activeNode) close();
      const index = Number(event.key) - 1;
      if (index >= 0 && index < nodes.length) open(nodes[index].id);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeNode, close, open]);

  const boot = (delay: number) => (reduceMotion ? {} : { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay, ease } });

  return (
    <section className={cn("neural-page", activeNode && "has-active-node")} aria-label="Interactive system map of Cris Jude's portfolio">
      <div className="neural-grid" aria-hidden="true" />

      <header className="neural-masthead">
        <p className="neural-status"><span className="signal-dot" aria-hidden="true" />{role}</p>
        <nav aria-label="Other views">
          <Link href="/editorial">Read as a page</Link>
          <Link href="/projects">All projects</Link>
        </nav>
      </header>

      <motion.div layout transition={dock} className="neural-map">
        <svg className="neural-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {(["desktop", "mobile"] as const).map((mode) => (
            <g key={mode} className={`links-${mode}`}>
              {ring.map((id, index) => {
                const from = nodes.find((node) => node.id === id)![mode];
                const to = nodes.find((node) => node.id === ring[(index + 1) % ring.length])![mode];
                return <motion.line key={id} className="ring-link" x1={from.x} y1={from.y} x2={to.x} y2={to.y} {...fade(reduceMotion, 0.7 + index * 0.05)} />;
              })}
              {nodes.map((node, index) => (
                <motion.line
                  key={node.id}
                  className={cn("spoke", activeNode === node.id && "live")}
                  x1={core[mode].x} y1={core[mode].y} x2={node[mode].x} y2={node[mode].y}
                  {...fade(reduceMotion, 0.3 + index * 0.08)}
                />
              ))}
            </g>
          ))}
        </svg>

        <motion.div layout transition={dock} className="map-anchor core-anchor" style={anchor(core.desktop, core.mobile)}>
          <motion.div className="core-node" {...boot(0)}>
            <span className="core-orbit" aria-hidden="true" />
            <p className="core-code" aria-hidden="true">N-00 · Core</p>
            <h1>{name}</h1>
            <p className="core-role">{role}</p>
            <Link href="/editorial" className="core-link">Read the full portfolio</Link>
          </motion.div>
        </motion.div>

        {nodes.map((node, index) => {
          const Icon = node.icon;
          const active = activeNode === node.id;
          return (
            <motion.div layout transition={dock} className="map-anchor" style={anchor(node.desktop, node.mobile)} key={node.id}>
              <motion.button
                {...boot(0.45 + index * 0.08)}
                id={`node-${node.id}`}
                type="button"
                className={cn("network-node", active && "active")}
                onClick={() => (active ? close() : open(node.id))}
                aria-expanded={active}
                aria-controls="neural-panel"
                aria-keyshortcuts={String(index + 1)}
              >
                <Icon size={18} aria-hidden="true" />
                <span className="node-copy"><small aria-hidden="true">{node.code}</small><strong>{node.label}</strong></span>
                <kbd aria-hidden="true">{index + 1}</kbd>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.p
        className="neural-instruction"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: activeNode ? 0 : 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.4, delay: activeNode ? 0 : 0.3, ease }}
        aria-hidden={Boolean(activeNode)}
      >
        Select a node<span className="keys">, or press <kbd>1</kbd>–<kbd>5</kbd></span>
      </motion.p>

      <AnimatePresence>
        {activeNode && (
          <motion.aside
            ref={panelRef}
            id="neural-panel"
            className="neural-panel"
            aria-labelledby={`panel-title-${activeNode}`}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 48 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, ease }}
          >
            <button className="panel-close" type="button" onClick={close} aria-label="Close panel" aria-keyshortcuts="Escape"><X size={18} /></button>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeNode}
                ref={focusTitle}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: reduceMotion ? 0 : 0.12 } }}
                transition={{ duration: reduceMotion ? 0 : 0.28, ease }}
              >
                {panels[activeNode]}
              </motion.div>
            </AnimatePresence>
          </motion.aside>
        )}
      </AnimatePresence>
    </section>
  );
}

function anchor(desktop: Point, mobile: Point) {
  return { "--x": `${desktop.x}%`, "--y": `${desktop.y}%`, "--mx": `${mobile.x}%`, "--my": `${mobile.y}%` } as CSSProperties;
}

function fade(reduceMotion: boolean | null, delay: number) {
  return reduceMotion ? {} : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6, delay, ease } };
}
