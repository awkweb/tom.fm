import React, { ReactNode } from 'react'

import { Link } from 'gatsby'

import Box from './Box'
import Text from './Text'

interface Props {
    date: string
    children: ReactNode
    permalink: string
    title: string
}

const Post = ({ date, children, permalink, title }: Props) => {
    return (
        <Box el={Box.Element.Article}>
            <Box>
                <Text el={Text.Element.H1}>
                    <Link to={permalink}>{title}</Link>
                </Text>
                <Text el={Text.Element.Time}>{date}</Text>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default Post
