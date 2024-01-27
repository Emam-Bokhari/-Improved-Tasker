import { Fragment, useReducer, useState } from "react"
import Searchbox from "./Searchbox"
import TaskActions from "./TaskActions"
import TaskList from "./TaskList"
import AddTaskModal from "./AddTaskModal"
import { TaskContext } from "../context"
import EmptyTask from "./EmptyTask"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { initialState, taskReducer } from "../reducers/taskReducer"

const TaskBoard = () => {

    // const defaultTask = {
    //     id: crypto.randomUUID(),
    //     title: "Integration API",
    //     description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    //     tags: ['Web', 'Python', 'Api'],
    //     priority: "High",
    //     isFavourite: false
    // }

    const [state, dispatch] = useReducer(taskReducer, initialState)


    const [showAddTaskModal, setShowAddTaskModal] = useState(false)

    const [isFavourite, setIsFavourite] = useState(false)

    const [taskToUpdate, setTaskToUpdate] = useState(null)

    // add new task and edit task
    function handleAddNewTask(newTask, isAdd) {
        // console.log(newTask)
        if (isAdd) {
            dispatch({
                type:"Add_Task",
                payload:newTask 
            })
            toast.success('Task create successfully')
        } else {

            dispatch({
                type:"Edit_Task",
                payload:newTask 
            })
            toast.success('Task edit successfully')
        }


        setShowAddTaskModal(false)

    }

    // edit task
    function handleEditTask(task) {
        // console.log(task)
        setTaskToUpdate(task)
        setShowAddTaskModal(true)

    }

    function handleCloseModal() {
        setShowAddTaskModal(false)
        setTaskToUpdate(null)
    }



    // search task
    function handleSearch(searchTerm) {

        dispatch({
            type:"Search_Task",
            payload:searchTerm 
        })

    }

    // delete a task
    function handleDeleteTask(taskId) {
        // console.log(taskId)

        const confirmDelete = window.confirm("Are you sure you want to delete this task?")

        if (confirmDelete) {
            dispatch({
                type:"Delete_Task",
                payload:taskId 
            })

            toast.success("Successfully delete this task")
        }


    }

    // delete all task
    function handleDeleteAllTask() {

        const confirmDeleteAll = window.confirm("Are you sure you want to delete all tasks?")

        if (confirmDeleteAll) {
            dispatch({
                type:"Delete_All_Tasks"
            })

            toast.success("Successfully delete all tasks!")
        }

    }

    // favourite and unfavourite
    function handleFavourite(taskId) {
        // console.log(taskId)

        dispatch({
            type:"Favourite_Task",
            payload:taskId 
        })

    }





    return (
        <Fragment>

            <TaskContext.Provider value={{
                taskToUpdate, handleDeleteTask,
                handleEditTask, handleFavourite, handleSearch,
                handleDeleteAllTask, handleAddNewTask, handleCloseModal,
                state,dispatch
            }}>

                {showAddTaskModal && <AddTaskModal />}
                <section className="mb-20" id="tasks">

                    <div className="container">


                        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                            <div className="mb-14 items-center justify-between sm:flex">
                                <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
                                <div className="flex items-center space-x-5">
                                    {/* start searchbar */}
                                    <Searchbox />

                                    {/* Task Actions */}
                                    <TaskActions
                                        onAddTaskModal={() => setShowAddTaskModal(true)} />

                                </div>
                            </div>
                            {/* Tasklist */}
                            {state.tasks.length > 0
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