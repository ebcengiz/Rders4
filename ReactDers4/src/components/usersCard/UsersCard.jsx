// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import "./usersCard.css"
import SearchBar from '../searchBar/SearchBar'
import Users from '../users/Users'
import axios from "axios"

const UsersCard = () => {

    // eslint-disable-next-line no-unused-vars
    const baseUrl = "http://localhost:3000";

    // eslint-disable-next-line no-unused-vars
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users').then((response) => {
            setUsers(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [])


  return (
    <>
        <div className='users-card-box'>
            <SearchBar />
            {
                users.map((user) => (
                    <Users key={user.id} name={user.name} profile_pic={user.profile_pic} />
                ))
            }
        </div>
    </>
  )
}

export default UsersCard
