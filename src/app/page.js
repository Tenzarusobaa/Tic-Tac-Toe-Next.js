import GameBoard from "@/components/GameBoard";

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
