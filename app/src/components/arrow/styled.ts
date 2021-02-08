import styled from '@emotion/native';

export const ArrowIcon = styled.Image<{ angle: string }>`
	transform: rotate(${props => props.angle});
`