import { CSSProperties } from 'react'
// eslint-disable-next-line
import { DefaultTheme } from 'styled-components'
// eslint-disable-next-line
import kebabCase from 'lodash.kebabcase'
// eslint-disable-next-line
import mapValues from 'lodash.mapvalues'

import { LazyResponsive } from '../types/responsive'

export function style<Property extends keyof CSSProperties>(
    property: Property,
    value: CSSProperties[Property] | undefined,
    condition?: boolean,
    important?: boolean,
) {
    if (condition === false || value === undefined) {
        return ''
    }
    const v = typeof value === 'number' ? value.toString() : value
    const importantString = important ? ' !important' : ''
    return `${kebabCase(property)}: ${v}${importantString};`
}

export function responsiveStyle<Property extends keyof CSSProperties, T>(
    originalProperty: Property,
    value: LazyResponsive<CSSProperties[Property] | T> | undefined,
    theme: DefaultTheme,
    transformFn?: (val: T) => CSSProperties[Property],
    condition?: boolean,
    important?: boolean,
) {
    const property = kebabCase(originalProperty)
    if (condition === false || value === undefined) {
        return ''
    }
    if (value && typeof value === 'object') {
        let v = value
        if (transformFn) {
            v = mapValues(v as object, transformFn)
        }
        return theme!.responsive.cssPropsForBreakpointValues(
            v,
            property,
            important,
        )
    } else {
        return style(
            originalProperty,
            /**
             * This assumes that an absence of a `transformFn` indicates that
             * `value` is valid CSS.
             */
            transformFn
                ? transformFn(value as T)
                : (value as CSSProperties[Property]),
            condition,
            important,
        )
    }
}

export function responsiveConditionalStyle<
    Property extends keyof CSSProperties
>(
    property: Property,
    condition: LazyResponsive<boolean> | undefined,
    trueValue: CSSProperties[Property],
    falseValue: CSSProperties[Property],
    theme: DefaultTheme,
    important?: boolean,
) {
    if (!condition) {
        return ''
    }
    if (typeof condition === 'object') {
        const values = mapValues(condition, c => (c ? trueValue : falseValue))
        return theme.responsive.cssPropsForBreakpointValues(
            values,
            property,
            important,
        )
    } else {
        return style(property, trueValue, condition, important)
    }
}
