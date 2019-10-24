import React, { ReactNode } from 'react'

import Head from 'src/components/head'
import Post from 'src/components/post'

interface Props {
    date: string
    description: string
    children: ReactNode
    entry: number
    slug: string
    title: string
}

const Layout = ({ children, date, description, entry, slug, title }: Props) => (
    <>
        <Head description={description} title={title} />
        <Post date={date} entry={entry} slug={slug} title={title}>
            {children}
        </Post>
    </>
)

export default Layout
