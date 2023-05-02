import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { PostListProps } from '../../types/props/post-list-props.type'
import { Post } from '../../../core/models/post.model'
import AutoComplete from '../elements/AutoComplete/AutoComplete'
import styles from '../../styles/search-bar.module.css'

const SearchBar = ({ posts, onPostSelect }: PostListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Post[]>([])
  const [showAutoComplete, setShowAutoComplete] = useState<boolean>(false)
  const searchBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !showAutoComplete &&
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node)
      ) {
        setShowAutoComplete(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

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
    setShowAutoComplete(true)
  }

  const handlePostSelect = (post: Post) => {
    onPostSelect(post)
    setSearchResults([])
    setSearchTerm('')
    setShowAutoComplete(false)
  }

  return (
    <div ref={searchBarRef} className={styles['search-bar-container']}>
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
      {showAutoComplete && searchResults.length > 0 && (
        <AutoComplete posts={searchResults} onPostSelect={handlePostSelect} />
      )}
    </div>
  )
}

export default SearchBar
