const feedOptions = require('./config/plugin-feed')
const mdxOptions = require('./config/plugin-mdx')

module.exports = {
    siteMetadata: {
        title: 'tom.fm',
        siteUrl: 'https://tom.fm',
        description: 'Hypermedia thoughts on tech, productivity, culture, etc.',
        author: 'Tom Meagher',
        email: 'tom@meagher.co',
        twitter: 'tomfme',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: mdxOptions,
        },
        {
            resolve: 'gatsby-plugin-feed',
            options: feedOptions,
        },
        'gatsby-plugin-typescript',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-twitter',
    ],
}
