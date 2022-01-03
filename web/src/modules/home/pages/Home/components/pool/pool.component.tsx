import React from 'react';

import { PoolItemContainer, PoolItemText ,PoolContainer} from './styled';

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
                    <PoolItemContainer key={q.text} porcentage={q.porcentage}>
                        <PoolItemText>
                            {q.text}
                        </PoolItemText>
                    </PoolItemContainer>)
            })}
            
        </PoolContainer>
        )
}

export { RQPool };