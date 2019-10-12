import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'src/components/layout'
import Head from 'src/components/head'
import Image from 'src/components/image'
import Text from 'src/components/text'
import Box from 'src/components/Box'

const IndexPage = ({
    data: {
        site: {
            siteMetadata: {
                author,
                email,
                interests,
                location,
                networks,
                occupation,
                people,
                website,
            },
        },
    },
}) => (
    <Layout>
        <Head title="Home" />
        <Box display={Box.Display.Flex} mb={{ sm: 10, lg: 0 }}>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                Image
            </Text>
            <Image />
        </Box>
        <Box display={Box.Display.Flex}>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                Name
            </Text>
            <Text>{author}</Text>
        </Box>
        <div>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                Website
            </Text>
            <Text>
                <a href={website}>{website}</a>
            </Text>
        </div>
        <div>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                E-Mail
            </Text>
            <Text>
                <a href={`mailto:${email}`}>{email}</a>
            </Text>
        </div>
        <div>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                Networks
            </Text>
            <span>
                {networks.map(network => (
                    <Text key={network.url}>
                        <a href={network.url}>{network.name}</a>
                    </Text>
                ))}
            </span>
        </div>
        <div>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                Location
            </Text>
            <Text>{location}</Text>
        </div>
        <div>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                Occupation
            </Text>
            <Text>{occupation}</Text>
        </div>
        <div>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                Interests
            </Text>
            <span>
                {interests.map(interest => (
                    <Text key={interest}>{interest}</Text>
                ))}
            </span>
        </div>
        <div>
            <Text
                color={Text.Color.Secondary}
                el={Text.Element.Label}
                size={Text.Size.Small}
                weight={Text.Weight.Bold}
            >
                People
            </Text>
            <span>
                {people.map(person => (
                    <Text key={person.url}>
                        <a href={person.url}>{person.name}</a>
                        {person.starred ? `*` : ``}
                    </Text>
                ))}
            </span>
        </div>
    </Layout>
)

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                description
                author
                website
                email
                networks {
                    name
                    url
                }
                location
                occupation
                interests
                people {
                    name
                    starred
                    url
                }
            }
        }
    }
`

export default IndexPage
