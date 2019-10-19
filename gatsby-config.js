const mdxOptions = require('./config/plugin-mdx')

module.exports = {
    siteMetadata: {
        title: 'tom.fm',
        description:
            'Welcome to tom.fm. A hypermedia broadcasting service transmitting thoughts on technology, productivity, culture, and related topics.',
        author: 'Tom Meagher',
        email: 'tom@meagher.co',
        networks: [
            { name: 'Are.na', url: 'https://are.na/tom-meagher/' },
            { name: 'GitHub', url: 'https://github.com/tmm/' },
            { name: 'Twitter', url: 'https://twitter.com/tomfme/' },
        ],
    },
    plugins: [
        'gatsby-plugin-typescript',
        {
            resolve: `gatsby-plugin-mdx`,
            options: mdxOptions,
        },
        'gatsby-plugin-catch-links',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
}
