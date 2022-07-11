import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'compras verduras',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'compras verduras',
        done: false,
    },
]
    
    export const TodoApp = () => {

        const [todos, dispatchTodo] = useReducer(todoReducer, initialState )
      return (
        <>
            <h1>TodoApp</h1>
            <hr/>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                
            </ul>
        </>
      )
    }
    