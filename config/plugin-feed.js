module.exports = {
    feeds: [
        {
            serialize: ({ query: { site, allMdx } }) =>
                allMdx.edges.map(edge => {
                    return {
                        ...edge.node.frontmatter,
                        description: edge.node.excerpt,
                        url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                        custom_elements: [
                            { 'content:encoded': edge.node.html },
                        ],
                    }
                }),
            query: `
        {
          allMdx(
            limit: 1000,
            sort: {
              order: DESC,
              fields: [frontmatter___date]
            }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  date
                }
                fields {
                  slug
                }
                excerpt
                html
              }
            }
          }
        }
      `,
            output: 'rss.xml',
            title: 'tom.fm rss',
        },
    ],
}
