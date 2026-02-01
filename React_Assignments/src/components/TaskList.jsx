import TaskItem from "./TaskItem";
import ToDoStyles from './ToDoApp.module.css'

export default function TaskList({ tasks, states, dispatch }) {
    return (
        <div className={ToDoStyles.featureGroup}>
            {tasks.length > 0 ? <h3>{states.filterState === "all" ? "Current " : states.filterState === "active" ? "Active " : "Completed "} Task{tasks.length > 1 ? "s" : ""}</h3> : ""}
            <ul className={ToDoStyles.taskList}>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} states={states} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    )
}