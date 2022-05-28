import React from "react";
import AddTask from "./components/AddTask/AddTask";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Tasks from "./components/Tasks/Tasks";
import data from "./data/tasks.json";
import Task from "./components/Task/Task";

function App() {
  return (
    <div className="App">
      <AddTask/>
      {data.map(item=>(
        <Tasks {...item}/>
      ))}
      <Task/>
      <hr></hr>
      <Counter/>
      
    </div>
  );
    
};

export default App;
