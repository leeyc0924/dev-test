import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("react");
  const click = () => {
    axios.get("/api").then((res) => {
      setMsg(res.data);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={click}>hello world 출력</button>
        <div>
          {msg}
        </div>
      </header>
    </div>
  );
}

export default App;
