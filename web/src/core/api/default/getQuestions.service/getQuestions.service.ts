import { sleep } from '~/helpers'

interface IResponse {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  likes: number;
  liked: boolean;
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
                  .map((t,i,arr) => {
                    const {id, title} = t
                    const options = Array(3)
                      .fill(null)
                      .map((e,i) => {
                        const el = todosRes[todosRes.length -1 - i] 
                        return {
                          text: el.title,
                          porcentage: 33 * i,
                        }
                      })

                    const likes = randomIntFromInterval(i,arr.length - 1 - i)

                    return {
                      id,
                      question: `${title} ?`,
                      type: itens < 5 ? 'question' : 'pool',
                      likes: likes,
                      liked: !!Math.sign(randomIntFromInterval(-1,1)),
                      options
                    }
                  })

  const [ current, ...remain] = todoList

  return {
    current,
    remain
  }
}