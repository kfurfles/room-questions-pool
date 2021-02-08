import React from 'react';
import { View } from 'react-native';

import QPTitle from './../../components/typografy/title';
import QPArrow from './../../components/arrow';
import Text from '../../components/typografy/text'

import useColor  from '../../Theme/hooks/useColors'
import { size } from '../../Theme/typografy';

import { 
	Container, 
	HeaderContainer,
	QuestionsInfoContainer,
	QuestionInfoWrapper,
	QuestionInfoTitle,
	QuestionInfoLegend,
	QuestionsInfoTypesContainer,
	QuestionTypeContainer,
	QuestionDot
} from './styled';

const QuestionInfo: React.FC<{ color: string }> = (props) => {
	const { color} = props
	return (
		<QuestionTypeContainer>
			<QuestionDot color={color} />
			<Text font="PoppinsBold" size={12}>Work</Text>
			<Text font="PoppinsLight" size={12}>7 questions</Text>
		</QuestionTypeContainer>
	)
}

const QuestionsContainer: React.FC = () => {
	const {
		base: {
			BLUE,
			GREEN,
			PURPLE,
			RED
		}
	} = useColor()
	return (
		<QuestionsInfoContainer>
			<QuestionInfoWrapper>
				<View style={{ marginRight: 40 }}>
					<QuestionInfoTitle color="BLACK" font="PoppinsBold">16</QuestionInfoTitle>	
					<QuestionInfoLegend font="PoppinsLight">remain</QuestionInfoLegend>	
				</View>
				<View>
					<QuestionInfoTitle color="BLACK" font="PoppinsBold">16</QuestionInfoTitle>	
					<QuestionInfoLegend font="PoppinsLight">answered</QuestionInfoLegend>	
				</View>
			</QuestionInfoWrapper>

			<QuestionsInfoTypesContainer style={{ marginTop: size(30) }}>
				<QuestionInfo color={BLUE}/>
				<QuestionInfo color={GREEN} />
			</QuestionsInfoTypesContainer>
			<QuestionsInfoTypesContainer style={{ marginTop: 10 }}>
				<QuestionInfo color={PURPLE} />
				<QuestionInfo color={RED} />
			</QuestionsInfoTypesContainer>

		</QuestionsInfoContainer>
	)
}

const QPRoom: React.FC = () => {
return (
	<Container>
		<QPArrow direction="left" />
		<HeaderContainer>
			<QPTitle>Hey Jhol</QPTitle>
		</HeaderContainer>

		<QuestionsContainer />
	</Container>
);
}

export default QPRoom;