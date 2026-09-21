import type { Metadata } from "next";
import { NeuralPortfolio } from "@/components/neural-portfolio";

export const metadata: Metadata = {
  title: "Neural Portfolio",
  description: "An interactive neural-network view of Cris Jude A. Gramatica's full-stack engineering practice.",
  alternates: { canonical: "/neural" },
};

export default function NeuralPage() {
  return <NeuralPortfolio />;
}
