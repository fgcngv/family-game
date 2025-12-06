
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "@/lib/useLocalStorage";

export default function HomePage() {
  const router = useRouter();
  const [numPlayers, setNumPlayers] = useLocalStorage<number>("numPlayers", 0);

  console.log("numPlayers : ",numPlayers);

  
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Family Command Game</h1>

      <input
        type="number"
        className="border p-3 rounded text-center"
        placeholder="How many players?"
        value={numPlayers || ""}
        onChange={(e) => setNumPlayers(Number(e.target.value))}
      />

      <button
        onClick={() => router.push("/players")}
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
        Next
      </button>
    </div>
  );
}
