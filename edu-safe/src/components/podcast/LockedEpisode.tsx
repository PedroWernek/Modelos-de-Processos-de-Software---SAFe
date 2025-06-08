import React from "react";

interface LockedEpisodeProps {
  minXP: number;
}

const LockedEpisode: React.FC<LockedEpisodeProps> = ({ minXP }) => {
  return (
    <div
      style={{
        backgroundColor: "#00000088",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
      }}>
      🔒 Este episódio está bloqueado. Você precisa de pelo menos {minXP} XP.
    </div>
  );
};

export default LockedEpisode;
