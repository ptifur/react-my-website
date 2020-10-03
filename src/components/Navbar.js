import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='title'>Ptifur</div>
            <div className='menu'>
                <div><a href="http://twitter.com/ptifurr" target="_blank" rel="noopener noreferrer">twitter</a></div>
                <div><a href="https://github.com/ptifur/react-my-website" target="_blank" rel="noopener noreferrer">source code</a></div>
            </div>
        </div>
    )
}

export default Navbar