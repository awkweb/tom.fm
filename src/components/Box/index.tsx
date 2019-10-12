import React from 'react'
import styled from 'styled-components'

import * as _Border from '../../theme/types/border'
import * as _Color from '../../theme/types/color'
import * as _Element from '../../theme/types/element'
import * as _Flexbox from '../../theme/types/flexbox'
import * as _Layout from '../../theme/types/layout'
import * as _Position from '../../theme/types/position'
import * as _Typography from '../../theme/types/typography'
import {
    responsiveConditionalStyle,
    responsiveStyle,
} from '../../theme/utilities/styles'

import { Props, StyledProps } from './types'
import { getBorder, getMargin, getPadding } from './utils'

const StyledDiv = styled('div')<StyledProps>`
    ${({
        alignItems,
        background,
        borderRadius,
        displayValue,
        flexDirection,
        flexWrap,
        fluidHeight,
        justifyContent,
        position,
        textAlign,
        theme,
        zIndex,
        ...props
    }) => {
        const s = []
        s.push(
            responsiveStyle('alignItems', alignItems, theme),
            responsiveStyle(
                'backgroundColor',
                background,
                theme,
                x => theme.colors[x],
            ),
            responsiveStyle(
                'borderRadius',
                borderRadius,
                theme,
                x => theme.radii[x],
            ),
            responsiveStyle('display', displayValue, theme),
            responsiveStyle('flexDirection', flexDirection, theme),
            responsiveStyle('flexWrap', flexWrap, theme),
            responsiveConditionalStyle(
                'height',
                fluidHeight,
                '100%',
                'initial',
                theme,
            ),
            responsiveStyle('justifyContent', justifyContent, theme),
            responsiveStyle('position', position, theme),
            responsiveStyle('textAlign', textAlign, theme),
            responsiveStyle('zIndex', zIndex, theme, x => theme.zIndices[x]),
            getPadding({ theme, ...props }),
            getMargin({ theme, ...props }),
            getBorder({ theme, ...props }),
        )
        return s.join(';\n')
    }}
`

const Box = ({
    el = _Element.Box.Div,
    borderStyle = _Border.Style.Solid,
    borderColor = _Color.Palette.Muted,
    display,
    fluidHeight = false,
    fluidWidth = false,
    ...props
}: Props) => {
    const p = {
        ...props,
        borderStyle,
        borderColor,
        displayValue: display,
        fluidHeight,
        fluidWidth,
    }
    return <StyledDiv as={el} {...p} />
}

Box.AlignItems = _Flexbox.AlignItems
Box.Background = _Color.Palette
Box.BorderColor = _Color.Palette
Box.BorderRadius = _Border.Radius
Box.BorderStyle = _Border.Style
Box.BorderWidth = _Border.Width
Box.Display = _Layout.Display
Box.Element = _Element.Box
Box.FlexDirection = _Flexbox.FlexDirection
Box.FlexWrap = _Flexbox.FlexWrap
Box.JustifyContent = _Flexbox.JustifyContent
Box.Position = _Position.Position
Box.TextAlign = _Typography.Align
Box.ZIndex = _Position.ZIndex

export default Box
