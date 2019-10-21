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
        'gatsby-remark-autolink-headers',
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-smartypants',
        'gatsby-remark-embedder',
    ],
    plugins: ['gatsby-remark-unwrap-images', 'gatsby-remark-images'],
}
