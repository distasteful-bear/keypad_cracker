import "./App.css";
import JamesKeyPad from "./JamesKeyPad";
import JadenKeyPad from "./JadenKeyPad";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  // need to add Jaden's keypad and also setup the submit / show all options stuff.
  return (
    <div>
      <div>
        <h1>Keyboard Breaker</h1>
        <p>
          This is a simple website built by James and Jaden Metz to learn some
          simple react concepts.
        </p>
      </div>
      {!submitted ? (
        <div>
          <p>James' KeyPad</p>
          <JamesKeyPad />

          <p>Jaden's KeyPad</p>
          <JadenKeyPad />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
