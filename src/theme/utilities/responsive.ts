import {
    Breakpoint,
    Responsive as ResponsiveType,
    transformValues,
} from '../types/responsive'
import { DEFAULT_PIXEL_SIZE, toRem } from './units'

export const BREAKPOINT_NAMES: Breakpoint[] = ['sm', 'md', 'lg', 'xl']
export const DEFAULT_BREAKPOINTS_IN_REM: Required<ResponsiveType<number>> = {
    sm: 1, // 16px
    md: 30, // 480px
    lg: 48, // 768px
    xl: 64, // 1024px
}

export class Responsive {
    public readonly BREAKPOINT_NAMES = BREAKPOINT_NAMES
    public readonly transformValues = transformValues
    public readonly BREAKPOINTS_IN_REM: Required<ResponsiveType<number>>

    constructor(breakpointsOffset: number = 0) {
        const breakpoints = transformValues(
            DEFAULT_BREAKPOINTS_IN_REM,
            value => value + toRem(breakpointsOffset),
        ) as Required<ResponsiveType<number>>
        this.BREAKPOINTS_IN_REM = {
            ...breakpoints,
            // the sm value should stay the same
            sm: DEFAULT_BREAKPOINTS_IN_REM.sm,
        }
    }

    public readonly getBreakpoint = (size: Breakpoint) =>
        this.BREAKPOINTS_IN_REM[size]

    public readonly getBreakpointInPixels = (size: Breakpoint) => {
        return (
            this.BREAKPOINTS_IN_REM &&
            this.BREAKPOINTS_IN_REM[size] * DEFAULT_PIXEL_SIZE
        )
    }

    public readonly getBreakpointsInPixels = () => {
        return transformValues(this.BREAKPOINTS_IN_REM, (rem: number) => {
            return this.getRemToPixel(rem)
        })
    }

    /**
     * breakpointToValueObject: a dict mapping breakpoint strings to cssPropValues
     *      e.g. {xs: 1, md: 3}
     * cssPropName: the name of the css prop that this value is for
     *      e.g. 'display' or 'order'
     */
    public readonly cssPropsForBreakpointValues = (
        breakpointToValueObject: ResponsiveType<any> | null | undefined,
        cssPropName: string,
        isImportant?: boolean,
    ) => {
        if (!breakpointToValueObject) {
            return ''
        }
        const breakpoints = Object.keys(breakpointToValueObject) as Breakpoint[]
        if (breakpoints.length === 0) {
            return ''
        }

        return breakpoints
            .map((breakpoint: Breakpoint) => {
                return this.cssPropForBreakpoint(
                    breakpoint,
                    cssPropName,
                    breakpointToValueObject[breakpoint],
                    isImportant,
                )
            })
            .join(' ')
    }

    public readonly mediaForBreakpoint = (breakpoint: Breakpoint) => {
        return `(min-width: ${this.getBreakpoint(breakpoint)}rem)`
    }

    public readonly getRemToPixel = (pixelSize: number) =>
        pixelSize * DEFAULT_PIXEL_SIZE

    public readonly getImportantString = (
        cssPropValue: string,
        isImportant?: boolean,
    ) => {
        const importantString = ' !important'
        const propValueHasImportant =
            typeof cssPropValue === 'string' &&
            !!cssPropValue.indexOf(importantString)
        return !propValueHasImportant && isImportant ? importantString : ''
    }

    public readonly cssPropForBreakpoint = (
        breakpoint: Breakpoint,
        cssPropName: string,
        cssPropValue?: string,
        isImportant?: boolean,
    ) => {
        if (!cssPropValue) {
            return ''
        }
        const importantString = this.getImportantString(
            cssPropValue,
            isImportant,
        )
        const propertyString = `${cssPropName}: ${cssPropValue}${importantString};`
        if (breakpoint === 'sm') {
            return propertyString
        }
        return `@media ${this.mediaForBreakpoint(breakpoint)} {
        ${propertyString}
    }`
    }
}
