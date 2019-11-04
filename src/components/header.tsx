import React from 'react'
import { Link } from 'gatsby'

import Box from './Box'
import Text from './Text'

const Header = () => (
    <Box el={Box.Element.Header} mb={{ sm: 7, lg: 8 }} pt={{ sm: 3, lg: 7 }}>
        <Box mb={2}>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.H1}
                noMargin
                size={Text.Size.Root}
                weight={Text.Weight.Normal}
            >
                Hypermedia thoughts on tech, productivity, culture, etc.
            </Text>
        </Box>
        <Box
            display={Box.Display.Flex}
            el={Box.Element.Nav}
            justifyContent={Box.JustifyContent.SpaceBetween}
        >
            <Box display={Box.Display.Flex} el={Box.Element.Ul} m={0}>
                <Box el={Box.Element.Li} mr={{ sm: 3, lg: 4 }}>
                    <Link to="/">Home</Link>
                </Box>
                <Box el={Box.Element.Li} mr={{ sm: 3, lg: 4 }}>
                    <Link to="/archive/">Archive</Link>
                </Box>
                <Box el={Box.Element.Li} mr={{ sm: 3, lg: 4 }}>
                    <a href="https://meagher.co">About</a>
                </Box>
                <Box el={Box.Element.Li}>
                    <a href="https://www.are.na/tom-meagher/guestbook">
                        Guestbook
                    </a>
                </Box>
            </Box>
        </Box>
    </Box>
)

export default Header
