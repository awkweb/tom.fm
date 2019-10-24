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

const IndexPage = ({
    data: {
        allMdx: { edges: posts },
    },
}: Props) => <Layout posts={posts} />

export const query = graphql`
    query PostsQuery {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    body
                    fields {
                        entry
                        slug
                    }
                    frontmatter {
                        date(formatString: "MM/DD/YY")
                        title
                    }
                    id
                }
            }
        }
    }
`

export default IndexPage
