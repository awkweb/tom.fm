import React, { ReactNode } from 'react'

import Box from './Box'
import Text from './Text'

interface Props {
    children: ReactNode
    cite: string
    source: ReactNode | string
}

const Blockquote = ({ children, source = '', ...props }: Props) => (
    <Box
        css={`
            a {
                color: inherit;
            }
        `}
        ml={3}
        my={5}
    >
        <Box el={Box.Element.Blockquote} ml={0} my={0} {...props}>
            {children}
        </Box>
        {source && (
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Cite}
                size={Text.Size.Small}
            >
                {props.cite ? <a href={props.cite}>{source}</a> : source}
            </Text>
        )}
    </Box>
)

export default Blockquote