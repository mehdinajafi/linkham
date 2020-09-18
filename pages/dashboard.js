import React, { useState, useEffect, useContext } from "react"
import { AuthContext } from "../src/auth/WithAuth"
import Layout from "../src/components/Layout"
import { firebase } from "../src/auth/firebase"
import {
  Tab,
  Container,
  Row,
  Col,
  Nav,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap"
import Head from "next/head"
import router from "next/router"
import TitleSubHeadings from "../src/components/dashboard/TitleSubHeadings"
import Links from "../src/components/dashboard/Links"
import Contact from "../src/components/dashboard/Contact"
import SocialNetworks from "../src/components/dashboard/SocialNetworks"
import Routing from "../src/components/dashboard/Routing"
import Bio from "../src/components/dashboard/Bio"

const Dashboard = () => {
  // validatedForm state to notify when the user sends a blank input
  const [validatedForm, setValidatedForm] = useState(false)
  // user state to check if the user is a new or old user to show welcome message or enter the dashboard normally
  const [user, setUser] = useState(null)
  // currentUser for get user's token
  const { currentUser } = useContext(AuthContext)
  // pennding for show loading
  const [pennding, setPennding] = useState(true)
  // To save pre-existing addresses
  const [oldUsersAddress, setOldUsersAddress] = useState(null)

  useEffect(() => {
    // For check user is a new or old
    firebase
      .database()
      .ref(`/users/${currentUser ? currentUser.uid : null}`)
      .once("value")
      .then((data) => setUser(data.val()))
      .then(() => setPennding(false))
    // Get old addresses
    firebase
      .database()
      .ref(`/users`)
      .once("value")
      .then((data) => {
        let addresses = []
        let usersData = data.val()
        for (const item in usersData) {
          addresses.push({
            address: usersData[item].address,
          })
        }
        setOldUsersAddress(addresses)
      })
  }, [])

  const handleSubmitWelcome = (event) => {
    event.preventDefault()
    setValidatedForm(true)
    // If all inputs are full
    if (
      event.target[0].value &&
      event.target[1].value &&
      event.target[2].value
    ) {
      // If the address already exists
      if (
        oldUsersAddress.findIndex((i) => i.address === event.target[0].value) >
        -1
      ) {
        event.target[0].value = null
      } else {
        // If there is no address, take the data and post it in the database
        try {
          firebase
            .database()
            .ref(`/users/${currentUser.uid}`)
            .set({
              address: event.target[0].value,
              titleSubHeadings: {
                title: event.target[1].value,
                subHeadings: event.target[2].value,
              },
            })
          router.reload()
        } catch (error) {
          alert("خطایی پیش آمده است لطفا دوباره امتحان کنید")
        }
      }
    }
  }

  // When pennding is true show loading. This state gets false in useEffect
  if (pennding) {
    return <h1>لطفا صبر کنید...</h1>
  }

  return (
    <Layout>
      <Head>
        <title>داشبورد - لینک هام</title>
      </Head>

      {/* Is the user new? */}
      {!user ? (
        <Container className="mt-5">
          <Row>
            <Col className="col-10 m-auto">
              <Card>
                <Card.Header>خوش آمدید</Card.Header>
                <Card.Body>
                  <Form
                    className="w-100"
                    noValidate
                    validated={validatedForm}
                    onSubmit={handleSubmitWelcome}
                  >
                    <Form.Group>
                      <Form.Label>آدرس</Form.Label>
                      <InputGroup className="ltr">
                        <InputGroup.Prepend>
                          <InputGroup.Text>/linkham.ir</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="text"
                          placeholder="your address"
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          این آدرس وجود دارد لطفا آدرس دیگری وارد کنید
                        </Form.Control.Feedback>
                      </InputGroup>
                      <Form.Text className="text-muted">
                        برای مثال اگر آدرس شما mehdi باشد لینک شما به این صورت
                        می شود linkham.ir/mehdi
                      </Form.Text>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>نام / عنوان</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="نام / عنوان خود را وارد کنید"
                        name="title"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        لطفا نام / عنوان خود را وارد کنید
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        این نام / عنوان در بالای صفحه نمایش داده می‌شود برای
                        مثال: مهدی نجفی
                      </Form.Text>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>زیرعنوان</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="زیرعنوان خود را وارد کنید"
                        name="subHeadings"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        لطفا زیر عنوان خود را وارد کنید
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        برای مثال:‌توسعه دهنده ‌وب
                      </Form.Text>
                    </Form.Group>
                    <Button type="submit" variant="success" className="w-100">
                      ذخیره
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className="mt-5">
          {/* Is the user old? */}
          <Tab.Container defaultActiveKey="titleSubHeadings">
            <Row>
              <Col lg="3">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="titleSubHeadings">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-person-circle"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                        <path
                          fillRule="evenodd"
                          d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                        />
                      </svg>
                      {"  "}
                      عنوان و زیرعنوان
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="links">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-link-45deg"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z" />
                      </svg>
                      {"  "}
                      لینک ها
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="contact">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-telephone-plus"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>
                      {"  "}
                      تماس
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="socialNetworks">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-chat-square-dots"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14 1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.5a2 2 0 0 1 1.6.8L8 14.333 9.9 11.8a2 2 0 0 1 1.6-.8H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                        />
                        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                      {"  "}
                      شبکه‌های اجتماعی
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="routing">
                      <svg
                        width="1em"
                        height="1.0625em"
                        viewBox="0 0 16 17"
                        className="bi bi-compass"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                        />
                        <path d="M6.94 7.44l4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                      </svg>
                      {"  "}
                      مسیریابی
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="‌bio">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        className="bi bi-fonts"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.258 3H3.747l-.082 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.43.013c1.935.062 2.434.301 2.694 1.846h.479L12.258 3z" />
                      </svg>
                      {"  "}
                      توضیحات و متن
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col lg="9">
                <Tab.Content>
                  <Tab.Pane eventKey="titleSubHeadings">
                    <TitleSubHeadings userData={user} uid={currentUser.uid} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="links">
                    <Links userData={user} uid={currentUser.uid} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="contact">
                    <Contact userData={user} uid={currentUser.uid} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="socialNetworks">
                    <SocialNetworks userData={user} uid={currentUser.uid} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="routing">
                    <Routing userData={user} uid={currentUser.uid} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="‌bio">
                    <Bio userData={user} uid={currentUser.uid} />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      )}
    </Layout>
  )
}

export default Dashboard
