import React from "react";

import {LikeIcon} from '~/assets/icons/like'

import { PoolQuestionItem, PoolQuestionItemButton, PoolQuestionItemContainer, PoolQuestionItemLikeInfo } from "./styled";

const RQQuestion: React.FC<{ question: string, answered?: boolean, likes: number }> = (props) => {
  const { question, answered = false, likes } = props
  const LikeIconStatus = answered ? <LikeIcon active fill="red" /> : <LikeIcon />

  return (
    <PoolQuestionItemContainer>
      <PoolQuestionItem>{question}</PoolQuestionItem>
      <PoolQuestionItemButton>
        {LikeIconStatus}
      </PoolQuestionItemButton>
      <PoolQuestionItemLikeInfo>Likes: {likes}</PoolQuestionItemLikeInfo>
    </PoolQuestionItemContainer>
  );
}

export { RQQuestion };
