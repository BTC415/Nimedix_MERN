import React from 'react'

const UserTypeCard = ({
  title,
  description,
  labelIcon,
  onClick,
  bgColor,
  active,
}) => {
  return (
    <button
      className={
        active
          ? 'flex items-center justify-between p-4 md:rounded-3xl sm:rounded-2xl shadow-lg shadow-grey rounded-xl ' +
            bgColor
          : 'flex items-center justify-between p-4 md:rounded-3xl sm:rounded-2xl shadow-lg shadow-grey-light rounded-xl ' +
            bgColor
      }
      onClick={() => {
        onClick()
      }}
    >
      <img src={labelIcon} alt="label-icon" className="w-16 h-16" />
      <div className="w-full block text-start">
        <p className="title text-dark sm:text-3xl text-2xl">{title}</p>
        <p className="p-0 text-base text-grey">{description}</p>
      </div>
    </button>
  )
}

export default UserTypeCard
