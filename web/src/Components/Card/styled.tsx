import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.Base.white};
  padding: 5px;
  border-radius: 5px;
  box-shadow: 3px 2px 3px rgba(0, 0, 0 , 0.1)
`;
