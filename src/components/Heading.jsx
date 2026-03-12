import "../styles/heading.css";
import logo from "../assets/react.svg";

export default function Heading() {
  return (
    <header>
      <p id="heading-eyebrow">From Beginner to Advanced Questions</p>
      <div id="heading-main">
        <h1>
          <img src={logo} alt="react-logo" srcset="" /> The React Flash Cards.
        </h1>
        <p>Test your react knowledge by answering the flashcards below</p>
      </div>
    </header>
  );
}
