import React from 'react';
import Text from '../text'

const QPTitle: React.FC = (props) => {
	const { children } = props
	
	return <Text 
		font="PoppinsBold"
		size={36}
		color="BLACK">{children}</Text>;
}

export default QPTitle;