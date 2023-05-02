import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/main-menu.module.css'

const menuItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

const displayMenuItems = () => {
  return menuItems.map((item) => (
    <li key={item.name} className={styles['menu-item']}>
      <Link to={item.link}>{item.name}</Link>
    </li>
  ))
}

const MainMenu = () => {
  return <ul className={styles['main-menu']}>{displayMenuItems()}</ul>
}

export default MainMenu
