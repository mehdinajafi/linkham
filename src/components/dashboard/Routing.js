import React, { useState } from "react"
import { firebase } from "../../firebase/firebase"
import { Form, Button, InputGroup } from "react-bootstrap"

const Routing = ({ userData, uid }) => {
  // If the operation is successful, a message will be displayed
  let [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Get inputs
    let [googleMapsInput, wazeInput] = event.target.elements

    try {
      // Get inputs value and set in database
      // Uid is user token
      firebase
        .database()
        .ref(`/users/${uid}/routing`)
        .set({
          googleMaps: googleMapsInput.value.trim()
            ? googleMapsInput.value.trim().toLowerCase()
            : null,
          waze: wazeInput.value.trim()
            ? wazeInput.value.trim().toLowerCase()
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
        <h3>مسیر‌یابی</h3>
        {success ? (
          <div className="text-success py-2 mr-auto">
            اطلاعات با موفقیت ثبت شد
          </div>
        ) : null}
      </div>
      <hr />
      <Form.Group>
        <Form.Label>گوگل مپ</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/google-maps.svg"
                alt="google-maps"
                width="25px"
                height="25px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={() => setSuccess(false)}
            defaultValue={userData.routing ? userData.routing.googleMaps : null}
          />
        </InputGroup>
        <Form.Text className="text-muted">لینک مکان خود را وارد کنید</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>ویز</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/waze.svg"
                alt="waze"
                width="25px"
                height="25px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={() => setSuccess(false)}
            defaultValue={userData.routing ? userData.routing.waze : null}
          />
        </InputGroup>
        <Form.Text className="text-muted">لینک مکان خود را وارد کنید</Form.Text>
      </Form.Group>
      <Button type="submit" variant="success" className="w-100 mb-3">
        ذخیره تغییرات
      </Button>
    </Form>
  )
}

export default Routing
