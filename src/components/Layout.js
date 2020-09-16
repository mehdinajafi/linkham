import React from "react"
import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <div className="h-100">
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout
