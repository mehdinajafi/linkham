import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"
import "../styles/main.scss"
import withAuth from "../src/auth/WithAuth"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withAuth(MyApp)
