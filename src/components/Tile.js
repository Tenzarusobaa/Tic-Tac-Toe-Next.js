"use client";
import { cn } from "@/lib/utils";

export default function Tile({ value, onClick }) {
  let bgColor = "bg-[#1C264B]";
  if (value === "X") bgColor = "bg-[#204463]"; // Color for X
  if (value === "O") bgColor = "bg-[#395C73]";// Color for O

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-4xl sm:text-5xl font-bold flex items-center justify-center rounded-xl",
        bgColor
      )}
    >
      {value}
    </button>
  );
}
