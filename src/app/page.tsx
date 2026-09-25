import { NeuralPortfolio } from "@/components/neural-portfolio";
import { neuralPanels } from "@/components/neural-panels";
import { profile } from "@/data/profile";

export default function Home() {
  return <NeuralPortfolio panels={neuralPanels} name={profile.name} role={profile.title} />;
}
