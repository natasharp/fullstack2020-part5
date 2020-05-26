import React from 'react'
import PropTypes from 'prop-types'

const BlogDetails = ({ blog, user, handleClick, updateBlog, deleteBlog }) => {
  const handleLike = () => {
    const blogToUpdate = {
      user: blog.user.id,
      title: blog.title,
      author: blog.author,
      likes: blog.likes + 1,
      url: blog.url
    }

    updateBlog(blog.id, blogToUpdate)
  }

  const handleDelete = () => {
    const message = `Remove blog ${blog.title} by ${blog.author}`
    if (window.confirm(message)) {
      deleteBlog(blog.id)
    }
  }

  const deleteButton = {
    backgroundColor: '#5F9EA0',
    display: blog.user.username === user.username ? '' : 'none'
  }

  return (
    <div>
      <div>{blog.title}
        <span>&nbsp;</span>
        {blog.author}
        <span>&nbsp;</span>
        <button onClick={handleClick}>hide</button>
      </div>
      <div>{blog.url}</div>
      <div>{blog.likes}
        <span>&nbsp;</span>
        <button onClick={handleLike}>like</button></div>
      <div>{blog.user.name}</div>
      <button style={deleteButton} onClick={handleDelete}>remove</button>
    </div>
  )
}

BlogDetails.propTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  updateBlog: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default BlogDetails
