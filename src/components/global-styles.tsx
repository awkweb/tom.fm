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

    p {
        margin-bottom: ${props => props.theme.space[5]};
        margin-top: ${props => props.theme.space[5]};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: ${props => props.theme.space[5]};
        margin-top: ${props => props.theme.space[8]};

        a {
            color: inherit;
            text-decoration: none;
        }
    }

    a {
        color: ${props => props.theme.colors.secondary};
    }

    hr {
        border-top: none;
        border-bottom-color: ${props => props.theme.colors.muted};
        border-bottom-style: ${props => props.theme.borderStyles.solid};
        border-bottom-width: ${props => props.theme.borderWidths.normal};
        margin-bottom: ${props => props.theme.space[5]};
        margin-top: ${props => props.theme.space[5]};
    }

    ul,
    ol {
        margin-bottom: ${props => props.theme.space[5]};
        margin-left: ${props => props.theme.space[3]};
        margin-top: ${props => props.theme.space[5]};
        padding-left: ${props => props.theme.space[3]};
    }

    pre {
        margin-bottom: ${props => props.theme.space[5]};
        margin-left: ${props => props.theme.space[3]};
        margin-top: ${props => props.theme.space[5]};
    }

    code {
        font-family: ${props => props.theme.fonts.monospace} !important;
        font-feature-settings: 'liga' on;
        font-size: 95% !important;
        line-height: 95%;
    }

    p code {
        background-color: hsl(109, 0%, 95%);
        color: ${props => props.theme.colors.text};
        padding: 1px;
    }

    mark {
        background-color: hsl(49, 77%, 90%);
        color: ${props => props.theme.colors.text};
        padding: 1px;
    }

    sup {
        font-feature-settings: 'sups' on;
        vertical-align: initial;
        
        a {
            font-size: ${props => props.theme.fontSizes.root};
            text-decoration: none;
        }
    }
`

export default GlobalStyle
