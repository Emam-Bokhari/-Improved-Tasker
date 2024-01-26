import { Fragment } from "react"

const TaskActions = () => {
    return (
        <Fragment>
            <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">Add Task</button>
            <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">Delete All</button>
        </Fragment>
    )
}
export default TaskActions