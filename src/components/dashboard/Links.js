import React, { useState } from "react"
import { firebase } from "../../auth/firebase"
import { Form, Button } from "react-bootstrap"

const Links = ({ userData, uid }) => {
  // validatedForm state to notify when the user sends a blank input
  const [validatedForm, setValidatedForm] = useState(false)
  // If the operation is successful, a message will be displayed
  let [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    setValidatedForm(true)
    event.preventDefault()

    if (
      event.target[0].value.trim().length > 0 &&
      event.target[1].value.trim().length > 0
    ) {
      try {
        // Get inputs value and set in database
        // Uid is user token
        firebase
          .database()
          .ref(`/users/${uid}/links`)
          .set({
            linkTitle: event.target[0].value,
            linkAddress: event.target[1].value,
          })
          // A message indicating that the operation was successful is then displayed
          .then(() => setSuccess(true))
      } catch (error) {
        alert("خطایی پیش آمده است لطفا دوباره امتحان کنید")
      }
    } else {
      if (event.target[0].value.trim().length === 0) {
        event.target[0].value = ""
      }
      if (event.target[1].value.trim().length === 0) {
        event.target[1].value = ""
      }
    }
  }
  return (
    <Form onSubmit={handleSubmit} noValidate validated={validatedForm}>
      <div className="d-flex ">
        <h3>لینک ها</h3>
        {success ? (
          <div className="text-success py-2 mr-auto">
            اطلاعات با موفقیت ارسال شد
          </div>
        ) : null}
      </div>
      <hr />
      <Form.Group>
        <Form.Label>متن پیوند</Form.Label>
        <Form.Control
          type="text"
          onChange={() => setSuccess(false)}
          defaultValue={userData.links ? userData.links.linkTitle : null}
          required
          dir="auto"
        />
        <Form.Control.Feedback type="invalid">
          لطفا متن پیوند را وارد کنید
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Label>نشانی</Form.Label>
        <Form.Control
          type="text"
          onChange={() => setSuccess(false)}
          defaultValue={userData.links ? userData.links.linkAddress : null}
          required
          dir="auto"
        />
        <Form.Control.Feedback type="invalid">
          لطفا نشانی را وارد کنید
        </Form.Control.Feedback>
        <Form.Text className="text-muted">
          برای مثال: http://example.com
        </Form.Text>
      </Form.Group>
      <Button type="submit" variant="success" className="w-100 mb-3">
        ذخیره تغییرات
      </Button>
    </Form>
  )
}

export default Links
