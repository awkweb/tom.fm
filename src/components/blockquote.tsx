import React, { ReactNode } from 'react'

import Box from './Box'
import Text from './Text'

interface Props {
    children: ReactNode
    source: ReactNode | string
}

const Blockquote = ({ children, source }: Props) => (
    <Box ml={3} my={5}>
        <Box
            bl
            borderColor={Box.BorderColor.Muted}
            css={`
                blockquote {
                    margin-left: 0;
                }
            `}
            el={Box.Element.Div}
            pl={3}
        >
            <Text el={Text.Element.Blockquote} noMargin>
                {children}
            </Text>
        </Box>
        {source && (
            <Text color={Text.Color.Secondary} size={Text.Size.Small}>
                {source}
            </Text>
        )}
    </Box>
)

Blockquote.defaultProps = {
    source: '',
}

export default Blockquote
