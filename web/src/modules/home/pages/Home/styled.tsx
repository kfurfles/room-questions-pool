import styled from 'styled-components';
import {Card} from "~/Components/Card"

export const Container = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 50px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`;

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
    padding: 10px;
    text-align: center;
`
