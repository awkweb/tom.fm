import React from 'react'

import Box from './Box'
import Text from './Text'
import Subscribe from './Subscribe'

const Footer = () => (
    <Box bt el={Box.Element.Footer} my={{ sm: 7, md: 8 }} pt={{ sm: 5, lg: 7 }}>
        <Box mb={6}>
            <Subscribe />
        </Box>
        <Text color={Text.Color.Secondary}>
            &copy; 2019 Tom Meagher, unless otherwise specified
        </Text>
    </Box>
)

export default Footer
