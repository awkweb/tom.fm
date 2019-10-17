import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'src/layouts'

interface Props {
    data: {
        site: {
            siteMetadata: {
                author
            }
        }
        allMdx: {
            edges: Node[]
        }
    }
}

const IndexPage = ({
    data: {
        site: {
            siteMetadata: { author },
        },
        allMdx: { edges: posts },
    },
}: Props) => <Layout author={author} posts={posts} />

export const query = graphql`
    query PostsQuery {
        site {
            siteMetadata {
                author
            }
        }
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    body
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        entry
                        permalink
                        title
                    }
                }
            }
        }
    }
`

export default IndexPage
