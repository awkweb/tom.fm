import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'

import theme from 'src/theme'

import GlobalStyles from './global-styles'
import Box from './Box'

interface Props {
    element: ReactNode
}

const Wrapper = ({ element }: Props) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <MDXProvider>
                <Box
                    css={`
                        max-width: 40rem;
                        margin-left: auto;
                        margin-right: auto;
                    `}
                    el={Box.Element.Main}
                >
                    {element}
                </Box>
            </MDXProvider>
        </>
    </ThemeProvider>
)

export default Wrapper
