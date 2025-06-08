// utils/episodes.ts
import safeIntro from "../../assets/podcasts/IntroduçãoaoSAFeparaGrandesEmpresas.wav";
import fundSafe from "../../assets/podcasts/FundamentosDoSAFe.wav";
import artSafe from "../../assets/podcasts/SAFePlanejamentoRitmoseDevOps.wav";

export interface Episode {
  id: number;
  title: string;
  audioSrc: string;
  description: string;
  minLevel: number;
}

export const episodes: Episode[] = [
  {
    id: 1,
    title: "Introdução ao SAFe",
    audioSrc: safeIntro,
    description: "Entenda o básico da metodologia SAFe.",
    minLevel: 1,
  },
  {
    id: 2,
    title: "Fundamentos do SAFe",
    audioSrc: fundSafe,
    description: "Como os princípios Lean influenciam o SAFe.",
    minLevel: 2,
  },
  {
    id: 3,
    title: "ARTs e PI Planning",
    audioSrc: artSafe,
    description: "Organizando os times em Agile Release Trains.",
    minLevel: 4,
  },
];
