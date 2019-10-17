import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ::selection {
        background: ${props => props.theme.colors.selection};
        textShadow: none;
    }

    :target {
        background-color: hsl(213, 100%, 96%);
        border-radius: ${props => props.theme.radii.small};
        padding: 1px;
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
        line-height: ${props => props.theme.lineHeights.heading};
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
        border-radius: ${props => props.theme.radii.small};
        color: ${props => props.theme.colors.text};
        padding: 1px;
    }

    mark {
        background-color: hsl(49, 77%, 90%);
        border-radius: ${props => props.theme.radii.small};
        color: ${props => props.theme.colors.text};
        padding: 1px;
    }

    figure {
        margin: ${props => props.theme.space[7]} 0 ${props =>
    props.theme.space[6]};

        img,
        .gatsby-resp-image-background-image {
            border-radius: ${props => props.theme.radii.large};
            max-width: 100%;
        }

        figcaption {
            color: ${props => props.theme.colors.secondary};
            font-size: ${props => props.theme.fontSizes.small};
            margin-top: ${props => props.theme.space[1]};
        }
    }

    sup {
        font-feature-settings: 'sups' on;
        vertical-align: initial;
        
        a {
            font-size: ${props => props.theme.fontSizes.root};
            text-decoration: none;
        }
    }

    .footnotes {
        font-size: ${props => props.theme.fontSizes.small};
    }

    .footnote-backref {
        text-decoration: none;
    }
`

export default GlobalStyle
