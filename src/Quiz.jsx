import React, { useState } from 'react'
import Question from './Question';
import './QuizApp.css';

function Quiz() {

  const questions = [
    {
      question: "Which keyword is used to define a class in Java?",
      options: ['class', 'Class', 'define', 'struct'],
      answer: "class"
    },
    {
      question: "What is the default value of a `boolean` in Java?",
      options: ['true', 'false', 'null', '0'],
      answer: "false"
    },
    {
      question: "Which of the following is not a primitive data type in Java?",
      options: ['int', 'float', 'String', 'double'],
      answer: "String"
    },
    {
      question: "Which method is used to print something to the console in Java?",
      options: ['System.print()', 'console.log()', 'System.out.println()', 'print.console()'],
      answer: "System.out.println()"
    },
    {
      question: "Which operator is used to compare two values in Java?",
      options: ['=', '==', '!=', 'equals'],
      answer: "=="
    },
    {
      question: "What does JVM stand for?",
      options: ['Java Virtual Machine', 'Java Variable Method', 'Java Verified Module', 'Java Value Manager'],
      answer: "Java Virtual Machine"
    }
  ];
   
  const [currentIndex, setIndex]=useState(0);
  const [currentAnswer, setCurrentAnswer]=useState(null);
  const [score, setScore]=useState(0);

  const handleClick=(option)=>{
    setCurrentAnswer(option)

    if(option === questions[currentIndex].answer){
      setScore(score+1)
    }
  };

  const nextquestion=()=>{
    if(currentIndex <= questions.length-1){
    setIndex(currentIndex+1)
    setCurrentAnswer(null)
    }
  };


  return (
    <div>
        {currentIndex < questions.length ? <div>
       <Question question={questions[currentIndex].question} options={questions[currentIndex].options} handleClick={handleClick} currentAnswer={currentAnswer}/>

       <button 
       disabled={currentAnswer === null} //if no answer is selected
       className={currentAnswer === null ? 'button-disable' : 'button'} 
       onClick={nextquestion}>
         Next Question </button>
       </div> : <div>Score: {score}</div>}
       
    </div>
  );
}

export default Quiz