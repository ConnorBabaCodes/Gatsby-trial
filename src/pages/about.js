import React from 'react'
import {Link} from 'gatsby'
import Layout from './components/layout'

export default function About() {
    return (
        
            <Layout>
        <h1>about</h1>
        <p>Connor</p>
        <p><Link to="/contact">Contact</Link></p>
        
        </Layout>
    )
}