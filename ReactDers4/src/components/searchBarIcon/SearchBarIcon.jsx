// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./searchBarIcon.css"
import findImg from "../../assets/Frame.svg"

const SearchBarIcon = () => {
  return (
    <>
      <div className='search-bar-icon'>
        <img src={findImg} alt="findImg" />
      </div>
    </>
  )
}

export default SearchBarIcon
