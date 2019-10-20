module.exports = {
    query: `
    {
        site {
            siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
            }
        }
    }
    `,
    feeds: [
        {
            serialize: ({
                query: {
                    site: {
                        siteMetadata: { siteUrl },
                    },
                    allMdx,
                },
            }) =>
                allMdx.edges.map(
                    ({ node: { excerpt: description, frontmatter, html } }) => {
                        const { date, permalink } = frontmatter
                        const url = `${siteUrl}${permalink}`
                        return Object.assign({}, frontmatter, {
                            description,
                            date,
                            url,
                            custom_elements: [
                                {
                                    'content:encoded': html,
                                },
                            ],
                        })
                    },
                ),
            query: `
            {
                allMdx(
                    sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                    edges {
                        node {
                            excerpt
                            html
                            frontmatter {
                                date
                                permalink
                                title
                            }
                        }
                    }
                }
            }
            `,
            output: '/rss.xml',
            title: 'tom.fm RSS feed',
        },
    ],
}
