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
        <Box>
            <Text el={Text.Element.P} noMargin>
                Tune in <a href="/rss.xml">via RSS</a>,{' '}
                <a href={`https://twitter.com/${twitter}`}>on Twitter</a>, or
                drop your E-Mail to receive new post updates:
            </Text>
            <Form />
        </Box>
    )
}

export default Subscribe
