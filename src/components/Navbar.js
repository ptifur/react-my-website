import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='title'>Ptifur</div>
            <div className='menu'>
                <div><a href="http://twitter.com/ptifurr" target="_blank" rel="noopener noreferrer">twitter</a></div>
                <div><a href="https://www.notion.so/Yar-Yemtsov-fcefa79d5d7d41f8a482d6641b14dbd6" target="_blank" rel="noopener noreferrer">cv</a></div>
                <div><a href="https://github.com/ptifur/react-my-website" target="_blank" rel="noopener noreferrer">source code</a></div>
            </div>
        </div>
    )
}

export default Navbar