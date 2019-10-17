module.exports = {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
        {
            resolve: 'gatsby-remark-unwrap-images',
        },
        {
            resolve: 'gatsby-remark-images',
            options: {
                maxWidth: 600,
                showCaptions: true,
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
    plugins: ['gatsby-remark-unwrap-images', 'gatsby-remark-images'],
}
