const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom")
const { MainApp } = require("../../src/09-useContext/MainApp")




describe('Pruebas en el componente', () => { 
    
    test('debe de mostrar el HomePage', () => { 
        
        render(        
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
            
        )
        // screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
     })

    test('debe de mostrar el loginPage', () => { 
        
        render(        
            <MemoryRouter initialEntries={['/login']} >
                <MainApp/>
            </MemoryRouter>
            
        )
        // screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
        expect(screen.getByLabelText('anchorlogactive').className).toContain('active'); 
        //puse un arialabel en el 3er anchotag del navbar
     })


})