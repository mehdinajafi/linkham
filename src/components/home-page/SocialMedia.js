import React from "react"

const SocialMedia = () => {
  return (
    <section id="social-media" className="w-100">
      <div className="container d-flex flex-column flex-md-row align-items-center mb-2">
        <div className="w-75 w-md-50 mb-1">
          <img
            src="./assets/images/illustrations/social-media.png"
            alt="social media"
            className="w-100"
          />
        </div>
        <div className="w-75 w-md-50">
          <h3 className="text-center text-md-right font-weight-bold">
            پیام رسان ها و شبکه های اجتماعی
          </h3>
          <p className="text-center text-md-right">
            به راحتی لینک تمام پیام رسان ها و شبکه های اجتماعی خود را در لینک
            هام وارد کنید و آن را با مخاطبان خود به اشتراک بگذارید.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia
