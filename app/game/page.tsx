
"use client";

import { useLocalStorage } from "@/lib/useLocalStorage";
import { commands } from "@/lib/commands";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GamePage() {
  const [players] = useLocalStorage<string[]>("players", []);
  const [selectedPlayer, setSelectedPlayer] = useState<string>("");
  const [selectedCommand, setSelectedCommand] = useState<string>("");
  const [spin, setSpin] = useState(false);

  const startGame = () => {
    setSpin(true);

    setTimeout(() => {
      setSpin(false);

      const p = players[Math.floor(Math.random() * players.length)];
      const c = commands[Math.floor(Math.random() * commands.length)];

      setSelectedPlayer(p);
      setSelectedCommand(c);
    }, 3500);
  };

  return (
    // <div className="min-h-screen flex flex-col items-center gap-6 p-6">

    //   <h1 className="text-3xl font-bold">🎮 Game Time!</h1>

    //   <div
    //     className={`w-48 h-48 rounded-full border-4 border-gray-400 flex items-center justify-center text-center ${
    //       spin ? "animate-spin-slow" : {selectedPlayer}
    //     }`}
    //   >
    //     <p className="text-lg font-bold">🎡 Spin</p>
    //   </div>

    //   <button
    //     onClick={startGame}
    //     className="px-6 py-3 bg-red-500 text-white rounded"
    //   >
    //     Start Game
    //   </button>

    //   {selectedPlayer && (
    //     <div className="text-center mt-4">
    //       <h2 className="text-xl font-bold">Selected Player:</h2>
    //       <p className="text-2xl text-blue-600 font-bold">{selectedPlayer}</p>

    //       <h2 className="text-xl font-bold mt-4">Command:</h2>
    //       <p className="text-2xl text-green-600 font-bold">{selectedCommand}</p>
    //     </div>
    //   )}
    // </div>



    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8 p-6">
      
    <h1 className="text-4xl font-extrabold text-center text-slate-900">
      🎮 Game Time!
    </h1>

    {/* Wheel Card */}
    <Card className="w-64 h-64 flex items-center justify-center rounded-full border-4 border-gray-300 shadow-lg relative">
      <div
        className={`w-56 h-56 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold transition-transform duration-2000 ${
          spin ? "animate-spin-fast" : ""
        }`}
      >
        🎡 Spin
      </div>
    </Card>

    <Button
      onClick={startGame}
      variant="default"
      size="lg"
      className="px-8 py-4 bg-green-600 cursor-pointer font-bold hover:bg-green-700"
      disabled={spin}
    >
      {spin ? "Spinning..." : "Start Game"}
    </Button>

    {selectedPlayer && (
      <Card className="w-full max-w-sm p-4 mt-4 shadow-lg bg-white border border-gray-200">
        <CardContent className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-slate-800">
            Selected Player:
          </h2>
          <p className="text-2xl font-extrabold text-blue-600">
            {selectedPlayer}
          </p>

          <h2 className="text-xl font-bold text-slate-800 mt-2">
            Command:
          </h2>
          <p className="text-2xl font-extrabold text-center text-green-600">
            {selectedCommand}
          </p>
        </CardContent>
      </Card>
    )}
  </div>
  );
}













// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { useState } from "react";

// export default function GamePage() {
//   const [spin, setSpin] = useState(false);
//   const [selectedPlayer, setSelectedPlayer] = useState<string>("");
//   const [selectedCommand, setSelectedCommand] = useState<string>("");

//   const players = ["player1", "player2", "player3", "player4", "player5"];
//   const commands = [
//     "Jump",
//     "Run",
//     "Dance",
//     "Sing a song",
//     "Tell a joke",
//   ];

//   const startGame = () => {
//     setSpin(true);
//     setTimeout(() => {
//       setSpin(false);
//       const p = players[Math.floor(Math.random() * players.length)];
//       const c = commands[Math.floor(Math.random() * commands.length)];
//       setSelectedPlayer(p);
//       setSelectedCommand(c);
//     }, 2000); // 2s spin
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8 p-6">
      
//       <h1 className="text-4xl font-extrabold text-center text-slate-900">
//         🎮 Game Time!
//       </h1>

//       {/* Wheel Card */}
//       <Card className="w-64 h-64 flex items-center justify-center rounded-full border-4 border-gray-300 shadow-lg relative">
//         <div
//           className={`w-56 h-56 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 flex items-center justify-center text-white text-xl font-bold transition-transform duration-2000 ${
//             spin ? "animate-spin-slow" : ""
//           }`}
//         >
//           🎡 Spin
//         </div>
//       </Card>

//       <Button
//         onClick={startGame}
//         variant="default"
//         size="lg"
//         className="px-8 py-4"
//         disabled={spin}
//       >
//         {spin ? "Spinning..." : "Start Game"}
//       </Button>

