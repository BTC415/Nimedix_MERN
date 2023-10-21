import React from 'react'
import SearchIcon from '../assets/images/form/search_dark.png'
import ArrowIcon from '../assets/images/form/arrow_right.png'

const SearchBar = (props) => {
  return (
    <div className="w-full bg-white py-2">
      <div className="container mx-auto md:py-2 py-1">
        <div className="flex bg-grey-light rounded-full items-center justify-between sm:p-2 p-1">
          <div className="flex space-x-2 items-center px-2">
            <img
              src={SearchIcon}
              className="sm:w-8 w-5 sm:h-8 h-5"
              alt="search-icon"
            />
            <input
              type="text"
              value={props.value}
              onChange={(e) => {
                props.onChangeText(e.target.value)
              }}
              placeholder="Find doctor, symptoms, pharmacy, drugs and more"
              className="w-full text-dark bg-transparent border-transparent focus:border-transparent focus:outline-none placeholder-dark-light sm:text-base text-sm"
            />
          </div>
          <button className="py-2 px-4 rounded-full bg-primary">
            <div className="flex w-full items-center justify-between space-x-2">
              <p className="p-0 text-white sm:text-base text-xs">Search</p>
              <img
                src={ArrowIcon}
                alt="btn-icon"
                className="sm:w-4 w-3 sm:h-4 h-3"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
