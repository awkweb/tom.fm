import React, { ReactNode } from 'react'

import Box from './Box'
import Text from './text'

interface Props {
    label: string
    children: ReactNode
    noBorder?: boolean
}

const Field = ({ children, label, noBorder }: Props) => (
    <Box display={{ lg: Box.Display.Flex }} mb={3}>
        <Box
            css={`
                max-width: 6rem;
            `}
            fluidWidth
            mr={5}
            p={{ lg: 2 }}
            textAlign={{ lg: Text.Align.Right }}
        >
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                {label}
            </Text>
        </Box>
        <Box
            b={!noBorder}
            css={`
                max-width: 21.875rem;
            `}
            fluidWidth
            p={noBorder ? 0 : 2}
        >
            {children}
        </Box>
    </Box>
)

export default Field
