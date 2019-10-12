import React from 'react'
import { graphql } from 'gatsby'

import Head from 'src/components/head'
import Image from 'src/components/image'
import Text from 'src/components/text'
import Field from 'src/components/field'

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
    <>
        <Head title="Home" />
        <Field label="Image" noBorder>
            <Image />
        </Field>
        <Field label="Name">
            <Text>{author}</Text>
        </Field>
        <Field label="Website">
            <Text>
                <a href={website}>{website}</a>
            </Text>
        </Field>
        <Field label="E-Mail">
            <Text>
                <a href={`mailto:${email}`}>{email}</a>
            </Text>
        </Field>
        <Field label="Networks">
            <span>
                {networks.map(network => (
                    <Text key={network.url}>
                        <a href={network.url}>{network.name}</a>
                    </Text>
                ))}
            </span>
        </Field>
        <Field label="Location">
            <Text>{location}</Text>
        </Field>
        <Field label="Occupation">
            <Text>{occupation}</Text>
        </Field>
        <Field label="Interests">
            <span>
                {interests.map(interest => (
                    <Text key={interest}>{interest}</Text>
                ))}
            </span>
        </Field>
        <Field label="People">
            <span>
                {people.map(person => (
                    <Text key={person.url}>
                        <a href={person.url}>{person.name}</a>
                        {person.starred ? `*` : ``}
                    </Text>
                ))}
            </span>
        </Field>
    </>
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
