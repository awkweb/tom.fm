import React from 'react'

import Head from 'src/components/head'
import Box from 'src/components/Box'
import Text from 'src/components/Text'
import { Link } from 'gatsby'

interface Props {
    posts: Node[]
}

const Layout = ({ posts }: Props) => (
    <>
        <Head />
        <>
            <Text
                el={Text.Element.H1}
                size={Text.Size.Root}
                weight={Text.Weight.Normal}
            >
                Archive
            </Text>
            <Box el={Box.Element.Ul} mb={{ sm: 5, lg: 7 }}>
                {posts.map(
                    ({
                        node: {
                            frontmatter: { date, title },
                            fields: { slug },
                            id,
                        },
                    }) => (
                        <Box el={Box.Element.Li} key={id} mb={3}>
                            <Text
                                el={Text.Element.H1}
                                noMargin
                                size={Text.Size.Root}
                                weight={Text.Weight.Normal}
                            >
                                <Link to={slug}>
                                    {date} {title}
                                </Link>
                            </Text>
                        </Box>
                    ),
                )}
            </Box>
        </>
    </>
)

export default Layout
