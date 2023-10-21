import React from 'react'

const NavButton = (props) => {
  return (
    <div
      aria-hidden="true"
      onClick={() => {
        props.onClick()
      }}
      className={
        props.active
          ? 'w-2/3 bg-primary-light p-3 border-b-2 border-b-secondary cursor-pointer'
          : 'w-2/3 bg-transparent p-2 cursor-pointer'
      }
    >
      <p className="p-0 text-white sm:text-base text-sm">{props.label}</p>
    </div>
  )
}

export default NavButton
