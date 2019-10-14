import React, { ReactNode } from 'react'

import Box from './Box'
import Text from './text'

interface Props {
    label: string
    children: ReactNode
    noBorder?: boolean
}

const Field = ({ children, label, noBorder }: Props) => (
    <Box display={{ lg: Box.Display.Flex }} mb={4}>
        <Box
            css={`
                max-width: 6rem;
            `}
            fluidWidth
            mb={{ sm: 1, lg: 0 }}
            mr={{ lg: 5 }}
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
            background={!noBorder && Box.Background.Field}
            css={`
                max-width: 21.875rem;
            `}
            fluidWidth={!noBorder}
            px={!noBorder && 3}
            py={!noBorder && 2}
        >
            {children}
        </Box>
    </Box>
)

export default Field
