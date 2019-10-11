import React from 'react'
import Helmet from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
    description?: string
    lang?: string
    keywords?: []
    meta?: []
    title: string
}

const Head = ({ description, lang, meta, keywords, title }: Props) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : [],
                )
                .concat(meta)}
            title={title}
            titleTemplate={`${site.siteMetadata.title} — %s`}
        />
    )
}

Head.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: [],
    description: ``,
}

export default Head
