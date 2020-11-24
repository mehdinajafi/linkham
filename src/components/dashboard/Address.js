import React, { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { firebase } from "../../firebase/firebase"

const Address = () => {
  const [address, setAddress] = useState(null)
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}`)
      .once("value")
      .then((data) => {
        setAddress(data.val().address)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between border border-primary rounded p-2 p-sm-4 mb-2 mb-sm-4">
      <div className="text-center">لینک شما</div>
      <div className="text-center text-primary"><a href={`https://linkham.vercel.app/${address}`} target="_blank">linkham.vercel.app/{address}</a></div>
    </div>
  )
}

export default Address