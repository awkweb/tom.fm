import React from 'react'

import Box from './Box'
import Subscribe from './Subscribe'

const Footer = () => (
    <Box el={Box.Element.Footer} my={{ sm: 7, md: 8 }}>
        <Subscribe />
    </Box>
)

export default Footer
