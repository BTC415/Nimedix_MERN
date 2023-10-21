import React from 'react'
const ImplementationCard = (props) => {
  return (
    <div
      className={
        props.variant === 'warn'
          ? 'rounded-full bg-warn'
          : props.variant === 'success'
          ? 'rounded-full bg-success'
          : props.variant === 'info'
          ? 'rounded-full bg-info'
          : props.variant === 'danger'
          ? 'rounded-full bg-danger'
          : 'rounded-full bg-'
      }
    >
      <div className="rounded-full">
        <p className="text-dark break-words text-xl">{props.label}</p>
      </div>
    </div>
  )
}

export default ImplementationCard
