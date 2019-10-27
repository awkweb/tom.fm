import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ::selection {
        background-color: ${props => props.theme.colors.muted};
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
        line-height: ${props => props.theme.lineHeights.body};
        min-height: 100vh;
        text-rendering: optimizeLegibility;
    }

    p {
        margin-bottom: ${props => props.theme.space[4]};
        margin-top: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${props => props.theme.colors.text};
        cursor: text;
        font-family: ${props => props.theme.fonts.heading};
        line-height: ${props => props.theme.lineHeights.heading};
        margin-bottom: ${props => props.theme.space[5]};
        margin-top: 0;

        &:hover {
            // gatsby-remark-autolink-headers
            .anchor svg {
                visibility: visible;
            }
        }

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
        margin-bottom: ${props => props.theme.space[4]};
        margin-left: ${props => props.theme.space[5]};
        margin-top: 0;
        padding-left: ${props => props.theme.space[5]};
    }

    pre {
        margin-bottom: ${props => props.theme.space[5]};
        margin-top: ${props => props.theme.space[6]};
        margin-left: ${props => props.theme.space[5]};
        margin-top: 0;
    }

    code {
        font-family: ${props => props.theme.fonts.monospace} !important;
        font-feature-settings: 'liga' on;
        font-size: 95% !important;
        line-height: 95%;
    }

    p code {
        border-radius: ${props => props.theme.radii.small};
        background-color: ${props => props.theme.colors.muted};
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
            margin-top: ${props => props.theme.space[1]};
        }
    }

    sup {
        line-height: 13px;
        vertical-align: super;
        
        a {
            font-size: 13px;
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
        font-size: 95% !important;
        line-height: 95%;
        margin-top: ${props => props.theme.space[8]};
    }

    .footnote-backref {
        margin-left: ${props => props.theme.space[1]};
        text-decoration: none;
    }

    // gatsby-remark-autolink-headers
    .anchor {
        color: ${props => props.theme.colors.primary};
        float: left;
        margin-left: -20px;
        padding-right: 4px;
        position: relative;

        svg {
            margin-bottom: 0.25rem;
            visibility: hidden;
        }
    }

    // gatsby-remark-responsive-iframe
    .gatsby-resp-iframe-wrapper {
        margin-bottom: ${props => props.theme.space[5]};
    }
`

export default GlobalStyle
