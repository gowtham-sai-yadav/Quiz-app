const questions = [
    {
      question: 'Which HTML tag is used to define an inline style?',
      choice1: '<script>',
      choice2: '<css>',
      choice3: '<style>',
      choice4: '<span>',
      answer: 3,
    },
    {
      question: 'Which property is used to change the text color in CSS?',
      choice1: 'text-color',
      choice2: 'font-color',
      choice3: 'text-style',
      choice4: 'color',
      answer: 4,
    },
    {
      question: 'Which of the following is the correct way to comment in HTML?',
      choice1: '// Comment',
      choice2: '<!-- Comment -->',
      choice3: '/* Comment */',
      choice4: '<!Comment>',
      answer: 2,
    },
  ];
  
 let questionElement = document.getElementById('question');
 let choice1Element = document.getElementById('choice1');
 let choice2Element = document.getElementById('choice2');
 let choice3Element = document.getElementById('choice3');
 let choice4Element = document.getElementById('choice4');

 //assigning a variable for each field by calling the tags
  
let currentQuestionIndex = 0;
let score=0;
  
  function displayQuestion() {
    // console.log('displayQuestion called, currentQuestionIndex:', currentQuestionIndex);
    //displaying questions given in array
   let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choice1Element.textContent = currentQuestion.choice1;
    choice2Element.textContent = currentQuestion.choice2;
    choice3Element.textContent = currentQuestion.choice3;
    choice4Element.textContent = currentQuestion.choice4;


    
    // Add event listeners to choices
    
    // assigning options to a variable
    choice1Element_ = document.getElementById('1opt');
    choice2Element_ = document.getElementById('2opt');
    choice3Element_ = document.getElementById('3opt');
    choice4Element_ = document.getElementById('4opt');
    choice1Element_.addEventListener('click', () => checkAnswer(1, currentQuestion.answer));
    choice2Element_.addEventListener('click', () => checkAnswer(2, currentQuestion.answer));
    choice3Element_.addEventListener('click', () => checkAnswer(3, currentQuestion.answer));
    choice4Element_.addEventListener('click', () => checkAnswer(4, currentQuestion.answer));
    
    document.getElementById('score_int').textContent = score;
    document.getElementById('no_que').textContent = (currentQuestionIndex+1)+'/3'

  }
  function checkAnswer(selectedChoice, correctAnswer) {
    resetChoiceColors();
    if (selectedChoice === correctAnswer) {
      // Correct answer
      const choseElement = document.getElementById(`${selectedChoice}opt`);
      choseElement.style.backgroundColor = 'green';
      score+=5;
    }else {
      // Incorrect answer
      const choseElement = document.getElementById(`${selectedChoice}opt`);
      choseElement.style.backgroundColor = 'red';
      const correctChoiceElement = document.getElementById(`${correctAnswer}opt`);
      correctChoiceElement.style.backgroundColor= 'green';
    }
  
    setTimeout(() => {
      resetChoiceColors();
      currentQuestionIndex += 1;
      if (currentQuestionIndex <= questions.length) {
        displayQuestion();
      }else{
        
       setTimeout(gameover,1000);
      }
    }, 1000);

  }

  function gameover(){
    window.location.href = 'end.html';
    // console.log(score);
    // document.getElementById('final-score').textContent = score;
  }
  // export function game(){
  //   document.getElementById('final').textContent = score;
  // }
  

function resetChoiceColors(){
  document.getElementById('1opt').style.backgroundColor= 'white';
  document.getElementById('2opt').style.backgroundColor= 'white';
  document.getElementById('3opt').style.backgroundColor= 'white';
  document.getElementById('4opt').style.backgroundColor= 'white';
  // document.getElementById('choice-label').style.backgroundColor= '#55a4e9';
}

  displayQuestion();
