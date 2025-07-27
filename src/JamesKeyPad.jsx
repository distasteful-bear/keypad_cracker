import { useState } from "react";

export default function JamesKeyPad() {
  const [keypadValue, setKeypadValue] = useState("");

  function addToKeyPad(num) {
    var new_value = keypadValue + String(num);
    setKeypadValue(new_value);
  }
  function removeLastChar() {
    var new_value = keypadValue;
    if (new_value.length > 0) {
      setKeypadValue(new_value.slice(0, -1));
    }
  }

  return (
    <div>
      <div>
        <p>Please enter the keys which are used in the password:</p>
      </div>
      <div>
        <input value={keypadValue} />
      </div>
      <div className="container">
        <div className="row-container">
          <button onClick={() => addToKeyPad(1)}>1</button>
          <button onClick={() => addToKeyPad(2)}>2</button>
          <button onClick={() => addToKeyPad(3)}>3</button>
        </div>
        <div className="row-container">
          <button onClick={() => addToKeyPad(4)}>4</button>
          <button onClick={() => addToKeyPad(5)}>5</button>
          <button onClick={() => addToKeyPad(6)}>6</button>
        </div>
        <div className="row-container">
          <button onClick={() => addToKeyPad(7)}>7</button>
          <button onClick={() => addToKeyPad(8)}>8</button>
          <button onClick={() => addToKeyPad(9)}>9</button>
        </div>
        <div className="row-container">
          <button onClick={() => setKeypadValue("")}>C</button>
          <button onClick={() => addToKeyPad(0)}>0</button>
          <button onClick={() => removeLastChar()}>X</button>
        </div>
      </div>
    </div>
  );
}
