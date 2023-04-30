import React, { ChangeEvent, useState } from 'react'
import { PostsProps } from '../types/props/posts-props.type'
import { Post } from '../../core/models/post.model'
import AutoComplete from './AutoComplete'
import styles from '../styles/search-bar.module.css'

const SearchBar = ({ posts, onPostSelect }: PostsProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Post[]>([])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target?.value
    setSearchTerm(searchTerm)
    if (searchTerm.length === 0) setSearchResults([])
  }

  const handleOnClick = () => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    setSearchResults(results)
  }

  const handlePostSelect = (post: Post) => {
    onPostSelect(post)
    setSearchResults([])
    setSearchTerm('')
  }

  return (
    <div className={styles['search-bar-container']}>
      <label htmlFor="search">SEARCH THE SITE</label>
      <div className={styles['search-bar']}>
        <input
          type="text"
          placeholder="Type here to search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleOnClick}>SEARCH</button>
      </div>
      {searchResults.length > 0 && (
        <AutoComplete posts={searchResults} onPostSelect={handlePostSelect} />
      )}
    </div>
  )
}

export default SearchBar
