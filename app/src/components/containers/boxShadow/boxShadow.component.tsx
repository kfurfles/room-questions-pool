import React from 'react';
import { ImageStyle, StyleProp, View } from 'react-native';
import { Container } from './styled'

type QPBoxShadowProps = {
	style?: StyleProp<ImageStyle>
}


const QPBoxShadow: React.FC<QPBoxShadowProps> = (props) => {
	const { children,style } = props

  	return (<Container style={{
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		
		elevation: 5,
		marginVertical: 6,
		}}>{children}</Container>)
}

QPBoxShadow.defaultProps = {
}

export default QPBoxShadow;