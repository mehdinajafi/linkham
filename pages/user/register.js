import React, { useCallback } from "react"
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap"
import { auth } from "../../src/auth/firebase"
// withAuth is a Hoc with a context include current user for use current user in app and redirect to routes we want
import withAuth from "../../src/auth/WithAuth"

import router from "next/router"
import Link from "next/link"
import Head from "next/head"

import NavbarPage from "../../src/components/Navbar"

const Register = () => {
  const handleSignup = useCallback(
    async (event) => {
      event.preventDefault()
      // Get email and password from form
      const email = event.target[0].value
      const password = event.target[1].value
      try {
        await auth.createUserWithEmailAndPassword(email, password)
        // When sign up push user to dashboard
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
        <title>ثبت نام - لینک هام</title>
      </Head>
      <NavbarPage />
      <Container>
        <Row>
          <Col lg="5" md="8" sm="12" className="m-auto py-5">
            <Card>
              <Card.Header>ثبت نام</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSignup} className="w-100">
                  <Form.Group>
                    <Form.Label>ایمیل</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      name="email"
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
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    ثبت نام
                  </Button>
                  <Form.Text className="d-flex">
                    قبلا در لینک هام ثبت نام کرده اید؟
                    <div className="authChanger">
                      <Link href="/user/login">
                        <a>وارد شوید</a>
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

export default withAuth(Register)
