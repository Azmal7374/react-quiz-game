import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext';

const questions = [
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
    correctAnswer: 'Jupiter',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Hg', 'Pb'],
    correctAnswer: 'Au',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'Japan', 'South Korea', 'Vietnam'],
    correctAnswer: 'Japan',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 'Canberra',
  },
  {
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
    correctAnswer: 'Mitochondria',
  },
  {
    question: 'Who is the author of "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'J.K. Rowling', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
    correctAnswer: 'Harper Lee',
  },
  {
    question: 'What is the square root of 144?',
    options: ['10', '12', '14', '16'],
    correctAnswer: '12',
  },
  {
    question: 'Which gas do plants absorb during photosynthesis?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
];

const GameScreen = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  console.log(typeof selectedOption)
  
  console.log(correctAnswers)

  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
  console.log(typeof correctAnswerIndex)

  const handleAnswerClick = (selectedAnswer) => {
    setSelectedOption(selectedAnswer); // Store the selected option's value
  };


  const handleNextButtonClick = () => {
    if (selectedOption !== null) {
      const correctAnswer = questions[currentQuestionIndex].correctAnswer;

      if (selectedOption === correctAnswer) {
        setCorrectAnswers(correctAnswers + 1);
      }

      setSelectedOption(null); // Reset selected option when moving to the next question

      if (currentQuestionIndex < questions.length - 1) {
        // Move to the next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // User has completed all questions, navigate to the result screen or perform other actions
        navigate('/result');
      }
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);


const progressText = `${correctAnswers}/${currentQuestionIndex + 1}`;

  return (
  <div className="bg-gray-400">
  <div className="flex justify-between">
  <div className="pt-4 md:pt-8 ml-3 md:ml-8">
  <div className=" bg-purple-500 rounded-xl p-2 w-24  md:w-32 shadow-xl">
  <div className="bg-orange-400 rounded-xl shadow-xl flex justify-center items-center h-10">
  <h2 className="text-center p-1 md:p-2 text-white shadow-lg text-xl md:text-3xl font-bold">{progressText}</h2>
  </div>
 
  </div>
  </div>
  <div className="pt-4 md:pt-8 mr-4 md:mr-12">
  <button  className="bg-sky-400 p-2  w-28 md:w-48   flex justify-center  text-xl md:text-3xl rounded-md shadow-xl font-bold text-white"  onClick={logout}>Logout</button>
  </div>
  </div>
    <div  className="flex flex-col justify-center items-center" >
     
      <p className='mt-20 md:mt-4 text-3xl md:text-5xl font-bold text-center text-white '>{questions[currentQuestionIndex].question}</p>
     <div className='flex flex-col justify-center items-center h-screen w-screen'>
     <ul className="grid grid-cols-2 gap-4 mt-4  ">
     {questions[currentQuestionIndex].options.map((option, index) => (
       <li
         key={index}
         onClick={() => handleAnswerClick(option)}
         className={`text-center cursor-pointer font-bold bg-purple-600 p-4 w-40 md:w-64 shadow-lg mt-4 text-xl md:text-3xl text-white rounded-md ${
           selectedOption === option ? 'border shadow-2xl border-white' : ''
         }`}
       >
         {option}
       </li>
     ))}
   </ul>
   <button disabled={selectedOption === null} className="bg-sky-400 p-4 w-40 md:w-64 mt-5 text-xl md:text-3xl rounded-md text-white border font-bold"  onClick={handleNextButtonClick}>Done</button>
   
     </div>
    </div>
    </div>
  );
};

export default GameScreen;
