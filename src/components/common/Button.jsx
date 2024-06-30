import React from 'react'

const Button = ({ onClick , className , children , inverse }) => {
  return (
    <button onClick={onClick} className={`${className} ${inverse ? 'bg-transparent border-secondary hover:border-transparent hover:bg-teritiary' : ' bg-teritiary border-transparent hover:bg-transparent hover:border-secondary'} font-medium w-fit px-5 py-3 rounded-full active:scale-95 border-2 transition-all duration-300 shadow-md lg:text-xl`}>
        {children}
    </button>
  )
}

export default Button