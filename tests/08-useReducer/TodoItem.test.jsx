import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";



describe('pruebas en el componente', () => { 
    
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    }

    const onToggleTodoMock = jest.fn();
    const onDeleteTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks());

    test('debe de mostrar el TODO pendiente de completar', () => { 
        
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span')        
        expect(spanElement.className).toContain('align-self-center')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
    })

    test('debe de mostrar el TODO completado', () => {
        
        todo.done = true;       
        
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)

        const spanElement = screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
    })
    
    test('span debe llamar el ToggleTodo cuando se hace click', () => {
        
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement);        

        expect(onToggleTodoMock).toHaveBeenCalledWith(1);


    })


    test('span debe llamar el ToggleTodo cuando se hace click', () => {
        
        render( <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />)
        
        const buttonElement = screen.getByRole('button')
        fireEvent.click(buttonElement);        

        expect(onDeleteTodoMock).toHaveBeenCalledWith(1);


    })

 })