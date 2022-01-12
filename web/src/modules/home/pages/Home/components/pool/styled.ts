import styled from 'styled-components';



export const PoolContainer = styled.div`
`

export const PoolItemText = styled.h4`
    color: ${props => props.theme.colors.Base.black};
    font-size: 18px;
    margin: 0px;
    position: relative;
    z-index: 2;
`

export const PoolItemWrapper = styled.div`
    display: flex;
    align-items: stretch;
    margin-bottom: 10px;
`

export const PoolItemContainer = styled.div<{ porcentage: number }>`
    padding: 15px;
    border: 1px solid #EDF0F1;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    flex-basis: 1;
    flex-grow: 1;
    &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: ${props => props.porcentage+'%'};
        transition: linear all 0.5s;
        background-color: #EDF0F1;
        z-index: 1;
    }
`

export const PoolItemVoteWrapperButton = styled.div`
    display: flex;
    align-items: stretch;
    margin-left: 15px;
`

export const PoolItemVoteButton = styled.button`
    background-color: transparent;
    border: 1px solid #EDF0F1;
    border-radius: 5px;
    padding: 10px;
    transition: background 225ms linear;
    cursor: pointer;

    &:hover{
        color: ${props => props.theme.colors.Base.white};
        background-image: linear-gradient(160deg,#0093E9 0%,#80D0C7 100%);
    }
`