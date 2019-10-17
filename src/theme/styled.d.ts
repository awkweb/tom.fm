import 'styled-components'

import * as _Border from './types/border'
import * as _Color from './types/color'
import * as _Position from './types/position'
import * as _Typography from './types/typography'
import { Responsive } from './utilities/responsive'

declare module 'styled-components' {
    export interface DefaultTheme {
        borderStyles: {
            [_Border.Style.None]: string
            [_Border.Style.Solid]: string
        }
        borderWidths: {
            [_Border.Width.Normal]: string
            [_Border.Width.Thick]: string
        }
        colors: {
            [_Color.Palette.Accent]: string
            [_Color.Palette.Background]: string
            [_Color.Palette.Muted]: string
            [_Color.Palette.Primary]: string
            [_Color.Palette.Secondary]: string
            [_Color.Palette.Selection]: string
            [_Color.Palette.Text]: string
        }
        fonts: {
            [_Typography.Font.Body]: string
            [_Typography.Font.Heading]: string
            [_Typography.Font.Monospace]: string
        }
        fontSizes: {
            [_Typography.Size.Heading]: string
            [_Typography.Size.Body]: string
            [_Typography.Size.Root]: string
            [_Typography.Size.Small]: string
        }
        fontWeights: {
            [_Typography.Weight.Bold]: number
            [_Typography.Weight.SemiBold]: number
            [_Typography.Weight.Normal]: number
        }
        lineHeights: {
            [_Typography.LineHeight.Body]: string
            [_Typography.LineHeight.Heading]: string
        }
        radii: {
            [_Border.Radius.None]: number
            [_Border.Radius.Small]: string
            [_Border.Radius.Large]: string
        }
        responsive: Responsive
        space: string[]
        zIndices: number[]
    }
}
