import styled from 'styled-components';

export const PoolQuestionItemContainer = styled.div`
    display: flex;
    align-items: stretch;
    flex-flow: row wrap;
`

export const PoolQuestionItem = styled.h3`
    font-size: 20px;
    padding: 15px;
    border: 1px solid #EDF0F1;
    border-radius: 5px;
    color: ${props => props.theme.colors.Base.black};
    margin: 0px;
    flex-grow: 1;
`

export const PoolQuestionItemButton = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;

    &:hover svg {
        fill: red;
    }

`

export const PoolQuestionItemLikeInfo = styled.div`
    color: ${props => props.theme.colors.Base.black};
    flex: 0 1 100%;
    margin-top: 8px;
    font-weight: bold;
`