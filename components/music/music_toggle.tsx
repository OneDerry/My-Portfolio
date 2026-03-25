"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Howl } from "howler";
import { SONGS } from "./songs";
import { Music, VolumeOff } from "lucide-react";

export function MusicToggle() {
  const [enabled, setEnabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const howlRef = useRef<Howl | null>(null);

  const hasSongs = SONGS.length > 0;

  const getNextIndex = useMemo(() => {
    return () => {
      if (SONGS.length <= 1) return 0;
      let next = currentIndex;
      while (next === currentIndex) {
        next = Math.floor(Math.random() * SONGS.length);
      }
      return next;
    };
  }, [currentIndex]);

  useEffect(() => {
    if (!enabled || !hasSongs) {
      howlRef.current?.stop();
      howlRef.current?.unload();
      howlRef.current = null;
      return;
    }

    if (howlRef.current) {
      howlRef.current.stop();
      howlRef.current.unload();
      howlRef.current = null;
    }

    const sound = new Howl({
      src: [SONGS[currentIndex]],
      volume: 0.4,
      html5: true,
      onend: () => {
        const nextIndex = getNextIndex();
        setCurrentIndex(nextIndex);
      },
    });
    howlRef.current = sound;
    sound.play();

    return () => {
      howlRef.current?.stop();
      howlRef.current?.unload();
      howlRef.current = null;
    };
  }, [enabled, hasSongs, currentIndex, getNextIndex]);

  const label = !hasSongs ? (
    "No tracks"
  ) : enabled ? (
    <VolumeOff size={30} />
  ) : (
    <Music size={30} />
  );

  return (
    <button
      type="button"
      onClick={() => hasSongs && setEnabled((v) => !v)}
      disabled={!hasSongs}
      title={enabled ? "Pause background music" : "Play background music"}
      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover-cta disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
}
