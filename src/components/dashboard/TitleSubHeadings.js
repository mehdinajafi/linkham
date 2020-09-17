import React from "react"
import { firebase } from "../../auth/firebase"
import { Form, Button } from "react-bootstrap"

const TitleSubHeadings = ({ userData, uid }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      firebase.database().ref(`/users/${uid}/titleSubHeadings`).set({
        title: event.target[0].value,
        subHeadings: event.target[1].value,
      })
    } catch (error) {
      alert("خطایی پیش آمده است لطفا دوباره امتحان کنید")
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h3>عنوان و زیر عنوان</h3>
      <hr />
      <Form.Group>
        <Form.Label>نام / عنوان</Form.Label>
        <Form.Control
          type="text"
          placeholder="نام یا عنوان را  وارد کنید"
          defaultValue={userData.titleSubHeadings.title}
        />
        <Form.Text className="text-muted">
          این نام / عنوان در بالای صفحه نمایش داده می‌شود برای مثال: مهدی نجفی
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>زیر عنوان</Form.Label>
        <Form.Control
          type="text"
          placeholder="زیر عنوان را وارد کنید"
          defaultValue={userData.titleSubHeadings.subHeadings}
        />
        <Form.Text className="text-muted">برای مثال:‌توسعه دهنده ‌وب</Form.Text>
      </Form.Group>
      <Button type="submit" variant="success" className="w-100">
        ذخیره تغییرات
      </Button>
    </Form>
  )
}

export default TitleSubHeadings
