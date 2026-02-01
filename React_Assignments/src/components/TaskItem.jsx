import ToDoStyles from './ToDoApp.module.css'
import { MdDelete, MdEdit } from "react-icons/md";


export default function TaskItem({ task, states, dispatch }) {
    return (
        <li key={task.id}>
            <div className={ToDoStyles.task}>
                <div className={ToDoStyles.taskText}>
                    {states.editId === task.id ?
                        <input
                            type="text"
                            value={states.editTask}
                            onChange={(e) => dispatch({ type: "setEditTask", taskValue: e.target.value })} />
                        : <>
                            <input type="checkbox" checked={task.isCompleted} onChange={() => dispatch({ type: "toggleComplete", id: task.id })} />
                            <p>{task.text}</p>
                        </>
                    }
                </div>
                <div className={ToDoStyles.taskActions}>
                    {states.editId === task.id ?
                        <>
                            <button className={ToDoStyles.btn} onClick={() => {
                                dispatch({ type: "saveEdit", id: task.id })
                                dispatch({ type: "editTaskId", editId: null })
                            }}>Save</button>
                            <button className={ToDoStyles.btn} onClick={() => {
                                dispatch({ type: "editTaskId", editId: null })
                                dispatch({ type: "setEditTask", taskValue: "" })
                            }}>Cancel</button>
                        </> :
                        <>
                            <button className={ToDoStyles.actionBtn} onClick={() => {
                                dispatch({ type: "editTaskId", editId: task.id });
                                dispatch({ type: "setEditTask", taskValue: task.text })
                            }}><MdEdit /></button>
                            <button className={ToDoStyles.actionBtn}
                                onClick={() => dispatch({ type: "delete", id: task.id })}><MdDelete /></button>
                        </>
                    }
                </div>
            </div>
        </li>
    )
}