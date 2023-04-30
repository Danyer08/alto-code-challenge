import React, { ChangeEvent, useState } from 'react'
import AddPostButton from '../components/AddPostButton'
import PostsList from '../components/PostList'
import { Post } from '../../core/models/post.model'
import { useNavigate } from 'react-router-dom'

const BlogPage = ({ posts, onPostSelect, onAddPost }: any) => {
  const navigate = useNavigate()

  const handleAddPost = () => {
    onAddPost()
    navigate('/blog/new')
  }

  const handlePostSelect = (post: Post) => {
    onPostSelect(post)
    navigate(`/blog/${post.id}`)
  }

  return (
    <React.Fragment>
      <AddPostButton onClick={handleAddPost} />
      <PostsList posts={posts} onPostSelect={handlePostSelect} />
    </React.Fragment>
  )
}

export default BlogPage
