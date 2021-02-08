import { useTheme } from '@emotion/react';
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { ITheme } from '~/Theme';
import { size as sizeHelper } from '../../../Theme/typografy';

import { BaseText } from './styled';

type QPTextProps = {
	font: keyof ITheme['fonts']['Poppins']
	color?: keyof (ITheme['colors']['base'] & ITheme['colors']['helpers']),
	style?: StyleProp<TextStyle>,
	size?: number
}


const QPText: React.FC<QPTextProps> = (props) => {
	const { 
		children,
		font,
		color,
		style,
		size = 16
	} = props

	const theme = useTheme() as ITheme
	const {
		colors: {
			base,
			helpers
		},
		fonts: {
			Poppins
		}
	} = theme

	const selectedFont = Poppins[font]
	const selectedColor = { ...base, ...helpers }[color || 'BLACK'] 
	
	return <BaseText
		style={[{ fontSize: sizeHelper(size) as number }, style]}
		fontFamily={selectedFont} 
		color={selectedColor}>{children}</BaseText>;
}

QPText.defaultProps = {
	color: 'BLACK',
	font: 'PoppinsRegular'
}

export default QPText;