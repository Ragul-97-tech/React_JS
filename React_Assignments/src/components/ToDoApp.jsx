import { useContext, useReducer } from "react";
import ToDoStyles from './ToDoApp.module.css'
import { MdAddTask } from "react-icons/md";
import TaskList from "./TaskList";
import TaskStatusBar from "./TaskStatusBar";

// export const ThemeContext = useContext();

function reducer(currentState, action) {
  switch (action.type) {
    case "setTask":
      return { ...currentState, task: action.taskValue };

    case "setEditTask":
      return { ...currentState, editTask: action.taskValue };

    case "add":
      return {
        ...currentState,
        tasks: [...currentState.tasks,
        {
          id: Date.now(),
          text: currentState.task.replaceAll(/\s+/g, " "),
          isCompleted: false
        }
        ], task: ""
      };

    case "delete":
      return { ...currentState, tasks: currentState.tasks.filter(task => task.id !== action.id) };

    case "toggleComplete":
      return {
        ...currentState,
        tasks: currentState.tasks.map(task =>
          task.id === action.id ? { ...task, isCompleted: !task.isCompleted } : task
        )
      };

    case "saveEdit":
      return {
        ...currentState,
        tasks: currentState.tasks.map(task =>
          task.id === action.id ? { ...task, text: currentState.editTask.replaceAll(/\s+/g, " ") }
            : task
        ),
        editTask: ""
      }

    case "editTaskId":
      return {
        ...currentState, editId: action.editId
      }

    case "setFilter":
      activeBtn(action.targetElement);
      return { ...currentState, filterState: action.filter }

    case "clearCompleted":
      return { ...currentState, tasks: currentState.tasks.filter(t => !t.isCompleted) }

    default:
      return currentState;
  }
}

function activeBtn(element) {
  [...element?.parentElement.children].filter(ele => ele !== element).forEach(element => {
    element.classList.remove(ToDoStyles.active);
  });
  element.classList.add(ToDoStyles.active);
}

export default function Todo() {

  const initialState = { tasks: [], task: "", editTask: "", editId: null, filterState: "all" }
  const [states, dispatch] = useReducer(reducer, initialState);

  let filteredTasks = states.tasks.filter(t => {
    if (states.filterState === "active") return !t.isCompleted;
    else if (states.filterState === "completed") return t.isCompleted;
    return true;
  });

  return (
    <div className={ToDoStyles.toDoApp}>
      <h1>To Do</h1>

      <div className={ToDoStyles.featureGroup}>
        <label htmlFor="taskText">What needs to be done?</label>
        <div className={ToDoStyles.inputGroup}>
          <input
            type="text"
            value={states.task}
            placeholder="Enter a task"
            id="taskText"
            name="taskText"
            onChange={(e) => dispatch({ type: "setTask", taskValue: e.target.value })}
          />
          <MdAddTask />
        </div>
        <button className={ToDoStyles.btn} onClick={() => { if (states.task.trim()) dispatch({ type: "add" }) }}>Add</button>
      </div>

      <TaskList tasks={filteredTasks} states={states} dispatch={dispatch} />

      <TaskStatusBar tasks={states.tasks} dispatch={dispatch} />
    </div>
  );
}