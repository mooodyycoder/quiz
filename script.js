const questionPool = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "London"],
        answer: "Paris",
        explanation: "Paris is known as the 'City of Light' and is famous for its art, fashion, and cuisine."
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript",
        explanation: "JavaScript is the programming language of the Web that allows for interactive web pages."
    },
    {
        question: "What is the result of 2 + 2 × 2?",
        options: ["6", "8", "4", "12"],
        answer: "6",
        explanation: "According to the order of operations (PEMDAS/BODMAS), multiplication comes before addition."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        explanation: "Mars appears red due to iron oxide (rust) on its surface."
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        answer: "Leonardo da Vinci",
        explanation: "The Mona Lisa is one of the most famous paintings in the world, housed in the Louvre Museum."
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
        explanation: "The Pacific Ocean covers about 63 million square miles and contains more than half of the free water on Earth."
    },
    {
        question: "Which country is home to the kangaroo?",
        options: ["New Zealand", "South Africa", "Australia", "Brazil"],
        answer: "Australia",
        explanation: "Kangaroos are marsupials native to Australia and are the country's national symbol."
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        answer: "Au",
        explanation: "The symbol Au comes from the Latin word for gold, 'aurum'."
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        answer: "Mercury",
        explanation: "Mercury is the smallest and innermost planet in the Solar System."
    },
    {
        question: "What is the tallest mammal?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Moose"],
        answer: "Giraffe",
        explanation: "Giraffes can grow up to 18 feet tall, with their necks alone reaching 6 feet."
    },
    {
        question: "Which element has the atomic number 1?",
        options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
        answer: "Hydrogen",
        explanation: "Hydrogen is the lightest and most abundant element in the universe."
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: "Tokyo",
        explanation: "Tokyo is one of the most populous metropolitan areas in the world."
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        answer: "Albert Einstein",
        explanation: "Einstein's theory of relativity revolutionized our understanding of space and time."
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        answer: "Skin",
        explanation: "The skin accounts for about 15% of your body weight."
    },
    {
        question: "Which country gifted the Statue of Liberty to the United States?",
        options: ["England", "Canada", "France", "Spain"],
        answer: "France",
        explanation: "The statue was a gift from France to celebrate the centennial of American independence."
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
        explanation: "Canberra was selected as a compromise between Sydney and Melbourne."
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci",
        explanation: "Leonardo da Vinci painted the Mona Lisa during the Renaissance."
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: "Mars",
        explanation: "Mars is called the Red Planet due to its reddish appearance caused by iron oxide."
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"],
        answer: "Mount Everest",
        explanation: "Mount Everest is the tallest mountain above sea level at 8,848 meters."
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1898"],
        answer: "1912",
        explanation: "The RMS Titanic sank on its maiden voyage in April 1912."
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide",
        explanation: "Plants use carbon dioxide during photosynthesis to produce energy."
    },
    {
        question: "Which organ is responsible for pumping blood through the body?",
        options: ["Lungs", "Brain", "Liver", "Heart"],
        answer: "Heart",
        explanation: "The heart pumps oxygenated blood to the body and returns deoxygenated blood to the lungs."
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Oxide"],
        answer: "Oxygen",
        explanation: "The symbol 'O' represents Oxygen on the periodic table."
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "There are 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        answer: "Yen",
        explanation: "Japan's official currency is the Yen, denoted by the symbol ¥."
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Oscar Wilde", "George Orwell", "Jane Austen"],
        answer: "William Shakespeare",
        explanation: "Shakespeare wrote 'Romeo and Juliet' in the late 16th century."
    },
    {
        question: "Which animal is known as the King of the Jungle?",
        options: ["Tiger", "Elephant", "Lion", "Gorilla"],
        answer: "Lion",
        explanation: "The lion is commonly referred to as the King of the Jungle due to its majestic presence."
    },
    {
        question: "What is the boiling point of water at sea level?",
        options: ["100°C", "90°C", "120°C", "80°C"],
        answer: "100°C",
        explanation: "At standard atmospheric pressure, water boils at 100 degrees Celsius."
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile",
        explanation: "The Nile is traditionally considered the longest river, although recent studies sometimes rank the Amazon first."
    },
    {
        question: "Which language is the most spoken worldwide?",
        options: ["Spanish", "English", "Hindi", "Mandarin Chinese"],
        answer: "Mandarin Chinese",
        explanation: "Mandarin has the highest number of native speakers in the world."
    },
    {
        question: "Which sport is known as the 'king of sports'?",
        options: ["Basketball", "Cricket", "Soccer", "Tennis"],
        answer: "Soccer",
        explanation: "Soccer (football) is the most popular and widely played sport globally."
    },
    {
        question: "Which metal is liquid at room temperature?",
        options: ["Iron", "Mercury", "Aluminum", "Copper"],
        answer: "Mercury",
        explanation: "Mercury is the only metal that remains liquid at standard temperature and pressure."
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "7"],
        answer: "8",
        explanation: "8 × 8 = 64, so the square root of 64 is 8."
    },
    {
        question: "Who discovered gravity when he saw an apple fall?",
        options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
        answer: "Isaac Newton",
        explanation: "Legend has it Newton formulated the law of gravity after observing a falling apple."
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Lettuce", "Avocado", "Cucumber"],
        answer: "Avocado",
        explanation: "Guacamole is a dip primarily made from mashed avocados."
    },
    {
        question: "Which bird is a universal symbol of peace?",
        options: ["Eagle", "Dove", "Parrot", "Owl"],
        answer: "Dove",
        explanation: "Doves have long been associated with peace and harmony."
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["India", "China", "Japan", "Thailand"],
        answer: "Japan",
        explanation: "Japan is called the Land of the Rising Sun due to its location east of the Asian continent."
    },
    {
        question: "How many bones are in the adult human body?",
        options: ["206", "201", "199", "220"],
        answer: "206",
        explanation: "The adult human body contains 206 bones."
    },
    {
        question: "Who invented the telephone?",
        options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Isaac Newton"],
        answer: "Alexander Graham Bell",
        explanation: "Bell is credited with inventing the first practical telephone in 1876."
    },
    {
        question: "Which ocean is the largest on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        answer: "Pacific Ocean",
        explanation: "The Pacific Ocean covers more area than any other ocean."
    },
    {
        question: "Which vitamin is produced when the skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        answer: "Vitamin D",
        explanation: "Sunlight triggers Vitamin D production in the skin."
    },
    {
        question: "What is the chemical formula of water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O",
        explanation: "Water consists of two hydrogen atoms and one oxygen atom—H2O."
    },
    {
        question: "Which instrument has black and white keys and is used in classical and pop music?",
        options: ["Guitar", "Piano", "Drum", "Violin"],
        answer: "Piano",
        explanation: "The piano has 88 keys, a mix of black and white, and is used in many music genres."
    },
    {
        question: "Who was the first man to walk on the Moon?",
        options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
        answer: "Neil Armstrong",
        explanation: "Neil Armstrong stepped onto the Moon on July 20, 1969."
    },
    {
        question: "What do you call a baby frog?",
        options: ["Chick", "Cub", "Tadpole", "Larva"],
        answer: "Tadpole",
        explanation: "Baby frogs are called tadpoles before they undergo metamorphosis."
    }

];

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let confettiEffect = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score-container");
const feedbackEl = document.getElementById("feedback");
const emojiFeedbackEl = document.getElementById("emoji-feedback");
const progressBar = document.getElementById("progress-bar");
const particlesContainer = document.getElementById("particles-container");



