import React from 'react'
import styles from '../../../styles/dropdown-menu.module.css'
import { Post } from '../../../../core/models/post.model'
import { useNavigate } from 'react-router-dom'
import { PostListProps } from '../../../types/props/post-list-props.type'

const AutoComplete = ({ posts, onPostSelect }: PostListProps) => {
  const navigate = useNavigate()
  const handlePostSelect = (post: Post) => {
    onPostSelect(post)
    navigate(`/blog/${post.id}`)
  }

  const displayPosts = (): React.ReactNode => {
    return posts.map((post) => (
      <li key={post.id} onClick={() => handlePostSelect(post)}>
        {post.title}
      </li>
    ))
  }

  return (
    <div className={styles['dropdown-menu-container']}>
      <ul className={styles['dropdown-menu']}>{displayPosts()}</ul>
    </div>
  )
}

export default AutoComplete
