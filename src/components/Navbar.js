import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { firebase } from "../firebase/firebase"
import { Navbar, Container, Nav, Button } from "react-bootstrap"

const NavbarPage = () => {
  // To display the required buttons
  const { currentUser } = useContext(AuthContext)

  const handleExit = () => {
    firebase.auth().signOut()
  }

  return (
    <Navbar expand="md" bg="primary" variant="dark" className="sticky-top">
      <Container fluid="md">
        <Navbar.Brand>
          <a href="/" className="text-white font-weight-bold">
            لینک هام
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar"></Navbar.Toggle>
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link href="/" className="ml-auto mr-3">
              خانه
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/tutorial" className="ml-auto mr-3">
              آموزش ساخت
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about-us" className="ml-auto mr-3">
              درباره ما
            </Nav.Link>
          </Nav>
          <hr className="bg-light my-2 d-md-none"></hr>
          <Nav className="mr-auto">
            {/* If the user was authenticated, display the Dashboard and Exit button,
            otherwise the Login and Register button. */}
            {currentUser ? (
              <React.Fragment>
                <Nav.Link href="/dashboard">
                  <Button variant="light" className="mx-3 my-1 w-sm-100">
                    داشبورد
                  </Button>
                </Nav.Link>

                <Nav.Link href="/">
                  <Button
                    variant="danger"
                    className="mx-3 my-1"
                    onClick={handleExit}
                  >
                    خروج
                  </Button>
                </Nav.Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Nav.Link href="/user/login">
                  <Button variant="light" className="mx-3 my-1 w-sm-100">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-person-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                      />
                    </svg>
                    {"  "}
                    ورود
                  </Button>
                </Nav.Link>

                <Nav.Link href="/user/register">
                  <Button variant="outline-light" className="mx-3 my-1">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-person-plus-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.5-3a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                    {"  "}
                    ثبت نام
                  </Button>
                </Nav.Link>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPage
