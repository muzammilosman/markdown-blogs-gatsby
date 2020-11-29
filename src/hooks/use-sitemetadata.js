import { graphql, useStaticQuery} from 'gatsby'

const useSitemetadata = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)

    return data.site.siteMetadata
}

export default useSitemetadata
