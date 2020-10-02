import React from "react"

const Links = ({ links }) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <h5 className="text-center text-muted">لینک ها</h5>
      <div className="d-flex flex-column">
        <div className="profile-contacts-email d-flex justify-content-between align-items-center border border-primary rounded p-3 mb-2">
          <span className="text-primary d-flex align-items-center">
            <img
              src="./assets/images/icons/link.svg"
              alt="لینک"
              width="25px"
              height="25px"
            />
            {links.linkTitle}
          </span>
          <a href={links.linkAddress} target="_blank" className="text-primary ">
            {links.linkAddress}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Links
