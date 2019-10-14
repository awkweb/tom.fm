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
            siteMetadata: { author, entities, location, networks, occupation },
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
        <Field label="Location">
            <Text>{location}</Text>
        </Field>
        <Field label="Occupation">
            <Text>{occupation}</Text>
        </Field>
        <EmailField />
        <Field label="Networks">
            {networks.map(network => (
                <Text key={network.url}>
                    <a href={network.url}>{network.name}</a>
                </Text>
            ))}
        </Field>
        <Field label="Entities">
            {entities.map(entity => (
                <Text key={entity.url}>
                    <a href={entity.url}>{entity.name}</a>
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
                entities {
                    name
                    starred
                    url
                }
            }
        }
    }
`

export default IndexPage
