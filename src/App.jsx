import "./App.css";
import Card from "./components/Card";
import Heading from "./components/Heading";
import { data } from "./data/questionData";

export default function App() {
  return (
    <div id="centering-div">
      <Heading />
      <main>
        {data.map((data, i) => {
          return (
            <Card
              question={data.question}
              questionNumber={i + 1}
              answer={data.answer}
              difficulty={data.difficulty}
              key={i}
            />
          );
        })}
      </main>
    </div>
  );
}
