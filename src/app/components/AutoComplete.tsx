import React from 'react'
import { AutoCompleteProps } from '../types/props/auto-complete-props.type'
import styles from '../styles/dropdown-menu.module.css'
import { Post } from '../../core/models/post.model'
import { useNavigate } from 'react-router-dom'

const AutoComplete = ({ posts, onPostSelect }: AutoCompleteProps) => {
  const navigate = useNavigate()
  const handlePostSelect = (post: Post) => {
    onPostSelect(post)
    navigate(`/blog/${post.id}`)
  }

  return (
    <div className={styles['dropdown-menu-container']}>
      <ul className={styles['dropdown-menu']}>
        {posts.map((post) => (
          <li key={post.id} onClick={() => handlePostSelect(post)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AutoComplete
