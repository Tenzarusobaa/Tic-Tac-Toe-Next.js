"use client";
import { useState, useCallback, useEffect } from "react";
import Tile from "./Tile";
import ScoreBoard from "./ScoreBoard";
import { Button } from "@/components/ui/button";

export default function GameBoard() {
  const [tiles, setTiles] = useState(new Map());
  const [isXNext, setIsXNext] = useState(true);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = useCallback(
    (index) => {
      if (tiles.get(index) || message) return;
      const newTiles = new Map(tiles);
      newTiles.set(index, isXNext ? "X" : "O"); // Set the tile value based on whose turn it is (color in Tile.js)
      setTiles(newTiles);
      setIsXNext(!isXNext);
    },
    [tiles, isXNext, message]
  );

  const checkWinner = useCallback(() => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // Horizontal
      [0,3,6],[1,4,7],[2,5,8], // Vertical
      [0,4,8],[2,4,6]// Diagonal

      // 0 1 2
      // 3 4 5
      // 6 7 8  


    ];
    for (const [a,b,c] of lines) {
      const v = tiles.get(a);
      if (v && v === tiles.get(b) && v === tiles.get(c)) {
        return v;
      }
    }
    return null;
  }, [tiles]);

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setMessage(`${winner} Wins!`);
      if (winner === "X") setXWins((prev) => prev + 1);
      else setOWins((prev) => prev + 1);
    } else if (tiles.size === 9) { // All tiles filled and draw condition
      setMessage("It's a draw! Try again");
    }
  }, [tiles, checkWinner]);

  const resetGame = () => { // Reset the game state
    setTiles(new Map());
    setIsXNext(true);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <ScoreBoard xWins={xWins} oWins={oWins} />
      <div className="grid grid-cols-3 gap-2 p-2 bg-[#36486C] rounded-2xl">
        {Array.from({ length: 9 }).map((_, index) => (
          <Tile
            key={index}
            value={tiles.get(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {message && <div className="text-white text-xl">{message}</div>}
      <Button onClick={resetGame} className="bg-[#36486C] text-white">New Game</Button>
    </div>
  );
}
