// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'




export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

   const [cureentQuestion,setQuestion] = useState(0)
   const [showScore,setShowScore] = useState(false)
   const [score, setScore] = useState(0)

    const handleClick=(isCorrect)=>{ 
     if(isCorrect===true){
      setScore(score +1)
     }
      const nextQuestion=cureentQuestion+1

    
      if(nextQuestion<questions.length){
        setQuestion(nextQuestion)
      }else(
       setShowScore(true)
      )

    }
  
	return (
		<div className='app'>
      <Typography variant="h3" align="center" color='success' gutterBottom>
      My Quiz App
      </Typography>
      
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (




				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {cureentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>    <Typography variant="h5" align="center" color='success' gutterBottom>
            {questions[cureentQuestion].questionText}
      </Typography> </div>
					</div>
					<div className='answer-section'>
            {questions[cureentQuestion].answerOptions.map((answerOptions)=>    <div style={{ width: '100%' }}>
            
      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: 'repeat(1, 2fr)',
          margin:"8px",
       textAlign:'center'
         
        }}
      ><Button variant="contained" color="success" onClick={ ()=>  handleClick(answerOptions.isCorrect)} >{answerOptions.answerText}</Button> </Box>    
      </div> )} 
      
       
					</div>
				</>
			)}
		</div>
	);
}