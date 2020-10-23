import Head from "next/head"
import React from "react"

const UserNotFound = () => {
  return (
    <React.Fragment>
      <Head>
        <title>پروفایل | لینک هام</title>
      </Head>
      <div className="text-center">
        پروفایلی با این آدرس ساخته نشده است | <a href="/">صفحه اصلی</a>
      </div>
    </React.Fragment>
  )
}

export default UserNotFound