//       {selectedPlayer && (
//         <Card className="w-full max-w-sm p-4 mt-4 shadow-lg bg-white border border-gray-200">
//           <CardContent className="flex flex-col items-center gap-4">
//             <h2 className="text-xl font-bold text-slate-800">
//               Selected Player:
//             </h2>
//             <p className="text-2xl font-extrabold text-blue-600">
//               {selectedPlayer}
//             </p>

//             <h2 className="text-xl font-bold text-slate-800 mt-2">
//               Command:
//             </h2>
//             <p className="text-2xl font-extrabold text-green-600">
//               {selectedCommand}
//             </p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }





// "use client";

// import { useLocalStorage } from "@/lib/useLocalStorage";
// import { commands } from "@/lib/commands";
// import { useEffect, useRef, useState } from "react";
// import confetti from "canvas-confetti";

// export default function GamePage() {
//   const [players] = useLocalStorage<string[]>("players", []);
//   const [selectedPlayer, setSelectedPlayer] = useState<string>("");
//   const [selectedCommand, setSelectedCommand] = useState<string>("");
//   const [rotation, setRotation] = useState(0);
//   const [isSpinning, setIsSpinning] = useState(false);

//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     audioRef.current = new Audio("/spin.mp3"); // <--- add a spin sound file
//   }, []);

//   const spinWheel = () => {
//     if (players.length === 0 || isSpinning) return;

//     setIsSpinning(true);
//     setSelectedPlayer("");
//     setSelectedCommand("");

//     // Play Sound
//     audioRef.current?.play();

//     // Select random player
//     const pIndex = Math.floor(Math.random() * players.length);
//     const p = players[pIndex];
//     const c = commands[Math.floor(Math.random() * commands.length)];

//     const segmentAngle = 360 / players.length;
//     const targetAngle = pIndex * segmentAngle + segmentAngle / 2;

//     const extraSpins = 360 * 80;
//     const finalRotation = extraSpins - targetAngle;

//     setRotation(finalRotation);

//     setTimeout(() => {
//       setSelectedPlayer(p);
//       setSelectedCommand(c);

//       // Throw confetti 🎉
//       confetti({
//         particleCount: 150,
//         spread: 70,
//         origin: { y: 0.4 }
//       });

//       setIsSpinning(false);
//     }, 3600);
//   };

//   // Generate random background colors for wheel slices
//   const sliceColors = players.map((_, i) =>
//     `hsl(${(i * 360) / players.length}, 80%, 65%)`
//   );

//   return (
//     <div className="min-h-screen flex flex-col items-center gap-6 p-6">
//       <h1 className="text-3xl font-bold">🎮 Game Time!</h1>

//       <div className="relative">
//         {/* Arrow */}
//         <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
//           <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-red-600 drop-shadow-xl"></div>
//         </div>

//         {/* Wheel */}
//         <div
//           className="relative w-72 h-72 rounded-full overflow-hidden shadow-xl transition-transform duration-[30000ms] ease-out
// "
//           style={{ transform: `rotate(${rotation}deg)` }}
//         >
//           {players.map((player, index) => {
//             const angle = (360 / players.length) * index;

//             return (
//               <div
//                 key={player}
//                 className="absolute w-1/2 h-1/2 left-1/2 top-1/2 origin-left"
//                 style={{
//                   transform: `rotate(${angle}deg)`,
//                   background: sliceColors[index]
//                 }}
//               />
//             );
//           })}

//           {/* Player Text */}
//           {players.map((player, index) => {
//             const angle = (360 / players.length) * index;
//             return (
//               <div
//                 key={player + "-label"}
//                 className="absolute left-1/2 top-1/2 origin-left"
//                 style={{ transform: `rotate(${angle}deg) translateX(105px)` }}
//               >
//                 <p
//                   className="text-[13px] font-bold whitespace-nowrap"
//                   style={{ transform: `rotate(-${angle}deg)` }}
//                 >
//                   {player}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <button
//         onClick={spinWheel}
//         disabled={isSpinning}
//         className={`px-6 py-3 text-white rounded transition 
//           ${isSpinning ? "bg-gray-400" : "bg-red-500 hover:bg-red-600"}`}
//       >
//         {isSpinning ? "Spinning..." : "Spin Wheel"}
//       </button>

//       {selectedPlayer && (
//         <div className="text-center mt-4 animate-fade-in">
//           <h2 className="text-xl font-bold">Selected Player:</h2>
//           <p className="text-2xl text-blue-600 font-bold">{selectedPlayer}</p>

//           <h2 className="text-xl font-bold mt-4">Command:</h2>
//           <p className="text-2xl text-green-600 font-bold">{selectedCommand}</p>
//         </div>
//       )}
//     </div>
//   );
// }
