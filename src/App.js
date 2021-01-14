import React from "react";
import AddTask from "./components/AddTask/addTask";
import List from "./components/List/List";

import "./App.css";

function App() {
  return (
    <div className="mainClass">
      <h1>My Tasks</h1>
      <AddTask />
      <List />
    </div>
  );
}

export default App;
