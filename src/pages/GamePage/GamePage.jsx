import { GameContainer } from './styled.GamePage'
import { useContext } from 'react'
import { QuizContext } from '../../common/context/quiz-context'
import Game from '../../components/Game/Game'


export default function GamePage() {
  
  const {collection1, collection2, collection3} = useContext(QuizContext)
  console.table(collection1)
  console.table(collection2)
  console.table(collection3)
  return (
    <GameContainer>

<Game/>

    </GameContainer>
  )
}
