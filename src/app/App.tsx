import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainMenu from './components/content/MainMenu'
import AboutPage from './pages/About'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PostFormPage from './pages/PostFormPage'
import PostPage from './pages/PostPage'
import BlogLogo from './components/BlogLogo'
import { dummyPosts } from '../data/dummy-posts'
import SearchBar from './components/content/SearchBar'
import styles from './styles/navbar.module.css'
import { Post } from '../core/models/post.model'

const App = () => {
  const [posts, setPosts] = useState<Array<Post>>(dummyPosts)
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)

  const handlePostSelect = (post: Post) => {
    setSelectedPost(post)
  }

  const handleAddPost = () => {
    setSelectedPost(null)
  }

  const handlePostSubmit = (newPost: Post) => {
    if (selectedPost) {
      const updatedPosts = posts.map((post: Post) =>
        post.id === selectedPost.id ? { ...post, ...newPost } : post,
      )
      setPosts(updatedPosts)
    } else {
      const newPosts = [...posts, { id: Date.now(), ...newPost }]
      setPosts(newPosts)
    }
  }

  return (
    <Router>
      <div className={styles['navbar']}>
        <BlogLogo />
        <MainMenu />
        <SearchBar posts={posts} onPostSelect={handlePostSelect} />
      </div>
      <div className={styles['navbar-content-spacer']}></div>
      <div className="p-5">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route
            path="/blog"
            element={
              <BlogPage posts={posts} onPostSelect={handlePostSelect} onAddPost={handleAddPost} />
            }
          ></Route>
          <Route path="/blog/:id" element={<PostPage post={selectedPost} />}></Route>
          <Route path="/blog/new" element={<PostFormPage onSubmit={handlePostSubmit} />}></Route>
          <Route
            path="/blog/edit/:id"
            element={<PostFormPage post={selectedPost} onSubmit={handlePostSubmit} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
