const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { createFilePath } = require('gatsby-source-filesystem')

const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TSConfigPathsPlugin()],
        },
    })
}

exports.onCreateNode = ({ node, getNode, getNodes, actions }) => {
    if (node.internal.type === 'Mdx') {
        const { createNodeField } = actions

        const value = createFilePath({ node, getNode })
        const [, date, title] = value.match(
            /^\/([\d]{4}-[\d]{2}-[\d]{2})-{1}(.+)\/$/,
        )
        const dateSlug = date.replace(/-/g, '/')
        const slug = `/${dateSlug}/${title}/`
        createNodeField({ node, name: 'slug', value: slug })

        const entry =
            getNodes()
                .filter(n => n.internal.type === 'Mdx')
                .sort(
                    (a, b) =>
                        new Date(a.frontmatter.date) -
                        new Date(b.frontmatter.date),
                )
                .findIndex(n => n.id === node.id) + 1
        createNodeField({ node, name: 'entry', value: entry })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(
        `
            {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    limit: 1000
                ) {
                    edges {
                        node {
                            id
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                            body
                        }
                    }
                }
            }
        `,
    )
    if (result.errors) {
        throw result.errors
    }

    const { createPage } = actions
    const template = path.resolve('./src/templates/post.tsx')
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: post.node.fields.slug,
            component: template,
            context: {
                slug: post.node.fields.slug,
                previous,
                next,
            },
        })
    })
}
