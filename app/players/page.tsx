
"use client";

import { useLocalStorage } from "@/lib/useLocalStorage";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PlayerSetupPage() {
  const router = useRouter();
  const [numPlayers] = useLocalStorage<number>("numPlayers", 0);
  
  const [players, setPlayers] = useLocalStorage<string[]>("players", []);
  const [customNames, setCustomNames] = useState<string[]>(() =>
    Array(numPlayers).fill("")
  );

  console.log("players num : ",numPlayers)
  

  const players2: string[] = [];

  function generatePlayers() {
    for (let i = 1; i <= numPlayers; i++) {
      players.push(`player${i}`);
    }
  }
  
  useEffect(() => {
    if (numPlayers === 0) return; // nothing to generate yet
  
    const list = Array.from({ length: numPlayers }, (_, i) => `player${i + 1}`);
  
    setPlayers(list); // updates state + localStorage (because you're using useLocalStorage)
  
    console.log("generated players:", list);
  }, [numPlayers]);
  

  return (
    <div className="min-h-screen flex flex-col items-center p-6 gap-6">

      <h2 className="text-2xl font-bold">Register Players</h2>

      {/* Custom inputs */}
      <div className="flex flex-col gap-3">
        {players.map((name, i) => (
          <input
            key={i}
            className="border p-2 rounded"
            placeholder={`Player ${i + 1} name`}
            value={players[i]}
            onChange={(e) => {
            }}
          />
        ))}
      </div>


      <button
        onClick={() => router.push("/game")}
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
        Ready To Play
      </button>
    </div>
  );
}
