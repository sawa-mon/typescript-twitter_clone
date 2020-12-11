import React, { useEffect, useState } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { CleanUp } from "./CleanUp";

const App: React.FC = () => {
  const [status, setStatus] = useState<string | number>("text");
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log("useEffect in App invoked !");
    document.title = `current value is ${counter}`;
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <p>{status}</p>
        <button onClick={() => setStatus(1)}>Button</button>
        <p>{input}</p>
        <input type="text" value={input} onChange={onChangeHandler} />
        <p>{counter}</p>
        <button onClick={() => setCounter((preCounter) => preCounter + 1)}>
          Increment
        </button>
        {display && <CleanUp />}
        <button onClick={() => setDisplay(!display)}>Toggle display</button>
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
};

export default App;
