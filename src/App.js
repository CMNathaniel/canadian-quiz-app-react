import React from 'react';
// import { isCompositeComponent } from 'react-dom/test-utils';
import './App.css';
// import GenerateQuestion from './GenerateQuestion';



function App() {

//   const STORE = [
//    {
//     question: 'When is Canada Day and what does it celebrate?',
//     answers: [
//       'June 15 of each year to celebrate the anniversary of Confederation.',
//       'August 8th of each year to celebrate the joining of British Columbia to Confederation.',
//       'We celebrate the anniversary of Confederation July 1st of each year.',
//       'May 21st of each year to remember Queen Victoria.'
//       ],
//     correctAnswer: 'We celebrate the anniversary of Confederation July 1st of each year.',
//     icon: 'https://d14npqitqa51mn.cloudfront.net/wp-content/uploads/2019/06/17064727/SH-Canada-Day-Feature-1-1024x654.jpg',
//     alt: 'fireworks'
//   },
//   {
//     question:'What happened at the Battle of the Plains of Abraham?',
//     answers: [
//        'The Voyagers battled with the British for fur trading rights',
//        'Americans fought the United Empire Loyalists during the American Revolution',
//        'The British defeated the French marking the end of France\'s empire in America',
//        'The French defeated the British in a battle for Quebec'
//     ],
//     correctAnswer: 'The British defeated the French marking the end of France\'s empire in America',
//     icon: 'https://matthewrettino.files.wordpress.com/2013/07/culloden-battle.jpg?w=390',
//     alt: 'battle scene'
//    }
// ];

// const startQuiz = (event) => {
//   console.log(event);
//   console.log(`This is a click on the Start Quiz button`);
// }


  function displayQuestion() {
    // console.log("The displayQuestion function has been triggered, way to go Stine!!! 💃🏽 ");
    return (
      <div>
         {/* <h2>{STORE[questionNumber].question}</h2> */}
         <h2>Placeholder for the dynamic quiz questions</h2> 
      </div>
    );
    // console.log("The displayQuestion function has been triggered AFTER the return statement, way to go Stine!!! 💃🏽 ");
  }


  // function sayHello() {
  //   alert('Hello');
  // }

  return (
    <>
      <body>
        <h1>Canadian Citizenship Quiz</h1>
        {/* <header role="banner">
          <div class="col-8">
            <ul>
              <li>Question: <span class="questionNumber">0 </span>/ 10</li>
              <li>Score: <span class="score">0</span></li>
            </ul>
          </div>
        </header> */}
        <main role="main">
          <div class="quiz-start">
            <h2>Would you pass the Canadian Citizenship test? Take this quick quiz to find out!</h2>
            {/* if (this.state.displayQuestions) {
                questions = (
                <div>
                  { this.state.questions.map((question, index) => {
                    return <GenerateQuestion key = {question.id}
                    title = {question.title} />
                  })}
                </div>
              ) */}
            
            <button type="button" onClick={displayQuestion} class="startButton">Start Quiz</button>

          </div>
          <div class="quiz-start-image">
            <img src="https://d14fiu1i7ba797.cloudfront.net/720x439/can_quiz.png" alt="Map of Canada in red with question marks"></img>
          </div>

          {/* <div class="questionAnswerForm"></div> */}
        </main>
      </body>        
    </>
  );
}

export default App;
