import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Box from './Box'
import Text from './Text'

const Header = () => (
    <Box
        background={Box.Background.Primary}
        borderRadius={{
            sm: Box.BorderRadius.None,
            lg: Box.BorderRadius.Large,
        }}
        css={`
            line-height: 24px;
        `}
        el={Box.Element.Header}
        mb={8}
        p={{ sm: 3, lg: 5 }}
    >
        <Box mb={2}>
            <Text
                color={Text.Color.Background}
                el={Text.Element.H1}
                font={Text.Font.Monospace}
                noMargin
                size={Text.Size.Root}
                weight={Text.Weight.Bold}
            >
                Welcome to tom.fm
            </Text>
        </Box>
        <Text
            color={Text.Color.Background}
            el={Text.Element.P}
            font={Text.Font.Monospace}
            noMargin
            size={Text.Size.Root}
        >
            A hypermedia broadcasting service transmitting thoughts on
            technology, productivity, culture, and related topics.
        </Text>
    </Box>
)

export default Header
