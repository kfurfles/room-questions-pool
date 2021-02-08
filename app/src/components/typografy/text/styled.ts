import styled from '@emotion/native'
import { ITheme } from '~/Theme'

type TextProps = {
	color: string,
	fontFamily: string
}

export const BaseText = styled.Text<TextProps>`
	font-family: ${props => props.fontFamily};
	color: ${props => props.color}
`