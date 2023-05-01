import React, { ChangeEvent, useState } from 'react'
import { PostFormProps } from '../../types/props/post-form-props.type'
import { useNavigate, useParams } from 'react-router-dom'
import StyledInput from '../styled/styled-input'
import StyledButton from '../styled/styled-button'
import styles from '../../styles/post-form.module.css'
import StyledTextarea from '../styled/styled-textarea'

const PostForm = ({ post, onSubmit }: PostFormProps) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState(post ? post.title : '')
  const [content, setContent] = useState(post ? post.content : '')
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')

  //TODO: Use redux to persist the selected post
  if (id && !post) {
    navigate('/blog')
    return null
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const newPost = {
      id: post ? post.id : Date.now(),
      title,
      content,
      date: post ? post.date : new Date().toISOString(),
    }

    onSubmit(newPost)
    navigate('/blog')
  }

  const validateForm = (): boolean => {
    if (title.trim() && content.trim()) {
      setTitleError('')
      setContentError('')
      return true
    }
    title.trim() ? setTitleError('') : setTitleError('Please enter a title')
    content.trim() ? setContentError('') : setContentError('Please enter some content')
    return false
  }

  return (
    <React.Fragment>
      <form className={styles['form']} onSubmit={handleSubmit}>
        <StyledInput
          label="Title"
          type="text"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
          error={titleError}
        />
        <StyledTextarea
          label="Content"
          id="content"
          value={content}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)}
          error={contentError}
          rows="15"
          cols={30}
        />
        <StyledButton type="submit">Save</StyledButton>
      </form>
    </React.Fragment>
  )
}

export default PostForm
