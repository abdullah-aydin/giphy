import React from "react";
//Components
import Header from "./components/Header";
import Content from "./components/Content";
//Styles
import "./App.scss";

function App() {
  return (
    <div id="app" className="grid">
      <Header />
      <Content />
    </div>
  );
}

export default App;
