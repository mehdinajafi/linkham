import React from "react"
import Contact from "./sections/Contact"
import Links from "./sections/Links"
import SocialNetworks from "./sections/SocialNetworks"

const UserProfile = ({ userData }) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-column py-2">
        <h3 className="text-dark text-center">
          {userData.titleSubHeadings.title}
        </h3>
        <div className="text-secondary text-center">
          {userData.titleSubHeadings.subHeadings}
        </div>
      </div>
      {/* Show if there is at least one link */}
      {userData.links && <Links links={userData.links} />}
      {/* Show if there is at least one contact */}
      {userData.contact && <Contact contact={userData.contact} />}
      {/* Show if there is at least one link from a social network */}
      {userData.socialNetworks && (
        <SocialNetworks socialNetworks={userData.socialNetworks} />
      )}
    </React.Fragment>
  )
}

export default UserProfile
