module.exports = {
    siteMetadata: {
        title: `tom.fm`,
        description: `Tom Meagher is a Internet Explorer in New York City.`,
        author: `Tom Meagher`,
        username: `tomfme`,
        website: `tom.fm`,
        email: `tom@meagher.co`,
        networks: [
            { name: `Are.na`, url: `https://are.na/tom-meagher/` },
            { name: `GitHub`, url: `https://github.com/tmm/` },
            { name: `Twitter`, url: `https://twitter.com/tomfme/` },
        ],
        location: `New York City`,
        occupation: `Software Engineer`,
        interests: [
            `Single purpose or use apps`,
            `Teaching/helping others learn`,
            `Doing more things outside of tech`,
        ],
        people: [
            {
                name: `Atty Eleti`,
                url: `https://athyuttamre.com/`,
                starred: true,
            },
            { name: `Craig Mod`, url: `https://craigmod.com/`, starred: false },
            {
                name: `Frank Chimero`,
                url: `https://frankchimero.com`,
                starred: false,
            },
            {
                name: `John Palmer`,
                url: `https://darkblueheaven.com`,
                starred: true,
            },
            { name: `Kortina`, url: `https://kortina.nyc/`, starred: false },
            {
                name: `Latika Sridhar`,
                url: `https://patreon.com/latika`,
                starred: true,
            },
            {
                name: `Naveen Selvadurai`,
                url: `https://naveen.com`,
                starred: false,
            },
        ],
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
}
