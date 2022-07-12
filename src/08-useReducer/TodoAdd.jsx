import React from 'react'
import { useState } from 'react';

export const TodoAdd = ({handleNewTodo}) => {

    const [inputValue, setInputValue] = useState({id: '', description: '', done: false});

    const onInputChange = ({target}) => {        
        setInputValue({id:new Date().getTime(), description: target.value, done: false});        
    }

    const onSubmit = (event) => {
        event.preventDefault();
        handleNewTodo(inputValue)
        // console.log(inputValue);
    }
 
  return (
    <>
        <form onSubmit={  onSubmit }>
            <input
                type="text"
                placeholder="¿Que hay que hacer?"
                className="form-control"
                value={inputValue.description}
                onChange={onInputChange}
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    </>
  )
}
