import "../styles/bootstarp.scss"
import "../styles/global/globals.css"
import "../styles/main.scss"
import AuthProvider from "../src/context/AuthContext"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
