import { createContext, useContext } from "react";

import (createContext)

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "ToDo Msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider