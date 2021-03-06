import {graphql, useStaticQuery} from 'gatsby'

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx {
          nodes{
            frontmatter{
              title
              slug
              author
              image {
                sharp: childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt
          }
        }
      }
    `)

    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        slug: post.frontmatter.slug,
        author: post.frontmatter.author,
        image: post.frontmatter.image,
        excerpt: post.excerpt
    }))
}

export default usePosts