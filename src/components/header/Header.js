import React from 'react'
import './Header.css'

const Header = ({title, subtitle}) => {
  return (
    <div className="header">
        <div><h1>{title}</h1></div>
        <div className="sub">{subtitle}</div>
    </div>
  )
}

export default Header