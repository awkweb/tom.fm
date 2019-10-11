import * as _Border from './types/border'
import * as _Color from './types/color'
import * as _Position from './types/position'
import * as _Responsive from './types/responsive'
import * as _Size from './types/size'
import * as _Typography from './types/typography'

const FONT_SIZE = 16
const toRemString = (px: number): string => `${px / FONT_SIZE}rem`

const borderStyles = {
    [_Border.Style.None]: `none`,
    [_Border.Style.Solid]: `solid`,
}

const borderWidths = {
    [_Border.Width.Normal]: `1px`,
}

const breakpoints = [
    toRemString(16),
    toRemString(480),
    toRemString(768),
    toRemString(1024),
]
breakpoints[_Responsive.Breakpoint.Sm] = breakpoints[0]
breakpoints[_Responsive.Breakpoint.Md] = breakpoints[1]
breakpoints[_Responsive.Breakpoint.Lg] = breakpoints[2]
breakpoints[_Responsive.Breakpoint.Xl] = breakpoints[3]

const colors = {
    [_Color.Palette.Accent]: ``,
    [_Color.Palette.Background]: `hsl(0, 0%, 100%)`,
    [_Color.Palette.Muted]: `hsl(240, 37%, 82%)`,
    [_Color.Palette.Primary]: `hsl(240, 100%, 50%)`,
    [_Color.Palette.Secondary]: `hsl(240, 11%, 41%)`,
    [_Color.Palette.Selection]: `hsl(240, 21%, 68%)`,
    [_Color.Palette.Text]: `hsl(240, 2%, 9%)`,
}

const fonts = {
    [_Typography.Font.Body]: `Inter, sans-serif`,
    [_Typography.Font.Heading]: `Inter, sans-serif`,
    [_Typography.Font.Monospace]: `Fira Code, monospace`,
}
const fontSizes = {
    [_Typography.Size.Body]: `${FONT_SIZE}px`,
    [_Typography.Size.Heading]: toRemString(24),
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

const sizes = {
    [_Size.Size.HomeWidth]: toRemString(400),
    [_Size.Size.PostWidth]: toRemString(600),
    [_Size.Size.PageHeight]: `100vh`,
    [_Size.Size.PageWidth]: toRemString(1440),
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

const theme = {
    borderStyles,
    borderWidths,
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    sizes,
    space,
    zIndices,
}

export default theme
