import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

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
        <Img
            fadeIn={false}
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{ width: 85 }}
        />
    )
}

export default Image
