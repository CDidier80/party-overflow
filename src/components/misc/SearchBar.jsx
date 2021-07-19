import React, { useState } from 'react'
import '../../styles/NavBar.css'

//Services
import { search } from '../../services/postService'

const SearchBar = ({ setPosts }) => {
  const [keyword, setKeyword] = useState('')

  const handleSearch = async (e) => {
    // search might need page limit at some point
    e.preventDefault()
    try {
      const { posts } = await search(keyword)
      setPosts(posts)
      setKeyword('')
    } catch (error) {
      throw error
    }
  }

  const handleKeywordChange = (e) => setKeyword(e.target.value)

  return (
    <form
      onSubmit={handleSearch}
      className="search"
    >
      <button type="submit">
        <img
          className="search-icon"
          src="https://i.imgur.com/iFtGXxX.png"
          alt="magnifying glass"
        ></img>
      </button>
      <input
        value={keyword}
        onChange={handleKeywordChange}
        placeholder="Search"
        autoComplete="off"
        name="keyword"
      ></input>
    </form>
  )
}

export default SearchBar
