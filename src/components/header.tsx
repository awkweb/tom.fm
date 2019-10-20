import React from 'react'

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
        mb={{ sm: 7, md: 8 }}
        mt={{ md: 7 }}
        p={{ sm: 3, md: 5 }}
    >
        <Text
            color={Text.Color.Background}
            el={Text.Element.H1}
            font={Text.Font.Monospace}
            noMargin
            size={Text.Size.Root}
            weight={Text.Weight.Bold}
        >
            &gt; Welcome to tom.fm
        </Text>
        <Text
            color={Text.Color.Background}
            el={Text.Element.P}
            font={Text.Font.Monospace}
            noMargin
            size={Text.Size.Root}
        >
            A hypermedia broadcasting service transmitting thoughts on
            technology, productivity, culture, &amp; related topics.
        </Text>
    </Box>
)

export default Header
