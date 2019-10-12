// eslint-disable-next-line
import { DefaultTheme } from 'styled-components'

import { Palette } from '../../theme/types/color'
import {
    LazyResponsive,
    Responsive,
    convertLazy,
    transformValues,
} from '../../theme/types/responsive'

import { Props } from './types'

interface Themed {
    theme: DefaultTheme
}

type BorderProps = Pick<
    Props,
    | 'b'
    | 'bt'
    | 'br'
    | 'bb'
    | 'bl'
    | 'borderWidth'
    | 'borderColor'
    | 'borderStyle'
> &
    Required<Pick<Props, 'borderColor' | 'borderStyle'>> &
    Themed

type PaddingProps = Pick<Props, 'p' | 'pt' | 'pr' | 'pl' | 'pb' | 'px' | 'py'> &
    Themed

type MarginProps = Pick<Props, 'm' | 'mt' | 'mr' | 'ml' | 'mb' | 'mx' | 'my'> &
    Themed

const _convertResponsiveUnitsToValues = (
    responsiveUnits: Responsive<number>,
    theme: DefaultTheme,
) =>
    transformValues(
        responsiveUnits,
        (unitValue: number): string => theme.space[unitValue],
    )

const _responsiveLayout = (
    ruleName: string,
    theme: DefaultTheme,
    base?: LazyResponsive<number>,
    top?: LazyResponsive<number>,
    right?: LazyResponsive<number>,
    left?: LazyResponsive<number>,
    bottom?: LazyResponsive<number>,
    vertical?: LazyResponsive<number>,
    horizontal?: LazyResponsive<number>,
) => {
    // make props responsive
    const rRoot = convertLazy(base)
    const rTop = convertLazy(top)
    const rRight = convertLazy(right)
    const rLeft = convertLazy(left)
    const rBottom = convertLazy(bottom)
    const rVertical = convertLazy(vertical)
    const rHorizontal = convertLazy(horizontal)
    // unify into single dictionaries per side and transform into values
    const unifiedTop = _convertResponsiveUnitsToValues(
        { ...rRoot, ...rVertical, ...rTop },
        theme,
    )
    const unifiedRight = _convertResponsiveUnitsToValues(
        { ...rRoot, ...rHorizontal, ...rRight },
        theme,
    )
    const unifiedBottom = _convertResponsiveUnitsToValues(
        { ...rRoot, ...rVertical, ...rBottom },
        theme,
    )
    const unifiedLeft = _convertResponsiveUnitsToValues(
        { ...rRoot, ...rHorizontal, ...rLeft },
        theme,
    )
    // return responsive rules for each side
    return `${theme.responsive.cssPropsForBreakpointValues(
        unifiedTop,
        `${ruleName}-top`,
    )}; ${theme.responsive.cssPropsForBreakpointValues(
        unifiedRight,
        `${ruleName}-right`,
    )}; ${theme.responsive.cssPropsForBreakpointValues(
        unifiedBottom,
        `${ruleName}-bottom`,
    )}; ${theme.responsive.cssPropsForBreakpointValues(
        unifiedLeft,
        `${ruleName}-left`,
    )};`
}

export const getPadding = ({
    theme,
    p,
    pt,
    pr,
    pl,
    pb,
    px,
    py,
}: PaddingProps) =>
    _responsiveLayout('padding', theme, p, pt, pr, pl, pb, py, px)

export const getMargin = ({ theme, m, mt, mr, ml, mb, mx, my }: MarginProps) =>
    _responsiveLayout('margin', theme, m, mt, mr, ml, mb, my, mx)

const _borderInnerValue = (
    theme: DefaultTheme,
    borderColor: Palette | string,
    borderWidth: string | undefined,
    borderStyle: string,
) => (border: boolean) => {
    if (border && typeof border === 'boolean') {
        return `${borderStyle} ${borderWidth ||
            theme.borderWidths.normal} ${String(
            theme.colors[borderColor] || borderColor,
        )}`
    }
    return 'none'
}

const _border = (
    propType:
        | 'border'
        | 'border-top'
        | 'border-right'
        | 'border-bottom'
        | 'border-left',
    theme: DefaultTheme,
    borderColor: Palette | string,
    borderStyle: string,
    border?: Responsive<boolean>,
    borderWidth?: string,
) => {
    if (!border) {
        return ''
    }
    const transformationFn = _borderInnerValue(
        theme,
        borderColor,
        borderWidth,
        borderStyle,
    )
    const borderValues = theme.responsive.transformValues(
        border,
        transformationFn,
    )
    return theme.responsive.cssPropsForBreakpointValues(borderValues, propType)
}

export const getBorder = ({
    theme,
    b,
    bt,
    br,
    bb,
    bl,
    borderColor,
    borderWidth,
    borderStyle,
}: BorderProps) => {
    if (b) {
        return `${_border(
            'border',
            theme,
            borderColor,
            borderStyle,
            convertLazy(b),
            borderWidth,
        )};`
    }

    return `
        ${_border(
            'border-top',
            theme,
            borderColor,
            borderStyle,
            convertLazy(bt),
            borderWidth,
        )};
        ${_border(
            'border-right',
            theme,
            borderColor,
            borderStyle,
            convertLazy(br),
            borderWidth,
        )};
        ${_border(
            'border-bottom',
            theme,
            borderColor,
            borderStyle,
            convertLazy(bb),
            borderWidth,
        )};
        ${_border(
            'border-left',
            theme,
            borderColor,
            borderStyle,
            convertLazy(bl),
            borderWidth,
        )};
    `
}
