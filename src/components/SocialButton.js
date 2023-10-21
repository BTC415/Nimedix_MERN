import React from 'react'

const SocialButton = (props) => {
  return (
    <button
      className="rounded-full bg-primary-lighter p-2 sm:m-3 m-1"
      onClick={() => {
        props.onClick()
      }}
    >
      {props.img && (
        <img src={props.img} alt="social-btn" className="sm:w-8 w-5" />
      )}
    </button>
  )
}

export default SocialButton
