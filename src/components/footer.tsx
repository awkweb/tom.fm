import React, { ChangeEvent, FormEvent, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import Box from './Box'
import Text from './Text'

const StyledInput = styled('input')`
    ::placeholder {
        color: ${props => props.theme.colors.secondary};
    }
    background-color: ${props => props.theme.colors.background};
    border: ${props =>
        `${props.theme.borderWidths.normal} ${props.theme.borderStyles.solid} ${props.theme.colors.text}`};
    border-top-left-radius: ${props => props.theme.radii.large};
    border-bottom-left-radius: ${props => props.theme.radii.large};
    color: ${props => props.theme.colors.text};
    flex: 7;
    font-family: ${props => props.theme.fonts.monospace};
    height: 2.25rem;
    outline: none;
    padding: ${props => props.theme.space[1]} ${props => props.theme.space[3]};
`

const StyledButton = styled('button')`
    ::placeholder {
        color: ${props => props.theme.colors.secondary};
    }
    background-color: ${props => props.theme.colors.text};
    border: ${props =>
        `${props.theme.borderWidths.normal} ${props.theme.borderStyles.solid} ${props.theme.colors.text}`};
    border-top-right-radius: ${props => props.theme.radii.large};
    border-bottom-right-radius: ${props => props.theme.radii.large};
    color: ${props => props.theme.colors.background};
    cursor: pointer;
    font-family: ${props => props.theme.fonts.monospace};
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: ${props => props.theme.fontWeights[500]};
    height: 2.25rem;
    outline: none;
    padding: 5px ${props => props.theme.space[3]}
        ${props => props.theme.space[1]};
`

const useButtonDown = () => {
    const [email, setEmail] = useState('')
    const handleChange = (event: ChangeEvent<any>) => {
        const {
            target: { value },
        } = event
        setEmail(value)
    }
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }
    return {
        email,
        handleChange,
        handleSubmit,
    }
}

const Footer = () => {
    const {
        site: {
            siteMetadata: { twitter },
        },
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                    title
                    twitter
                }
            }
        }
    `)
    const { email, handleChange, handleSubmit } = useButtonDown()
    return (
        <Box
            background={Box.Background.Accent}
            borderRadius={{
                sm: Box.BorderRadius.None,
                lg: Box.BorderRadius.Large,
            }}
            css={`
                line-height: 24px;
                a {
                    color: inherit;
                    text-decoration: underline;
                }
            `}
            el={Box.Element.Footer}
            mb={{ sm: 7, md: 8 }}
            mt={{ md: 7 }}
            p={{ sm: 3, md: 5 }}
        >
            <Text
                el={Text.Element.P}
                font={Text.Font.Monospace}
                noMargin
                size={Text.Size.Root}
            >
                Tune in{' '}
                <b>
                    <a href="/feed.xml">via RSS</a>
                </b>
                ,{' '}
                <b>
                    <a href={`https://twitter.com/${twitter}`}>on Twitter</a>
                </b>
                , or drop <b>your E-Mail</b> to receive occasional broadcast
                round-ups &amp; neat Internet-y things:
            </Text>
            <Box
                css={`
                    max-width: 24rem;
                `}
                display={Box.Display.Flex}
                el={Box.Element.Form}
                fluidWidth
                mt={3}
                onSubmit={handleSubmit}
            >
                <StyledInput
                    placeholder="email@address.com"
                    value={email}
                    onChange={handleChange}
                />
                <StyledButton>Subscribe</StyledButton>
            </Box>
        </Box>
    )
}

export default Footer
