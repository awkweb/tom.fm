import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Box from './Box'

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "tom.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Box
            css={`
                img {
                    filter: grayscale(50%);
                }
                img:hover {
                    filter: none;
                }
            `}
        >
            <Img
                fadeIn={false}
                fluid={data.placeholderImage.childImageSharp.fluid}
                style={{ width: 55 }}
            />
        </Box>
    )
}

export default Image
