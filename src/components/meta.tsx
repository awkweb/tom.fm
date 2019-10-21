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
        display={Box.Display.Flex}
        mb={6}
        mt={1}
    >
        <Text
            color={Text.Color.Muted}
            lineHeight={Text.LineHeight.Small}
            size={Text.Size.Small}
            weight={Text.Weight.Medium}
        >
            {author}
        </Text>
        <Box mx={{ sm: 2, md: 3 }}>
            <Text
                color={Text.Color.Muted}
                lineHeight={Text.LineHeight.Small}
                size={Text.Size.Small}
                weight={Text.Weight.Medium}
            >
                ×
            </Text>
        </Box>
        <Text
            color={Text.Color.Muted}
            el={Text.Element.Time}
            lineHeight={Text.LineHeight.Small}
            size={Text.Size.Small}
            weight={Text.Weight.Medium}
        >
            {date}
        </Text>
        <Box mx={{ sm: 2, md: 3 }}>
            <Text
                color={Text.Color.Muted}
                lineHeight={Text.LineHeight.Small}
                size={Text.Size.Small}
                weight={Text.Weight.Medium}
            >
                ×
            </Text>
        </Box>
        <Text
            color={Text.Color.Muted}
            lineHeight={Text.LineHeight.Small}
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
