import React from 'react'
import { postData } from '../data/data.js'

const BlogPostRead = () => (
    <>
        <h2>My projects so far</h2>
        {postData.map((data, key) => (
            <div key={key} className='blogpost'>
                <div className="blog-image">
                    <img src={data.image} alt="Preview" width="100%" />
                </div>
                <div className="blog-text">
                    <p className='date'>{data.date}</p>
                    <h3>{data.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: data.text }} />
                </div>
            </div>
        ))}
    </>
)

export default BlogPostRead