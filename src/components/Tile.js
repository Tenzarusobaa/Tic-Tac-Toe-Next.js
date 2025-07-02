"use client";
export default function Tile({ value, onClick }) {
  let className = "tile default";
  if (value === "X") className = "tile x";
  if (value === "O") className = "tile o";

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
