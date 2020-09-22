import React, { useState, useEffect } from 'react'
import './header.css'

// components
import { SocialMedia } from '../social-media'
import { MenuHamburger } from './components/menu-hamburger'

// data
import { NavList } from './data/menu-list'

export const Header = () => {
  useEffect(() => {
    const sectionList = document.querySelectorAll('[data-id]')
    const dataSectionList = Array.from(sectionList).map((atualSection) => {
      return {
        id: atualSection.dataset.id,
        name: atualSection.id,
        element: atualSection,
        position: atualSection.offsetTop,
        headerElement: document.querySelector(
          `[data-nav="${atualSection.dataset.id}"]`,
        ),
      }
    })
    const animeScroll = () => {
      const windowTop = window.pageYOffset
      const removerAllActiveMenu = () => {
        dataSectionList.map(({ headerElement }) =>
          headerElement.classList.remove('active-menu'),
        )
      }
      removerAllActiveMenu()
      dataSectionList.forEach(({ position, headerElement }) => {
        if (windowTop > position) {
          headerElement.classList.add('active-menu')
        }
      })
    }

    window.addEventListener('scroll', animeScroll)
  }, [])

  const [headerVisibility, setHeaderVisibility] = useState(true)
  const [navMenuVisibility, setNavMenuVisibility] = useState(false)

  window.addEventListener('scroll', () => {
    const menuChange = () => {
      const headerIsHigherOfPage = window.pageYOffset > 90

      !headerIsHigherOfPage
        ? setHeaderVisibility(true)
        : setHeaderVisibility(false)
    }
    menuChange()
  })

  const showNavMenu = () =>
    navMenuVisibility ? setHeaderVisibility(false) : setHeaderVisibility(true)

  const renderList = (list, className) => {
    if (list.length > 0) {
      return (
        <ul className={className}>
          {list.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                onClick={() => {
                  setNavMenuVisibility(false)
                }}
                data-nav={item.id}
              >
                {item.name}
              </a>
              {item.child ? renderList(item.child, 'header-sub-menu') : null}
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <>
      <header
        className={headerVisibility ? 'show-header' : 'hide-header'}
        data-id="1"
      >
        <div className="centralizer">
          {/* Logo */}
          <div className="logo">
            <img src={`./assets/mojo-logos/logo-home.svg`} alt="mojo" />
          </div>
          {/* Nav */}
          <nav className={navMenuVisibility ? 'show-menu' : 'hide-menu'}>
            {renderList(NavList, 'header-menu')}
            <SocialMedia atualCategory={'icon-color-branding'} />
          </nav>

          <SocialMedia />
          <MenuHamburger
            showOrHideMenu={showNavMenu}
            navMenuStatus={navMenuVisibility}
          ></MenuHamburger>
        </div>
      </header>
      <div
        className="invisible-header"
        onMouseEnter={() => {
          setHeaderVisibility(true)
        }}
      />
    </>
  )
}
