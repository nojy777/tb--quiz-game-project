var countdownTimer;
      var timerInterval;
      var arrayOfQuestions = [];
      const maxTime= 5*60;//time is in seconds
      function setCountDownTimer() {
         countdownTimer=maxTime;
      }

      //when the person clicks the beginning the timer starts
      //start timer

      let timerInterval = setInterval(updateTimer, 1000);
      function updateTimer() {
         countdownTimer =countdownTimer - 1;

      }
      //question is asked
      function SetupQuestions() {
         console.log("SetupQuestions started");
         let question1= {
            id: "quest0",
            question:"To select elementswith a specific class",
            answer1: "write a semicolon(;) character,folloqwed by the class name",
            answer2: "write a period(.) character,followed by the class name",
            answer3: "write a period(.) character",
            answer4: "write a comma(,) character",
            correctAnswer: 2
         };
      };
      

         let question2= {
            id: "quest1",
            question:"In CSS, a colorcan be specified by using a ",
            answer1: "yes",
            answer2: "no",
            answer3: "null",
            answer4: "null",
            correctAnswer: 1
   
         };
         {
         arrayOfQuestions.push(question1);
         arrayOfQuestions.push(question2);

         console.log("SetupQuestions arrayOfQuestions:", arrayOfQuestions);

      }

      function nextQuestion(index) {
         for(let i =0;i<arrayOfQuestions.length; i++){

         }
      }

      function showQuestion(questionIndex) {
         let question =document.getElementId("question");
         let newQuestion = document.createElement("div");

         newQuestion.id=arrayOfQuestions[questionIndex].id;
         newQuestion.innerText=arrayOfQuestions[questionIndex].question;
         questionSection.appendChild
      }



      //if question is correct next question
      
      //if question is incorrect penalty
      //if answer is correct show points and go to next question
      //once all questiona have been answered give options 
      //once all questiona have been answered give options to save score
      //if user chooses to save score show the score board