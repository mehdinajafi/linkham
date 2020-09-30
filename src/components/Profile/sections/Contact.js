import React from "react"

const Contact = ({ contact }) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h5 className="text-center text-muted">تماس با من</h5>
      <div className="d-flex flex-column profile-contacts">
        <div className="profile-contacts-phoneNumber d-flex justify-content-between align-items-center border border-primary rounded p-3 mb-2">
          <img
            src="./assets/images/icons/phone.svg"
            alt="phone number"
            width="25px"
            height="25px"
          />
          <span className="text-primary">
            <a href={`tel: ${contact.phoneNumber}`}>{contact.phoneNumber}</a>
          </span>
        </div>
        <div className="profile-contacts-email d-flex justify-content-between align-items-center border border-primary rounded p-3 mb-2">
          <img
            src="./assets/images/icons/email.svg"
            alt="email"
            className="profile-contacts-email-img"
            width="25px"
            height="25px"
          />
          <span className="text-primary">
            <a href={`mailto: ${contact.email}`}>{contact.email}</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Contact
