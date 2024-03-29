import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import theme from 'src/theme'

import GlobalStyles from './global-styles'
import Box from './Box'
import Blockquote from './blockquote'
import Header from './header'
import Footer from './footer'

const components = {
    blockquote: Blockquote,
    Blockquote,
}

interface Props {
    element: ReactNode
}

const Wrapper = ({ element }: Props) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <MDXProvider components={components}>
                <Box
                    css={`
                        max-width: 35rem;
                        margin-left: auto;
                        margin-right: auto;
                    `}
                    el={Box.Element.Section}
                    px={{ sm: 3, lg: 0 }}
                >
                    <Header />
                    <Box el={Box.Element.Main}>{element}</Box>
                    <Footer />
                </Box>
            </MDXProvider>
        </>
    </ThemeProvider>
)

export default Wrapper
