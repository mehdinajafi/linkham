import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { firebase } from "../src/auth/firebase"
import UserProfile from "../src/components/Profile/UserProfile"
import UserNotFound from "../src/components/Profile/UserNotFound"
import { Container, Row, Col } from "react-bootstrap"

const Profile = () => {
  // I use this to get the page address or user address to find the user data
  const router = useRouter()
  // UserData is object of user data includes links, social networks address,....
  const [userData, setUserData] = useState(null)
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
  return (
    <Container>
      <Row>
        <Col sm={10} md={8} lg={6} xl={5} className="mx-auto px-3">
          {userData ? <UserProfile userData={userData} /> : <UserNotFound />}
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
