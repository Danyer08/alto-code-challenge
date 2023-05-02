import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutPage from './pages/About'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/Contact'
import HomePage from './pages/Home'
import PostFormPage from './pages/PostFormPage'
import PostPage from './pages/PostPage'
import { Post } from '../core/models/post.model'
import { PostController } from '../infra/controllers/post-contoller'
import { User } from '../core/models/user.model'
import { UserContext } from './context/user-context'
import Navbar from './components/layout/Navbar'

const user = new User(Date.now(), 'admin', 'admin@gmail.com', true)

const App = () => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const [selectedPost, setSelectedPost] = useState<Post | null>(null)
  const postController = new PostController()
  useEffect(() => {
    postController.getPosts().then((posts) => {
      setPosts(posts)
    })
  }, [])

  const handlePostSelect = (post: Post) => {
    setSelectedPost(post)
  }

  const handleAddPost = () => {
    setSelectedPost(null)
  }

  const handlePostSubmit = async (post: Post) => {
    if (selectedPost) {
      const posts = await postController.updatePost(post)
      setPosts(posts)
    } else {
      const posts = await postController.addPost(post)
      setPosts(posts)
    }
  }

  const handlePostDelete = (post: Post) => {
    postController
      .deletePost(post.id)
      .then((posts) => {
        setPosts(posts)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Navbar posts={posts} onPostSelect={handlePostSelect} />
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
            <Route
              path="/blog/:id"
              element={<PostPage post={selectedPost!} onPostDelete={handlePostDelete} />}
            ></Route>
            <Route path="/blog/new" element={<PostFormPage onSubmit={handlePostSubmit} />}></Route>
            <Route
              path="/blog/edit/:id"
              element={<PostFormPage post={selectedPost} onSubmit={handlePostSubmit} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  )
}

export default App
