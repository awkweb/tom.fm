import React from 'react'
import { Link } from 'gatsby'

import Box from './Box'
import Subscribe from './Subscribe'
import Text from './Text'

const Footer = () => (
    <Box el={Box.Element.Footer} my={{ sm: 7, md: 8 }}>
        <Subscribe />
        <Box
            display={Box.Display.Flex}
            justifyContent={Box.JustifyContent.SpaceBetween}
            my={7}
            px={{ sm: 3, md: 5 }}
        >
            <Text font={Text.Font.Monospace}>
                <Link to="/">« Previous</Link>
            </Text>
            <Text align={Text.Align.Right} font={Text.Font.Monospace}>
                <Link to="/">Next »</Link>
            </Text>
        </Box>
    </Box>
)

export default Footer
