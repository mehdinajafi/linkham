import React from "react"
import router from "next/router"
import { auth } from "./firebase"

export const AuthContext = React.createContext()

const withAuth = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentUser: null,
        pennding: true,
      }
    }

    componentDidMount() {
      auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          // Set user in state which is stored in the AuthContext
          // Set pennding to false to do not show loading
          this.setState({
            currentUser: authUser,
            pennding: false,
          })
          // When the user is authenticated push user to dashboard
          router.push("/dashboard")
        } else {
          // When the user is not authenticated and go to dashboard push user to home page
          if (router.router.route === "/dashboard") {
            router.push("/")
            this.setState({
              pennding: false,
            })
          } else if (
            router.router.route === "/user/register" ||
            router.router.route === "/user/login" ||
            router.router.route === "/"
          ) {
            this.setState({
              pennding: false,
            })
          }
        }
      })
    }

    render() {
      if (this.state.pennding) {
        return <h1>لطفا صبر کنید...</h1>
      } else {
        return (
          <AuthContext.Provider value={{ currentUser: this.state.currentUser }}>
            {<Component {...this.props} />}
          </AuthContext.Provider>
        )
      }
    }
  }
}
export default withAuth
