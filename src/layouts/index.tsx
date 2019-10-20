import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Head from 'src/components/head'
import Post from 'src/components/post'

interface Props {
    author: string
    posts: Node[]
}

const Layout = ({ author, posts }: Props) => (
    <>
        <Head />
        {posts.map(
            ({
                node: {
                    body,
                    frontmatter: { date, title },
                    fields: { entry, slug },
                    id,
                },
            }) => (
                <Post
                    author={author}
                    date={date}
                    entry={entry}
                    key={id}
                    slug={slug}
                    title={title}
                >
                    <MDXRenderer>{body}</MDXRenderer>
                </Post>
            ),
        )}
    </>
)

export default Layout
