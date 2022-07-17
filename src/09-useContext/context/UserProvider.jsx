import { UserContext } from "./UserContext"

const user = {
    id: 123,
    user: 'Juan Carlos',
    mail: 'juancarlos@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
