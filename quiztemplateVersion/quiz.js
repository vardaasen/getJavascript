// Globale variabler
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = [];
let userSkillLevel = 1; // 1: Nybegynner, 2: Middels, 3: Avansert
let progressChart = null;

// Initialisering
function initializeQuiz() {
    answeredQuestions = new Array(quizQuestions.length).fill(false);
    loadQuestion();
    updateScore();
    initializeProgressChart();
}

// Spørsmålshåndtering
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = currentQuestion.question;
    document.getElementById('requirements').innerText = currentQuestion.instructions;
    document.getElementById('codeEditor').value = '';
    document.getElementById('result').innerText = '';
    updateAnsweredQuestionsList();
}

function runCode() {
    const userCode = document.getElementById('codeEditor').value;
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    const validationErrors = validateCode(userCode, currentQuestion.requiredElements);
    if (validationErrors.length > 0) {
        showDetailedError(null, null, { name: "ValidationError", message: validationErrors.join("\n") });
        return;
    }
    
    try {
        const wrappedCode = `
            (function() {
                ${userCode}
                return ${currentQuestion.testCode};
            })()
        `;
        
        const result = eval(wrappedCode);
        
        if (Array.isArray(currentQuestion.expectedResult)) {
            if (arraysEqual(result, currentQuestion.expectedResult)) {
                handleCorrectAnswer();
            } else {
                showDetailedError(result, currentQuestion.expectedResult);
            }
        } else if (result === currentQuestion.expectedResult) {
            handleCorrectAnswer();
        } else {
            showDetailedError(result, currentQuestion.expectedResult);
        }
    } catch (error) {
        showDetailedError(null, null, error);
    }
    
    checkCodeStyle(userCode);
}

// Hjelpefunksjoner
function validateCode(code, requiredElements) {
    let errors = [];
    
    if (!requiredElements) return errors;
    
    if (requiredElements.function && !code.includes(`function ${requiredElements.function}`)) {
        errors.push(`Funksjonen '${requiredElements.function}' ble ikke funnet.`);
    }
    
    if (requiredElements.method && !code.includes(requiredElements.method)) {
        errors.push(`Metoden '${requiredElements.method}' ble ikke brukt.`);
    }
    
    if (requiredElements.keyword && !code.includes(requiredElements.keyword)) {
        errors.push(`Nøkkelordet '${requiredElements.keyword}' ble ikke brukt.`);
    }
    
    return errors;
}

function showDetailedError(result, expected, error = null) {
    let message = "Feil:\n";
    if (error) {
        message += `${error.name}: ${error.message}\n`;
        message += "Sjekk koden din for syntaksfeil eller manglende deklarasjoner.";
    } else {
        message += `Forventet: ${JSON.stringify(expected)}\n`;
        message += `Fikk: ${JSON.stringify(result)}\n\n`;
        message += "Tips: Sjekk om funksjonen din returnerer riktig verdi og om alle beregninger er korrekte.";
    }
    document.getElementById('result').innerText = message;
    document.getElementById('result').style.color = "red";
}

function checkCodeStyle(code) {
    let styleIssues = [];
    
    if (code.includes('var ')) {
        styleIssues.push("Bruk 'let' eller 'const' i stedet for 'var' for bedre variabeldeklarasjon.");
    }
    
    if (code.includes('==')) {
        styleIssues.push("Bruk '===' for streng sammenligning i stedet for '=='.");
    }
    
    if (code.includes('for(')) {
        styleIssues.push("Legg til mellomrom etter 'for' for bedre lesbarhet: 'for ('.");
    }
    
    document.getElementById('styleHints').innerText = styleIssues.length > 0 ? 
        "Kodestil-tips:\n" + styleIssues.join("\n") : '';
}

function handleCorrectAnswer() {
    document.getElementById('result').innerText = "Riktig!";
    document.getElementById('result').style.color = "green";
    if (!answeredQuestions[currentQuestionIndex]) {
        score++;
        answeredQuestions[currentQuestionIndex] = true;
        updateScore();
    }
    adjustDifficulty();
    updateProgressChart();
}

function adjustDifficulty() {
    const recentPerformance = answeredQuestions.slice(-5);
    const correctAnswers = recentPerformance.filter(Boolean).length;
    
    if (correctAnswers >= 4 && userSkillLevel < 3) {
        userSkillLevel++;
    } else if (correctAnswers <= 1 && userSkillLevel > 1) {
        userSkillLevel--;
    }
}

function updateScore() {
    document.getElementById('score').innerText = score;
}

function updateAnsweredQuestionsList() {
    const list = document.getElementById('answeredQuestions');
    if (list) {
        list.innerHTML = '';
        quizQuestions.forEach((_, index) => {
            const listItem = document.createElement('li');
            listItem.innerText = `Spørsmål ${index + 1}: ${answeredQuestions[index] ? 'Besvart' : 'Ubesvart'}`;
            list.appendChild(listItem);
        });
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Chart-relaterte funksjoner
function initializeProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    progressChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Besvarte spørsmål',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.8)',
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Quizfremgang per kategori'
                }
            }
        }
    });
    updateProgressChart();
}

function updateProgressChart() {
    const categories = {};
    quizQuestions.forEach((question, index) => {
        if (!categories[question.category]) {
            categories[question.category] = { total: 0, answered: 0 };
        }
        categories[question.category].total++;
        if (answeredQuestions[index]) {
            categories[question.category].answered++;
        }
    });

    const labels = Object.keys(categories);
    const data = labels.map(category => 
        (categories[category].answered / categories[category].total) * 100
    );

    progressChart.data.labels = labels;
    progressChart.data.datasets[0].data = data;
    progressChart.update();

    updateTotalProgress();
}

function updateTotalProgress() {
    const totalQuestions = quizQuestions.length;
    const answeredCount = answeredQuestions.filter(Boolean).length;
    const totalProgress = (answeredCount / totalQuestions) * 100;
    document.getElementById('totalProgress').textContent = `Total fremgang: ${totalProgress.toFixed(1)}%`;
}

// Initialiser quiz når siden er lastet
window.onload = initializeQuiz;