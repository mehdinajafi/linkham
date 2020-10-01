import React, { useState } from "react"
import { firebase } from "../../firebase/firebase"
import { Form, Button, InputGroup } from "react-bootstrap"

const Contact = ({ userData, uid }) => {
  // If the operation is successful, a message will be displayed
  let [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Get inputs
    const [emailInput, phoneNumberInput] = event.target.elements

    try {
      // Set in database
      // Uid is user token
      firebase
        .database()
        .ref(`/users/${uid}/contact`)
        .set({
          email: emailInput.value.trim() ? emailInput.value.trim() : null,
          phoneNumber: phoneNumberInput.value.trim()
            ? phoneNumberInput.value.trim()
            : null,
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
        <h3>تماس</h3>
        {success ? (
          <div className="text-success py-2 mr-auto">
            اطلاعات با موفقیت ثبت شد
          </div>
        ) : null}
      </div>
      <hr />
      <Form.Group>
        <Form.Label>ایمیل</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/email.svg"
                alt="email"
                width="16px"
                height="16px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="email"
            onChange={() => setSuccess(false)}
            defaultValue={userData.contact ? userData.contact.email : null}
          />
        </InputGroup>
        <Form.Text className="text-muted">
          برای مثال: example@gmail.com
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>شماره تلفن</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/phone.svg"
                alt="phone"
                width="16px"
                height="16px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="tel"
            onChange={() => setSuccess(false)}
            defaultValue={
              userData.contact ? userData.contact.phoneNumber : null
            }
          />
        </InputGroup>
        <Form.Text className="text-muted">برای مثال: 09123456789</Form.Text>
      </Form.Group>
      <Button type="submit" variant="success" className="w-100 mb-3">
        ذخیره تغییرات
      </Button>
    </Form>
  )
}

export default Contact
