import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

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
            <Box el={Box.Element.Main}>{element}</Box>
        </>
    </ThemeProvider>
)

export default Wrapper
