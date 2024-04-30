// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./card.css"
import MainTitle from '../mainTitle/MainTitle'
import UsersCard from '../usersCard/UsersCard'

const Card = () => {
  return (
    <>
        <div className='card'>
            <MainTitle text="Filter by author" />
            <UsersCard />
        </div>
    </>
  )
}

export default Card
