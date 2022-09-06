import React from 'react'
import {Link} from 'gatsby'
import Footer from './components/footer'
import Header from './components/header'

export default function About() {
    return (
        <div>
            <Header />
        <h1>about</h1>
        <p>Connor</p>
        <p><Link to="/contact">Contact</Link></p>
        <Footer />
        </div>
    )
}