import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/App.css'

//Services
import {
  getRecent,
  updatePost,
  deletePost,
  createPost,
  search
} from './services/postService'
import { getUser, logout } from './services/authService'

//Pages + Components
import NavBar from './components/misc/NavBar'
import Layout from './components/Layout/Layout'
import ProtectedRoute from './components/misc/ProtectedRoute'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PostDetails from './pages/PostDetails'

// The tab spacing of this file is 2 char, but in other places it's 4
// Definitely choose one standard and apply it app-wide
// This should be a setting and I know there's a way you can automaticall apply
// it to the entire project.

const App = () => {
  const [currentUser, setCurrentUser] = useState()
  const [authenticated, setAuthenticated] = useState(false)
  const [display, setDisplay] = useState(true)

  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)


  const changePage = (e) => {
    e.preventDefault()
    setCurrentPage(currentPage + parseInt(e.target.value))
  }


  const handleCreatePost = async (formData) => {
    try {
      const response = await createPost(formData)
      response.post.added_by = currentUser

      if (posts.length < 8){
        setPosts((posts) => [response.post, ...posts])
      } else {
        const duplicate = [...posts]
        duplicate.splice(duplicate.length - 1, 1)
        setPosts(() => [response.post, ...duplicate])
      }
      
      setDisplay(true)
    } catch (error) {
      throw error
    }
  }

  const handleDeletePost = async (postToDelete) => {
    try {
      await deletePost(postToDelete._id)
      // consider more semantics here
      // const remainingPosts = posts.filter((post) => post._id !== postToDelete._id)
      // I think this can be simplified to this:
      const remainingPosts = posts.filter((post) => post !== postToDelete)
      setPosts(remainingPosts)
    } catch (error) {
      throw error
    }
  }

  // possibly ambiguous function name - not sure what this will do at a glance
  // Is this just updating a post? If so, consider argument postToUpdate as arg name
  const markPostResolved = async (postData) => {
    try {
      const updatedPost = await updatePost(postData)
      const updatedPosts = posts.map((post) =>
        post._id === postData._id ? updatedPost : post
      )
      setPosts(updatedPosts)
    } catch (error) {
      throw error
    }
  }

  const handleSignupOrLogin = async () => {
    const user = getUser()
    setCurrentUser(user)
    setAuthenticated(true)
  }

  const handleLogout = () => {
    logout()
    setCurrentUser(null)
    setAuthenticated(false)
  }

  const verifyToken = async () => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const user = getUser()
        setCurrentUser(user)
        setAuthenticated(true)
      } catch (error) {
        localStorage.clear()
      }
    }
  }

  useEffect(() => {
    verifyToken()
  }, [authenticated])


  useEffect(() => {
    const fetchAllPosts = async (page) => {
      const posts = await getRecent(page)
      setPosts(posts)
    }
    fetchAllPosts(currentPage)
  }, [currentPage])

  // I would strongly consider breaking these long lines. This is somewhat subjective
  // because you do see pro production code where they blast out 130 character JSX/HTML
  // but I think it's generally more appreciated to break it down. JS/ES recommended max line
  // length is 80 chars, which may be a bit aggressively small, but still worth aiming for
  // Whatever you do, the most important thing is that it's totally consistent and patterned
  // in both the file, and app-wide
  return (
    <div className="App">
      <NavBar authenticated={authenticated} handleLogout={handleLogout} setPosts={setPosts}></NavBar>
      <Switch>
        <Route exact path="/" component={(props) => (<Landing {...props} />)} />
        <Route path="/login" component={(props) => (<Login {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />
        <Route path="/register" component={(props) => (<Register {...props} handleSignupOrLogin={handleSignupOrLogin} />)} />

        <ProtectedRoute authenticated={authenticated} path='/profile' component={(props) => (
          // this is lovely to read
          <Profile
            {...props}
            posts={posts}
            verifyToken={verifyToken}
            currentUser={currentUser}
            handleDeletePost={handleDeletePost}
            markPostResolved={markPostResolved}
          />
        )}>
        </ProtectedRoute>

        <Route path="/home" component={(props) => (
          // maintain your line formatting convention
          <Layout
            display={display}
            currentUser={currentUser}
            setDisplay={setDisplay}
          >
            <Home {...props}
              posts={posts}
              display={display}
              currentUser={currentUser}
              currentPage={currentPage}
              changePage={changePage}
              handleCreatePost={handleCreatePost}
              handleDeletePost={handleDeletePost}
              markPostResolved={markPostResolved}
              // this is subjective, but consider removing end tags for components
              // that don't have children
            ></Home>
          </Layout>
        )} />

        <Route path="/post/:id" component={(props) => (
          <Layout
            display={display}
            setDisplay={setDisplay}
            currentUser={currentUser}
          >
            <PostDetails
              {...props}
              currentUser={currentUser}
              handleDeletePost={handleDeletePost}
              markPostResolved={markPostResolved}
            />
          </Layout>
        )} />

      </Switch>
    </div>
  )
}

export default App

