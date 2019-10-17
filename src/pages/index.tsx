import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'src/layouts'

interface Props {
    data: {
        allMdx: {
            edges: Node[]
        }
    }
}

const IndexPage = ({ data: { allMdx } }: Props) => (
    <Layout posts={allMdx.edges} />
)

export const query = graphql`
    query PostsQuery {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    body
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        permalink
                        title
                    }
                }
            }
        }
    }
`

export default IndexPage
