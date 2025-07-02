export default function ScoreBoard({ xWins, oWins }) {
  return (
    <div className="scoreboard">
      <div className="scorecard">
        <div>X Wins</div>
        <div>{xWins}</div>
      </div>
      <div className="scorecard">
        <div>O Wins</div>
        <div>{oWins}</div>
      </div>
    </div>
  );
}
