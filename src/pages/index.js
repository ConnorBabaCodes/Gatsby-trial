import React from "react"
import {Link} from 'gatsby'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
  <div>
    <Header />
    <h1>test</h1>
    
    <h2>Need a developer? <Link to="/contact">Contact me</Link></h2>
    <Footer />
    </div>
  )
}
