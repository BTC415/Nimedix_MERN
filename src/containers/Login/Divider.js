import React from 'react'

const Divider = () => {
  return (
    <div className="flex space-x-2 items-center justify-center my-2">
      <hr className="w-full border-2 border-grey-light" />
      <p className="w-full md:text-xl text-base text-primary text-center p-0">
        or continue with
      </p>
      <hr className="w-full border-2 border-grey-light" />
    </div>
  )
}

export default Divider
