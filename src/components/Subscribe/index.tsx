import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Box from '../Box'
import Text from '../Text'
import Form from './components/form'

const Subscribe = () => {
    const {
        site: {
            siteMetadata: { twitter },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    title
                    twitter
                }
            }
        }
    `)
    return (
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
                    text-decoration: underline;
                }
            `}
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
                    <a href="/feed.xml">via RSS</a>
                </b>
                ,{' '}
                <b>
                    <a href={`https://twitter.com/${twitter}`}>on Twitter</a>
                </b>
                , or drop <b>your E-Mail</b> to receive occasional broadcast
                round-ups &amp; neat Internet-y things:
            </Text>
            <Form />
        </Box>
    )
}

export default Subscribe
