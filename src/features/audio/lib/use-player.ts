import { useEffect } from "react";
import { PlayerStore } from "entities/audio";

const player = new PlayerStore();

export function usePlayer(srcAudio: string): PlayerStore {
  useEffect(() => {
    const audioState = new Audio(srcAudio);
    player.setAudio(audioState);

    return () => {
      player.cleanup();
    };
  }, [srcAudio]);

  return player;
}
