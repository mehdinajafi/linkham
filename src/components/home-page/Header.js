import React from "react"

const Header = () => {
  return (
    <header>
      <div className="d-flex flex-column bg-primary text-white pt-5 px-1">
        <h2 className="text-bold text-center pt-1 pt-md-5">
          <strong>
            برای ارتباط با مخاطبان خود تنها به یک لینک احتیاج خواهید داشت
          </strong>
        </h2>
        <h5 className="my-4 text-center">
          در لینک هام پروفایل شخصی خود را بسازید و تمام راههای ارتباطی خود را در
          یک لینک جمع کنید.
        </h5>
        <a
          href="./user/register"
          className="btn btn-warning mx-auto"
          style={{ fontSize: "1.2rem" }}
        >
          شروع کنید
        </a>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill="#1652f0"
          fillOpacity={1}
          d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,138.7C840,117,960,107,1080,112C1200,117,1320,139,1380,149.3L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </header>
  )
}

export default Header
