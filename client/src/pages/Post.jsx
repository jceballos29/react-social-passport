import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { posts } from "../data"

const Post = () => {

  const {id} = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    if(id){
      const post = posts.find(post => post.id === parseInt(id))
      setPost(post)
    }
  }, [id])
  

  return (
    <div className="post">
      <img src={post?.img} alt="" className="post__img" />
      <h1 className="post__title">{post?.title}</h1>
      <p className="post__desc">{post?.desc}</p>
      <p className="post__desc__long">{post?.longDesc}</p>
    </div>
  )
}

export default Post