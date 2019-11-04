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
        <Box el={Box.Element.Article} mb={{ sm: 8, lg: 9 }}>
            <Box mb={2}>
                <Text
                    el={Text.Element.H1}
                    noMargin
                    size={Text.Size.Root}
                    weight={Text.Weight.Normal}
                >
                    <Link to={slug}>
                        <Text el={Text.Element.Time}>{date}</Text> {title}
                    </Link>
                </Text>
            </Box>

            {children}
        </Box>
    )
}

export default Post
