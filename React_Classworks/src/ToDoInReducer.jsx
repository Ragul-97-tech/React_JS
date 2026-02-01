import { useReducer, useState } from "react";

function reducer(currentState, action) {
  switch (action.type) {
    case "setTask":
      return { ...currentState, task: action.taskValue };

    case "add":
      return { tasks: [...currentState.tasks, currentState.task], task: "" };

    case "delete":
      return { tasks: [...currentState.tasks.filter((_, i) => i !== action.index)], task: "" };

    default:
      return currentState;
  }
}

export default function Todo() {
  //   const [task, setTask] = useState("");
  //   const [tasks, setTasks] = useState([]);

  //   function addTask() {
  //     if (task.trim() === "") return;

  //     setTasks([...tasks, task]);
  //     setTask(""); // clear input
  //   }

  //   function deleteTask(index) {
  //     const updatedTasks = tasks.filter((_, i) => i !== index);
  //     setTasks(updatedTasks);
  //   }

  const initialState = { tasks: [], task: "" }
  const [states, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2> To-Do List</h2>

      <input
        type="text"
        value={states.task}
        placeholder="Enter a task"
        onChange={(e) => dispatch({ type: "setTask", taskValue: e.target.value })}
      />
      <button onClick={() => { if (states.task.trim() === "") return; dispatch({ type: "add" }) }}>Add</button>

      <ul>
        {states.tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button
              onClick={() => dispatch({ type: "delete", index })}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
            <button
              onClick={(e) => e.target.parentElement.replaceWith(document.createElement("input"))}
              style={{ marginLeft: 10 }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}