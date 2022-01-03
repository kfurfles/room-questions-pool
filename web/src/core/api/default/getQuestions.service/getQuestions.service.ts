import { sleep } from '~/helpers'

interface IResponse {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export async function getQuestions() {
  // await sleep(3000)

  const todosRes: IResponse[] = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())

  const now = new Date().getTime().toString()
  const itens = parseInt(now[now.length - 1])

  const todoList = todosRes
                  .filter(t => t.completed)
                  .slice(1,20)
                  .map(t => {
                    return {
                      question: `${t.title} ?`,
                      type: 'question'
                    }
                  })

  const currentQuestion = `${todosRes[itens].title} ?`
  const currentQuestionType = 'pool'
  // const currentQuestionType = itens < 5 ? 'question' : 'pool'
  const porcetageOne = randomIntFromInterval(0,100)
  const porcetageTwo = 100 - porcetageOne
  
  const CurrentQuestionPoolOptions = currentQuestionType === 'pool' 
    ? [
        {
                text: 'Opção 1',
                porcentage: porcetageOne,
              },
              {
                text: 'Opção 2',
                porcentage: porcetageTwo,
              } 
      ]
    : []

  return {
    current: {
      question: currentQuestion,
      type: currentQuestionType,
      options: CurrentQuestionPoolOptions
    },
    remain: todoList
  }
}