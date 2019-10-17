import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Post from 'src/layouts/post'

interface Props {
    data: {
        site: {
            siteMetadata: {
                author
            }
        }
        mdx: Post
    }
}

const Template = ({
    data: {
        mdx: {
            frontmatter: { date, description, entry, permalink, title },
            body,
        },
        site: {
            siteMetadata: { author },
        },
    },
}: Props) => (
    <Post
        author={author}
        date={date}
        description={description}
        entry={entry}
        permalink={permalink}
        title={title}
    >
        <MDXRenderer>{body}</MDXRenderer>
    </Post>
)

export const query = graphql`
    query PostQuery($path: String!) {
        site {
            siteMetadata {
                author
            }
        }
        mdx(frontmatter: { permalink: { eq: $path } }) {
            id
            body
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                description
                entry
                permalink
                title
            }
        }
    }
`

export default Template
