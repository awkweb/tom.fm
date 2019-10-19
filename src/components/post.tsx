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
        <Box bb el={Box.Element.Article} mb={8} pb={7} px={{ sm: 3, lg: 5 }}>
            <Text el={Text.Element.H1} noMargin size={Text.Size.Heading}>
                <Link to={permalink}>{title}</Link>
            </Text>
            <Box
                alignItems={Box.AlignItems.Baseline}
                css={`
                    line-height: 20px;
                `}
                display={Box.Display.Flex}
                mb={6}
                mt={1}
            >
                <Text
                    color={Text.Color.Muted}
                    size={Text.Size.Small}
                    weight={Text.Weight.Medium}
                >
                    {author}
                </Text>
                <Text
                    color={Text.Color.Muted}
                    size={Text.Size.Small}
                    weight={Text.Weight.Medium}
                >
                    &nbsp;&nbsp;&nbsp;×&nbsp;&nbsp;&nbsp;
                </Text>
                <Text
                    color={Text.Color.Muted}
                    el={Text.Element.Time}
                    size={Text.Size.Small}
                    weight={Text.Weight.Medium}
                >
                    {date}
                </Text>
                <Text
                    color={Text.Color.Muted}
                    size={Text.Size.Small}
                    weight={Text.Weight.Medium}
                >
                    &nbsp;&nbsp;&nbsp;×&nbsp;&nbsp;&nbsp;
                </Text>
                <Text
                    color={Text.Color.Muted}
                    size={Text.Size.Small}
                    weight={Text.Weight.Medium}
                >
                    Broadcast {entry}
                </Text>
            </Box>
            <Box>{children}</Box>
        </Box>
    )
}

export default Post
