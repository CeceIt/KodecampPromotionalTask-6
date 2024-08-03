
const questions = [
    {
        text: "What is the capital city of Nigeria?",
        options: ["Benin city", "Makurdi", "Abuja", "Lagos"],
        answer: "Abuja"
    },
    {
        text: "Which River is the longest in Nigeria?",
        options: ["Benue", "Niger"],
        answer: "Niger"
    },
    {
        text:"What are the official languages spoken in Nigeria",
        options: ["Idoma","Hausa","Igbo","Yoruba","English"],
        answer:"English"
    },
    {
        text:"Who was Nigeria's first president",
        options: ["Olusegun Obasenjo","Muhammed Buhari","Alex Shanikan","Nnamdi Azikiwe","Aguiyi Ironsi"],
        answer:"Nnamdi Azikiwe"
    },
    {
        text:"Nigeria is divided into how many states",
        options: ["36","39","40","37","38"],
        answer:"36"
    },
    {
        text:"Nigeria gained independence from British rule in what year?",
        options: ["1960","1980","1990","1920","1992"],
        answer:"1960"
    },
    {
        text:"Which Nigerian city is known as the city of Aquatic Splendour",
        options: ["Lagos","Benue","Kaduna","Ibadan","Yobe"],
        answer:"Lagos"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.text;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    if (selectedOption === question.answer) {
        score++;
        resultElement.innerText = 'Correct!';
        resultElement.style.color = '#28a745';
    } else {
        resultElement.innerText = 'Incorrect!';
        resultElement.style.color = '#dc3545';
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('result').innerText = '';
        document.getElementById('next-button').disabled = true;
    } else {
        document.getElementById('question').innerText = '';
        document.getElementById('options').innerHTML = '';
        document.getElementById('result').innerText = `Quiz finished! Your score is ${score}/${questions.length}`;
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('restart-button').classList.remove('hidden');
    }
}

document.getElementById('next-button').addEventListener('click', nextQuestion);

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('start-button').classList.add('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('next-button').disabled = true;
    document.getElementById('restart-button').classList.add('hidden');
    document.getElementById('result').innerText = '';
    loadQuestion();
}

function restartQuiz() {
    startQuiz();
}

document.getElementById('start-button').addEventListener('click', startQuiz);
document.getElementById('restart-button').addEventListener('click', restartQuiz);

 

