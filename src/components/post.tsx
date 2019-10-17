import React, { ReactNode } from 'react'

import { Link } from 'gatsby'

import Box from './Box'
import Text from './Text'

interface Props {
    author: string
    children: ReactNode
    date: string
    entry: string
    permalink: string
    title: string
}

const Post = ({ author, children, date, entry, permalink, title }: Props) => {
    return (
        <Box bb el={Box.Element.Article} mb={5}>
            <Box mb={7}>
                <Box mb={2}>
                    <Text
                        el={Text.Element.H1}
                        noMargin
                        size={Text.Size.Heading}
                    >
                        <Link to={permalink}>{title}</Link>
                    </Text>
                </Box>
                <Box
                    alignItems={Box.AlignItems.Baseline}
                    display={Box.Display.Flex}
                >
                    <Text color={Text.Color.Secondary} size={Text.Size.Small}>
                        {author}&nbsp;&nbsp;×&nbsp;&nbsp;
                    </Text>
                    <Text
                        color={Text.Color.Secondary}
                        el={Text.Element.Time}
                        size={Text.Size.Small}
                    >
                        {date}&nbsp;&nbsp;×&nbsp;&nbsp;
                    </Text>
                    <Text color={Text.Color.Secondary} size={Text.Size.Small}>
                        Entry {entry}
                    </Text>
                </Box>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default Post
