import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Post from 'src/layouts/post'

interface Props {
    data: {
        mdx: Post
    }
}

const Template = ({
    data: {
        mdx: {
            frontmatter: { date, permalink, title },
            body,
        },
    },
}: Props) => (
    <Post date={date} permalink={permalink} title={title}>
        <MDXRenderer>{body}</MDXRenderer>
    </Post>
)

export const query = graphql`
    query PostQuery($path: String!) {
        mdx(frontmatter: { permalink: { eq: $path } }) {
            id
            body
            frontmatter {
                date(formatString: "MMM DD, YYYY")
                permalink
                title
            }
        }
    }
`

export default Template
