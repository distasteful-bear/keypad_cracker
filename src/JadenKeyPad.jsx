import { useState } from "react";

export default function JadenKeyPad() {
  // need to replicate James' keypad, and add the 4 char limit.

  const [keypadValue, setKeypadValue] = useState("");

  return (
    <div>
      <div>
        <p>Please enter the keys which are used in the password:</p>
      </div>
      <div></div>
      <div className="container">
        <div className="row-container"></div>
        <div className="row-container"></div>
        <div className="row-container"></div>
        <div className="row-container"></div>
      </div>
    </div>
  );
}
