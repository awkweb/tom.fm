import React from 'react'

import Box from './Box'
import Text from './Text'

interface Props {
    author: string
    date: string
    entry: number
}

const Meta = ({ author, date, entry }: Props) => (
    <Box
        alignItems={Box.AlignItems.Baseline}
        css={`
            line-height: 20px;
            white-space: nowrap;
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
            Broadcast {entry < 100 ? '0' : ''}
            {entry < 10 ? '0' : ''}
            {entry}
        </Text>
    </Box>
)

export default Meta
