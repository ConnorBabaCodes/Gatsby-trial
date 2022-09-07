import React from "react"
import {Link} from 'gatsby'
import Layout from './components/layout'

export default function Home() {
  return (
 
    <Layout>
    <h1>test</h1>
    
    <h2>Need a developer? <Link to="/contact">Contact me</Link></h2>
    </Layout >
    
  )
}
