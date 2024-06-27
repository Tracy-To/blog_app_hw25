import { Link, useNavigate } from 'react-router-dom'

const divStyle = {
  textAlign: 'center',
  border: '3px solid',
  margin: '10px auto',
  width: '80%'
}

const titleStyle = {
  color: '#006643',
  fontSize: '4em'
}

const Post = ({post, deleteBlog}) => {

  const navigate = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault()
    deleteBlog(post.id)
    navigate('/')
  }

  return (
    <div style={divStyle}>
      <Link to={`/post/${post.id}`}>
        <h1 style={titleStyle}>{post.title}</h1>
      </Link>
      <h2>{post.body}</h2>
      <form onSubmit={handleDelete}>
        <input type='submit' value='Delete' />
      </form>
    </div>
  )
}

export default Post