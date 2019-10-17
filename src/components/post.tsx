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
                        Tom Meagher
                    </Text>
                    <Text>&nbsp;&nbsp;×&nbsp;&nbsp;</Text>
                    <Text
                        color={Text.Color.Secondary}
                        el={Text.Element.Time}
                        size={Text.Size.Small}
                    >
                        {date}
                    </Text>
                    <Text>&nbsp;&nbsp;×&nbsp;&nbsp;</Text>
                    <Text color={Text.Color.Secondary} size={Text.Size.Small}>
                        Entry 002
                    </Text>
                </Box>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default Post
