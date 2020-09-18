import React, { useState } from "react"
import { firebase } from "../../auth/firebase"
import { Form, Button } from "react-bootstrap"

const Bio = ({ userData, uid }) => {
  // If the operation is successful, a message will be displayed
  let [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    try {
      // Get inputs value and set in database
      // Uid is user token
      firebase
        .database()
        .ref(`/users/${uid}`)
        .update({
          bio: event.target[0].value,
        })
        // A message indicating that the operation was successful is then displayed
        .then(() => setSuccess(true))
    } catch (error) {
      alert("خطایی پیش آمده است لطفا دوباره امتحان کنید")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex ">
        <h3>توضیحات و متن</h3>
        {success ? (
          <div className="text-success py-2 mr-auto">
            اطلاعات با موفقیت ثبت شد
          </div>
        ) : null}
      </div>
      <hr />
      <Form.Group>
        <Form.Control
          as="textarea"
          rows="3"
          defaultValue={userData.bio ? userData.bio : null}
          onChange={() => setSuccess(false)}
        />
        <Form.Text className="text-muted">
          این متن پایین زیر عنوان قرار می‌گیرد
        </Form.Text>
      </Form.Group>
      <Button type="submit" variant="success" className="w-100 mb-3">
        ذخیره تغییرات
      </Button>
    </Form>
  )
}

export default Bio
