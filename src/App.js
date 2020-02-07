import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/materialize.min.css";

import Header from "./components/layout/header";

import About from "./components/layout/about";
import Definition from "./components/layout/definition";
import RequestList from "./components/layout/request-list";
import AddMessage from "./components/layout/addmessage";

import "./App.css";

function App() {
  return (
    <div className="App container row">
      <Header />
      <main>
        <About />
        <Definition />

        <AddMessage />

        <RequestList />
      </main>
    </div>
  );
}

export default App;
