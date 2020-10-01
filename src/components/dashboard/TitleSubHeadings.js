import React, { useState } from "react"
import { firebase } from "../../firebase/firebase"
import { Form, Button } from "react-bootstrap"

const TitleSubHeadings = ({ userData, uid }) => {
  // validatedForm state to notify when the user sends a blank input
  const [validatedForm, setValidatedForm] = useState(false)
  // If the operation is successful, a message will be displayed
  let [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    setValidatedForm(true)
    event.preventDefault()
    // Get inputs
    const [titleInput, subHeadingsInput] = event.target.elements

    if (titleInput.value.trim() && subHeadingsInput.value.trim()) {
      try {
        // Set in database
        // Uid is user token
        firebase
          .database()
          .ref(`/users/${uid}/titleSubHeadings`)
          .set({
            title: titleInput.value,
            subHeadings: subHeadingsInput.value,
          })
          .then(() => setSuccess(true))
      } catch (error) {
        alert("خطایی پیش آمده است لطفا دوباره امتحان کنید")
      }
    }
  }
  return (
    <Form onSubmit={handleSubmit} noValidate validated={validatedForm}>
      <div className="d-flex ">
        <h3>عنوان و زیر عنوان</h3>
        {success ? (
          <div className="text-success py-2 mr-auto">
            اطلاعات با موفقیت ارسال شد
          </div>
        ) : null}
      </div>
      <hr />
      <Form.Group>
        <Form.Label>نام / عنوان</Form.Label>
        <Form.Control
          type="text"
          onChange={() => setSuccess(false)}
          defaultValue={userData.titleSubHeadings.title}
          required
          dir="auto"
        />
        <Form.Text className="text-muted">
          این نام / عنوان در بالای صفحه نمایش داده می‌شود برای مثال: مهدی نجفی
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>زیر عنوان</Form.Label>
        <Form.Control
          type="text"
          onChange={() => setSuccess(false)}
          defaultValue={userData.titleSubHeadings.subHeadings}
          required
          dir="auto"
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
