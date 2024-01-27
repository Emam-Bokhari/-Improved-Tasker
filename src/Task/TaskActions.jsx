import { Fragment } from "react"

const TaskActions = ({onAddTaskModal,onDeleteAllTask}) => {
    return (
        <Fragment>
            <button
            onClick={onAddTaskModal}
             className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
            <button 
            onClick={onDeleteAllTask}
            className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
        </Fragment>
    )
}
export default TaskActions