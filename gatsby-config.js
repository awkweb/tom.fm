module.exports = {
    siteMetadata: {
        title: `tom.fm`,
        description: `Tom Meagher is a software engineer in New York City.`,
        author: `Tom Meagher`,
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
            `Single purpose/use apps`,
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
        colophon: [
            { name: `Built with GatsbyJS`, url: `https://www.gatsbyjs.org` },
            { name: `Hosted by Zeit Now`, url: `https://zeit.co/` },
            { name: `Set in Inter`, url: `https://rsms.me/inter/` },
            { name: `No third-party tracking or analytics` },
        ],
    },
    plugins: [
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
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
