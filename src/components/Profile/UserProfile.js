import React from "react"

const UserProfile = ({ userData }) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-column py-2">
        <h4 className="text-dark text-center">
          {userData.titleSubHeadings.title}
        </h4>
        <div className="text-secondary text-center">
          {userData.titleSubHeadings.subHeadings}
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserProfile
