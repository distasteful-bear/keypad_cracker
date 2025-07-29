import "./App.css";
import JamesKeyPad from "./JamesKeyPad";
import JadenKeyPad from "./JadenKeyPad";

export default function App() {

  return (
    <div>
      <div>
        <h1>Keyboard Breaker</h1>
        <p>
          This is a simple website built by James and Jaden Metz to learn some
          simple react concepts.
        </p>
      </div>
      <div>
        <p>James' KeyPad</p>
        <JamesKeyPad />

        <p>Jaden's KeyPad</p>
        <JadenKeyPad />
      </div>
    </div>
  );
}