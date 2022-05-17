import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <div className='card'>
      <h2 className="title">{post.title}</h2>
      <img src={post.img} alt="" className="img" />
      <p className="desc">{post.desc}</p>
      <Link to={`post/${post.id}`} className="btn">Read More</Link>
    </div>
  )
}

export default Card