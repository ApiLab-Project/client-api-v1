import React, { useContext, useState } from 'react'
import logo00LabApiBrLogo from './../../assets/images/logos/logo00LabApiBrLogo.svg'
import { QuizContext } from '../../common/context/quiz-context'
import Start from './Start/Start'
import Playing from './Playing/Playing'
export default function Game() {
  const {viewGame} = useContext(QuizContext)
  
  return (
   <div style={{
    margin: '10px 7.5%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: '22px',
   
   }}>
   {viewGame === 0 && (<Playing/>)}
   
   </div>
  )
}
