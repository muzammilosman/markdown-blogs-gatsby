import { Link } from 'gatsby'
import React from 'react'

const PostPreview = ({post}) => (
    <article>
        <h3>{post.title}</h3>
        <h4>{post.author}</h4>
        <Link to={post.slug}>Read blog</Link>
    </article>
)

export default PostPreview