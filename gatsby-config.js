module.exports = {
    siteMetadata: {
        title: 'tom.fm',
        description: 'Tom Meagher is a Internet Explorer in New York City.',
        author: 'Tom Meagher',
        username: 'tomfme',
        website: 'tom.fm',
        email: 'tom@meagher.co',
        networks: [
            { name: 'Are.na', url: 'https://are.na/tom-meagher/' },
            { name: 'GitHub', url: 'https://github.com/tmm/' },
            { name: 'Twitter', url: 'https://twitter.com/tomfme/' },
        ],
        location: 'New York City',
        occupation: 'Software Engineer',
    },
    plugins: [
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
}
