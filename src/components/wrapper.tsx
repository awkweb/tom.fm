import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from 'src/theme'

import GlobalStyles from './global-styles'

interface Props {
    element: ReactNode
}

const Wrapper = ({ element }: Props) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <main>{element}</main>
        </>
    </ThemeProvider>
)

export default Wrapper
