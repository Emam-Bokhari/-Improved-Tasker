import { Fragment, useState } from "react"
import Searchbox from "./Searchbox"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import AddTaskModal from "./AddTaskModal"
import { TaskContext } from "../context"
import EmptyTask from "./EmptyTask"

const TaskBoard = () => {

    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Integration API",
        description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags: ['Web', 'Python', 'Api'],
        priority: "High",
        isFavourite: false
    }

    const [tasks, setTasks] = useState([defaultTask])

    const [showAddTaskModal, setShowAddTaskModal] = useState(false)

    const allTasks = tasks

    // add new task
    function handleAddNewTask(newTask) {
        // console.log(newTask)

        setTasks([
            ...tasks,
            newTask
        ])
        setShowAddTaskModal(false)
    }

    // search task
    function handleSearch(searchTerm) {
        // console.log(searchTerm)
        const filteredTask = tasks.filter(task => task.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))


        if (filteredTask) {
            setTasks([
                ...filteredTask
            ])
        }

    }



    return (
        <Fragment>

            <TaskContext.Provider value={{ tasks, setTasks }}>

                {showAddTaskModal && <AddTaskModal
                    onAddTask={handleAddNewTask}
                    onCancelAddTaskModal={() => setShowAddTaskModal(false)} />}
                <section className="mb-20" id="tasks">

                    <div className="container">


                        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                            <div className="mb-14 items-center justify-between sm:flex">
                                <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                                <div className="flex items-center space-x-5">
                                    {/* start searchbar */}
                                    <Searchbox onSearchTask={handleSearch} />

                                    {/* Task Actions */}
                                    <TaskActions onAddTaskModal={() => setShowAddTaskModal(true)} />

                                </div>
                            </div>
                            {/* Tasklist */}
                            {tasks.length > 0
                                ?
                                <TaskList />
                                :
                                <EmptyTask />}

                        </div>
                    </div>
                </section>

            </TaskContext.Provider>

        </Fragment>
    )
}
export default TaskBoard