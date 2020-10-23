import React from "react"
import Head from "next/head"
import Bio from "./sections/Bio"
import Contact from "./sections/Contact"
import Links from "./sections/Links"
import Routing from "./sections/Routing"
import SocialNetworks from "./sections/SocialNetworks"

const UserProfile = ({ userData }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{userData.titleSubHeadings.title} | لینک هام</title>
      </Head>
      <div className="d-flex flex-column py-2">
        <h3 className="text-dark text-center">
          {userData.titleSubHeadings.title}
        </h3>
        <div className="text-secondary text-center">
          {userData.titleSubHeadings.subHeadings}
        </div>
      </div>
      {/* Show if there is bio */}
      {userData.bio && <Bio bio={userData.bio} />}
      {/* Show if there is at least one link */}
      {userData.links && <Links links={userData.links} />}
      {/* Show if there is at least one contact */}
      {userData.contact && <Contact contact={userData.contact} />}
      {/* Show if there is at least one link from a social network */}
      {userData.socialNetworks && (
        <SocialNetworks socialNetworks={userData.socialNetworks} />
      )}
      {/* Show if there is at least one route link */}
      {userData.routing && <Routing routing={userData.routing} />}
    </React.Fragment>
  )
}

export default UserProfile
