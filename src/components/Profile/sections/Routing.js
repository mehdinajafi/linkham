import React from "react"

const Routing = ({ routing }) => {
  return (
    <div className="routing d-flex flex-column">
      <h5 className="text-center text-muted">مسیریابی</h5>
      {/* If the number of links was even, display it in a row, otherwise a column */}
      <div
        className={`d-flex ${
          Object.keys(routing).length % 2 ? "flex-column" : "flex-row"
        }`}
      >
        {routing.googleMaps && (
          <a
            className={`routing-googleMaps d-flex justify-content-center align-items-center rounded p-3 my-2 ${
              Object.keys(routing).length % 2 ? "w-100" : "w-50 ml-2"
            }`}
            target="_blank"
            href={routing.googleMaps}
          >
            <img
              src="./assets/images/icons/google-maps.svg"
              alt="email"
              width="25px"
              height="25px"
            />
            <span>گوگل مپ</span>
          </a>
        )}

        {routing.waze && (
          <a
            className={`routing-waze d-flex justify-content-center align-items-center rounded p-3 my-2 ${
              Object.keys(routing).length % 2 ? "w-100" : "w-50 mr-2"
            }`}
            target="_blank"
            href={routing.waze}
          >
            <img
              src="./assets/images/icons/waze.svg"
              alt="email"
              width="25px"
              height="25px"
            />
            <span>ویز</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default Routing
