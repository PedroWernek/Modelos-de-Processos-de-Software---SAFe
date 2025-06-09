import { useState, useEffect, useRef } from "react";
import VolumeControl from "./VolumeControl"; // Importa o novo componente

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const LofiPlayer = () => {
  const [lofiEnabled, setLofiEnabled] = useState(false);
  const [lofiVolume, setLofiVolume] = useState<number>(10);
  const lofiPlayerRef = useRef<any>(null);

  useEffect(() => {
    const createPlayer = () => {
      if (window.YT && !lofiPlayerRef.current) {
        lofiPlayerRef.current = new window.YT.Player("lofi-iframe-container", {
          height: "0",
          width: "0",
          videoId: "jfKfPfyJRdk", // Exemplo: Lofi Girl video ID
          playerVars: {
            autoplay: lofiEnabled ? 1 : 0,
            loop: 1,
            playlist: "jfKfPfyJRdk", // Necessário para o loop funcionar
          },
          events: {
            onReady: (event: any) => {
              event.target.setVolume(lofiVolume);
              if (lofiEnabled) {
                event.target.playVideo();
              }
            },
          },
        });
      }
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = createPlayer;
    } else {
      createPlayer();
    }
  }, []); // Executa apenas uma vez para carregar a API

  useEffect(() => {
    const player = lofiPlayerRef.current;
    if (player && typeof player.playVideo === "function") {
      if (lofiEnabled) {
        player.playVideo();
      } else {
        player.pauseVideo();
      }
    }
  }, [lofiEnabled]);

  useEffect(() => {
    const player = lofiPlayerRef.current;
    if (player && typeof player.setVolume === "function") {
      player.setVolume(lofiVolume);
    }
  }, [lofiVolume]);

  return (
    <>
      <div id="lofi-iframe-container" style={{ display: "none" }}></div>
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#00000088",
          padding: "15px 20px",
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            gap: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <label>🎵 Música de fundo 🎵 </label>
          {lofiEnabled && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <VolumeControl
                volume={lofiVolume}
                onVolumeChange={setLofiVolume}
              />
            </div>
          )}
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: !lofiEnabled ? "#339989" : "#888",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={() => setLofiEnabled((prev) => !prev)}>
            {lofiEnabled ? "Desativar" : "Ativar"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LofiPlayer;
