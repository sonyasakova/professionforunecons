// UNECON Career Guidance - Quiz Logic

// State management
let currentQuestionIndex = 0;
let answers = {};

// Initialize quiz
function initQuiz() {
    // Load saved progress if exists
    const savedAnswers = localStorage.getItem('quizAnswers');
    const savedIndex = localStorage.getItem('currentQuestion');

    if (savedAnswers) {
        answers = JSON.parse(savedAnswers);
    }

    if (savedIndex) {
        currentQuestionIndex = parseInt(savedIndex);
    }

    renderQuestion();
}

// Render current question
function renderQuestion() {
    const question = questions[currentQuestionIndex];

    // Update question counter
    document.getElementById('questionCounter').textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;

    // Update question text
    document.getElementById('questionText').textContent = question.text;

    // Render answers
    const answersContainer = document.getElementById('answersContainer');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const answerCard = document.createElement('div');
        answerCard.className = 'answer-card';

        // Check if this answer was previously selected
        if (answers[question.id] === index) {
            answerCard.classList.add('selected');
        }

        answerCard.innerHTML = `<div class="answer-text">${answer.text}</div>`;

        answerCard.addEventListener('click', () => selectAnswer(index));

        answersContainer.appendChild(answerCard);
    });

    // Update navigation buttons
    updateNavigation();
}

// Select an answer
function selectAnswer(answerIndex) {
    const question = questions[currentQuestionIndex];

    // Save answer
    answers[question.id] = answerIndex;

    // Save to localStorage
    localStorage.setItem('quizAnswers', JSON.stringify(answers));

    // Update UI
    const answerCards = document.querySelectorAll('.answer-card');
    answerCards.forEach((card, index) => {
        if (index === answerIndex) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });

    // Update navigation
    updateNavigation();
}

// Update navigation buttons
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const question = questions[currentQuestionIndex];

    // Previous button
    if (currentQuestionIndex === 0) {
        prevBtn.classList.add('btn-disabled');
        prevBtn.disabled = true;
    } else {
        prevBtn.classList.remove('btn-disabled');
        prevBtn.disabled = false;
    }

    // Next button
    const isAnswered = answers[question.id] !== undefined;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;

    if (!isAnswered) {
        nextBtn.classList.add('btn-disabled');
        nextBtn.disabled = true;
    } else {
        nextBtn.classList.remove('btn-disabled');
        nextBtn.disabled = false;
    }

    // Update button text for last question
    if (isLastQuestion) {
        nextBtn.textContent = 'See Results';
    } else {
        nextBtn.textContent = 'Next';
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        localStorage.setItem('currentQuestion', currentQuestionIndex);
        renderQuestion();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Go to next question or results
function nextQuestion() {
    const question = questions[currentQuestionIndex];

    // Check if answered
    if (answers[question.id] === undefined) {
        return;
    }

    // If last question, go to results
    if (currentQuestionIndex === questions.length - 1) {
        goToResults();
    } else {
        currentQuestionIndex++;
        localStorage.setItem('currentQuestion', currentQuestionIndex);
        renderQuestion();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Navigate to results page
function goToResults() {
    window.location.href = 'results.html';
}

// Initialize quiz when page loads
if (document.getElementById('quizContainer')) {
    initQuiz();
}
