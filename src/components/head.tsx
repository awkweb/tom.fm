import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
                username
            }
        }
    }
`

const useMetadata = () => {
    const data = useStaticQuery(query)
    return data.site.siteMetadata
}

interface Props {
    description?: string
    keywords?: []
    title: string
}

const Head = ({ title, description = '', keywords = [] }: Props) => {
    const meta = useMetadata()
    const d = description || meta.description
    const titleTemplate = `${meta.title} *** ${title}`

    return (
        <Helmet lang="en">
            <title>{titleTemplate}</title>
            <meta content={d} name="description" />
            <meta content={title} name="og:title" />
            <meta content={d} name="og:description" />
            <meta content="website" name="og:type" />
            <meta content="summary" name="twitter:card" />
            <meta content={titleTemplate} name="twitter:title" />
            <meta content={d} name="twitter:description" />
            <meta content={meta.username} name="twitter:creator" />
            {keywords.length && (
                <meta content={keywords.join(`, `)} name="keywords" />
            )}
        </Helmet>
    )
}

export default Head
