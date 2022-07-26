const { render, screen, fireEvent } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { LoginPage } = require("../../src/09-useContext/LoginPage");



describe('Pruebas en login page', () => { 
        
    const user = {
        id: 123, 
        name: 'Juan', 
        email: 'juan@google.com'
    }    

    test('debe de mostrar el componente sin el usuario', () => { 
                        
        render( 
            <UserContext.Provider value={{ user: null}} >
                <LoginPage/>
            </UserContext.Provider>
            );

        const preTag = screen.getByLabelText('pre');

        expect(preTag.innerHTML).toBe('null');
        // screen.debug();
    })

    test('debe de llamar el setUser cuando se hace click en el boton', () => { 
        
        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }} >
                <LoginPage />
            </UserContext.Provider>
            );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);        
        
        expect(setUserMock).toHaveBeenCalledWith(user);

    })
 })