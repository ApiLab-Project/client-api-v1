import { useEffect, useContext, useState, createContext } from "react";
import mockQuestionsV1 from './../../mocks/mockQuestionsV1.json'


export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const stageDefault ={
        stage_id: 1,
        title: "Fase 1",
        subtitle: "Verdadeiro ou Falso",
        instructions: "Nesta fase você deverá responder perguntas de verdadeiro ou falso, serão 10 questões variadas",
        iconStage: "null" 
    }
    


    const [allQuestions, setAllQuestions] = useState([...mockQuestionsV1]);
    const [collection1, setCollection1] = useState([]);
    const [collection2, setCollection2] = useState([]);
    const [collection3, setCollection3] = useState([]);
    const [viewGame, setViewGame]= useState(0)
    const [stage1, setStage1]= useState(1)
    const [stage2, setStage2] = useState(0)
    const [stage3, setStage3] = useState(0)
    const [stepStage, setStepStage] = useState(stageDefault)
    const filterStage1 = () => {
        const filteredQuestions = allQuestions.filter(question => Number(question.stage_id) === 1);
        setCollection1(filteredQuestions);
    };

    const filterStage2 = () => {
        const filteredQuestions = allQuestions.filter(question => Number(question.stage_id) === 2);
        setCollection2(filteredQuestions);
    };

    const filterStage3 = () => {
        const filteredQuestions = allQuestions.filter(question => Number(question.stage_id) === 3);
        setCollection3(filteredQuestions);
    };

    useEffect(() => {
        filterStage1();
        filterStage2();
        filterStage3();
    }, []);

    const contextValue = {
        allQuestions,
        collection1,
        collection2,
        collection3,
        filterStage1,
        filterStage2,
        filterStage3,
        stage1,
        stage2,
        stage3,
        viewGame
    };

    return (
        <QuizContext.Provider value={contextValue}>
            {children}
        </QuizContext.Provider>
    );
};
