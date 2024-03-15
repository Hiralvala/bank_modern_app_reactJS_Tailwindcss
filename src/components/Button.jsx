import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get stated
    </button>
  )
}

export default Button
