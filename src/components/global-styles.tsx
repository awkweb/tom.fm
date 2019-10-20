import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ::selection {
        background: ${props => props.theme.colors.selection};
        textShadow: none;
    }

    :target {
        background: ${props => props.theme.colors.selection};
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
        font-feature-settings: 'calt' on, 'liga' on;
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
        color: ${props => props.theme.colors.primary};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
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
        border-radius: ${props => props.theme.radii.small};
        background-color: ${props => props.theme.colors.selection};
        color: ${props => props.theme.colors.text};
        padding: 1px 3px;
    }

    mark {
        border-radius: ${props => props.theme.radii.small};
        background-color: ${props => props.theme.colors.highlight};
        color: ${props => props.theme.colors.text};
        padding: 1px 3px;
    }

    figure {
        margin: ${props => props.theme.space[5]} 0 ${props =>
    props.theme.space[5]};

        img,
        .gatsby-resp-image-background-image {
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
            &::before { content: '['; }
            &::after { content: ']'; }
            &:hover {
                text-decoration: none;
            }
        }
    }

    cite {
        font-style: normal;
    }

    .footnotes {
        font-size: ${props => props.theme.fontSizes.small};
    }

    .footnote-backref {
        margin-left: ${props => props.theme.space[1]};
        text-decoration: none;
    }

    button {
        background-color: ${props => props.theme.colors.text} !important;
        color: ${props => props.theme.colors.background} !important;
    }

    input {
        background-color: ${props => props.theme.colors.background} !important;
    }
`

export default GlobalStyle
