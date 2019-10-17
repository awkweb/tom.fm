import React, { ReactNode } from 'react'

import Head from 'src/components/head'
import Post from 'src/components/post'

interface Props {
    children: ReactNode
    date: string
    permalink: string
    title: string
}

const Layout = ({ date, children, permalink, title }: Props) => (
    <>
        <Head title={title} />
        <Post date={date} permalink={permalink} title={title}>
            {children}
        </Post>
    </>
)

export default Layout
