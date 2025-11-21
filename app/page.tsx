"use client";

import { useMemo, useState } from "react";
import squares from "./list";
import { Mountains_of_Christmas } from "next/font/google";

const mountains = Mountains_of_Christmas({
  weight: ["700"],
  subsets: ["latin"],
});

function shuffleArray(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Home() {
  const selected = useMemo(() => {
    const shuffledSquares = [...squares];
    shuffleArray(shuffledSquares);
    shuffledSquares[12] = "Free Space";
    return shuffledSquares.slice(0, 25);
  }, []);

  const [markedSquares, setMarkedSquares] = useState<Set<number>>(new Set());

  const toggleSquare = (index: number) => {
    setMarkedSquares((previous) => {
      const nextMarks = new Set(previous);
      nextMarks.has(index) ? nextMarks.delete(index) : nextMarks.add(index);
      return nextMarks;
    });
  };

  return (
    <div className="mx-auto max-w-5xl bg-slate-50/95 px-3 py-4 sm:px-6 sm:py-6 drop-shadow rounded-lg">
      <div className="w-full text-center text-4xl sm:text-6xl lg:text-7xl my-4 leading-tight">
        <h1 className={mountains.className}>
          Christmas Movie Bingo
        </h1>
      </div>
      <div className="grid grid-cols-5 border border-green-600 rounded-md overflow-hidden bg-white">
        {selected.map((element, index) => {
          return (
            <button
              type="button"
              key={`${element}-${index}`}
              onClick={() => toggleSquare(index)}
              aria-pressed={markedSquares.has(index)}
              className="relative flex items-center justify-center aspect-square text-center border border-green-600 p-2 sm:p-3 lg:p-4 text-xs sm:text-sm md:text-base leading-snug hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 transition-colors"
            >
              <span className="print:text-sm">{element}</span>
              {markedSquares.has(index) && (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-red-600 text-6xl sm:text-7xl md:text-8xl font-black leading-none print:hidden select-none">
                  ×
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="w-full text-center pt-2">
        <p className="m-auto">
          Made by Olivia and Max. Report bugs{" "}
          <a
            className="underline"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
