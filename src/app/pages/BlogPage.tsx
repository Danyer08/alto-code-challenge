import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../core/models/post.model'
import AddPostButton from '../components/AddPostButton'
import PostsList from '../components/content/PostList'
import { BlogPageProps } from '../types/props/blog-page-props.type'

const BlogPage = ({ posts, onPostSelect, onAddPost }: BlogPageProps) => {
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
