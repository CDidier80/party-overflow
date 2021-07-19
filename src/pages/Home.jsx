import React, { Fragment } from 'react'
import '../styles/App.css'

//Components
import PostList from '../components/Post/PostList'
import PostForm from '../components/Post/PostForm'
import Pagination from '../components/misc/Pagination'



const Home = (props) => {
    const { posts, handleCreatePost, handleDeletePost, markPostResolved } = props

    return (
        <div className="layout">
            {props.display ?
                <Fragment>
                    <Pagination
                        changePage={props.changePage}
                        currentPage={props.currentPage}
                        posts={posts}
                    ></Pagination>
                    <PostList
                        posts={posts}
                        markPostResolved={markPostResolved}
                        handleDeletePost={handleDeletePost}
                        currentUser={props.currentUser}
                    ></PostList>
      
                </Fragment>
                :
                <PostForm handleCreatePost={handleCreatePost} currentUser={props.currentUser}></PostForm>
            }
        </div>
    )
}

export default Home