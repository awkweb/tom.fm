// eslint-disable-next-line
import { DefaultTheme } from 'styled-components'

import * as _Border from './types/border'
import * as _Color from './types/color'
import * as _Position from './types/position'
import * as _Typography from './types/typography'

import { DEFAULT_PIXEL_SIZE, toRemString } from './utilities/units'
import { Responsive } from './utilities/responsive'

const borderStyles = {
    [_Border.Style.None]: 'none',
    [_Border.Style.Solid]: 'solid',
}

const borderWidths = {
    [_Border.Width.Normal]: '1px',
    [_Border.Width.Thick]: '5px',
}

const colors = {
    [_Color.Palette.Accent]: 'hsl(328, 50%, 80%)',
    [_Color.Palette.Background]: 'hsl(240, 100%, 100%)',
    [_Color.Palette.Highlight]: 'hsl(50, 77%, 85%)',
    [_Color.Palette.Muted]: 'hsl(240, 5%, 65%)',
    [_Color.Palette.Primary]: 'hsl(240, 45%, 50%)',
    [_Color.Palette.Secondary]: 'hsl(240, 5%, 30%)',
    [_Color.Palette.Selection]: 'hsl(240, 5%, 85%)',
    [_Color.Palette.Text]: 'hsl(240, 5%, 15%)',
}

const fonts = {
    [_Typography.Font.Body]: 'Inter, sans-serif',
    [_Typography.Font.Heading]: 'Inter, sans-serif',
    [_Typography.Font.Monospace]: 'Fira Code, monospace',
}
const fontSizes = {
    [_Typography.Size.Body]: toRemString(DEFAULT_PIXEL_SIZE),
    [_Typography.Size.Heading]: toRemString(18),
    [_Typography.Size.Root]: `${DEFAULT_PIXEL_SIZE}px`,
    [_Typography.Size.Small]: toRemString(14),
}
const fontWeights = {
    [_Typography.Weight.Bold]: 700,
    [_Typography.Weight.Medium]: 500,
    [_Typography.Weight.Normal]: 400,
}
const lineHeights = {
    [_Typography.LineHeight.Body]: toRemString(28),
    [_Typography.LineHeight.Heading]: toRemString(30),
}

const radii = {
    [_Border.Radius.None]: 0,
    [_Border.Radius.Small]: '2px',
    [_Border.Radius.Large]: '8px',
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
