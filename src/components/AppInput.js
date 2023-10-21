import React, { useState } from 'react'

const AppInput = ({ label, type, value, onChangeText, img, placeholder }) => {
  const [onShow, setShow] = useState(false)

  return (
    <div className="block w-full my-4">
      <p className="p-0 mb-2 text-start">{label}</p>
      <div className="flex rounded-full items-center justify-between bg-grey-light p-2 space-x-2">
        <div className="flex justify-start space-x-2 p-2 w-full">
          <img src={img} className="w-6 h-6" alt="input-img" />
          <input
            className="w-full border-transparent focus:border-transparent focus:outline-none placeholder-grey text-dark bg-transparent placeholder-grey"
            value={value}
            placeholder={placeholder}
            type={
              type === 'password' && !onShow
                ? 'password'
                : type === 'password'
                ? 'text'
                : type
            }
            onChange={(e) => {
              onChangeText(e.target.value)
            }}
          />
        </div>
        {type === 'password' && (
          <button
            className="p-2 rounded-full"
            onClick={() => {
              setShow((prev) => {
                return !prev
              })
            }}
          >
            {!onShow ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default AppInput
