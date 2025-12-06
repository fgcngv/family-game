
"use client";

import { useState } from "react";

export default function Spinner({ players }: { players: string[] }) {
  const [isSpinning, setIsSpinning] = useState(false);

  return (
    <div
className={`w-48 h-48 rounded-full border-4 border-gray-400 flex items-center justify-center text-center transition-all ${
    isSpinning ? "animate-spin-5s" : ""
      }`}
    >
      <p className="text-lg font-bold">🎡 Spin</p>
    </div>
  );
}
