import React from 'react'
import styled, { css } from 'styled-components'

import Box from '../../Box'
import LoadingContent from './loading-content'

const StyledButton = styled('button')`
    ::placeholder {
        color: ${props => props.theme.colors.secondary};
    }
    appearance: none;
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
    position: relative;

    &[disabled] {
        cursor: not-allowed;
        pointer-events: none;
    }
`

const genButtonContentCSS = (isLoading: boolean) =>
    css`
        visibility: ${isLoading ? 'hidden' : 'visible'};
    `

interface Props {
    isLoading: boolean
    isValid: boolean
}

const Subscribe = ({ isLoading, isValid }: Props) => {
    return (
        <StyledButton disabled={!isValid || isLoading}>
            {isLoading ? <LoadingContent /> : null}
            <Box css={genButtonContentCSS(isLoading)}>Subscribe</Box>
        </StyledButton>
    )
}

export default Subscribe
