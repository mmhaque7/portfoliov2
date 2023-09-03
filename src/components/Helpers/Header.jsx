import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className='home-header'>
                <Link to="/"><h2 className='title'>
                    <span className="title-word title-word-1">Hi </span>
                    <span className="title-word title-word-2">I'm Mehedi </span>
                    <span className="title-word title-word-3">And </span>
                    <span className="title-word title-word-4">I am a Web Developer.</span>
                </h2></Link>
            </div>
        </>
    )
}

export default Header
