const { render, screen } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContext");
const { HomePage } = require("../../src/09-useContext/HomePage");



describe('pruebas en homepage', () => { 

    const user = {
        id: 1,
        name: 'Fernando'
    }
    
    test('debe de mostrar el componente sin el usuario', () => { 
        
        render( 
        <UserContext.Provider value={{ user: null}} >
            <HomePage/>
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); 
        console.log(preTag.innerHTML)

        expect(preTag.innerHTML).toBe('null');
        // screen.debug();

    })

    test('debe de mostrar el componente con el usuario', () => { 
        
        render( 
        <UserContext.Provider value={{ user}} >
            <HomePage/>
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); 
        

        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(`${user.id}`);
        // screen.debug();

    })

})