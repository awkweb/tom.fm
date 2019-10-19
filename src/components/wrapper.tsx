import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import theme from 'src/theme'

import GlobalStyles from './global-styles'
import Box from './Box'
import Blockquote from './blockquote'
import Header from './header'

const components = {
    blockquote: Blockquote,
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
                        max-width: 40rem;
                        margin-left: auto;
                        margin-right: auto;
                    `}
                    el={Box.Element.Main}
                    pt={8}
                >
                    <Header />
                    {element}
                </Box>
            </MDXProvider>
        </>
    </ThemeProvider>
)

export default Wrapper
