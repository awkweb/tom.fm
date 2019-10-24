import React from 'react'
import { Link } from 'gatsby'

import Box from './Box'
import Text from './Text'
import Form from './Subscribe/components/form'

const Header = () => (
    <Box el={Box.Element.Header} mb={{ lg: 8 }} pt={{ lg: 7 }}>
        <Box mb={{ lg: 3 }}>
            <Text
                el={Text.Element.H1}
                noMargin
                size={Text.Size.Root}
                weight={Text.Weight.Normal}
            >
                tom.fm is hypermedia thoughts on tech, productivity, culture,
                &amp; related topics.
            </Text>
        </Box>
        <Box
            display={Box.Display.Flex}
            el={Box.Element.Nav}
            justifyContent={Box.JustifyContent.SpaceBetween}
        >
            <Box display={Box.Display.Flex} el={Box.Element.Ul} m={0}>
                <Box el={Box.Element.Li} mr={{ lg: 4 }}>
                    <Link to="/">Home</Link>
                </Box>
                <Box el={Box.Element.Li} mr={{ lg: 4 }}>
                    <a href="https://meagher.co">About</a>
                </Box>
                <Box el={Box.Element.Li}>
                    <Link to="/rss.xml">RSS</Link>
                </Box>
            </Box>
            <Form />
        </Box>
    </Box>
)

export default Header
