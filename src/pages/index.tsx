import React from 'react'
import { graphql } from 'gatsby'

import Head from 'src/components/head'
import Image from 'src/components/image'
import Text from 'src/components/text'
import Field from 'src/components/field'
import VersionField from 'src/components/version-field'
import EmailField from 'src/components/email-field'
import Box from 'src/components/Box'

const IndexPage = ({
    data: {
        site: {
            siteMetadata: {
                author,
                interests,
                location,
                networks,
                occupation,
                people,
            },
        },
    },
}) => (
    <>
        <Head title="Welcome Home" />
        <Field label="Avatar" noBorder>
            <Image />
        </Field>
        <Field label="Name">
            <Text>{author}</Text>
        </Field>
        <VersionField />
        <EmailField />
        <Field label="Networks">
            {networks.map(network => (
                <Text key={network.url}>
                    <a href={network.url}>{network.name}</a>
                </Text>
            ))}
        </Field>
        <Field label="Location">
            <Text>{location}</Text>
        </Field>
        <Field label="Occupation">
            <Text>{occupation}</Text>
        </Field>
        <Field label="Interests">
            <Box el={Box.Element.Ul} my={0} pl={5}>
                {interests.map(interest => (
                    <Box el={Box.Element.Li} key={interest}>
                        <Text>{interest}</Text>
                    </Box>
                ))}
            </Box>
        </Field>
        <Field label="People">
            {people.map(person => (
                <Text key={person.url}>
                    <a href={person.url}>{person.name}</a>
                    {person.starred && `*`}
                </Text>
            ))}
        </Field>
    </>
)

export const query = graphql`
    query HomePageQuery {
        site {
            siteMetadata {
                description
                author
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
