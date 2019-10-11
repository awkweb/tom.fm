import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ::selection {
        background: ${props => props.theme.colors.selection};
        textShadow: none;
    }
    html {
        fontSize: ${props => props.theme.fontSizes.body};
    }
    body {
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        font-family: ${props => props.theme.fonts.body};
        line-height: ${props => props.theme.lineHeights.body};
        min-height: ${props => props.theme.sizes.pageheight};
        text-rendering: optimizeLegibility;
    }
    a {
        color: inherit;
        display: inline-block;
        position: relative;
        transition: color 0.15s;

        &:hover {
            color: ${props => props.theme.colors.primary};
        }
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
