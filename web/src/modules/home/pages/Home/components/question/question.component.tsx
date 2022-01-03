import React from "react";

import { PoolQuestionItem } from "./styled";

const RQQuestion: React.FC<{ question: string }> = (props) => {
  const { question } = props
  return (
    <PoolQuestionItem>{question}</PoolQuestionItem>
  );
}

export { RQQuestion };
