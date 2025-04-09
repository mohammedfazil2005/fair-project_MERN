import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthenticationContext = ({children}) => {
   const [isLoggedIn, setIsLoggedIn] = useState(true)
      useEffect(() => {
          if (sessionStorage.getItem("token")) {
              setIsLoggedIn(true)
          } else {
              setIsLoggedIn(false)
          }
      }, [isLoggedIn])
      return (
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
      )
}

export default AuthenticationContext
