import "./styles.css";
import { useState } from "react";

var emojis = {
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojis[userInput];
    if (meaning === undefined) {
      meaning = "Sorry, we dont have this emoji!";
    }
    setMeaning(meaning);
  }

  function emojiHandler(emoji) {
    var meaning = emojis[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <span style={{ color: "orange" }}>fruit</span> Interpreter
      </h1>
      <input onChange={inputChangeHandler}></input>
      <div id="res" style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {meaning}
      </div>
      <br></br>
      <br></br>
      <h3>Emojis we know:</h3>
      <ul>
        {Object.keys(emojis).map((emoji) => {
          return (
            <li
              key={emoji}
              onClick={() => emojiHandler(emoji)}
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
