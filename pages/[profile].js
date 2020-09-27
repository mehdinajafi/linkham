import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { firebase } from "../src/auth/firebase"

const Profile = () => {
  // I use this to get the page address or user address to find the user data
  const router = useRouter()
  // UserData is object of user data includes links, social networks address,....
  const [userData, setUserData] = useState({})
  // pennding for show loading. loading disappears when the user is found
  const [pennding, setPennding] = useState(true)

  useEffect(() => {
    // Push usersData from database in users array
    const loopData = (usersData, users) => {
      for (const item in usersData) {
        users.push({
          address: usersData[item].address,
          titleSubHeadings: usersData[item].titleSubHeadings,
          links: usersData[item].links,
          contact: usersData[item].contact,
          socialNetworks: usersData[item].socialNetworks,
          routing: usersData[item].routing,
          bio: usersData[item].bio,
        })
      }
    }

    firebase
      .database()
      .ref(`/users`)
      .once("value")
      .then((data) => {
        const users = []
        let usersData = data.val()
        loopData(usersData, users)
        // Find user by page address
        setUserData(users.find((user) => user.address === router.query.profile))
        // Disappear loading
        setPennding(false)
      })
      .catch((err) => alert("مشکلی پیش آمده است لطفا دوباره امتحان کنید"))
  }, [])

  // Show loading
  if (pennding) {
    return <h1>لطفا صبر کنید...</h1>
  }
  return <div>User Profile</div>
}

export default Profile
