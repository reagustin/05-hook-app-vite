import { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        description: 'compras verduras',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'compras carne',
        done: false,
    },
]
    
    export const TodoApp = () => {

        const [todos, dispatchTodo] = useReducer(todoReducer, initialState )

        const handleNewTodo = (todo) => {
            console.log({todo});
        }


      return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small> </h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>

                </div>
            
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <TodoAdd handleNewTodo={handleNewTodo}/>
                </div>
            
            </div>


        </>
      )
    }
    