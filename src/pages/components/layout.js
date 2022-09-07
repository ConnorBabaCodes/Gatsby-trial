import React from 'react'
import Header from './header'
import Footer from './footer'
import '/src/styles/index.scss'


export default function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}