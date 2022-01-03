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

export const PoolItemContainer = styled.div<{ porcentage: number }>`
    padding: 15px;
    border: 1px solid #EDF0F1;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
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