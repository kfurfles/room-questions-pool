import React from 'react';
import { ImageStyle, StyleProp } from 'react-native';
import ArrowImage from './../../assets/images/icons/arrow.png'

import { ArrowIcon} from './styled';

type QPArrowProps = {
	direction: 'left' | 'top' | 'right' | 'bottom',
	style?: StyleProp<ImageStyle>
}


const QPArrow: React.FC<QPArrowProps> = (props) => {
	const { style } = props	
	const angle = {
		'left': '0deg',
		'top': '90deg',
		'right': '180deg',
		'bottom': '270deg',
	}[props.direction]


  	return (
		<ArrowIcon angle={angle} source={ArrowImage} resizeMode="cover" style={style} />
	)
}

QPArrow.defaultProps = {
	direction: 'left'
}

export default QPArrow;