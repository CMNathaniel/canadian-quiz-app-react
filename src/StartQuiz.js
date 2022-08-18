import './App.css';
import GenerateQuestion from './GenerateQuestion';

function App() {

// const startQuiz = (event) => {
//   console.log(event);
//   console.log(`This is a click on the Start Quiz button`);
// }

  return (
    <>
        <ul>
              <li>Question: <span class="questionNumber">0 </span>/ 10</li>
              <li>Score: <span class="score">0</span></li>
            </ul>
          </div>
        </header>
        <main role="main">
          <div class="quizStart">
            <h2>Would you pass the Canadian Citizenship test? Take this quick quiz to find out!</h2>
            <button type="button" onClick={<GenerateQuestion />} class="startButton">Start Quiz</button>
          </div>
          <div class="questionAnswerForm"></div>
        </main>
      </body>    
      <GenerateQuestion />    
    </>
  );
}

export default App;