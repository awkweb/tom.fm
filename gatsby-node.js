const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TSConfigPathsPlugin()],
        },
    })
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
                            frontmatter {
                                title
                                permalink
                            }
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
    const component = path.resolve('./src/templates/post.tsx')
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
        const {
            node: {
                frontmatter: { permalink },
            },
        } = post

        const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
            path: permalink,
            component,
            context: {
                next,
                permalink,
                previous,
            },
        })
    })
}
