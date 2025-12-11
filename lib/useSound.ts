"use client";
import { useEffect, useRef } from "react";
import { Howl } from "howler";

export function useSound(src: string, volume = 1) {
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [src],
      volume,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [src, volume]);

  const play = () => soundRef.current?.play();
  const stop = () => soundRef.current?.stop();

  return { play, stop };
}
