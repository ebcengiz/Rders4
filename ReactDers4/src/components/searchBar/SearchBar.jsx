// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./searchBar.css"
import SearchBarIcon from '../searchBarIcon/SearchBarIcon'

const SearchBar = () => {
  return (
    <>
      <div className='search-bar-box'>
        <SearchBarIcon />
        {
           <form className="d-flex" role="search">
                <input className="form-control me-2 searchInp" type="search" placeholder="Find users" aria-label="Search" />
            </form> 
        }
        
      </div>
    </>
  )
}

export default SearchBar
