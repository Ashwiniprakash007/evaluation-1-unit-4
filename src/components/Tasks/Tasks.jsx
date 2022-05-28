import React from "react";
import { useState } from "react";
import styles from "./tasks.module.css";

const Tasks = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [data,setData]=useState("")
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        <li>{props.id}</li>
        <li>{props.text}</li>
        <li>{props.count}</li>
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
      
    </>
    
  );
};

export default Tasks;
