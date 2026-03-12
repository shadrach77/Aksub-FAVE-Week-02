import "../styles/card.css";
import { useState } from "react";
import DifficultyBubble from "./DifficultyBubble";

export default function Card({ question, questionNumber, answer, difficulty }) {
  const [revealAnswer, setRevealAnswer] = useState(false);

  function handleRevealAnswer() {
    setRevealAnswer((revealAnswer) => !revealAnswer);
  }

  if (revealAnswer) {
    return (
      <div
        className={`card-answer card card-answer-${difficulty.toLowerCase()}`}
        onClick={handleRevealAnswer}
      >
        <header>
          <p>Answer:</p>
          <DifficultyBubble size="sm" difficulty={difficulty} />
        </header>
        <h1>{question}</h1>
        <p>{answer}</p>
      </div>
    );
  } else {
    return (
      <div className={`card-question card`} onClick={handleRevealAnswer}>
        <p>Question {questionNumber}</p>
        <h1>{question}</h1>
        <DifficultyBubble size="md" difficulty={difficulty} />
      </div>
    );
  }
}
