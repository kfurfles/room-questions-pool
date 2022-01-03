import React from "react";
import { Helmet } from "react-helmet-async";
import {RQQuestion} from './components/question'
import {RQPool} from './components/pool'
import { useGetQuestionsQuery } from '~/core/query'

type SimpleQuestion = {
  question: string;
  type: string;
}

type PoolQuestion = {
  question: string;
  type: string;
  options: {
      text: string;
      porcentage: number;
  }[];
}

type AllQuesions = SimpleQuestion | PoolQuestion

type IQuestionData = {
  current: AllQuesions;
  remain: AllQuesions[];
}

import { 
  Container, 
  PoolQuestionArea, 
  PoolQuestionTitle, 
  PoolQuestionAreaItem, 
  PoolQuestionItemContainer, 
  MainContent, 
  HeaderRoom,
  HeaderWrapperIcon,
  HeaderConfigIcon,
  HeaderRoomName,
  HeaderBackIcon } from "./styled";
import { useQueryClient } from "react-query";

function QuestionsWrapper(props: any) {
  const { type, options } = props

  switch (type) {
    case 'pool':
      return (
        <>
          <PoolQuestionItemContainer>
            <RQPool questions={options} />
          </PoolQuestionItemContainer>
          <hr />
        </>
      )

    default:
      return null
  }
}

function CurrentQuestion(props: any) {
  const { type, options, question } = props
  console.log(props)

  let QuestionTypeComponent = null

  if(type === 'pool'){
    QuestionTypeComponent = (
      <>
        <PoolQuestionItemContainer>
            <RQPool questions={options} />
          </PoolQuestionItemContainer>
          <hr />
      </>
    )
  }

  return (<>
    <PoolQuestionTitle>{question}</PoolQuestionTitle>

    <PoolQuestionAreaItem>
      {QuestionTypeComponent}
    </PoolQuestionAreaItem>
  </>)
}

function Home() {

  const { queryClient, queryData: { isLoading, isError, data } } = useGetQuestionsQuery()

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>João: {data?.current?.question || ''}</title>
      </Helmet>
      <MainContent>

        <HeaderRoom>
          
          <HeaderWrapperIcon>
           <HeaderBackIcon />
          </HeaderWrapperIcon>
          
          <HeaderRoomName>Cabeçalho Sala</HeaderRoomName>
          
          <HeaderWrapperIcon>
            <HeaderConfigIcon />
          </HeaderWrapperIcon>

        </HeaderRoom>
        <PoolQuestionArea>
          {!isLoading
            ?
            <> 
              <CurrentQuestion {...data?.current} />
            
              <PoolQuestionAreaItem style={{ marginTop: "30px", paddingTop: "10px", opacity: 0.8}}>
                { data?.remain.map(q => {
                    return (
                      <PoolQuestionItemContainer key={q.question}>
                        <RQQuestion question={q.question} />
                      </PoolQuestionItemContainer>
                    )
                  })
                }
              </PoolQuestionAreaItem> 
            </>
            :<h1 style={{ textAlign: 'center', width: '100%' }}>Carregando</h1>
          }
        </PoolQuestionArea>
      </MainContent>
    </Container>
  );
}

export { Home };
