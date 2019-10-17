module.exports = {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
        {
            resolve: 'gatsby-remark-images',
            options: {
                maxWidth: 590,
            },
        },
        {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
                wrapperStyle: 'margin-bottom: 1rem',
            },
        },
        {
            resolve: 'gatsby-remark-copy-linked-files',
        },
        {
            resolve: 'gatsby-remark-smartypants',
        },
    ],
}
