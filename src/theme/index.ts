// eslint-disable-next-line
import { DefaultTheme } from 'styled-components'

import * as _Border from './types/border'
import * as _Color from './types/color'
import * as _Position from './types/position'
import * as _Typography from './types/typography'

import { DEFAULT_PIXEL_SIZE, toRemString } from './utilities/units'
import { Responsive } from './utilities/responsive'

const borderStyles = {
    [_Border.Style.None]: `none`,
    [_Border.Style.Solid]: `solid`,
}

const borderWidths = {
    [_Border.Width.Normal]: `1px`,
}

const colors = {
    [_Color.Palette.Accent]: ``,
    [_Color.Palette.Background]: `hsl(0, 0%, 100%)`,
    [_Color.Palette.Muted]: `hsl(240, 37%, 82%)`,
    [_Color.Palette.Primary]: `hsl(240, 100%, 50%)`,
    [_Color.Palette.Secondary]: `hsl(0, 0%, 35%)`,
    [_Color.Palette.Selection]: `hsl(240, 21%, 68%)`,
    [_Color.Palette.Text]: `hsl(240, 2%, 9%)`,
}

const fonts = {
    [_Typography.Font.Body]: `Inter, sans-serif`,
    [_Typography.Font.Heading]: `Inter, sans-serif`,
    [_Typography.Font.Monospace]: `Fira Code, monospace`,
}
const fontSizes = {
    [_Typography.Size.Body]: toRemString(16),
    [_Typography.Size.Heading]: toRemString(24),
    [_Typography.Size.Root]: `${DEFAULT_PIXEL_SIZE}px`,
    [_Typography.Size.Small]: toRemString(14),
}
const fontWeights = {
    [_Typography.Weight.Bold]: 700,
    [_Typography.Weight.Normal]: 400,
}
const lineHeights = {
    [_Typography.LineHeight.Body]: toRemString(20),
    [_Typography.LineHeight.Heading]: toRemString(25),
}

const radii = {
    [_Border.Radius.None]: 0,
}

const space = [
    toRemString(0),
    toRemString(4),
    toRemString(8),
    toRemString(12),
    toRemString(16),
    toRemString(20),
    toRemString(24),
    toRemString(32),
    toRemString(48),
    toRemString(64),
    toRemString(96),
    toRemString(128),
    toRemString(192),
    toRemString(256),
    toRemString(384),
    toRemString(512),
    toRemString(640),
    toRemString(768),
]

const zIndices = [
    _Position.ZIndex.Lowest,
    _Position.ZIndex.Zero,
    _Position.ZIndex.High,
    _Position.ZIndex.Higher,
    _Position.ZIndex.Highest,
]

const theme: DefaultTheme = {
    borderStyles,
    borderWidths,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    responsive: new Responsive(),
    space,
    zIndices,
}

export default theme