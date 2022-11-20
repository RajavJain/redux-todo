export const TodoReducer = (state = { todos: [] }, action) => {

    switch (action.type) {
        case "ADD_TODO":
            return { todos: action.payload };
        //adds new todo to existing ones
        case "REMOVE_TODO":
            return { todos: action.payload };
        //removes the todo
        default:
            return state;
    }
};
