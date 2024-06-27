import Post from '../components/Post'
import { Link } from 'react-router-dom'

const AllPosts = (props) => {
  
  return (
    <div>
      <Link to="/new">
        <button>Add a Blog</button>
      </Link>
      {props.posts.map((post) => (
        <Post post={post} key={post.id} deleteBlog={props.deleteBlog} />
      ))}
    </div>
  )

  /// Original code that worked! (below) ///
  // return props.posts.map((post) => <Post post={post} key={post.id} deleteBlog={props.deleteBlog} />)

}

export default AllPosts