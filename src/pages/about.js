import { Link } from 'gatsby'
import React from 'react'
import Container from '../components/container'

export default () => {
    return (
    <div>
        <Container>
            <Link to="/">&larr; Go to HomePage</Link>
            <h1>About Us</h1>
            <p>This is a blog for all of us</p>
        </Container>
    </div>)
}