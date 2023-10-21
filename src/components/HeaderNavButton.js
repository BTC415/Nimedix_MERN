import React from 'react'
const HeaderNavButton = (props) => {
  return (
    <button
      className={
        props.active
          ? 'bg-primary-light px-6 py-3 border-b-2 border-b-secondary'
          : 'bg-transparent px-6 py-3'
      }
      onClick={() => {
        props.onClick()
      }}
    >
      <p className="p-0 text-white text-base">{props.label}</p>
    </button>
  )
}

export default HeaderNavButton
