"use client";
import { useState, useCallback, useEffect } from "react";
import Tile from "./Tile";
import ScoreBoard from "./ScoreBoard";

export default function GameBoard() {
  const [tiles, setTiles] = useState(new Map());
  const [isXNext, setIsXNext] = useState(true);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [message, setMessage] = useState("");

  const handleClick = useCallback((index) => {
    if (tiles.get(index) || message) return;
    const newTiles = new Map(tiles);
    newTiles.set(index, isXNext ? "X" : "O");
    setTiles(newTiles);
    setIsXNext(!isXNext);
  }, [tiles, isXNext, message]);

  const checkWinner = useCallback(() => {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8], // Rows
      [0,3,6],[1,4,7],[2,5,8], // Rows and Columns
      [0,4,8],[2,4,6] // Diagonals
    ];
    for (const [a,b,c] of lines) {
      const v = tiles.get(a);
      if (v && v === tiles.get(b) && v === tiles.get(c)) return v;
    }
    return null;
  }, [tiles]);

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setMessage(`${winner} Wins!`);
      if (winner === "X") setXWins(xWins+1);
      else setOWins(oWins+1);
    } else if (tiles.size === 9) {
      setMessage("It's a draw! Try again");
    }
  }, [tiles, checkWinner, xWins, oWins]);

  const resetGame = () => {
    setTiles(new Map());
    setIsXNext(true);
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <ScoreBoard xWins={xWins} oWins={oWins} />
      <div className="board">
        {Array.from({ length: 9 }).map((_, index) => (
          <Tile
            key={index}
            value={tiles.get(index)}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {message && <div className="message">{message}</div>}
      <button className="new-game-button" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}
