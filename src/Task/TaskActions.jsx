import { Fragment, useContext } from "react"
import { TaskContext } from "../context"

const TaskActions = ({ onAddTaskModal }) => {

    const { handleDeleteAllTask } = useContext(TaskContext)

    return (
        <Fragment>
            <button
                onClick={onAddTaskModal}
                className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
            <button
                onClick={handleDeleteAllTask}
                className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
        </Fragment>
    )
}
export default TaskActions