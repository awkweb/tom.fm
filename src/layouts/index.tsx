import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Head from 'src/components/head'
import Post from 'src/components/post'

interface Props {
    posts: Node[]
}

const Layout = ({ posts }: Props) => (
    <>
        <Head />
        {posts.map(
            ({
                node: {
                    body,
                    frontmatter: { date, permalink, title },
                    id,
                },
            }) => (
                <Post date={date} key={id} permalink={permalink} title={title}>
                    <MDXRenderer>{body}</MDXRenderer>
                </Post>
            ),
        )}
    </>
)

export default Layout
