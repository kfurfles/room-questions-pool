import React from 'react';

import { Container } from './styled';

const Card: React.FC<{ className?: string }> = (props) => {
  const { children, className } = props
  return <Container className={className} >{children}</Container>;
}

export {Card};