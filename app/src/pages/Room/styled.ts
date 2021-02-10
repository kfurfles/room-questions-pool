import styled from '@emotion/native';
import { size } from './../../Theme/typografy';
// import { size } from './../  ~/Theme/typografy';
import Text from './../../components/typografy/text'

export const Container = styled.View`
	padding-top: ${size(21, 'px')};
	padding-left: ${size(22, 'px')};
	/* flex: 1 */
`

export const HeaderContainer = styled.View`
	margin-top: ${size(20, 'px')};
`

export const QuestionsInfoContainer = styled.View`
	padding-left: ${size(50, 'px')};
`

export const QuestionInfoWrapper = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-end;
	border-bottom-width: 1px;
	border-bottom-color: #979797;
	padding-bottom: ${size(21, 'px')};
	padding-left: ${size(13, 'px')};
` 

export const QuestionInfoTitle = styled(Text)`
	font-size: ${size(18, 'px')};
`

export const QuestionInfoTitle2 = styled(Text)`
	font-size: ${size(18, 'px')};
`

export const QuestionInfoLegend = styled(Text)`
	font-size: ${size(12, 'px')};
`

export const QuestionsInfoTypesContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-right: ${size(30, 'px')};
`

export const QuestionTypeContainer = styled.View`
	padding-left: ${size(18, 'px')};
	position: relative;
	padding-top: ${size(5, 'px')};
	padding-bottom: ${size(5, 'px')};
	min-width: 40%;
`

export const QuestionDot = styled.View<{ color: string }>`
	width: ${size(6, 'px')};
	height: ${size(6, 'px')};
	background-color: ${props => props.color };
	border-radius: 5px;
	position: absolute;
	top: 10px;
	right: 5%;
`

export const QuestionType = styled.View`

`