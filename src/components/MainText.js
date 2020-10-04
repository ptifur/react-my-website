import React from 'react'

const MainText = () => {
    return (
        <div className='maintext'>
            <h1>Hi there!</h1>
            <p>My name is Yar. Making first steps in web development.</p>
            <p>My plan for the nearest month is to figure out how React works. And contribute to the real project!</p>
            <p>
            You may reach me at <a href="mailto:ptifur@gmail.com" target="_blank" rel="noopener noreferrer" className="inline">ptifur@gmail.com</a> or follow me on <a href="http://twitter.com/ptifurr" target="_blank" rel="noopener noreferrer" className='inline'>twitter</a>.</p>

            {/* <p><a href="https://type.ptifur.digital" className='inline' target="_blank" rel="noopener noreferrer">PtiType</a> is a JavaScript project. It lets you practice typing  <span role='img' aria-labelledby="joystick" className='emoji'>🎮</span></p> */}
        </div>
    )
}

export default MainText