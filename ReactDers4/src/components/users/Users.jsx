// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./users.css"

// eslint-disable-next-line react/prop-types
const Users = (props) => {
    // eslint-disable-next-line react/prop-types
    const {name, profile_pic} = props;
    
  return (
    <>
      <div className='users-content'>
            <img className='avatarImg' src={profile_pic} alt="avatar" />
            <p className='users-name'>{name}</p>
      </div>
    </>
  )
}

export default Users
