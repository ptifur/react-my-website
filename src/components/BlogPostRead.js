import React from 'react'
import { postData } from './data.js'

const BlogPostRead = () => {
    // console.log(postData[1].text)
    return (
        <>
            <h2>My projects so far</h2>

            { postData.map((data, key) => {

                return (
                    <div key={key} className='blogpost'>
                        <p className='date'>{data.date}</p>
                        <h3>{data.title}</h3>
                        <div dangerouslySetInnerHTML={{__html: data.text }} />
                    </div>
                )
            })}
        </>
    )
}

export default BlogPostRead