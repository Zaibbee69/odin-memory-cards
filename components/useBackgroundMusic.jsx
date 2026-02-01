import { useEffect, useRef, useState } from "react";

export function useBackgroundMusic(src) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, [src]);

  const play = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    isPlaying ? pause() : play();
  };

  return { play, pause, toggle, isPlaying };
}
