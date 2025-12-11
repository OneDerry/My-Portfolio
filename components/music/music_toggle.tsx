"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Howl } from "howler";
import { SONGS } from "./songs";
import { TbMusic, TbMusicOff } from "react-icons/tb";

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
      return;
    }

    const createHowl = (index: number) => {
      const sound = new Howl({
        src: [SONGS[index]],
        volume: 0.4,
        html5: true,
        onend: () => {
          const nextIndex = getNextIndex();
          setCurrentIndex(nextIndex);
        },
      });
      howlRef.current = sound;
      sound.play();
    };

    createHowl(currentIndex);

    return () => {
      howlRef.current?.stop();
      howlRef.current?.unload();
      howlRef.current = null;
    };
  }, [enabled, hasSongs, currentIndex, getNextIndex]);

  useEffect(() => {
    if (!enabled || !hasSongs) return;
    if (!howlRef.current) return;
    if (!SONGS[currentIndex]) return;

    howlRef.current.stop();
    howlRef.current.unload();

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
  }, [currentIndex, enabled, hasSongs, getNextIndex]);

  const label = !hasSongs ? (
    "No tracks"
  ) : enabled ? (
    <TbMusicOff size={30} />
  ) : (
    <TbMusic size={30} />
  );

  return (
    <button
      type="button"
      onClick={() => hasSongs && setEnabled((v) => !v)}
      disabled={!hasSongs}
      className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground transition-colors hover-cta disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
}
