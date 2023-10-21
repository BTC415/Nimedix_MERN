import React from 'react'

const AppButton = ({ variant, icon, labelColor, label }) => {
  return (
    <button
      className={
        variant === 'primary'
          ? 'bg-secondary sm:py-4 py-2 sm:px-6 px-2 m-2 border-solid border-2 rounded-full border-secondary'
          : variant === 'secondary'
          ? 'bg-white sm:py-4 py-2 sm:px-6 px-2 m-2 border-solid border-2 rounded-full border-white'
          : 'bg-transparent sm:py-4 py-2 sm:px-6 px-2 m-2 border-solid border-2 rounded-full border-white'
      }
    >
      <div className="flex flex-row items-center">
        {icon && (
          <img
            src={icon}
            alt="button-icon"
            className="sm:w-6 w-4 sm:h-6 h-4 mr-2"
          />
        )}
        <p
          className={
            'text-' + labelColor + ' p-0 font-bold sm:text-base text-xs'
          }
        >
          {label ?? 'AppButton'}
        </p>
      </div>
    </button>
  )
}
export default AppButton
