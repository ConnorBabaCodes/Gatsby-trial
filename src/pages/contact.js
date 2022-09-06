import React from 'react'
import {Link} from 'gatsby'
import Footer from './components/footer'
import Header from './components/header'

export default function Contact() {
    return (
        <div>
            <Header />
            <h1>Contact</h1>
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <Footer />
        </div>
    )
}