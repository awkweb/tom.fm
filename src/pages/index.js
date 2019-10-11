import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({
    data: {
        site: {
            siteMetadata: { description, author, website, email, networks },
        },
    },
}) => (
    <Layout>
        <SEO title="Home" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <div>
            <span>Name</span>
            <span>{author}</span>
        </div>
        <div>
            <span>Website</span>
            <span>
                <a href={website}>{website}</a>
            </span>
        </div>
        <div>
            <span>E-Mail</span>
            <span>
                <a href={`mailto:${email}`}>{email}</a>
            </span>
        </div>
        <div>
            <span>Networks</span>
            <span>
                {networks.map(network => (
                    <div>
                        <a href={network.url}>{network.name}</a>
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
                colophon {
                    name
                    url
                }
            }
        }
    }
`

export default IndexPage
