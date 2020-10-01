import React, { useState, useEffect } from "react"
import { firebase } from "../firebase/firebase"
import router from "next/router"

export const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  // Pennding for show loading
  const [pennding, setPennding] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // Set user in state which is stored in the AuthContext
        setCurrentUser(user)
        if (
          router.router.route === "/user/register" ||
          router.router.route === "/user/login"
        ) {
          // When the user is authenticated push user to dashboard
          await router.push("/dashboard")
          setPennding(false)
        } else {
          setPennding(false)
        }
      } else {
        // When the user is not authenticated and go to dashboard push user to register page
        if (router.router.route === "/dashboard") {
          await router.push("/user/register")
          setPennding(false)
        } else {
          setPennding(false)
        }
      }
    })
  }, [])

  if (pennding) {
    return <h1>لطفا صبر کنید...</h1>
  }
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
