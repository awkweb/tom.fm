import React, { ReactNode } from 'react'

import { Link } from 'gatsby'

import Box from './Box'
import Text from './Text'

interface Props {
    children: ReactNode
    date: string
    slug: string
    title: string
}

const Post = ({ children, date, slug, title }: Props) => {
    return (
        <Box el={Box.Element.Article} mb={{ sm: 8, lg: 10 }}>
            <Text
                el={Text.Element.H1}
                size={Text.Size.Root}
                weight={Text.Weight.Normal}
            >
                <Link to={slug}>
                    {date} {title}
                </Link>
            </Text>
            {children}
        </Box>
    )
}

export default Post
