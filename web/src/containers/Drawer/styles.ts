import styled from 'styled-components';

export const Container = styled.div<{ show: boolean }>`
    background-color: ${props => props.show ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)' };
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: ease-in-out 225ms opacity;
    opacity: 1;
    pointer-events: none;
`;
