import React, { ReactNode } from 'react'

import { Link } from 'gatsby'

import Box from './Box'
import Meta from './meta'
import Text from './Text'

interface Props {
    author: string
    children: ReactNode
    date: string
    entry: number
    slug: string
    title: string
}

const Post = ({ author, children, date, entry, slug, title }: Props) => {
    return (
        <Box
            bb
            el={Box.Element.Article}
            mb={{ sm: 6, md: 7 }}
            pb={{ sm: 6, md: 7 }}
            px={{ sm: 3, md: 5 }}
        >
            <Text el={Text.Element.H1} noMargin size={Text.Size.Heading}>
                <Link to={slug}>{title}</Link>
            </Text>
            <Meta author={author} date={date} entry={entry} />
            {children}
        </Box>
    )
}

export default Post
