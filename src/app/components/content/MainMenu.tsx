import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/main-menu.module.css'

const MainMenu = () => {
  return (
    <ul className={styles['main-menu']}>
      <li className={styles['menu-item']}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles['menu-item']}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles['menu-item']}>
        <Link to="/blog">Blog</Link>
      </li>
      <li className={styles['menu-item']}>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default MainMenu
