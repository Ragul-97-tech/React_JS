import ToDoStyles from './ToDoApp.module.css'


export default function TaskStatusBar({ tasks, dispatch }) {
    return (
        <div className={ToDoStyles.featureGroup}>
            <div className={ToDoStyles.taskStatusBar}>
                <p>{tasks.filter(t => !t.isCompleted).length} tasks remaining</p>
                <div className={ToDoStyles.taskStatus}>
                    <button className={`${ToDoStyles.statusBtn} ${ToDoStyles.active}`} onClick={(e) => dispatch({ type: "setFilter", filter: "all", targetElement: e.currentTarget })}>All</button>
                    <button className={ToDoStyles.statusBtn} onClick={(e) => dispatch({ type: "setFilter", filter: "active", targetElement: e.currentTarget })}>Active</button>
                    <button className={ToDoStyles.statusBtn} onClick={(e) => dispatch({ type: "setFilter", filter: "completed", targetElement: e.currentTarget })}>Completed</button>
                </div>
                <button className={ToDoStyles.clearBtn} onClick={() => dispatch({ type: "clearCompleted" })}>Clear Completed</button>
            </div>
        </div>
    )
}