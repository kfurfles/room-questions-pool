import React from 'react';

import { PoolItemContainer, PoolItemText ,PoolContainer, PoolItemWrapper, PoolItemVoteButton, PoolItemVoteWrapperButton} from './styled';

type RQPoolProps = {
    questions: {
        text: string,
        porcentage: number
    }[]
}

const RQPool: React.FC<RQPoolProps> = (props) => {
    const { questions = [] } = props
    return (
        <PoolContainer>
            { questions.map(q => {
                return (
                    <PoolItemWrapper key={q.text}>
                        <PoolItemContainer porcentage={q.porcentage}>
                            <PoolItemText>
                                {q.text}
                            </PoolItemText>
                        </PoolItemContainer>
                        <PoolItemVoteWrapperButton>
                            <PoolItemVoteButton>
                                Votar
                            </PoolItemVoteButton>
                        </PoolItemVoteWrapperButton>
                    </PoolItemWrapper>
                    )
            })}
            
        </PoolContainer>
        )
}

export { RQPool };