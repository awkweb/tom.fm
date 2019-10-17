import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                description
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
    title?: string
}

const Head = ({ title, description = '', keywords = [] }: Props) => {
    const meta = useMetadata()
    const d = description || meta.description
    const t = title || meta.title

    return (
        <Helmet lang="en">
            <title>{t}</title>
            <meta content={d} name="description" />
            <meta content={t} name="og:title" />
            <meta content={d} name="og:description" />
            <meta content="website" name="og:type" />
            <meta content="summary" name="twitter:card" />
            <meta content={t} name="twitter:title" />
            <meta content={d} name="twitter:description" />
            <meta content="tomfme" name="twitter:creator" />
            {keywords.length && (
                <meta content={keywords.join(`, `)} name="keywords" />
            )}
        </Helmet>
    )
}

export default Head
