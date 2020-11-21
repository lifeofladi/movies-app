import React from "react";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
