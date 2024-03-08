import React, { useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import bg05 from './../../../assets/images/bg05.svg';
import { QuizContext } from '../../../common/context/quiz-context';

const Playing = () => {
  const { collection1 } = useContext(QuizContext);
  const [questionsCollection1, setQuestionsCollection1] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    filterSetS1();
  }, [collection1]);

  const filterSetS1 = () => {
    const dataSet = collection1.filter((q) => q.stage_id === "1");
    setQuestionsCollection1(dataSet);
  };

  useEffect(() => {
    if (currentQuestionIndex < 5) {
      setNextQuestion();
    } else {
      showFinalScore();
    }
  }, [currentQuestionIndex]);

  const setNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questionsCollection1.length);
    setCurrentQuestionIndex(randomIndex);
    setAnswer(null);
  };

  const handleAnswer = (isCorrect) => {
    const currentQuestion = questionsCollection1[currentQuestionIndex];
    if (isCorrect == currentQuestion.isTrue) {
      setScore(score + 1);
      Swal.fire({
        icon: 'success',
        title: 'Resposta Correta!',
        text: 'Parabéns! Você acertou.',
        confirmButtonText: 'OK'
      }).then(() => setNextQuestion());
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Resposta Incorreta!',
        text: 'Que pena! Tente novamente.',
        confirmButtonText: 'OK'
      }).then(() => setNextQuestion());
    }
  };

  const showFinalScore = () => {
    let message = '';
    if (score === 3) {
      message = 'Parabéns! Você venceu!';
    } else {
      message = 'Que pena! Você não venceu.';
    }
    Swal.fire({
      title: 'Jogo Finalizado',
      text: `Sua pontuação final é: ${score}`,
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <img src={bg05} alt="Jogo" className="w-full" style={{
            maxHeight: '400px'
          }} />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Pergunta:</h2>
            {questionsCollection1.length > 0 && (
              <>
                <p className="mb-4">{questionsCollection1[currentQuestionIndex].question}</p>
                <div className="flex justify-between">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => { handleAnswer(true); setAnswer(true); }}>
                    Verdadeiro
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => { handleAnswer(false); setAnswer(false); }}>
                    Falso
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playing;
