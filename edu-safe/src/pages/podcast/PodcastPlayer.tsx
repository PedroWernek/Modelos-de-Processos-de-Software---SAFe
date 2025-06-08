import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api"; // Seus imports
import safeIntro from "../../assets/podcasts/IntroduçãoaoSAFeparaGrandesEmpresas.wav";
import fundSafe from "../../assets/podcasts/FundamentosDoSAFe.wav";
import ArtSafe from "../../assets/podcasts/SAFePlanejamentoRitmoseDevOps.wav";
import bgImage1 from "../../assets/podcast1.jpg";
import bgImage2 from "../../assets/podcast2.jpg";
import bgImage3 from "../../assets/podcast3.jpg";
import CustomButton from "../../components/random/buttons/CustomButton";

// Importando os novos componentes
import EpisodeInfo from "../../components/podcast/EpisodeInfo";
import PlayerControls from "../../components/podcast/PlayerControls";
import LofiPlayer from "../../components/podcast/LofiPlayer";
import LockedEpisode from "../../components/podcast/LockedEpisode";

// Seus dados de episódios
const episodes = [
  {
    id: 1,
    title: "Introdução ao SAFe",
    description: "Entenda o básico da metodologia SAFe.",
    audioSrc: safeIntro,
    minXP: 50,
  },
  {
    id: 2,
    title: "Fundamentos do SAFe",
    description: "Como os princípios Lean influenciam o SAFe.",
    audioSrc: fundSafe,
    minXP: 150,
  },
  {
    id: 3,
    title: "ARTs e PI Planning",
    description: "Organizando os times em Agile Release Trains.",
    audioSrc: ArtSafe,
    minXP: 300,
  },
];

const PodcastPlayerPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState<number>(
    id ? parseInt(id) - 1 : 0,
  );
  const [userXP, setUserXP] = useState<number | null>(null);

  // Estado do Player de Podcast
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [podcastVolume, setPodcastVolume] = useState(100);
  const audioRef = useRef<HTMLAudioElement>(null);

  const current = episodes[currentEpisodeIndex];
  const isLocked = userXP !== null && userXP < current.minXP;

  // Efeito para buscar XP do usuário
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUserXP = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/api/users/xp-level", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserXP(res.data.xp);
      } catch (err) {
        console.error("Erro ao buscar XP:", err);
      }
    };
    fetchUserXP();
  }, []);

  // Efeito para carregar metadados do áudio quando o episódio muda
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setDuration(audio.duration);
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    };
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.load();

    return () => audio.removeEventListener("loadedmetadata", onLoaded);
  }, [currentEpisodeIndex]);

  // Efeito para ajustar o volume do podcast
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = podcastVolume / 100;
    }
  }, [podcastVolume]);

  // Funções de controle do player
  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const changeEpisode = (newIndex: number) => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
    setCurrentEpisodeIndex(newIndex);
  };

  const handleNext = () =>
    changeEpisode((currentEpisodeIndex + 1) % episodes.length);
  const handlePrev = () =>
    changeEpisode(
      currentEpisodeIndex === 0 ? episodes.length - 1 : currentEpisodeIndex - 1,
    );

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio && duration) {
      audio.currentTime = (parseFloat(e.target.value) / 100) * duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const bgImages = [bgImage1, bgImage2, bgImage3];
  const backgroundImage = bgImages[currentEpisodeIndex] || bgImage1;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "60px 20px 60px",
        color: "#fff",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <EpisodeInfo title={current.title} description={current.description} />

      <audio
        ref={audioRef}
        src={current.audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      {isLocked ? (
        <LockedEpisode minXP={current.minXP} />
      ) : (
        <>
          <PlayerControls
            isPlaying={isPlaying}
            progress={progress}
            currentTime={currentTime}
            duration={duration}
            podcastVolume={podcastVolume}
            togglePlay={togglePlay}
            handlePrev={handlePrev}
            handleNext={handleNext}
            handleSeek={handleSeek}
            setPodcastVolume={setPodcastVolume}
            formatTime={formatTime}
          />
          <LofiPlayer />
        </>
      )}

      <div style={{ margin: "100px", textAlign: "center" }}>
        <CustomButton
          backgroundColor="#7de2d1"
          width="20px"
          textColor="#131515"
          text="Voltar aos Módulos"
          fontSize="2rem"
          linkNav={
            localStorage.getItem("token") != null ? "/modulos" : "/autenticar"
          }
        />
      </div>
    </div>
  );
};

export default PodcastPlayerPage;
