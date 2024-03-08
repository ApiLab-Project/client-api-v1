import React, { useContext } from 'react'
import BtnLocked from './BtnLocked/BtnLocked'
import BtnUnlocked from './BtnUnlocked/BtnUnlocked'
import { QuizContext } from '../../../../common/context/quiz-context'
import BtnComplete from './BtnComplete/BtnComplete'
export default function Start02() {


    const {stage1, stage2, stage3} = useContext(QuizContext)
  return (

<section className="bg-white p-4 gap-6 flex flex-col rounded-lg justify-center lg:rounded-l-none">


<div className="text-center">
    <h2 className="text-4xl mb-2">Lab.GAMES</h2>
    <p className="text-xl text-gray-700 mb-2">Mergulhe nas fases disponiveis e comece a aprender !</p>
</div>

<div className='flex  content-around align-center'>
   {stage1 === 1 ? (<BtnUnlocked>Fase 1</BtnUnlocked>): (stage1 === 0 ?(<BtnUnlocked>FASE 1</BtnUnlocked>): (<BtnComplete>Fase 1</BtnComplete>))}
   {stage2 === 1 ? (<BtnUnlocked>Fase 2</BtnUnlocked>): (stage2 === 0 ?(<BtnLocked>FASE 2</BtnLocked>): (<BtnComplete>Fase 2</BtnComplete>))}
   {stage3 === 1 ? (<BtnUnlocked>Fase 3</BtnUnlocked>): (stage3 === 0 ?(<BtnLocked>FASE 3</BtnLocked>): (<BtnComplete>Fase 3</BtnComplete>))}


</div>
</section>

  )
}
