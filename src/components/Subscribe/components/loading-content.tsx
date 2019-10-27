import React from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled('div')`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${props => props.theme.zIndices[4]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoadingSpinner = styled('div')`
    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    animation: loading 0.5s infinite linear;
    border: 0.1rem solid ${props => props.theme.colors.text};
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 1rem;
    left: 50%;
    margin-left: -0.5rem;
    margin-top: -0.5rem;
    position: absolute;
    top: 50%;
    width: 1rem;
    z-index: 1;
`

const LoadingContent = () => (
    <LoadingWrapper>
        <LoadingSpinner />
    </LoadingWrapper>
)

export default LoadingContent
