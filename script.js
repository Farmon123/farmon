const words = [
  { tj: "китоб", en: "book" },
  { tj: "мактаб", en: "school" },
  { tj: "устод", en: "teacher" },
  { tj: "хонаи ман", en: "my house" },
  { tj: "дӯст", en: "friend" },
  { tj: "модар", en: "mother" },
  { tj: "падар", en: "father" },
  { tj: "бародар", en: "brother" },
  { tj: "хоҳар", en: "sister" },
  { tj: "дар", en: "door" },
  { tj: "тиреза", en: "window" },
  { tj: "миз", en: "table" },
  { tj: "курсӣ", en: "chair" },
  { tj: "телефон", en: "phone" },
  { tj: "об", en: "water" },
  { tj: "нони гарм", en: "hot bread" },
  { tj: "мева", en: "fruit" },
  { tj: "мошин", en: "car" },
  { tj: "роҳ", en: "road" },
  { tj: "осмон", en: "sky" },
  { tj: "рӯй", en: "face" },
  { tj: "даст", en: "hand" },
  { tj: "по", en: "foot" },
  { tj: "сар", en: "head" },
  { tj: "пӯшидан", en: "wear" },
  { tj: "хобидан", en: "sleep" },
  { tj: "оянда", en: "future" },
  { tj: "муҳаббат", en: "love" },
  { tj: "дил", en: "heart" },
  { tj: "хурсандӣ", en: "happiness" },
  { tj: "гап задан", en: "talk" },
  { tj: "гӯш кардан", en: "listen" },
  { tj: "дидор", en: "meeting" },
  { tj: "қалам", en: "pen" },
  { tj: "дафтар", en: "notebook" },
  { tj: "омӯхтан", en: "learn" },
  { tj: "забон", en: "language" },
  { tj: "англисӣ", en: "english" },
  { tj: "тафаккур", en: "thinking" },
  { tj: "рӯйхати ман", en: "my list" },
  { tj: "саломатӣ", en: "health" },
  { tj: "варзиш", en: "sport" },
  { tj: "бозӣ", en: "game" },
  { tj: "машғулот", en: "lesson" },
  { tj: "рӯз", en: "day" },
  { tj: "шаб", en: "night" },
  { tj: "мусиқӣ", en: "music" },
  { tj: "ҳунар", en: "art" },
  { tj: "бозор", en: "market" }
];

let current = 0;
let correct = 0;
let userAnswers = [];

function startQuiz() {
  showWord();
  startTimer(9 * 60);
}

function showWord() {
  if (current < words.length) {
    document.getElementById("question").innerText = Тарҷума кунед: ${words[current].tj};
    document.getElementById("word-counter").innerText = ${current + 1} / ${words.length};
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
  } else {
    endQuiz();
  }
}

function submitAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = words[current].en.toLowerCase();
  userAnswers.push({ word: words[current].tj, your: userAnswer, correct: correctAnswer });

  if (userAnswer === correctAnswer) {
    correct++;
  }

  current++;
  showWord();
}

function endQuiz() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result-buttons").style.display = "block";
}

function showResults() {
  document.getElementById("result-buttons").style.display = "none";
  const results = document.getElementById("results");
  results.style.display = "block";
  results.innerHTML = <h2>Натиҷаҳо: ${correct} / ${words.length}</h2>;
  userAnswers.forEach((item, index) => {
    results.innerHTML += <p><strong>${index + 1}. ${item.word}</strong> — Ту гуфтӣ: <span style="color:${item.your === item.correct ? 'green' : 'red'}">${item.your}</span> | Дуруст: ${item.correct}</p>;
  });
}

function startTimer(duration) {
  let timer = duration;
  const display = document.getElementById("timer");
  const interval = setInterval(() => {
    const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    const seconds = String(timer % 60).padStart(2, '0');
    display.textContent = ${minutes}:${seconds};
    if (--timer < 0) {
      clearInterval(interval);
      endQuiz();
    }
  }, 1000);
}

window.onload = startQuiz;
