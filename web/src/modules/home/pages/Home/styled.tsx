import styled from 'styled-components';
import { IoMdArrowRoundBack, IoMdCog } from "react-icons/io"
import {Card} from "~/components/Card"


export const Container = styled.div`
    max-width: 900px;
    min-width: 600px;
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

export const MainContent = styled.div`
    min-width: inherit;
    max-width: inherit;
`

export const PoolQuestionArea = styled(Card)`
   padding-left: 0px;
   padding-right: 0px;
   padding-top: 0px;
   width: 100%;
`

export const PoolQuestionTitle = styled.h1`
    font-size: 34px;
    background-color: rgb(117 132 154 / 33%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 15px;
    text-align: center;
    color: ${props => props.theme.colors.Base.black};
`

export const PoolQuestionAreaItem = styled.div`
    padding-left: 15px;
    padding-right: 15px;    
`

export const PoolQuestionItemContainer = styled.div`
    margin-bottom: 15px;
    margin-top: 15px;
`

export const HeaderRoom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`

export const HeaderWrapperIcon = styled.button`
    background-color: transparent;
    border: none;
    height: 100%;
`

export const HeaderBackIcon = styled(IoMdArrowRoundBack)`
    width: 25px;
    height: 25px;
    color: ${props => props.theme.colors.Base.white};
`

export const HeaderRoomName = styled.h1`
    font-size: 26px;
    color: ${props => props.theme.colors.Base.white};
    margin-right: auto;
`

export const HeaderConfigIcon = styled(IoMdCog)`
    width: 25px;
    height: 25px;
    color: ${props => props.theme.colors.Base.white};
`