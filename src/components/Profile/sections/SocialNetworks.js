import React from "react"

const SocialNetworks = ({ socialNetworks }) => {
  return (
    <div className="d-flex flex-column">
      <h5 className="text-center text-muted">شبکه های اجتماعی</h5>
      {/* If the number of links was even, display it in a row, otherwise a column */}
      <div
        className={`mb-2 social-networks ${
          Object.keys(socialNetworks).length % 2 === 0
            ? "social-networks-row"
            : "social-networks-col"
        }`}
      >
        {/*-------------- Show links that the user has already entered --------------*/}

        {socialNetworks.telegram && (
          <a
            href={`https://t.me/${socialNetworks.telegram}`}
            className="social-network-link social-networks-telegram d-flex justify-content-center align-items-center rounded p-3 w-100"
            target="_blank"
          >
            <img
              src="/assets/images/icons/telegram-line.svg"
              alt="telegram"
              className="social-network-img"
              width="25px"
              height="25px"
            />
            <span className="social-network-title text-light">تلگرام</span>
          </a>
        )}
        {socialNetworks.instagram && (
          <a
            href={`https://instagram.com/${socialNetworks.instagram}`}
            className="social-network-link social-networks-instagram d-flex justify-content-center align-items-center rounded p-3 w-100"
            target="_blank"
          >
            <img
              src="/assets/images/icons/instagram-profile.svg"
              alt="instagram"
              width="25px"
              height="25px"
            />
            <span className="social-network-title text-light">اینستاگرام</span>
          </a>
        )}
        {socialNetworks.github && (
          <a
            href={`https://github.com/${socialNetworks.github}`}
            className="social-network-link social-networks-github d-flex justify-content-center align-items-center rounded p-3 w-100"
            target="_blank"
          >
            <img
              src="/assets/images/icons/github-profile.svg"
              alt="github"
              width="25px"
              height="25px"
            />
            <span className="social-network-title text-light">گیت هاب</span>
          </a>
        )}
        {socialNetworks.linkedin && (
          <a
            href={`https://linkedin.com/in/${socialNetworks.linkedin}`}
            className="social-network-link social-networks-linkedin d-flex justify-content-center align-items-center rounded p-3 w-100"
            target="_blank"
          >
            <img
              src="/assets/images/icons/linkedin-profile.svg"
              alt="linkedin"
              width="25px"
              height="25px"
            />
            <span className="social-network-title text-light">لینکدین</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default SocialNetworks
