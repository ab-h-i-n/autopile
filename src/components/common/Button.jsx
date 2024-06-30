import React from 'react'

const Button = ({ onClick , className , children }) => {
  return (
    <button onClick={onClick} className={`${className} text-lg font-medium bg-teritiary  w-fit px-5 py-3 rounded-full active:scale-95 hover:brightness-75 transition-all shadow-md lg:text-xl`}>
        {children}
    </button>
  )
}

export default Button