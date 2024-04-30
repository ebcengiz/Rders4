// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./mainTitle.css"

// eslint-disable-next-line react/prop-types
const MainTitle = ({text}) => {
  return (
    <>
      <div className="main-title-box">
        <p>{text}</p>
      </div>
    </>
  )
}

export default MainTitle
