import { Card, CardContent } from "@/components/ui/card";

//Displaying the scoreboard for X and O wins
// This component is used in GameBoard.js to show the current score of X and O players

export default function ScoreBoard({ xWins, oWins }) {
  return (
    <div className="flex space-x-4">
      <Card className="bg-[#36486C] text-center text-white">
        <CardContent className="p-2">
          <div className="text-sm">X Wins:</div>
          <div className="text-lg font-bold">{xWins}</div>
        </CardContent>
      </Card>
      <Card className="bg-[#36486C] text-center text-white">
        <CardContent className="p-2">
          <div className="text-sm">O Wins:</div>
          <div className="text-lg font-bold">{oWins}</div>
        </CardContent>
      </Card>
    </div>
  );
}
