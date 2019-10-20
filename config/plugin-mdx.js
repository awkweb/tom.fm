module.exports = {
    extensions: ['.mdx', '.md'],
    gatsbyRemarkPlugins: [
        'gatsby-remark-unwrap-images',
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
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-smartypants',
        'gatsby-remark-embedder',
    ],
    plugins: ['gatsby-remark-unwrap-images', 'gatsby-remark-images'],
}