function selectRandomQuestions() {
    // Create a copy of the question pool
    const shuffledPool = [...questionPool];

    // Shuffle the pool using Fisher-Yates algorithm
    for (let i = shuffledPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPool[i], shuffledPool[j]] = [shuffledPool[j], shuffledPool[i]];
    }

    // Select first 5 questions
    return shuffledPool.slice(0, 5);
}

function shuffleOptions(question) {
    const shuffledOptions = [...question.options];

    // Shuffle options using Fisher-Yates algorithm
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    return shuffledOptions;
}

// Initialize confetti
function initConfetti() {
    confettiEffect = new ConfettiGenerator({
        target: 'particles-container',
        max: 80,
        size: 1.5,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255], [255, 255, 0], [255, 0, 255], [0, 255, 255]],
        clock: 25,
        rotate: true,
        start_from_edge: true,
        respawn: true
    });
    confettiEffect.render();
}

// Create floating emoji particles
function createEmojiParticles(emoji, count, color) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement("div");
        particle.innerHTML = emoji;
        particle.style.position = "absolute";
        particle.style.fontSize = `${Math.random() * 20 + 10}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = "0";
        particle.style.opacity = "0";
        particle.style.animation = `confettiRain ${Math.random() * 3 + 2}s linear forwards`;
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        document.body.appendChild(particle);

        // Fade in
        setTimeout(() => {
            particle.style.opacity = "1";
        }, 50);

        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 5000);
    }
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    emojiFeedbackEl.innerHTML = "";
    nextBtn.style.display = "none";

    // Update progress bar
    const progress = ((currentQuestionIndex) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Shuffle the options for this question
    const shuffledOptions = shuffleOptions(q);

    shuffledOptions.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("btn", "btn-option", "animate__animated");
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.classList.add("animate__fadeInRight");
        btn.onclick = () => selectAnswer(option, btn);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selected, button) {
    selectedOption = selected;
    const correct = questions[currentQuestionIndex].answer;

    // Disable all options
    const allButtons = optionsEl.querySelectorAll("button");
    allButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add("disabled");
        if (btn.textContent === correct) {
            btn.classList.add("correct");
        }
    });

    // Mark selected option
    if (selected !== correct) {
        button.classList.add("wrong");
        button.classList.add("animate__shakeX");
        emojiFeedbackEl.innerHTML = "😢";
        emojiFeedbackEl.classList.add("animate__animated", "animate__headShake");
    } else {
        score++;
        button.classList.add("animate__pulse");
        emojiFeedbackEl.innerHTML = "🎉";
        emojiFeedbackEl.classList.add("animate__animated", "animate__tada");
    }

    // Show feedback
    if (selected === correct) {
        feedbackEl.textContent = "Correct! " + questions[currentQuestionIndex].explanation;
        feedbackEl.style.color = "var(--correct-color)";
    } else {
        feedbackEl.textContent = `Incorrect. The correct answer is ${correct}. ${questions[currentQuestionIndex].explanation}`;
        feedbackEl.style.color = "var(--wrong-color)";
    }

    // FIX: Ensure Next button is visible and interactive
    nextBtn.style.display = "block";
    nextBtn.style.visibility = "visible";
    nextBtn.disabled = false;
    nextBtn.classList.remove("d-none"); // Remove Bootstrap's hidden class if present
    nextBtn.classList.add("animate__fadeIn");

    // Force reflow to restart animation
    void nextBtn.offsetWidth;
}

function nextQuestion() {
    // Reset confetti if it's running
    if (confettiEffect) {
        confettiEffect.clear();
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    // Hide the next button completely
    nextBtn.style.display = "none";

    questionEl.textContent = "Quiz Completed!";
    questionEl.classList.add("animate__heartBeat");
    optionsEl.innerHTML = "";  // Clear any existing options
    feedbackEl.textContent = "";

    const percentage = Math.round((score / questions.length) * 100);
    let message, emoji;

    if (percentage >= 80) {
        message = "Legendary Performance!";
        emoji = "🏆";
    } else if (percentage >= 60) {
        message = "Great Job!";
        emoji = "👍";
    } else {
        message = "Keep Practicing!";
        emoji = "💪";
    }

    scoreEl.innerHTML = `
        <h3 class="animate__animated animate__bounceIn">${emoji} ${message} ${emoji}</h3>
        <p class="animate__animated animate__fadeIn">Your Score: <strong>${score}/${questions.length}</strong> (${percentage}%)</p>
    `;

    // Create and show the restart button
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Play Again";
    restartBtn.classList.add("btn", "btn-primary", "animate__animated", "animate__zoomIn");
    restartBtn.style.marginTop = "20px";
    restartBtn.onclick = restartQuiz;

    // Clear options container and add restart button
    optionsEl.innerHTML = "";
    optionsEl.style.display = "flex";
    optionsEl.style.justifyContent = "center";
    optionsEl.style.alignItems = "center";
    optionsEl.style.flexDirection = "column";
    optionsEl.appendChild(restartBtn);

    // Celebration for good scores
    if (percentage >= 60) {
        createEmojiParticles("🎉", 50, "gold");
        createEmojiParticles("⭐", 30, "gold");
        initConfetti();
    }
}
function restartQuiz() {
    nextBtn.style.display = "none"; // Hide the next button at the start of the quiz
    // Select new random questions
    questions = selectRandomQuestions();
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.innerHTML = "";
    // Reset optionsEl styles to default
    optionsEl.removeAttribute("style");
    questionEl.classList.remove("animate__heartBeat");
    showQuestion();
}

nextBtn.addEventListener("click", nextQuestion);

questions = selectRandomQuestions();
showQuestion();

// Clean up confetti when page unloads
window.addEventListener("beforeunload", () => {
    if (confettiEffect) {
        confettiEffect.clear();
    }
});