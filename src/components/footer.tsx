import React from 'react'

import Box from './Box'
import Text from './Text'

const Footer = () => (
    <Box el={Box.Element.Footer} my={{ sm: 7, md: 8 }}>
        <Text font={Text.Font.Heading}>
            &copy; 2019 <a href="https://meagher.co">Tom Meagher</a>. Powered by{' '}
            <a href="https://gatsby.org">GatsbyJS</a> &amp;{' '}
            <a href="https://now.sh">Now.sh</a>. Set in{' '}
            <a href="https://blazetype.eu/typecatalogue/surt">Surt</a>. Sign the{' '}
            <a href="https://www.are.na/tom-meagher/guestbook">Guestbook</a>.
        </Text>
    </Box>
)

export default Footer
