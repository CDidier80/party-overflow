import React, { Fragment } from 'react'
import '../styles/App.css'

//Components
import PostList from '../components/Post/PostList'
import PostForm from '../components/Post/PostForm'
import Pagination from '../components/misc/Pagination'

// whoa, too much white space. Apply consistent spacing
// Purely subjective, but I feel it's a little odd to destructure some
// props but use others from props.something. I'd consider choosing
// one and sticking with it. When some props are destructured and others aren't
// it implies a logical difference in how the props will be used, which in this
// case doesn't exist. In my opinion this outweighs the benefit of not repeating the word
// "props" a few more times
// I think it's a bit cleaner to just use props.whatever syntax

const Home = () => (
    <div className="layout">
        { props.display ?
            <>
                <Pagination
                    changePage={props.changePage}
                    currentPage={props.currentPage}
                    posts={props.posts}
                />
                <PostList
                    posts={props.posts}
                    markPostResolved={props.markPostResolved}
                    handleDeletePost={props.handleDeletePost}
                    currentUser={props.currentUser}
                />
            </>
            :
            <PostForm
                handleCreatePost={props.handleCreatePost}
                currentUser={props.currentUser}
            />
        }
    </div>
)

export default Home