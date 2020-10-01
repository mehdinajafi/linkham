import React, { useState } from "react"
import { firebase } from "../../firebase/firebase"
import { Form, Button, InputGroup } from "react-bootstrap"

const SocialNetworks = ({ userData, uid }) => {
  // If the operation is successful, a message will be displayed
  let [success, setSuccess] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Get inputs
    const [
      instagramInput,
      telegramInput,
      linkedinInput,
      githubInput,
    ] = event.target.elements

    try {
      // Set in database
      // Uid is user token
      firebase
        .database()
        .ref(`/users/${uid}/socialNetworks`)
        .set({
          instagram: instagramInput.value.trim()
            ? instagramInput.value.trim()
            : null,
          telegram: telegramInput.value.trim()
            ? telegramInput.value.trim()
            : null,
          linkedin: linkedinInput.value.trim()
            ? linkedinInput.value.trim()
            : null,
          github: githubInput.value.trim() ? githubInput.value.trim() : null,
        })
        // A message indicating that the operation was successful is then displayed
        .then(() => setSuccess(true))
    } catch (error) {
      alert("خطایی پیش آمده است لطفا دوباره امتحان کنید")
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex">
        <h4>شبکه‌های اجتماعی</h4>
        {success ? (
          <div className="text-success py-2 mr-auto">
            اطلاعات با موفقیت ثبت شد
          </div>
        ) : null}
      </div>
      <hr />
      <Form.Group>
        <Form.Label>اینستاگرام</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/instagram.svg"
                alt="instagram"
                width="25px"
                height="25px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={() => setSuccess(false)}
            defaultValue={
              userData.socialNetworks ? userData.socialNetworks.instagram : null
            }
          />
        </InputGroup>
        <Form.Text className="text-muted">برای مثال: mehdinjfiz</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>تلگرام</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/telegram.svg"
                alt="telegram"
                width="25px"
                height="25px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={() => setSuccess(false)}
            defaultValue={
              userData.socialNetworks ? userData.socialNetworks.telegram : null
            }
          />
        </InputGroup>
        <Form.Text className="text-muted">برای مثال: mehdinjfi</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>لینکدین</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/linkedin.svg"
                alt="linkedin"
                width="25px"
                height="25px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={() => setSuccess(false)}
            defaultValue={
              userData.socialNetworks ? userData.socialNetworks.linkedin : null
            }
          />
        </InputGroup>
        <Form.Text className="text-muted">برای مثال: mehdinjfi</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>گیت‌هاب</Form.Label>
        <InputGroup className="ltr">
          <InputGroup.Prepend>
            <InputGroup.Text>
              <img
                src="/assets/images/icons/github.svg"
                alt="github"
                width="25px"
                height="25px"
              />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            onChange={() => setSuccess(false)}
            defaultValue={
              userData.socialNetworks ? userData.socialNetworks.github : null
            }
          />
        </InputGroup>
        <Form.Text className="text-muted">برای مثال: mehdinjfi</Form.Text>
      </Form.Group>

      <Button type="submit" variant="success" className="w-100 mb-3">
        ذخیره تغییرات
      </Button>
    </Form>
  )
}

export default SocialNetworks
