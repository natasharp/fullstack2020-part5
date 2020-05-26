import React, { useState } from 'react'
import BlogDetails from './BlogDetails'
import PropTypes from 'prop-types'

const Blog = ({ blog, user, updateBlog, deleteBlog }) => {
  const [details, setDetails] = useState('')

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  const handleClick = () => {
    setDetails(!details)
  }

  if (details === true) {
    return (
      <div style={blogStyle}>
        <BlogDetails
          blog={blog}
          user={user}
          handleClick={handleClick}
          updateBlog={updateBlog}
          deleteBlog={deleteBlog} />
      </div>
    )
  }

  return (
    <div style={blogStyle}>
      {blog.title} {blog.author} <span>&nbsp;</span>
      <button onClick={handleClick}>view</button>
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  updateBlog: PropTypes.func.isRequired,
}

export default Blog
