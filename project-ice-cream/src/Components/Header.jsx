import React from 'react'

function Header(props) {
  return (
    <a href={props.url} className='text-[#3E2C2C] hover:text-[#ce6778] '>{props.name}</a>
  )
}

export default Header