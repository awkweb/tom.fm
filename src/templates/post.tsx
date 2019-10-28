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
            excerpt: description,
            fields: { slug },
            frontmatter: { date, title },
            body,
        },
    },
}: Props) => (
    <Post date={date} description={description} slug={slug} title={title}>
        <MDXRenderer>{body}</MDXRenderer>
    </Post>
)

export const query = graphql`
    query PostQuery($path: String!) {
        mdx(fields: { slug: { eq: $path } }) {
            body
            excerpt
            fields {
                slug
            }
            frontmatter {
                date(formatString: "MM/DD/YY")
                title
            }
        }
    }
`

export default Template
