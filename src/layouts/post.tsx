import React, { ReactNode } from 'react'

import Head from 'src/components/head'
import Post from 'src/components/post'

interface Props {
    author: string
    date: string
    description: string
    children: ReactNode
    entry: string
    permalink: string
    title: string
}

const Layout = ({
    author,
    children,
    date,
    description,
    entry,
    permalink,
    title,
}: Props) => (
    <>
        <Head description={description} title={title} />
        <Post
            author={author}
            date={date}
            entry={entry}
            permalink={permalink}
            title={title}
        >
            {children}
        </Post>
    </>
)

export default Layout
