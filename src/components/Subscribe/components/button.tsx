import React from 'react'
import styled, { css } from 'styled-components'

import Box from '../../Box'
import LoadingContent from './loading-content'

const StyledButton = styled('button')`
    appearance: none;
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.root};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.body};
    outline: none;
    padding: 0;
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
