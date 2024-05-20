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

 //assigning a variable for each field
  
 const currentQuestionIndex = 0;
  
  function displayQuestion() {
    //displaying questions given in array
   const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choice1Element.textContent = currentQuestion.choice1;
    choice2Element.textContent = currentQuestion.choice2;
    choice3Element.textContent = currentQuestion.choice3;
    choice4Element.textContent = currentQuestion.choice4;


    
    // Add event listeners to choices
    
    // assigning options to a variable
    choice1Element = document.getElementById('1opt');
    choice2Element = document.getElementById('2opt');
    choice3Element = document.getElementById('3opt');
    choice4Element = document.getElementById('4opt');
    choice1Element.addEventListener('click', () => checkAnswer(1, currentQuestion.answer));
    choice2Element.addEventListener('click', () => checkAnswer(2, currentQuestion.answer));
    choice3Element.addEventListener('click', () => checkAnswer(3, currentQuestion.answer));
    choice4Element.addEventListener('click', () => checkAnswer(4, currentQuestion.answer));
    
    resetChoiceColors();
    currentQuestionIndex+=1;
    if(currentQuestionIndex<3){
    displayQuestion();
}
  }
  function checkAnswer(selectedChoice, correctAnswer) {
    if (selectedChoice === correctAnswer) {
      // Correct answer
      const choiceElement = document.getElementById(`${selectedChoice}opt`);
      choiceElement.style.backgroundColor = 'green';
    } else {
      // Incorrect answer
      const choiceElement = document.getElementById(`${selectedChoice}opt`);
      choiceElement.style.backgroundColor = 'red';
      const correctChoiceElement = document.getElementById(`${correctAnswer}opt`);
      correctChoiceElement.style.backgroundColor= 'green';
    }
  }

//  const x=document.querySelector(".choice");
//   x.addEventListener("click",()=>{
//     if(x.innerHTML === '<style>' && currentQuestionIndex===0){
//         x.style.color=green;
//     }
//   })
function resetChoiceColors(){
    document.getElementById('1opt').style.backgroundColor= 'white';
    document.getElementById('2opt').style.backgroundColor= 'white';
    document.getElementById('3opt').style.backgroundColor= 'white';
    document.getElementById('4opt').style.backgroundColor= 'white';
}

//   function checkanswer(){
     
//   }
  
  displayQuestion();
//   displayQuestion();
//   displayQuestion();