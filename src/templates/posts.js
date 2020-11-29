import React from 'react'
import Layout from '../components/layout'
import {graphql, Link} from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: {slug: {eq: $slug}}){
        
        frontmatter {
            title
            slug
            author
        }
        body
        }
    }
`;

const PostTemplate = ({ data: {mdx: data} }) => {
    return(
        <Layout>
            <div>
                <h1>{data.frontmatter.title}</h1>
                <p className="author-text">{data.frontmatter.author}</p>
                <MDXRenderer title={data.frontmatter.title}>{data.body}</MDXRenderer>
                <Link to="/">&larr; Go back to Homepage</Link>
            </div>
        </Layout>
    )
}

export default PostTemplate