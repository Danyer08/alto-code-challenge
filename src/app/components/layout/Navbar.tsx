import React from 'react'
import BlogLogo from '../elements/BlogLogo/BlogLogo'
import MainMenu from '../content/MainMenu'
import SearchBar from '../content/SearchBar'
import { PostListProps } from '../../types/props/post-list-props.type'
import styles from '../../styles/navbar.module.css'

const Navbar = ({ posts, onPostSelect }: PostListProps) => {
  return (
    <React.Fragment>
      <div className={styles['navbar']}>
        <BlogLogo />
        <MainMenu />
        <SearchBar posts={posts} onPostSelect={onPostSelect} />
      </div>
      <div className={styles['navbar-content-spacer']}></div>
    </React.Fragment>
  )
}

export default Navbar
