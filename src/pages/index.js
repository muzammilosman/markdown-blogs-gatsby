import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PostPreview from '../components/post-preview'
import usePosts from "../hooks/use-postsdata"

export default () => {
  const posts = usePosts()
  
  return (<div>
        <Layout>
          <h2>Hey there!</h2>
          <div>
            <Link to="/about">About &rarr;</Link>  
          </div>
          <div>
            <Link to="/contact">Contact &rarr;</Link>  
          </div>
          <div>
              <h2>Blogs</h2>
          </div>
          <div>
            {
              posts.map(post => (
                <PostPreview key={post.slug} post={post} />
              ))
            }
          </div>
        </Layout>
      </div>)
}
