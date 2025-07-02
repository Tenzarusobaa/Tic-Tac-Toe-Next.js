import "./globals.css";
import GameBoard from "../components/GameBoard";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>Tic Tac Toe</h1>
      <GameBoard />
    </main>
  );
}
