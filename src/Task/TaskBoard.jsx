import { Fragment, useState } from "react"
import Searchbox from "./Searchbox"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import AddTaskModal from "./AddTaskModal"

const TaskBoard = () => {

    const [showAddTaskModal, setShowAddTaskModal] = useState(false)



    return (
        <Fragment>

            {showAddTaskModal && <AddTaskModal onCancelAddTaskModal={()=>setShowAddTaskModal(false)} />}
            <section className="mb-20" id="tasks">

                <div className="container">


                    <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                        <div className="mb-14 items-center justify-between sm:flex">
                            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                            <div className="flex items-center space-x-5">
                                {/* start searchbar */}
                                <Searchbox />

                                {/* Task Actions */}
                                <TaskActions onAddTaskModal={()=>setShowAddTaskModal(true)} />

                            </div>
                        </div>
                        {/* Tasklist */}
                        <TaskList />
                    </div>
                </div>
            </section>

        </Fragment>
    )
}
export default TaskBoard