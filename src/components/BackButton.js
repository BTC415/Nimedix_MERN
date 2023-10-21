import React from 'react'

const BackButton = ({ onClick }) => {
  return (
    <button
      className="p-0"
      onClick={() => {
        onClick()
      }}
    >
      <div className="flex items-center space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p className="p-0 md:text-lg text-base text-primary">Back</p>
      </div>
    </button>
  )
}

export default BackButton
