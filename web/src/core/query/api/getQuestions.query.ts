import {
    useQuery,
    useQueryClient,
} from 'react-query'
import { getQuestions } from '../../api/default'

interface IQuestionAllOptions {
    refetchInterval?: number | false
}

export function useGetQuestionsQuery(options?: IQuestionAllOptions) {
    const queryClient = useQueryClient()
    const queryData = useQuery('questions/all', getQuestions, {
        ...options,
    })
    return {
        queryClient,
        queryData
    }
}