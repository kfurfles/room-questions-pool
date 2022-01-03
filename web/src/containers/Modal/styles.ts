import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: ease-in-out 1000ms opacity;
    opacity: 1;
    z-index: 100;
    overflow: hidden;
`;
