// Card.jsx
import React, { useEffect, useState } from 'react'
import './blog.css'
import { blog } from '../../css/assets/data/data'
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import styles from './blog.css' // Import the CSS module

export function Card() {
  const url = 'http://wandertour.ddns.net:5000/blog'
  const [blog, setBlog] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/blog')
      .then((response) => response.json())
      .then((res) => {
        setBlog(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const url1 = 'http://wandertour.ddns.net:5000/Images_Blog/'
  
  return (
    <section className='blog'>
      {' '}
      {/* Apply the 'blog' class to the container */}
      <div className='container1 grid3'>
        {blog.map((item) => (
          <div className='box boxItems' key={item.id}>
            <div className='img'>
              <img src={`http://localhost:5000/Images_Blog/` + item.cover} alt='' />
            </div>
            <div className='details'>
              <div className='tag'>
                <AiOutlineTags className='icon' />
                <a href='/'>#{item.category}</a>
              </div>
              <Link to={`/details/${item._id}`} className='link'>
                <h3>{item.title}</h3>
              </Link>
              <p>{item.desc.slice(0, 180)}...</p>
              <div className='date'>
                <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
