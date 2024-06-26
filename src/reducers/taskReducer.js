const initialState = {
    tasks: [{
        id: crypto.randomUUID(),
        title: "Integration API",
        description: "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
        tags: ['Web', 'Python', 'Api'],
        priority: "High",
        isFavourite: true
    }]
}

const taskReducer = (state, action) => {
    switch (action.type) {
        case "Add_Task":
            return {
                tasks: [...state.tasks, action.payload]
            }
            break;

        case "Edit_Task":
            return {
                tasks: state.tasks.map(task =>
                    task.id === action.payload.id ? action.payload : task
                )
            }
            break;

        case "Search_Task":
            return {
                tasks: state.tasks.filter(task => task.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
            }
            break;

        case "Delete_Task":
            return {
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
            break;

        case "Delete_All_Tasks":
            return {
                tasks: []
            }
            break;

        case "Favourite_Task":
            return {
                tasks: state.tasks.map(task =>
                    task.id === action.payload
                        ? { ...task, isFavourite: !task.isFavourite }
                        : task
                )
            }
            break;

        default:
            return state


    }
}

export { initialState, taskReducer }