import React from 'react'

import Box from './Box'
import Text from './Text'

const Footer = () => (
    <Box
        background={Box.Background.Accent}
        borderRadius={{
            sm: Box.BorderRadius.None,
            lg: Box.BorderRadius.Large,
        }}
        css={`
            line-height: 24px;
            a {
                color: inherit;
            }
        `}
        el={Box.Element.Footer}
        mb={{ sm: 7, md: 8 }}
        mt={{ md: 7 }}
        p={{ sm: 3, md: 5 }}
    >
        <Text
            el={Text.Element.P}
            font={Text.Font.Monospace}
            noMargin
            size={Text.Size.Root}
        >
            Tune in{' '}
            <b>
                <a href="/feed">via RSS</a>
            </b>
            ,{' '}
            <b>
                <a href="https://twitter.com/tomfme">on Twitter</a>
            </b>
            , or drop <b>your E-Mail</b> for occasional broadcast round-ups
            &amp; neat Internet-y things:
        </Text>
        <Box mt={3}>
            <input placeholder="email@address.com" />
            <button>Subscribe</button>
        </Box>
    </Box>
)

export default Footer
