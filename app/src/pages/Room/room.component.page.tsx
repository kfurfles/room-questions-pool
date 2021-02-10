import React from 'react';
import { FlatList, ScrollView, ScrollViewComponent, View } from 'react-native';

import QPTitle from './../../components/typografy/title';
import QPArrow from './../../components/arrow';
import Text from '../../components/typografy/text'
import QPBoxShadow from '../../components/containers/boxShadow'

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
			<QuestionsInfoTypesContainer style={{ marginTop: 30 }}>
				<QuestionInfo color={PURPLE} />
				<QuestionInfo color={RED} />
			</QuestionsInfoTypesContainer>

		</QuestionsInfoContainer>
	)
}

const QuestionsPoolContainer: React.FC = (props) => {

	const {
		base: {
			BLUE,
			GREEN,
			PURPLE,
			RED
		}
	} = useColor()

	const data = [
		{ id: 0, full_name: 'Repo 1' },
		{ id: 1, full_name: 'Repo 2' },
		{ id: 2, full_name: 'Repo 3' },
		{ id: 3, full_name: 'Repo 4' },
		{ id: 4, full_name: 'Repo 5' },
		{ id: 5, full_name: 'Repo 2' },
		{ id: 6, full_name: 'Repo 3' },
		{ id: 7, full_name: 'Repo 4' },
		{ id: 8, full_name: 'Repo 5' },
	  ]

	const renderItem = ({ item }: { item: typeof data[0] }) => (
		<QPBoxShadow style={{ marginVertical: 10 }}>
			<QuestionInfo color={BLUE}/>
		</QPBoxShadow>
	  );

	return (
		<FlatList
			style={{ marginTop: 30 }}
			contentContainerStyle={{
				paddingHorizontal: 10,
			}}
			scrollEnabled={true}
			data={data}
			renderItem={renderItem}
			keyExtractor={item => item.id.toString()}
		/>
	)
}

const QPRoom: React.FC = () => {
return (
	<Container>
		<QPArrow direction="left"/>
		<HeaderContainer>
			<QPTitle>Hey Jhol</QPTitle>
		</HeaderContainer>

		<QuestionsContainer/>

		<QuestionsPoolContainer />
	</Container>
);
}

export default QPRoom;