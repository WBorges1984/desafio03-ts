import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    user: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    setNameUser: (setNameUser: string)=> void
    setEmailUser: (setEmailUser: string)=> void
    nameUser: string
    emailUser: string

}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ nameUser, setNameUser ] = useState<string>('');
    const [ emailUser, setEmailUser ] = useState<string>('');

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setIsLoggedIn(login)
      }
    }, [storage]);

    const user = 'nathally'
  
    return (
      <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn, setNameUser, setEmailUser, nameUser, emailUser }}>
        { children }
      </AppContext.Provider>
    )
}
