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
            <Box mb={7}>
                <Text el={Text.Element.H1} noMargin size={Text.Size.Heading}>
                    <Link to={permalink}>{title}</Link>
                </Text>
                <Box>
                    <Text color={Text.Color.Muted} el={Text.Element.Time}>
                        {date}
                    </Text>
                    ×
                </Box>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default Post
