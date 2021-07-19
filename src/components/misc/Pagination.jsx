import React from 'react'
import '../../styles/Pagination.css'


const Pagination = ({ changePage, currentPage, posts}) => (
        <div className="pagination">
            <h3>Recent Posts</h3>
            { currentPage > 0 &&
                <button
                    value="-1"
                    onClick={(e) => changePage(e)}
                >
                    Back
                </button>
            }
            { posts.length &&
                <button
                    value="1"
                    onClick={(e) => changePage(e)}
                >
                    Next
                </button>
            }
        </div>
    )

export default Pagination