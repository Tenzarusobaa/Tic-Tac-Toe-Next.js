import GameBoard from "@/components/GameBoard";

// This is the main page of the Tic Tac Toe game
// It imports the GameBoard component and displays it with a background image
// The background image is set to 'Nightlife.png' and the game board is centered on the page

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Nightlife.png')" }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-white text-3xl font-bold mb-4">Tic Tac Toe</h1>
        <GameBoard />
      </div>
    </main>
  );
}
