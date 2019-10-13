import React from 'react'

import Head from 'src/components/head'
import Field from 'src/components/field'
import Text from 'src/components/text'
import Box from 'src/components/Box'
import { Link, graphql } from 'gatsby'

const NotFoundPage = ({
    data: {
        site: {
            siteMetadata: { username },
        },
    },
}) => (
    <>
        <Head title="404" />
        <Field label="Error">
            <Text>404: Not found</Text>
        </Field>
        <Field label="Options">
            <Box el={Box.Element.Ul} my={0} pl={5}>
                <Box el={Box.Element.Li}>
                    <Text>
                        Back to <Link to="/">home</Link>
                    </Text>
                </Box>
                <Box el={Box.Element.Li}>
                    <Text>
                        Read my favorite{' '}
                        <a href="https://frankchimero.com/writing/the-webs-grain/">
                            essay
                        </a>
                    </Text>
                </Box>
                <Box el={Box.Element.Li}>
                    <Text>
                        Let me know about this on{' '}
                        <a href={`https://twitter.com/${username}`}>Twitter</a>
                    </Text>
                </Box>
            </Box>
        </Field>
    </>
)

export const query = graphql`
    query NotFoundPageQuery {
        site {
            siteMetadata {
                username
            }
        }
    }
`

export default NotFoundPage
