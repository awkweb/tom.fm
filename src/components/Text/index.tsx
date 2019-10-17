import React, { ReactNode } from 'react'
import styled from 'styled-components'

import * as _Color from 'src/theme/types/color'
import * as _Element from 'src/theme/types/element'
import * as _Typography from 'src/theme/types/typography'

interface Props {
    align?: _Typography.Align
    children: ReactNode
    color?: _Color.Palette
    el?: _Element.Text
    font?: _Typography.Font
    lineHeight?: _Typography.LineHeight
    noMargin?: boolean
    size?: _Typography.Size
    weight?: _Typography.Weight
}

export type StyledProps = Pick<Props, Exclude<keyof Props, 'el' | 'color'>> & {
    textColor: Props['color']
}

const StyledDiv = styled('div')<StyledProps>(({ theme, ...props }) => ({
    color: theme.colors[props.textColor],
    cursor: 'text',
    fontFamily: theme.fonts[props.font],
    fontSize: theme.fontSizes[props.size],
    fontWeight: theme.fontWeights[props.weight],
    lineHeight: theme.lineHeights[props.lineHeight],
    marginBottom: props.noMargin ? 0 : null,
    marginTop: props.noMargin ? 0 : null,
    textAlign: props.align,
}))

const Text = ({
    el = _Element.Text.Div,
    color,
    noMargin = false,
    ...props
}: Props) => {
    const p = {
        ...props,
        textColor: color,
        noMargin,
    }
    return <StyledDiv as={el} {...p} />
}

Text.Align = _Typography.Align
Text.Color = _Color.Palette
Text.Element = _Element.Text
Text.Font = _Typography.Font
Text.LineHeight = _Typography.LineHeight
Text.Size = _Typography.Size
Text.Weight = _Typography.Weight

export default Text
