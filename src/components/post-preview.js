import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'


const PostImageRender = ({postImage}) => {
    if(postImage.image != null) {
        return(
            <Link to={postImage.slug}>
                <Img fluid={postImage.image.sharp.fluid} />
            </Link>
        )  
    }
    return null
}

const PostPreview = ({post}) => {
    console.log(post.image)
    return (
        <article
        >  
            <PostImageRender postImage={post}/>
            <h3>{post.title}</h3>
            <h4>{post.author}</h4>
            <Link to={post.slug}>Read blog</Link>
        </article>
    )
}
export default PostPreview