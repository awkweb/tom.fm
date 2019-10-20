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
            excerpt: description,
            fields: { entry, slug },
            frontmatter: { date, title },
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
        slug={slug}
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
        mdx(fields: { slug: { eq: $path } }) {
            body
            excerpt
            fields {
                entry
                slug
            }
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`

export default Template
