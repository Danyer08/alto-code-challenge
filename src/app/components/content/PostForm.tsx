import React, { ChangeEvent, useState } from 'react'
import { PostFormProps } from '../../types/props/post-form-props.type'
import { useNavigate, useParams } from 'react-router-dom'
import StyledInput from '../../styles/components/styled-input'
import StyledButton from '../../styles/components/styled-button'
import styles from '../../styles/post-form.module.css'
import StyledTextarea from '../../styles/components/styled-textarea'

const PostForm = ({ post, onSubmit }: PostFormProps) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [title, setTitle] = useState<string>(post ? post.title : '')
  const [content, setContent] = useState<string>(post ? post.content : '')
  const [titleError, setTitleError] = useState<string>('')
  const [contentError, setContentError] = useState<string>('')

  if (id && !post) {
    navigate('/blog')
    return null
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    onSubmit(buildPost())
    navigate('/blog')
  }

  const buildPost = () => {
    return {
      id: post ? post.id : Date.now(),
      title,
      content,
      date: post ? post.date : new Date().toISOString(),
    }
  }

  const validateForm = (): boolean => {
    if (title.trim() && content.trim()) {
      setTitleError('')
      setContentError('')
      return true
    }
    setFormErrors()
    return false
  }

  const setFormErrors = () => {
    title.trim() ? setTitleError('') : setTitleError('Please enter a title')
    content.trim() ? setContentError('') : setContentError('Please enter some content')
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
