import React, { useCallback } from "react"
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap"
import { firebase } from "../../src/firebase/firebase"
import router from "next/router"
import Link from "next/link"
import Head from "next/head"

import NavbarPage from "../../src/components/Navbar"

const Login = () => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault()
      // Get email and password from form
      const email = event.target[0].value
      const password = event.target[1].value
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        // When sign in push user to dashboard
        router.push("/dashboard")
      } catch (error) {
        alert(error)
      }
    },
    [router]
  )

  return (
    <React.Fragment>
      <Head>
        <title>ورود - لینک هام</title>
      </Head>
      <NavbarPage />
      <Container>
        <Row>
          <Col lg="5" md="8" sm="12" className="m-auto py-5">
            <Card>
              <Card.Header>ورود</Card.Header>
              <Card.Body>
                <Form onSubmit={handleLogin} className="w-100">
                  <Form.Group>
                    <Form.Label>ایمیل</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      name="email"
                      className="ltrInput"
                    />
                    <Form.Text className="text-muted">
                      یک ایمیل معتبر مثال: mehdi@gmail.com
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>رمز عبور</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="رمز عبور خود را وارد کنید"
                      name="password"
                      className="ltrInput"
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    ورود
                  </Button>
                  <Form.Text className="d-flex">
                    کاربر جدید هستید؟
                    <div className="authChanger">
                      <Link href="/user/register">
                        <a>ثبت نام در لینک هام</a>
                      </Link>
                    </div>
                  </Form.Text>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Login
