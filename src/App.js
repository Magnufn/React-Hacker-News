import React from "react";
import TitleBar from "./components/titleBar";
import List from "./components/list";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container">
        <TitleBar />

        <List />
      </main>
    </React.Fragment>
  );
}

export default App;
