import "../styles/difficulty-bubble.css";

export default function DifficultyBubble({
  size = "sm",
  difficulty = "Medium",
}) {
  return (
    <div
      className={`difficulty-bubble difficulty-bubble-size-${size.toLowerCase()} difficulty-bubble-${difficulty.toLowerCase()}`}
    >
      {difficulty}
    </div>
  );
}
