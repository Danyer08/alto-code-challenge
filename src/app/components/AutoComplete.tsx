import React from 'react'
import { AutoCompleteProps } from '../types/props/auto-complete-props.type'
import styles from '../styles/dropdown-menu.module.css'

const AutoComplete = ({ posts, onPostSelect }: AutoCompleteProps) => {
  return (
    <div className={styles['dropdown-menu-container']}>
      <ul className={styles['dropdown-menu']}>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onPostSelect(post)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AutoComplete
