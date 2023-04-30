import React, { useState } from 'react'
import { PostFormProps } from '../types/props/post-form-props.type'
import { useNavigate } from 'react-router-dom'

const PostForm = ({ post, onSubmit }: PostFormProps) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState(post ? post.title : '')
  const [content, setContent] = useState(post ? post.content : '')

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const newPost = {
      title,
      content,
      date: new Date().toISOString(),
    }

    onSubmit(newPost)
    navigate('/blog')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  )
}

export default PostForm
