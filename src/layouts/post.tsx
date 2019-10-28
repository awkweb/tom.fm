import React, { ReactNode } from 'react'

import Head from 'src/components/head'
import Post from 'src/components/post'

interface Props {
    date: string
    description: string
    children: ReactNode
    slug: string
    title: string
}

const Layout = ({ children, date, description, slug, title }: Props) => (
    <>
        <Head description={description} title={title} />
        <Post date={date} slug={slug} title={title}>
            {children}
        </Post>
    </>
)

export default Layout
