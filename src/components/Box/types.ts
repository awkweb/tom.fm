import { FormEvent } from 'react'
// eslint-disable-next-line
import { CSSProp, DefaultTheme } from 'styled-components'

import * as _Border from '../../theme/types/border'
import * as _Color from '../../theme/types/color'
import * as _Element from '../../theme/types/element'
import * as _Flexbox from '../../theme/types/flexbox'
import * as _Layout from '../../theme/types/layout'
import * as _Position from '../../theme/types/position'
import * as _Typography from '../../theme/types/typography'

import { LazyResponsive } from '../../theme/types/responsive'

export interface Props {
    alignItems?: LazyResponsive<_Flexbox.AlignItems>
    b?: LazyResponsive<boolean>
    background?: LazyResponsive<_Color.Palette>
    bb?: LazyResponsive<boolean>
    bl?: LazyResponsive<boolean>
    borderColor?: _Color.Palette
    borderRadius?: LazyResponsive<_Border.Radius>
    borderStyle?: _Border.Style
    borderWidth?: _Border.Width
    br?: LazyResponsive<boolean>
    bt?: LazyResponsive<boolean>
    children?: React.ReactNode
    css?: CSSProp<DefaultTheme>
    display?: LazyResponsive<_Layout.Display>
    el?: _Element.Box
    flexDirection?: LazyResponsive<_Flexbox.FlexDirection>
    flexWrap?: LazyResponsive<_Flexbox.FlexWrap>
    fluidHeight?: LazyResponsive<boolean>
    fluidWidth?: LazyResponsive<boolean>
    id?: string
    justifyContent?: LazyResponsive<_Flexbox.JustifyContent>
    m?: LazyResponsive<number>
    mb?: LazyResponsive<number>
    ml?: LazyResponsive<number>
    mr?: LazyResponsive<number>
    mt?: LazyResponsive<number>
    mx?: LazyResponsive<number>
    my?: LazyResponsive<number>
    onSubmit?: (e: FormEvent) => void
    p?: LazyResponsive<number>
    pb?: LazyResponsive<number>
    pl?: LazyResponsive<number>
    position?: LazyResponsive<_Position.Position>
    pr?: LazyResponsive<number>
    pt?: LazyResponsive<number>
    px?: LazyResponsive<number>
    py?: LazyResponsive<number>
    textAlign?: LazyResponsive<_Typography.Align>
    zIndex?: LazyResponsive<_Position.ZIndex>
}

export type StyledProps = Props &
    Required<Pick<Props, 'borderColor' | 'borderStyle'>> & {
        displayValue: Props['display']
    }
