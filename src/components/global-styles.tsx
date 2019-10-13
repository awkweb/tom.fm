import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ::selection {
        background: ${props => props.theme.colors.selection};
        textShadow: none;
    }
    html {
        -webkit-text-size-adjust: 100%;
        font-size: ${props => props.theme.fontSizes.root};
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: ${props => props.theme.fonts.body};
        font-feature-settings: 'calt' on, 'liga' on, 'zero' on;
        line-height: ${props => props.theme.lineHeights.body};
        min-height: 100vh;
        text-rendering: optimizeLegibility;
    }
    a {
        background-position: 0 95%;
        background-image: linear-gradient(to bottom,
            ${props => props.theme.colors.text} 50%,
            ${props => props.theme.colors.text} 50%);
        background-repeat: repeat-x;
        background-size: 1px 1px;
        color: inherit;
        display: inline-block;
        position: relative;
        transition: color 0.15s;
        text-decoration: none;

        &:hover {
            background-image: linear-gradient(to bottom,
                ${props => props.theme.colors.primary} 50%,
                ${props => props.theme.colors.primary} 50%);
            color: ${props => props.theme.colors.primary};
        }
    }
    button {
        cursor: pointer;
    }
    code {
        font-feature-settings: 'liga' on;
        font-size: 95%;
    }
    sup {
        font-feature-settings: 'sups' on;
        vertical-align: initial;
        a::after {
            display: none;
        }
    }
    small {
        fontSize: ${props => props.theme.fontSizes.small};
    }
`

export default GlobalStyle
