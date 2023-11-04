//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "Which planet is known as the ‘Watery Planet’",
        options: ["Mercury", "Earth", "Mars", "Juyiter"],
        correct: "Earth",
    },
    {
        id: "1",
        question: "In order of their distances from the Sun, which of the following planets lie between Mars and Uranus?",
        options: ["Earth & Jupiter", "Jupiter & Saturn", "Saturn& Earth", "Saturn & Neptune"],
        correct: "Jupiter & Saturn",
    },
    {
        id: "2",
        question: "Which of the following is indicated by the colour of a star?",
        options: ["Weight", "Distance", "Temperature", "Size"],
        correct: "Temperature",
    },
    {
        id: "3",
        question: "Sirius”, the brightest star outside of the Solar System, is also called ____.",
        options: ["Cat Star", "Dog Star", "Fox Star", "Lion Star"],
        correct: "Dog Star",
    },
    {
        id: "4",
        question: "The planets are kept in motion in their respective orbits by ____",
        options: ["Their great size and spherical shape"," The rotation and density","Gravitation and centrifugal force"," Rotation of the sun on its axis"],
        correct: "Gravitation and centrifugal force",
    },
    {
        id: "5",
        question: "Who founded the word “Geography”?",
        options: ["Ptolemy"," Eratosthenes","Hicatus", "Herodotus"],
        correct: "Eratosthenes",
    }, {
        id: "6",
        question: "Stars which appear single to the naked eye but are double stars when observed by a telescope, are known as ____",
        options: ["Cosmic stars", "Quasars","Binaries","Novae and supernovae"],
        correct:"Binaries" ,
    },
    {
        id: "7",
        question: "The correct sequence of the following planets in terms of gravity, in the descending order is ____",
        options: ["Saturn Earth Neptune Uranus","Neptune Uranus Saturn Earth"," Uranus Earth Saturn Neptune"," Earth Uranus Neptune Saturn"],
        correct:" Earth Uranus Neptune Saturn",
    },
    {
        id: "8",
        question: " In astrophysics, what is the name of hole in outer space which emits stars and energy?",
        options: ["Black Hole0","Ozone Hole","Asteroid Belt","White Hole"],
        correct: "White Hole",
    },
    {
        id: "9",
        question: "Which planet is considered as the Dwarf planet?",
        options: ["Earth","Jupiter","Pluto","Saturn"],
        correct: "Pluto",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};