import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Form = (props) => {
  const navigate = useNavigate()
  const params = useParams()

  // const currentPost = useMemo(() => props.posts.find(post => post.id === parseInt(params.id)), [params.id, props.posts])

  const currentPost = useMemo(() => {
    return props.posts ? props.posts.find(post => post.id === parseInt(params.id)) : null
  }, [params.id, props.posts])

  // const [formData, setFormData] = useState(
  //   props.formType === 'new' ? {
  //     title: '',
  //     body: '',
  //   } : {
  //     title: currentPost.title,
  //     body: currentPost.body,
  //     id: parseInt(currentPost.id)
  //   }
  // )

  const [formData, setFormData] = useState(
    props.formType === 'new' ? {
      title: '',
      body: '',
    } : {
      title: currentPost ? currentPost.title : '',
      body: currentPost ? currentPost.body : '',
      id: currentPost ? parseInt(currentPost.id) : null
    }
  )

  const handleChange = (event) => {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    props.handleSubmit(formData, props.formType)
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmission}>
      <h3>Title</h3>
      <input
        type='text'
        onChange={handleChange}
        value={formData.title}
        name='title'
      />
      <h3>Body</h3>
      <input
        type='text'
        onChange={handleChange}
        value={formData.body}
        name='body'
      />
      <input type='submit' value={props.buttonLabel} />
    </form>
  )


}

export default Form