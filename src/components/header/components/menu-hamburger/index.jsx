import React, { useState } from 'react'
import './menu-hamburger.css'

export const MenuHamburger = ({ showOrHideMenu, navMenuStatus }) => {
  const [menuStatus, setMenuStatus] = useState(false)

  return (
    <div
      onClick={() => {
        menuStatus ? setMenuStatus(false) : setMenuStatus(true)
        showOrHideMenu()
      }}
      className={menuStatus ? 'menu-hamburger checked' : 'menu-hamburger'}
    >
      <span></span>
    </div>
  )
}
