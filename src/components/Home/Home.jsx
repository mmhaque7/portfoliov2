import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Header from '../Helpers/Header'

const Home = () => {
    return (

        <>
        <Header/>
            <div className='main'>
                <div className='home-div'><Link to="/work">Work</Link></div>
                <div className='home-div'><Link to="/blog">Blog</Link></div>
                <div className='home-div'><Link to="/contact-me">Contact</Link></div>
            </div>
        </>
    )
}

export default Home
