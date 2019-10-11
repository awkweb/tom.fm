import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'src/components/layout'
import Head from 'src/components/head'
import Image from 'src/components/image'

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
        <div>
            <small>
                <b>Image</b>
            </small>
            <Image />
        </div>
        <div>
            <small>
                <b>Name</b>
            </small>
            <span>{author}</span>
        </div>
        <div>
            <small>
                <b>Website</b>
            </small>
            <span>
                <a href={website}>{website}</a>
            </span>
        </div>
        <div>
            <small>
                <b>E-Mail</b>
            </small>
            <span>
                <a href={`mailto:${email}`}>{email}</a>
            </span>
        </div>
        <div>
            <small>
                <b>Networks</b>
            </small>
            <span>
                {networks.map(network => (
                    <div key={network.url}>
                        <a href={network.url}>{network.name}</a>
                    </div>
                ))}
            </span>
        </div>
        <div>
            <small>
                <b>Location</b>
            </small>
            <span>{location}</span>
        </div>
        <div>
            <small>
                <b>Occupation</b>
            </small>
            <span>{occupation}</span>
        </div>
        <div>
            <small>
                <b>Interests</b>
            </small>
            <span>
                {interests.map(interest => (
                    <div key={interest}>{interest}</div>
                ))}
            </span>
        </div>
        <div>
            <small>
                <b>People</b>
            </small>
            <span>
                {people.map(person => (
                    <div key={person.url}>
                        <a href={person.url}>{person.name}</a>
                        {person.starred ? `*` : ``}
                    </div>
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
