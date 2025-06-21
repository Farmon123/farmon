const words = [
  { tj: "об", en: "water" },
  { tj: "осмон", en: "sky" },
  { tj: "хона", en: "house" },
  { tj: "модар", en: "mother" },
  { tj: "падар", en: "father" },
  // ... илова то 50 калима
];

let index = 0;
let correct = 0;
let results = [];
let time = 9 * 60;

const question = document.getElementById("question");
const answerInput = document.getElementById("answer");
const counter = document.getElementById("counter");
const timer = document.getElementById("timer");

function showQuestion() {
  question.textContent = Калимаи №${index + 1}: "${words[index].tj}";
  counter.textContent = ${index + 1} / ${words.length};
}

function checkAnswer() {
  const user = answerInput.value.trim().toLowerCase();
  const correctAns = words[index].en.toLowerCase();

  results.push({
    word: words[index].tj,
    your: user,
    correct: correctAns
  });

  if (user === correctAns) correct++;

  index++;
  answerInput.value = "";

  if (index < words.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  const interval = setInterval(() => {
    if (time <= 0 || index >= words.length) {
      clearInterval(interval);
      endQuiz();
      return;
    }
    let min = Math.floor(time / 60);
    let sec = time % 60;
    timer.textContent = ${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")};
    time--;
  }, 1000);
}

function endQuiz() {
  document.getElementById("end-buttons").style.display = "block";
  answerInput.style.display = "none";
  document.querySelector("button").style.display = "none";
}

function showResults() {
  const list = document.getElementById("result-list");
  list.innerHTML = "";
  document.getElementById("results").style.display = "block";

  results.forEach(item => {
    const li = document.createElement("li");
    li.textContent = "${item.word}" → шумо гуфтед: "${item.your}", дуруст: "${item.correct}";
    li.style.color = item.your === item.correct ? "green" : "red";
    list.appendChild(li);
  });
}

function restart() {
  location.reload();
}

showQuestion();
startTimer();
