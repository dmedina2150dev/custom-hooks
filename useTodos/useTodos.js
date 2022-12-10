import { useEffect } from "react";
import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
    if( !localStorage.getItem('todos') ) {
        return [];
    }
    return JSON.parse( localStorage.getItem('todos') );
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])



    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add new todo',
            payload: todo
        }

        dispatch(action);

    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO Remove todo]',
            payload: id
        })
    }

    const handleToogleTodo = (id) => {
        dispatch({
            type: '[TODO Complete todo]',
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodoCount: todos.filter( todo => !todo.done ).length,
        handleToogleTodo,
        handleDeleteTodo,
        handleNewTodo
    }
}
